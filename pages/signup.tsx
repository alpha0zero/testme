import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import MuiLink from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MuiRadioGroup from "@mui/material/RadioGroup";
import ButtonAppBar from "../components/AppBar";
import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";
import { NextPage } from "next";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import axios from "axios";

const SignUp: NextPage = () => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup.string().min(8).required("Password is required"),
    firstName: yup.string().max(25).required("First Name is required"),
    lastName: yup.string().max(25).required("Last Name is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      membership: "student",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const { data } = await axios.post("api/users/signup", {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        isTeacher: values.membership === "teacher" ? true : false,
      });
      alert(JSON.stringify(data, null, 2));
    },
  });
  return (
    <>
      <ButtonAppBar />
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
            Sign up
          </Typography>
          <Box
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit(e);
            }}
            component="form"
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    YOU ARE:
                  </FormLabel>
                  <MuiRadioGroup
                    value={formik.values.membership}
                    onChange={formik.handleChange}
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="membership"
                  >
                    <FormControlLabel
                      value="student"
                      control={<Radio />}
                      label="Student"
                    />
                    <FormControlLabel
                      value="teacher"
                      control={<Radio />}
                      label="Teacher"
                    />
                  </MuiRadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login">
                  <MuiLink variant="body2" sx={{ cursor: "pointer" }}>
                    Already have an account? Sign in
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

export default SignUp;
