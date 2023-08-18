import React, { useEffect } from 'react'
import RegisterForm from '../auth-form/RegisterForm';
import { Grid, Stack, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Registration = () => {

    const { isLoggedIn } = useAuth();
    // const navigate = useNavigate();
    useEffect(() => {
      /**
       * Set the Page Titlt
       */
      const authToken = localStorage.getItem('token');
      if (authToken !== null) {
        // navigate()
      }
      document.title = `Register`;
    }, [])

  return (
    <Grid container spacing={3}>
    <Grid item xs={12}>
      <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
        <Typography variant="h3">Registration</Typography>
        <Typography
          component={Link}
          to={!isLoggedIn && '/auth/Login'}
          variant="body1"
          sx={{ textDecoration: 'none' }}
          color="#753CEF"
        >
          Already have an account?
        </Typography>
      </Stack>
    </Grid>
    <Grid item xs={12}>
     <RegisterForm/>
    </Grid>
  </Grid>
  )
}

export default Registration;
