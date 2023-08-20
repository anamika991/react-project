  import React from "react";
  import { useState } from "react";
  import { Button, Grid, InputLabel, OutlinedInput, Stack } from "@mui/material";
  // import { useForm } from 'react-hook-form';
  import { SnackbarProvider, useSnackbar } from "notistack";

  const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false); //eslint-disable-line
    const [allEntry, setAllEntry] = useState([]);
    // const { register, handleSubmit, errors, setValue } = useForm();
    const { enqueueSnackbar } = useSnackbar(); 

    const [usesrLogin, setUserLogin] = useState({
      email: '',
      password: ''
    })

    const handleInput = (e) => {
      const name =  e.target.name;
      const value = e.target.value;
      console.log(name , value);
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
// const newEntry  = {name: value}
    }


  

    return (
      <>
        <SnackbarProvider maxSnack={3}> 
          <form onSubmit={handleSubmit} >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-login">
                    Email Address<span style={{ color: "red" }}>*</span>
                  </InputLabel>
                  <OutlinedInput
                    id="email"
                  type="text"
                    name="email"
                    value={usesrLogin.email}
                    onChange={handleInput}
                    autoComplete="off"
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
                    value={usesrLogin.password}
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
