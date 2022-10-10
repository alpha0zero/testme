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

const Home: NextPage = () => {
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
        <Container maxWidth="sm">
          <Typography
            /* style={{
              fontWeight: "bold",
              background: textGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }} */

            component="h1"
            variant="h1"
            align="center"
            color="secondary"
            gutterBottom
          >
            Test me.
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            A fast way to create test for your students. talk to everyone with
            our real time chat. take tests as fast as possible. tests made easy
            with our plateform.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
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
