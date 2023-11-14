import prisma from "../db/client";
import TechnicalAdviceSeed from "./seeds/TechnicalAdviceSeed";
import SuppliesSeed from "./seeds/SuppliesSeed";

Promise.all([TechnicalAdviceSeed(), SuppliesSeed()])
  .then(async () => {
    console.log("Successfully");
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
