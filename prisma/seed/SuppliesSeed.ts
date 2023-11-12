import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function VideosSeed() {
  for (let index = 0; index < videos.length; index++) {
    await prisma.topic.create({
      data: {
        name: videos[index].name,
        videos: {
          create: videos[index].videos.map((element) => {
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
