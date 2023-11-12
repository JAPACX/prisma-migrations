import prisma from "../db/client";
import VideosSeed from "./seed/VideosSeed";

Promise.all([VideosSeed()])
  .then(async (data) => {
    console.log(data);
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
