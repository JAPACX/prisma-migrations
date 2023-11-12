import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const alice = await prisma.topic.create({
    data: {
      name: "ejemplo",
      videos: {
        create: {
          description: "Check out Prisma with Next.js",
          time: "https://www.prisma.io/nextjs",
          url: "true",
        },
      },
    },
  });
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
