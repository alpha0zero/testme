import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
import jwt from "jsonwebtoken";
import { User } from "@prisma/client";
import { prisma } from "../../../db/prismaClient";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") res.status(405).end("method not allowed");

  const user: User = req.body;
  try {
    const createdUser = await prisma.user.create({
      data: user,
    });
    const token: string = jwt.sign(user, process.env.SECRET as string);

    const serialised = cookie.serialize("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });
    res.setHeader("Set-Cookie", serialised);
    res.json({ token, createdUser });
  } catch (_) {
    res.end("something went wrong");
  }
};

export default handler;
