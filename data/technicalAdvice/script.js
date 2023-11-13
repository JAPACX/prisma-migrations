const { log } = require("console");
const readXlsxFile = require("read-excel-file/node");
const { v4: uuidv4 } = require("uuid");

function generateJSON(filePath) {
  // Leer el archivo Excel
  readXlsxFile(filePath).then((rows) => {
    const groupedData = [];

    for (let i = 1; i < rows.length; i++) {
      const videoInfo = {
        id: uuidv4(),
        name: rows[i][0],
        videos: [
          {
            id: uuidv4(), // Generar UUID para el objeto anidado
            description: rows[i][1],
            time: rows[i][2],
            url: rows[i][3],
          },
        ],
      };

      // Comprobar si el 'name' ya existe en groupedData
      const existingGroup = groupedData.find(
        (group) => group.name === videoInfo.name
      );

      if (existingGroup) {
        existingGroup.videos.push(videoInfo.videos[0]);
      } else {
        groupedData.push(videoInfo);
      }
    }

    const jsonData = JSON.stringify(groupedData, null, 2);

    // Generar la ruta del archivo de salida en el mismo directorio
    const outputFilePath = `./output.json`;

    // Escribir el archivo JSON de salida
    require("fs").writeFileSync(outputFilePath, jsonData, "utf-8");

    log("Conversión completada. Archivo JSON creado en:", outputFilePath);
  });
}

// Uso del método
generateJSON("./data.xlsx");
