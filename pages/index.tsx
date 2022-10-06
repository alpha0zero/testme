import type { NextPage } from "next";
import Button from "@mui/material/Button";
import DrawerAppBar from "../components/AppBar";

const Home: NextPage = () => {
  return (
    <>
      <DrawerAppBar />
      <div>
        <Button variant="contained"> TEST </Button>
      </div>
    </>
  );
};

export default Home;
