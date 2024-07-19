import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Checkbox, FormControlLabel, Button, Link } from '@mui/material';
import Index from '../../../Index';
import PagesIndex from '../../../PagesIndex';

const RegisterForm = () => {
  const dispatch = Index.useDispatch()
  const navigate = Index.useNavigate()
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const initialValues = {
    userName: '',
    email: '',
    password: ''
  };
  const handleSubmit = async (values) => {
    const response = await dispatch(PagesIndex.userRegister(values))
    if (response.payload.status === 201) {
      navigate("/ ")

      setLoading(false)
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
    {
      name: 'userName', label: 'User Name', type: 'text', className: 'form-control',
      customOnChange: (e, setFieldValue) => {
        const newValue = e.target.value.replace(/[^a-zA-Z]/g, '');
        setFieldValue('userName', newValue);
      },
    },
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
      <Index.Box className="login-form" noValidate autoComplete="off">
        <Typography variant="h4" gutterBottom>
          We are <span>SocialKick</span>
        </Typography>
        <Typography variant="body1" gutterBottom>
          Please Register with your email
        </Typography>


        <PagesIndex.Form
          handleSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={PagesIndex.userRegisterValidationSchema}
          fields={fields}
          loading={loading}
          type="register"
          btnLabel="Register"
        />

        <Index.Box className="login-footer">
          <Index.Link to="/">Already hacve an account

            .?
          </Index.Link>
        </Index.Box>


      </Index.Box>
    </Index.Box>
  );
};

export default RegisterForm;
