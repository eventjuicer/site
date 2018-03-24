


import classnames from 'classnames';
import TextInput from './TextInput'
import FormButton from './FormButton'
import formik from './formik'




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
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    isSubmitting,

  } = props;
  return (
    <form onSubmit={handleSubmit}>

      <TextInput
        id="fname"
        label="visitors.fields.fname"
        placeholder="visitors.fields.fname"
        autocomplete='given-name'
        {...props}
      />

      <TextInput
        id="lname"
        label="visitors.fields.lname"
        placeholder="visitors.fields.lname"
        autocomplete='family-name'
        {...props}
      />

      <TextInput
        id="cname2"
        label="visitors.fields.cname2"
        placeholder="visitors.fields.cname2"
        {...props}
      />

      <TextInput
        id="email"
        type="email"
        label="visitors.fields.email"
        placeholder="visitors.fields.email"
        autocomplete="email"
        {...props}
      />

      <FormButton label="visitors.form.register" {...props} />

    </form>
  );
};



export default formik({

  required : ["fname", "lname", "cname2", "phone"],
  apiUrl : ""

})(MyForm);
