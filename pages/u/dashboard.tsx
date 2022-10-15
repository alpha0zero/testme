import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Chip from "@mui/material/Chip";
import jwt from "jsonwebtoken";
import { User } from "@prisma/client";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";
import Button from "@mui/material/Button";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
/* import Divider from "@mui/material/Divider"; */

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

const Dashboard = ({ user }: { user: User }) => {
  return (
    <>
      <Box>
        <AppBar position="relative">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Breadcrumbs sx={{ color: "#FFFFFF" }}>
              <Button variant="text" color="secondary">
                Dashboard
              </Button>
              {/* <Divider orientation="vertical" /> */}
              {user.isTeacher && (
                <Link href="/test">
                  <Button variant="outlined" color="secondary">
                    Create Test
                  </Button>
                </Link>
              )}
            </Breadcrumbs>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <Tooltip title="Go to profile">
                <Chip
                  avatar={<Avatar>{user.firstName[0]}</Avatar>}
                  clickable
                  color="secondary"
                  label={`${user.isTeacher ? "Teacher" : "Student"}`}
                  variant="outlined"
                />
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Container sx={{ marginTop: "10px" }}>
        <Box
          component="form"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Input
            fullWidth
            placeholder="search..."
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </Box>
        <Grid sx={{ marginTop: "15px" }} container spacing={5}>
          <Grid item xs={6}>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton />
          </Grid>
          <Grid item xs={6}>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton />
          </Grid>
          <Grid item xs={6}>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Dashboard;
