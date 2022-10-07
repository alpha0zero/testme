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
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Test me.
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
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
