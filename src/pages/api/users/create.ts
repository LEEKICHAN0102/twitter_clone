import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@/libs/server/withHandler";
import client from "@/libs/server/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, password } = req.body;
  
  try {
    const existingEmail = await client.user.findUnique({
      where: {
        email,
      },
    });

    if (existingEmail) {
      return res.status(400).json({ ok: false, error: "이미 동일한 E-mail이 존재합니다" });
    }
  const user = await client.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return  res.status(200).json({ ok: true,user });
  } catch (error) {
    res.status(405).json({ message: "에러 ㅠㅠ" });
  }
}

  export default withHandler(
    { methods: ["POST"], handler, isPrivate: false }
  );