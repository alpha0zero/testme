import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import LinearProgress from "@mui/material/LinearProgress";
import { Status } from "../pages/login";

export default function ButtonAppBar({ status }: { status: Status }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Link href="/">
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, cursor: "pointer" }}
            >
              TestMe
            </Typography>
          </Link>
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
        </Toolbar>
        {status !== "loaded" ? null : <LinearProgress />}
      </AppBar>
    </Box>
  );
}
