import * as Yup from 'yup';
const emailRegex =   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const userLoginValidationSchema = () =>
  Yup.object().shape({
    email: Yup
    .string()
    .required("Please enter email")
    .email("Please enter valid email")
    .matches(
    emailRegex,
      "Please enter valid email"
    ),
    password: Yup
    .string()
    .required("Please enter password")
    // .min(8, "Password must be at least 8 characters")
    .max(20, "Password cannot exceed 20 characters"),
  });

  export const userRegisterValidationSchema = () =>
    Yup.object().shape({
      userName: Yup
      .string()
      .required("Please enter username")
      ,
      email: Yup
      .string()
      .required("Please enter email")
      .email("Please enter valid email")
      .matches(
      emailRegex,
        "Please enter valid email"
      ),
      password: Yup
      .string()
      .required("Please enter password")
      // .min(8, "Password must be at least 8 characters")
      .max(20, "Password cannot exceed 20 characters"),
    });
  
    export const userProfileValidationSchema = () =>
      Yup.object().shape({
        userName: Yup
        .string()
        .required("Please enter username")
        ,
        email: Yup
        .string()
        .required("Please enter email")
        .email("Please enter valid email")
        .matches(
        emailRegex,
          "Please enter valid email"
        ),
        profile:Yup.string()
        .required("Please select image")
      });