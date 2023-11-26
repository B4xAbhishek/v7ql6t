import React, { useState } from 'react';
import {
  Button,
  Container,
  FormControl,
  Link,
  TextField,
} from '@mui/material';
import MyText from './typography';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({}); // State to manage errors

  const navigate = useNavigate();

  const handleChange = (evt) => {
    evt.preventDefault();
    const { value, name } = evt.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const submitForm = (evt) => {
    evt.preventDefault();
    let formErrors = {};

    // Basic validation - check if fields are empty
    // if (state.email === '') {
    //   formErrors = { ...formErrors, email: 'Email is required' };
    // }
    // if (state.password === '') {
    //   formErrors = { ...formErrors, password: 'Password is required' };
    // }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors); // Set errors if there are any
    } else {
      setErrors({}); // Clear errors if validation passes
      // Perform form submission logic or API calls for authentication here
      // e.g., call your authentication API or manage login state

      // For demonstration purposes, navigate to a new location after successful login
      navigate('/dashboard'); // Use the navigate function to redirect to the '/home' route
    }
  };

  return (
    <Container
      className="centralized"
      margin="dense"
      maxWidth="xs"
      sx={{
        bgcolor: '#fff',
        padding: '2rem',
        borderRadius: 2,
        margin: 'auto',
      }}
    >
      <MyText text="Log In" type="h4" />
      <form onSubmit={submitForm}>
        <FormControl sx={{ width: '100%' }}>
          <TextField
            margin="dense"
            
            error={errors.email ? true : false}
            helperText={errors.email}
            label="Email"
            name="email"
            variant="standard"
            type="email"
            autoComplete="email"
            onChange={handleChange}
          />
          <TextField
            
            error={errors.password ? true : false}
            helperText={errors.password}
            margin="dense"
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" sx={{ margin: '2rem 0' }}>
            Sign In
          </Button>
        </FormControl>
        <Link href="/contact" underline="always" sx={{ fontWeight: 500 }}>
          Forgot your password?
        </Link>
      </form>
    </Container>
  );
};

export default LoginForm;
