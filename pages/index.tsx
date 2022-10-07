import type { NextPage } from "next";
import Button from "@mui/material/Button";
import DrawerAppBar from "../components/AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const Home: NextPage = () => {
  return (
    <>
      <DrawerAppBar />
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
            style={{
              fontWeight: "bold",
              background: "linear-gradient(to right, #30CFD0 0%, #330867 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            component="h1"
            variant="h2"
            align="center"
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
            <Button variant="contained">Create tests</Button>
            <Button variant="outlined">Assist to tests</Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Home;
