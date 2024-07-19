import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Checkbox, FormControlLabel, Button, Link } from '@mui/material';
import Index from '../../../Index';
import PagesIndex from '../../../PagesIndex';

const LoginForm = () => {
  const dispatch = Index.useDispatch()
  const navigate = Index.useNavigate()
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const initialValues = {
    email: '',
    password: ''
  };
  const handleSubmit = async (values) => {
    setLoading(true)
    try {
      const response = await dispatch(PagesIndex.userLogin(values))
      if (response.payload.status === 200) {
        navigate("/user/dashboard")

        setLoading(false)
      } else {
        setTimeout(() => {
          setLoading(false)

        }, 2000);

      }

    } catch (error) {
      setTimeout(() => {
        setLoading(false)

      }, 2000)
    }



  };
  const handleClickShowPassword = (e) => {
    e.preventDefault();
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const fields = [
    { name: 'email', label: 'Email', type: 'text', className: 'form-control' },
    {
      name: 'password',
      label: 'Password',
      type: showPassword ? 'text' : 'password',
      className: 'form-control custom-password',
      inputProps: {
        className: 'input_props',
      },
      InputLabelProps: { className: 'add-formlabel' },
      FormHelperTextProps: { className: 'input_label_props' },
      InputProps: {
        endAdornment: (
          <Index.InputAdornment position="end">
            <Index.IconButton
              className="passwrd-eye"
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {!showPassword ? <Index.Visibility /> : <Index.VisibilityOff />}
            </Index.IconButton>
          </Index.InputAdornment>
        ),
      },
      customOnChange: (e, setFieldValue) => {
        const newValue = e.target.value.replace(/\s/g, '');
        setFieldValue('password', newValue);
      },
    },
  ];

  return (
    <Index.Box className="user-login-main">
      <Index.Box className="user-login-left">

      </Index.Box>
      <Index.Box className="login-form" >
        <Typography variant="h4" gutterBottom>
          We are <span>SocialKick</span>
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome back! Log in to your account
        </Typography>


        <PagesIndex.Form
          handleSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={PagesIndex.userLoginValidationSchema}
          fields={fields}
          loading={loading}
          type="login"
          btnLabel="Login"
        />
        <Index.Box className="login-footer">
          <Index.Link to="/register">Don't hacve an account
            .?
          </Index.Link>
        </Index.Box>



      </Index.Box>
    </Index.Box>

 
  );
};

export default LoginForm;
