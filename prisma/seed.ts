import { PrismaClient } from "@prisma/client";
import { videos } from "./seed/videos";
const prisma = new PrismaClient();
async function main() {
  console.log(videos.length);

  for (let index = 0; index < videos.length; index++) {
    await prisma.topic.create({
      data: {
        name: videos[index].name,
        videos: {
          create: {
            description: videos[index].video.description,
            time: videos[index].video.time,
            url: videos[index].video.url,
          },
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
