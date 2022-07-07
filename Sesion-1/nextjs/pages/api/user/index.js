import { prisma } from "../../../utils/prismaClient";

export default async function handler(req, res) {
  const { method } = req;

  if (method === "GET" || method === "HEAD") {
    try {
      const users = await await prisma.user.findMany({
        /* include: { tasks: true }, */
      });
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ error });
    } finally {
      await prisma.$disconnect();
    }
  }

  if (method === "POST") {
    const name = req.body?.name;
    const email = req.body?.email;

    /* if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    } */

    try {
      const user = await prisma.user.create({ data: { name, email } });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error });
    } finally {
      await prisma.$disconnect();
    }
  }
}
