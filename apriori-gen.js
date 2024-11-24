const https = require("https");
const config = require("./mockaroo-config.json").API_KEY || '';
const fs = require("fs");

// Replace with your Mockaroo API key
const MOCKAROO_API_KEY = config;

// Define the schema for the mock data
const mockarooSchema = [
  { name: "id", type: "Row Number" },
  { name: "first_name", type: "First Name" },
  { name: "last_name", type: "Last Name" },
  { name: "email", type: "Email Address" },
  { name: "age", type: "Number", min: 18, max: 65 },
  { name: "tag_name", type: "Fake Company Name" },
  { name: "paragraphs_501", type: "Paragraphs", min:"5", max: "5"},
  { name: "paragraphs", type: "Paragraphs"}
];

// Function to generate mock data
function generateMockData(recordCount = 10) {
  const postData = JSON.stringify(mockarooSchema);
  const options = {
    hostname: "api.mockaroo.com",
    path: `/api/generate.json?key=${MOCKAROO_API_KEY}&count=${recordCount}`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": postData.length
    }
  };

  const req = https.request(options, (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      if (res.statusCode === 200) {
        const jsonData = JSON.parse(data);
        console.log("Generated Mock Data:", jsonData);
        fs.writeFile("mockData.json", JSON.stringify(jsonData, null, 2), (err) => {
          if (err) {
            console.error("Error writing to file:", err);
          } else {
            console.log("Mock data written to mockData.json");
          }
        });
      } else {
        console.error("Error:", res.statusCode, res.statusMessage);
      }
    });
  });

  req.on("error", (error) => {
    console.error("Failed to generate mock data:", error.message);
  });

  req.write(postData);
  req.end();
}

// Generate 20 mock records
generateMockData(10);
