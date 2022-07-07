import { prisma } from "../../../utils/prismaClient";

const ALLOWED_METHODS = ["GET", "HEAD", "POST", "PUT", "DELETE"];

export default async function handler(req, res) {
  const { id } = req.query;
  const { method } = req;

  if (!ALLOWED_METHODS.includes(method)) {
    return res.status(400).json({ error: "Method not allowed" });
  }

  if (method === "GET" || method === "HEAD") {
    try {
      const user = await prisma.user.findFirst({ where: { id } });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error });
    } finally {
      await prisma.$disconnect();
    }
  }

  if (method === "POST" || method === "PUT") {
    const name = req.body?.name;
    const email = req.body?.email;

    console.log(name, email);

    try {
      const user = await prisma.user.update({
        where: { id },
        data: { name, email },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error });
    } finally {
      await prisma.$disconnect();
    }
  }

  if (method === "DELETE") {
    try {
      await prisma.user.delete({ where: { id } });
      res.status(200);
    } catch (error) {
      res.status(400).json({ error });
    } finally {
      await prisma.$disconnect();
    }
  }
}
