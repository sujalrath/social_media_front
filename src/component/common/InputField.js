import React, { useState } from "react";
import Index from "../../container/Index";
import PagesIndex from "../../container/PagesIndex";

export default function InputField({
  label,
  name,
  value,
  onChange,
  onBlur,
  values,
  setFieldValue,
  touched,
  errors,
  type,
  className,
  ...props
}) {
  const [image,setImage]=useState(null)

  return (
    <>
      <Index.Box className="form-group">
        <Index.FormHelperText className="form-lable">
          {type==="file"? "":label}
        </Index.FormHelperText>
        {type === "file" ? ( 
          <>
           <Index.Box className="edit-profile-flex">
           <Index.Box className="file-upload-btn-main">
             <img
               src={
                 image
                   ? URL.createObjectURL(image)
                   : values[name]
                     ? `${PagesIndex.IMAGE_ENDPOINT}${values[name]}`
                     : PagesIndex?.Jpg?.dummyImage
               }
               className="upload-profile-img"
               alt="upload img"
             ></img>
             <Index.Button
               variant="contained"
               component="label"
               className="file-upload-btn"
             >
               <img
                 src={PagesIndex.Svg.edit}
                 className="upload-icon-img"
                 alt="upload img"
               ></img>
               <input
                 hidden
                 accept="image/*"
                 name={name}
                 type={type}
                 onChange={(e) => {
                   setImage(e.target.files[0]);
                   setFieldValue(
                     "profile",
                     e.target.files[0]
                   );
                 }}
                 
               />
             </Index.Button>
           </Index.Box>
          
         </Index.Box>
          {errors[name] && touched[name] && (
            <p className="image-error">{errors[name]}</p>
          )}  
          </>
        ) : (
          <Index.TextField
            fullWidth
            hiddenLabel
            id="filled-hidden-label-normal"
            placeholder={label}
            variant="filled"
            className={className}
            name={name}
            data-testid={`${name}-input`}
            autoComplete="off"
            onBlur={onBlur}
            value={values[name]}
            onChange={onChange}
            helperText={touched[name] && errors[name]}
            error={Boolean(errors[name] && touched[name])}
            type={type}
            {...props}
          />
        )}
      </Index.Box>
    </>
  );
}
