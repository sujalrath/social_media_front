import React from 'react'
import Index from '../../../container/Index'
import InputField from '../InputField'
import PagesIndex from '../../../container/PagesIndex'


const Form = ({ handleSubmit, btnLabel,initialValues, validationSchema, fields, loading, type }) => {
  return (
    <>
      <Index.Formik
        enableReinitialize
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          setFieldValue,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Index.Form
          
          >
              <Index.Grid container spacing={3}>
             {console.log(values,29)}
                  {fields.map((field,index) => (
                    <Index.Grid item xs={12} md={12} lg={12}>
                      <InputField
                      key={index}
                        className={field.className}
                        label={field.label}
                        name={field.name}
                        type={field.type}
                        value={values[field.name]}
                        onChange={field.customOnChange ? (e) => field.customOnChange(e, setFieldValue) : handleChange}

                        onBlur={handleBlur}
                        values={values}
                        setFieldValue={setFieldValue}
                        touched={touched}
                        errors={errors}
                         {...field}
                      />
                    </Index.Grid>
                  ))}
               

           

                {/* Button */}
                <Index.Grid item xs={12}>
                  <Index.Box className="modal-auth-btn-main">
                    <PagesIndex.PrimaryButton
                      btnLabel={btnLabel}
                      type="submit"
                      loading={loading}
                    />
                  </Index.Box>
                </Index.Grid>
              </Index.Grid>
          </Index.Form>
        )}
      </Index.Formik>
    </>
  )
}

export default Form