import fs from 'fs';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import config from './config.json' assert { type: 'json' };

// Array of image pairs to compare
const imagePairs = config.scenarios.E11;

const outputDir = './diff-images';
const reportPath = './comparison-report.html';

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

import sharp from 'sharp';

const resizeImagesToMatch = async (image1, image2) => {
    const img1Metadata = await sharp(image1).metadata();
    const img2Metadata = await sharp(image2).metadata();

    const width = Math.min(img1Metadata.width, img2Metadata.width);
    const height = Math.min(img1Metadata.height, img2Metadata.height);

    const resizedImage1 = await sharp(image1).resize(width, height).toBuffer();
    const resizedImage2 = await sharp(image2).resize(width, height).toBuffer();

    return { resizedImage1, resizedImage2, width, height };
};


const compareImages = async (image1, image2, outputName) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { resizedImage1, resizedImage2, width, height } = await resizeImagesToMatch(image1, image2);

            const img1 = PNG.sync.read(resizedImage1);
            const img2 = PNG.sync.read(resizedImage2);
            const diff = new PNG({ width, height });

            const diffPixelCount = pixelmatch(
                img1.data,
                img2.data,
                diff.data,
                width,
                height,
                { threshold: 0.1 }
            );

            const diffImagePath = `${outputDir}/${outputName}`;
            fs.writeFileSync(diffImagePath, PNG.sync.write(diff));

            const misMatchPercentage = (diffPixelCount / (width * height)) * 100;

            resolve({
                image1,
                image2,
                diffImage: diffImagePath,
                isSameDimensions: true,
                misMatchPercentage: misMatchPercentage.toFixed(2),
            });
        } catch (error) {
            reject(error);
        }
    });
};

// Remaining functions here


const generateReport = (results, scenario) => {
    let htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Image Comparison Report</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                .comparison { margin-bottom: 40px; }
                .comparison img { max-width: 100%; max-height: 200px; margin: 10px; border: 1px solid #ccc; }
                .result { font-size: 16px; }
            </style>
        </head>
        <body>
            <h1>Image Comparison Report</h1>
            <p>Generated on: ${new Date().toLocaleString()}</p>
            <hr/>
    `;

    results.forEach((result, index) => {
        htmlContent += `
            <div class="comparison">
                <h2>Comparison Set ${index + 1}</h2>
                <div>
                    <strong>Original Images:</strong>
                    <br/>
                    <img src="../${result.image1}" alt="Image 1 - Set ${index + 1}" />
                    <img src="../${result.image2}" alt="Image 2 - Set ${index + 1}" />
                </div>
                <div>
                    <strong>Diff Image:</strong>
                    <br/>
                    <img src="../${result.diffImage}" alt="Diff Image - Set ${index + 1}" />
                </div>
                <div class="result">
                    <p><strong>Mismatch Percentage:</strong> ${result.misMatchPercentage}%</p>
                    <p><strong>Same Dimensions:</strong> ${result.isSameDimensions}</p>
                </div>
            </div>
        `;
    });

    htmlContent += `
        </body>
        </html>
    `;

    fs.writeFileSync(`./reports/comparison-report-${scenario}.html`, htmlContent, 'utf-8');
    console.log(`Report generated: ${reportPath}`);
};

const compareAllImages = async (scenario) => {
    const results = [];
    for (const [index, pair] of config.scenarios[scenario].entries()) {
        try {
            const result = await compareImages(pair.image1, pair.image2, `${scenario}/diff-set${index + 1}.png`);
            results.push(result);
        } catch (error) {
            console.error(`Error comparing images in Set ${index + 1}:`, error);
        }
    }
    generateReport(results, scenario);
};

for (const scenario in config.scenarios) {
    compareAllImages(scenario).then(() => {
        console.log('All comparisons completed and report generated!');
    });
}
