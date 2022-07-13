import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const handleQuery = async (query) => {
  let data = null;
  let error = null;
  try {
    data = await query;
  } catch (e) {
    error = e;
  } finally {
    await prisma.$disconnect();
  }
  return { data, error };
};
