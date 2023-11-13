const fs = require("fs");
const readXlsxFile = require("read-excel-file/node");
const { v4: uuidv4 } = require("uuid");

function generateJSON(route) {
  readXlsxFile(route).then((documentFile) => {
    const groupedData = [];

    // Comenzar desde la segunda fila (índice 1)
    for (let i = 1; i < documentFile.length; i++) {
      const parentId = uuidv4(); // Generar UUID para el objeto padre

      const supply = {
        id: uuidv4(), // Generar UUID para el objeto supply
        department: documentFile[i][4],
        municipality: documentFile[i][5],
        unity_measure: documentFile[i][3],
        average_price: documentFile[i][6],
      };

      const category = String(documentFile[i][0]);
      const supplyType = String(documentFile[i][1]);
      const product = String(documentFile[i][2]);

      let categoryObj = groupedData.find((item) => item.category === category);

      if (!categoryObj) {
        // Si la categoría no existe, agregarla con un nuevo objeto padre
        categoryObj = {
          id: parentId,
          category: category,
          supplyTypes: [],
        };
        groupedData.push(categoryObj);
      }

      let supplyTypeObj = categoryObj.supplyTypes.find(
        (type) => type.supplyType === supplyType
      );

      if (!supplyTypeObj) {
        // Si el tipo de suministro no existe, agregarlo con un nuevo objeto supplyType
        supplyTypeObj = {
          id: uuidv4(),
          supplyType: supplyType,
          products: [],
        };
        categoryObj.supplyTypes.push(supplyTypeObj);
      }

      let productObj = supplyTypeObj.products.find(
        (p) => p.product === product
      );

      if (!productObj) {
        // Si el producto no existe, agregarlo con un nuevo objeto product
        productObj = {
          id: uuidv4(),
          product: product,
          supplies: [],
        };
        supplyTypeObj.products.push(productObj);
      }

      // Agregar la información de suministro al producto
      productObj.supplies.push(supply);
    }

    const jsonData = JSON.stringify(groupedData, null, 4);

    fs.writeFileSync("output.json", jsonData, "utf-8");
    console.log("Conversion completed. JSON file created at: output.json");
  });
}

// Uso del método
generateJSON("./data.xlsx");
