import { handleQuery, prisma } from "../../../utils/prismaClient";

const ALLOWED_METHODS = ["GET", "HEAD", "POST"];

export default async function handler(req, res) {
  const { method } = req;

  if (!ALLOWED_METHODS.includes(method)) {
    return res.status(400).json({ error: "Method not allowed" });
  }

  if (method === "GET" || method === "HEAD") {
    const { data, error } = await handleQuery(
      prisma.user.findMany({
        /* select: {
          id: true,
          name: true,
          // tasks: true,
        }, */
        // include: { tasks: true },
      })
    );
    if (error) return res.status(500).json({ error });
    return res.status(200).json(data);
  }

  if (method === "POST") {
    const name = req.body?.name;
    const email = req.body?.email;

    /* if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    } */

    const { data, error } = await handleQuery(
      prisma.user.create({ data: { name, email } })
    );
    if (error) return res.status(400).json({ error });
    return res.status(200).json(data);
  }
}
