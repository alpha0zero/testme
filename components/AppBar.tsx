import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LoginIcon from "@mui/icons-material/Login";
import VpnKeyIcon from "@mui/icons-material/Vpnkey";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TestMe
          </Typography>
          <Button color="inherit" sx={{ mr: 1 }}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <LoginIcon />
            </IconButton>
            Login
          </Button>

          <Button color="inherit">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <VpnKeyIcon />
            </IconButton>
            SignUp
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
