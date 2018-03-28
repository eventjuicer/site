

import TextInput from '../../formik/TextInput'
import FormButton from '../../formik/FormButton'
import formik from '../../formik/formik'
import Typography from '../MyTypography'

import VisitorRegistrationSuccess from './VisitorRegistrationSuccess'


/*
dirty : false
errors : {}
handleBlur : ƒ (e)
handleChange : ƒ (e)
handleReset : ƒ ()
handleSubmit : ƒ (e)
initialValues : {}
isSubmitting : true
isValid : false
locale : "pl"
resetForm : ƒ (nextValues)
setError : ƒ (error)
setErrors : ƒ (errors)
setFieldError : ƒ (field, message)
setFieldTouched : ƒ (field, touched, shouldValidate)
setFieldValue : ƒ (field, value, shouldValidate)
setFormikState : ƒ (s, callback)
setStatus : ƒ (status)
setSubmitting : ƒ (isSubmitting)
setTouched : ƒ (touched)
setValues : ƒ (values)
submitForm : ƒ ()
touched : {}
translate : ƒ ()
user : {}
validateForm : ƒ (values)
validateOnBlur : true
validateOnChange : true
values : {}
*/



const MyForm = (props) => {

  const {
    values,
    touched,
    errors,
    dirty,
    status,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    isSubmitting,
    success,

  } = props;

  const started = Object.keys(touched).length;

  if(status && status === "ok")
  {
    return <VisitorRegistrationSuccess />;
  }

  return (
    <form onSubmit={handleSubmit}>


      <Typography template="legend" label="visitors.form.intro" />

      <TextInput
        id="email"
        type="email"
        label="visitors.fields.email"
        {...props}
      />

      <TextInput
        id="fname"
        label="visitors.fields.fname"
        {...props}
      />

    {
      started ?

      <div>

      <TextInput
          id="lname"
          label="visitors.fields.lname"
          {...props}
        />

        <TextInput
          id="cname2"
          label="visitors.fields.cname2"
          {...props}
        />

        <TextInput
          id="position"
          label="visitors.fields.position"
          {...props}
        />

        <TextInput
          id="phone"
          type="tel"
          label="visitors.fields.phone"
          {...props}
        />

        </div>

        : null
    }

      <FormButton
        label="visitors.form.register" {...props}
      />

    </form>
  );
};


MyForm.defaultProps = {
    url : "https://api.eventjuicer.com.local/v1/public/hosts/targiehandlu.pl.local/register"
}

export default formik({})(MyForm);
