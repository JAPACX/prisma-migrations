import { PrismaClient } from "@prisma/client";
export type * from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;
