import { PrismaClient } from "@prisma/client";
import seedVideos from "./seed/videos";

const prisma = new PrismaClient();

async function main() {
  console.log(seedVideos.length);

  for (let index = 0; index < seedVideos.length; index++) {
    await prisma.topic.create({
      data: {
        name: seedVideos[index].name,
        videos: {
          create: seedVideos[index].videos.map((element) => {
            return {
              description: element.description,
              time: element.time,
              url: element.url,
            };
          }),
        },
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
