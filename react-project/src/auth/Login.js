import React from 'react'
import LoginForm from '../auth-form/LoginForm'
import { Grid, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Login</Typography>
            <Typography
              component={Link}
              to={'auth-form/RegisterForm'}
              variant="body1"
              sx={{ textDecoration: 'none' }}
              color="#753CEF"
            >
              Don't have an account?
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
     <LoginForm/>
        </Grid>
      </Grid>
  )
}

export default Login
