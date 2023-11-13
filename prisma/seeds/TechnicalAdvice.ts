import { PrismaClient } from "@prisma/client";
import videos from "../../data/technicalAdvice/output.json";

const prisma = new PrismaClient();
export default async function VideosSeed() {
  for (let index = 0; index < videos.length; index++) {
    await prisma.topic.create({
      data: {
        id: videos[index].id,
        name: videos[index].name,
        videos: {
          create: videos[index].videos.map((element) => {
            return {
              id: element.id,
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
