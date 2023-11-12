const fs = require("fs");
const readXlsxFile = require("read-excel-file/node");

function generateJSON(route) {
  readXlsxFile(route).then((documentFile) => {
    const groupedData = {};

    documentFile.forEach((row) => {
      const supply = {
        department: row[4],
        municipality: row[5],
        unity_measure: row[3],
        average_price: row[6],
      };

      const category = String(row[0]);
      const supplyType = String(row[1]);
      const product = String(row[2]);

      if (!groupedData[category]) {
        groupedData[category] = {};
      }

      if (!groupedData[category][supplyType]) {
        groupedData[category][supplyType] = {};
      }

      if (!groupedData[category][supplyType][product]) {
        groupedData[category][supplyType][product] = [];
      }

      groupedData[category][supplyType][product].push(supply);
    });

    const jsonData = JSON.stringify(groupedData, null, 4);

    fs.writeFileSync("output.json", jsonData, "utf-8");
    console.log("Conversion completed. JSON file created at: output.json");
  });
}

// Uso del método
generateJSON("./data.xlsx");
