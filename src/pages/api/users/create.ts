import { NextApiRequest, NextApiResponse } from "next";
import client from "@/libs/server/client";

export default async function createHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const { name, email, password } = req.body;

  try {
    const user = await client.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(405).json({ message: "Internal Server Error" });
  }
}