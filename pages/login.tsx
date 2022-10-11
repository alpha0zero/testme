import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MuiLink from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ButtonAppBar from "../components/AppBar";
import Link from "next/link";
import CircularProgress from "@mui/material/CircularProgress";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export type Status = "loading" | "loaded" | "unloaded";

const Login = () => {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("unloaded");
  const [inputErr, setInputErr] = useState<boolean>(false);
  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={() => setInputErr(false)}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup.string().min(8).required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setStatus("loading");
      const { data } = await axios.post("/api/users/login", {
        email: values.email,
        password: values.password,
      });
      setStatus("loaded");
      if (!data.message) {
        setInputErr(false);
        router.push("/u/dashboard");
      } else {
        setInputErr(true);
        setStatus("unloaded");
      }

      /* alert(JSON.stringify(data, null, 2)); */
    },
  });

  return (
    <>
      <ButtonAppBar status={status} />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Snackbar
              open={inputErr}
              autoHideDuration={4000}
              message="It is either email or password is wrong"
              onClose={() => setInputErr(false)}
              action={action}
            >
              <Alert onClose={() => setInputErr(false)} severity="error">
                It is either email or password is wrong — check it out!
              </Alert>
            </Snackbar>
            <TextField
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {status === "loading" ? (
                <CircularProgress
                  size={24}
                  color="warning"
                  sx={{ marginRight: "10px" }}
                />
              ) : null}
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup">
                  <MuiLink variant="body2" sx={{ cursor: "pointer" }}>
                    {"Don't have an account? Sign Up"}
                  </MuiLink>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
