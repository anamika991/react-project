import React from "react";
import { useState } from "react";
import { Button, Grid, InputLabel, OutlinedInput, Stack } from "@mui/material";
import { SnackbarProvider, useSnackbar } from "notistack";

const RegisterForm = () => {
  const { enqueueSnackbar } = useSnackbar(); 
  const [records, setRecords] = useState([]);
  const [userSignup , setUserSignup] = useState({
    first_name: '',
    last_name: '',
    email: '',
    contact_number: '',
    password: ''
  })

  const handleInput = (e) => {
const name = e.target.name;
const value = e.target.value;
console.log(name, value);

setUserSignup({ ...userSignup, [name]: value});
  }


const handleSubmit  = (e) => {
  e.preventDefault();

  const newRecord = {...userSignup, id: new Date().getTime().toString() }

setRecords([...records, newRecord]);
console.log();
}

  
  return (
    <>
     <SnackbarProvider maxSnack={3}> 
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Stack spacing={1}>
              <InputLabel htmlFor="first_name">
                First Name<span style={{ color: "red" }}>*</span>
              </InputLabel>
              <OutlinedInput
                id="first_name"
                name="first_name"
                type="text"
                value={userSignup.first_name}
                onChange={handleInput}
                fullWidth
              />
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
        type="text"
        value={userSignup.last_name}
        onChange={handleInput}
                fullWidth
              />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">
                Email Address<span style={{ color: "red" }}>*</span>
              </InputLabel>
              <OutlinedInput
                id="email"
                type="text"
                name="email"
                fullWidth
                autoComplete="off"
                value={userSignup.email}
                onChange={handleInput}
              />
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
                // type="number"
                autoComplete="off"
                value={userSignup.contact_number}
                onChange={handleInput}
                fullWidth
              />
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
                type="text"
                name="password"
                value={userSignup.password}
                onChange={handleInput}
              />
            </Stack>
          </Grid>
          <Grid item xs={12}>
              <Button
                disableElevation
                fullWidth
                size="large"
                type="submit"
                onChange={}
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
