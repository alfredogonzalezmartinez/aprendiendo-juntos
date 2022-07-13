import { handleQuery, prisma } from "../../../utils/prismaClient";

const ALLOWED_METHODS = ["GET", "HEAD", "PUT", "DELETE"];

export default async function handler(req, res) {
  const { id } = req.query;
  const { method } = req;

  if (!ALLOWED_METHODS.includes(method)) {
    return res.status(400).json({ error: "Method not allowed" });
  }

  if (method === "GET" || method === "HEAD") {
    const { data, error } = await handleQuery(
      prisma.user.findFirst({ where: { id } })
    );
    if (error) return res.status(400).json({ error });
    if (!data) return res.status(404).json({ error: "User not found" });
    return res.status(200).json(data);
  }

  if (method === "PUT") {
    const name = req.body?.name;
    const email = req.body?.email;

    const { data, error } = await handleQuery(
      prisma.user.update({
        where: { id },
        data: { name, email },
      })
    );
    if (error) return res.status(400).json({ error });
    return res.status(200).json(data);
  }

  if (method === "DELETE") {
    const { error } = await handleQuery(prisma.user.delete({ where: { id } }));
    if (error) return res.status(400).json({ error });
    return res.status(200).end();
  }
}
