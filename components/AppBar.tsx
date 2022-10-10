import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Link from "next/link";
import LinearProgress from "@mui/material/LinearProgress";
import { Status } from "../pages/login";
import Avatar from "@mui/material/Avatar";

export default function ButtonAppBar({ status }: { status: Status }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link href="/">
            <Avatar
              sx={{ cursor: "pointer", backgroundColor: "white" }}
              alt="logo"
              src="logo.png"
            />
          </Link>
          <Box>
            <Link href="/login">
              <Button color="inherit">
                {/* <IconButton edge="start" color="inherit" aria-label="menu">
                <LoginIcon />
              </IconButton> */}
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button color="inherit">
                {/* <IconButton edge="start" color="inherit" aria-label="menu">
                <VpnKeyIcon />
              </IconButton> */}
                SignUp
              </Button>
            </Link>
          </Box>
        </Toolbar>
        {status !== "loaded" ? null : <LinearProgress />}
      </AppBar>
    </Box>
  );
}
