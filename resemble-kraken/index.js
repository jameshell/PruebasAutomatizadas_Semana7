const fs = require('fs');
const resemble = require('resemblejs');
const config = require('./config.json');

// Array of image pairs to compare
const imagePairs = config.scenarios.E11

const outputDir = './diff-images';
const reportPath = './comparison-report.html';

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

const compareImages = async (image1, image2, outputName) => {
    return new Promise((resolve, reject) => {
        resemble(image1)
            .compareTo(image2)
            .ignoreColors()
            .onComplete((result) => {
                if (result.error) {
                    reject(result.error);
                } else {
                    const diffImagePath = `${outputDir}/${outputName}`;
                    fs.writeFileSync(diffImagePath, result.getBuffer());
                    resolve({
                        image1,
                        image2,
                        diffImage: diffImagePath,
                        isSameDimensions: result.isSameDimensions,
                        misMatchPercentage: result.misMatchPercentage,
                    });
                }
            });
    });
};

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
                    <img src="${result.image1}" alt="Image 1 - Set ${index + 1}" />
                    <img src="${result.image2}" alt="Image 2 - Set ${index + 1}" />
                </div>
                <div>
                    <strong>Diff Image:</strong>
                    <br/>
                    <img src="${result.diffImage}" alt="Diff Image - Set ${index + 1}" />
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


for (const key in config.scenarios) {
    console.log(key, config.scenarios[key]);
}