import cookie from "cookie";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../db/prismaClient";

interface User {
  email: string;
  password: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") res.status(405).end("method not allowed");
  const { email, password }: User = req.body;
  try {
    const returnedUser: User | null | undefined = await prisma?.user.findFirst({
      where: {
        AND: {
          email,
          password,
        },
      },
    });
    //checking if the user exist
    if (!returnedUser) res.json({ message: "email or password is wrong" });
    else {
      const token: string = jwt.sign(
        returnedUser,
        process.env.SECRET as string
      );

      const serialised = cookie.serialize("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });
      res.setHeader("Set-Cookie", serialised);
      res.json({ token, returnedUser });
    }
  } catch (_) {
    res.end("something went wrong");
  }
};

export default handler;
