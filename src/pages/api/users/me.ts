import { withApiSession } from "@/libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@/libs/server/withHandler";
import client from "@/libs/server/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const profile = await client.user.findUnique({
    where: { id: req.session.user?.id },
  });
  res.json({
    ok: true,
    profile,
  });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);