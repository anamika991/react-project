import React from "react";
import { useState } from "react";
import { Button, Grid, InputLabel, OutlinedInput, Stack } from "@mui/material";
import { useForm } from 'react-hook-form';
import { SnackbarProvider, useSnackbar } from "notistack";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false); //eslint-disable-line
  const { register, handleSubmit, setValue, isSubmitting } = useForm();
  const { enqueueSnackbar } = useSnackbar(); 


  const onSubmit = async (values) => {
    try {
      await register(values);
    } catch (err) {
      enqueueSnackbar(err.response.data.message, { variant: 'error' });
      if (err.response.data.data) {
        const errorFields = err.response.data.data;
        Object.keys(errorFields).forEach((fieldName) => {
          setValue(fieldName, '', { shouldValidate: true });
        });
      }
    }
  };

  
  return (
    <>
     <SnackbarProvider maxSnack={3}> 
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Stack spacing={1}>
              <InputLabel htmlFor="first_name">
                First Name<span style={{ color: "red" }}>*</span>
              </InputLabel>
              <OutlinedInput
                id="first_name"
                name="first_name"
                {...register("first_name", { required: "First Name is required" })}

                fullWidth
                // error={Boolean(errors.first_name)}
              />
              {/* {errors.first_name && (
               error id="helper-text-firstname-signup">
                  {errors.first_name.message}
                >
              )} */}
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={1}>
              <InputLabel htmlFor="last_name">
                Last Name<span style={{ color: "red" }}>*</span>
              </InputLabel>
              <OutlinedInput
                id="last_name"
                name="last_name"
                {...register("last_name", { required: "Last Name is required" })}

                fullWidth
                // error={Boolean(errors.last_name)}
              />
              {/* {errors.last_name && (
               error id="helper-text-lastname-signup">
                  {errors.last_name.message}
                >
              )} */}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email-signup">
                Email Address<span style={{ color: "red" }}>*</span>
              </InputLabel>
              <OutlinedInput
                id="email-login"
                type="email"
                name="email"
                autoComplete="off"
                {...register("email", { required: "Email is required" })}
                fullWidth
                // error={Boolean(errors.email)}
              />
              {/* {errors.email && (
               error id="helper-text-email-signup">
                  {errors.email}
                >
              )} */}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="contact_number">
                Contact Number<span style={{ color: "red" }}>*</span>
              </InputLabel>
              <OutlinedInput
                id="contact_number"
                name="contact_number"
                {...register("contact_number", { required: "Contact Number is required" })}
                fullWidth
                // error={Boolean(errors.contact_number)}
              />
              {/* {errors.contact_number && (
               error id="helper-text-contact-number-signup">
                  {errors.contact_number.message}
                </>
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
                // error={Boolean(errors.password)}
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                {...register("password", { required: "Password is required" })}
              />
              {/* {errors.password && (
                <FormHelperText error id="helper-text-password-signup">
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
               Create Account
              </Button>
          </Grid>
        </Grid>
      </form>
      </SnackbarProvider>
    </>
  );
};

export default RegisterForm;
