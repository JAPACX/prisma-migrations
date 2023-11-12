import prisma from "../db/client";
import VideosSeed from "./seed/VideosSeed";

Promise.all([VideosSeed()])
  .then(async () => {
    console.log("Successfully");
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
