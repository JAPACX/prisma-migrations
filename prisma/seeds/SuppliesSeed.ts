import { PrismaClient } from "@prisma/client";
import * as supplies from "../../data/supplies/output.json";

const prisma = new PrismaClient();

export default async function SuppliesSeed() {
  for (let i = 0; i < 3; i++) {
    const categoryData = supplies[i];
    // Actualizar o crear la categoría
    await prisma.category_of_supply.upsert({
      where: { id: categoryData.id },
      update: {
        name: categoryData.category,
      },
      create: {
        id: categoryData.id,
        name: categoryData.category,
      },
    });

    // Iterar sobre los tipos de suministro
    for (const supplyTypeData of categoryData.supplyTypes) {
      // Actualizar o crear el tipo de suministro
      await prisma.type_of_supply.upsert({
        where: { id: supplyTypeData.id },
        update: {
          name: supplyTypeData.supplyType,
        },
        create: {
          id: supplyTypeData.id,
          name: supplyTypeData.supplyType,
          // Conectar con la categoría
          category_of_supply: {
            connect: { id: categoryData.id },
          },
        },
      });

      // Iterar sobre los suministros
      for (const productData of supplyTypeData.products) {
        for (const location of productData.locations) {
          await prisma.product.upsert({
            where: { id: location.id },
            update: {},
            create: {
              id: location.id,
              name: productData.product, // Cambié productData.name a productData.product
              department: location.department,
              municipality: location.municipality,
              unity_of_measure: location.unity_measure,
              last_price: location.average_price,
              type_of_supply: {
                connect: { id: supplyTypeData.id },
              },
            },
          });
        }
        console.log(productData);
      }
    }
  }

  // Cierra la conexión a Prisma después de la inserción
  await prisma.$disconnect();

  console.log("Inserción de datos completada.");
}
