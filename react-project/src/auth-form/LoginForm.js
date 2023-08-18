  import React from "react";
  import { useState } from "react";
  import { Button, Grid, InputLabel, OutlinedInput, Stack } from "@mui/material";
  import { useForm } from 'react-hook-form';
  import { SnackbarProvider, useSnackbar } from "notistack";

  const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false); //eslint-disable-line
    const { register, handleSubmit, errors, setValue } = useForm();
    const { enqueueSnackbar } = useSnackbar(); 

    const onSubmit = async (values) => {
      try {
        // Implement your login logic here
        // For example, send the login request to your backend
        // Handle success and failure accordingly
      } catch (err) {
        enqueueSnackbar("PLease check your credentials.", { variant: 'error' });
        if (err.response && err.response.status === 401) {
          setValue("email", "", { shouldValidate: true });
        }
      }
    };

    return (
      <>
        <SnackbarProvider maxSnack={3}> 
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-login">
                    Email Address<span style={{ color: "red" }}>*</span>
                  </InputLabel>
                  <OutlinedInput
                    id="email-login"
                    type="email"
                    name="email"
                    autoComplete="off"
                    {...register("email", { required: "Email is required" })}
                    fullWidth
                  />
                  {/* {errors.email && (
                    <FormHelperText error id="helper-text-email-login">
                      {errors.email.message}
                    </FormHelperText>
                  )} */}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="password">
                    Password<span style={{ color: "red" }}>*</span>
                  </InputLabel>
                  <OutlinedInput
                    fullWidth
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    {...register("password", { required: "Password is required" })}
                  />
                  {/* {errors.password && (
                    <FormHelperText error id="helper-text-password-login">
                      {errors.password.message}
                    </FormHelperText>
                  )} */}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Button
                  disableElevation
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </SnackbarProvider>
      </>
    );
  };

  export default LoginForm;
