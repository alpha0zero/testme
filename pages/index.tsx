import type { NextPage } from "next";
import Button from "@mui/material/Button";
import DrawerAppBar from "../components/AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Link from "next/link";
import { useState } from "react";
import { Status } from "./login";
import jwt from "jsonwebtoken";
import Chip from "@mui/material/Chip";
import Badge from "@mui/material/Badge";
/* import Image from "next/image"; */

export const getServerSideProps = (ctx: any) => {
  const cookie = ctx.req.cookies["token"];
  try {
    const user = jwt.verify(cookie, process.env.SECRET as string);
    return {
      props: { user },
    };
  } catch (e) {
    return {
      props: {
        message: "no user",
      },
    };
  }
};

const Home: NextPage = ({ user }: any) => {
  const [status, setStatus] = useState<Status>("unloaded");
  return (
    <>
      <DrawerAppBar status={status} />
      <Box
        sx={{
          pt: 8,
          pb: 6,
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          {/* <Box sx={{ display: "flex" }}>
            <Box>
              <Typography
                component="h1"
                variant="h1"
                color="secondary"
                gutterBottom
              >
                Test me.
              </Typography>
              <Typography variant="h5" paragraph>
                A fast way to create test for your students. talk to everyone
                with our real time chat. take tests as fast as possible. tests
                made easy with our plateform.
              </Typography>
            </Box>
            <Box display="(max-width: 768px) none">
              <Image
                src="/graphic.svg"
                alt="landing svg"
                width={1800}
                height={650}
                layout="intrinsic"
              />
            </Box>
          </Box> */}
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            {user && (
              <Badge badgeContent="current" color="primary">
                <Chip
                  clickable
                  color="secondary"
                  label={`${user.firstName} ${user.lastName}`}
                  variant="outlined"
                />
              </Badge>
            )}

            <Link href="/u/dashboard">
              <Button
                onClick={() => setStatus("loading")}
                variant="contained"
                color="secondary"
              >
                Create/assist tests
              </Button>
            </Link>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Home;
