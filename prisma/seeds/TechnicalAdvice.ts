import { PrismaClient } from "@prisma/client";
import videos from "../../data/technicalAdvice/output.json";

const prisma = new PrismaClient();

export default async function VideosSeed() {
  for (let index = 0; index < videos.length; index++) {
    const videoData = videos[index];

    // Actualizar el elemento padre (topic) si es necesario
    await prisma.topic.upsert({
      where: { id: videoData.id },
      update: {
        name: videoData.name,
      },
      create: {
        id: videoData.id,
        name: videoData.name,
      },
    });

    // Actualizar los elementos hijos (videos) siempre
    for (const element of videoData.videos) {
      await prisma.videos.upsert({
        where: { id: element.id },
        update: {
          description: element.description,
          time: element.time,
          url: element.url,
        },
        create: {
          id: element.id,
          description: element.description,
          time: element.time,
          url: element.url,
          topic: {
            connect: { id: videoData.id },
          },
        },
      });
    }
  }
}
