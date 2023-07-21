import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import client from "@/libs/server/client";
import { withApiSession } from "@/libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {  email, password } = req.body;
  
  try {
    const validUser = await client.user.findFirst({
      where: {
        email,
        password,
      },
    });

    if (!validUser) {
      return res.status(400).json({ ok: false, error: "이메일 혹은 패스워드가 잘못되었습니다" });
    }
    if (validUser) {
      req.session.user = {
        id: validUser.id,
      };
      await req.session.save();

      return res.json({ ok: true, message: "로그인 성공", validUser });
    }
  } catch (error) {
    return res.status(500).json({ ok: false, error: "로그인에 실패" });
  }
}

  export default withApiSession (
    withHandler({ methods: ["POST"], handler, isPrivate: false })
  );