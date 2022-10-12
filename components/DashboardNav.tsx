import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";
import Person2Icon from "@mui/icons-material/Person2";
import { Avatar, Button } from "@mui/material";

const DashboardNav = () => {
  return (
    <Box>
      <AppBar>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body1" component="h3">
            Dashboard
          </Typography>
          <Box>
            <Avatar>
              <Person2Icon />
            </Avatar>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default DashboardNav;
