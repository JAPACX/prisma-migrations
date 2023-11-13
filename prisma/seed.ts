import prisma from "../db/client";
import TechnicalAdvice from "./seeds/TechnicalAdvice";

Promise.all([TechnicalAdvice()])
  .then(async () => {
    console.log("Successfully");
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
