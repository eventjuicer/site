


import classnames from 'classnames';
import TextInput from '../../formik/TextInput'
import FormButton from '../../formik/FormButton'
import formik from '../../formik/formik'




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

  const started = Object.keys(touched).length;

  return (
    <form onSubmit={handleSubmit}>


      <legend>asd</legend>

      <TextInput
        id="email"
        type="email"
        label="visitors.fields.email"
        placeholder="visitors.fields.email"
        autocomplete="email"
        required
        {...props}
      />

      <TextInput
        id="fname"
        label="visitors.fields.fname"
        placeholder="visitors.fields.fname"
        autocomplete='given-name'
        required
        {...props}
      />

    {
      started ?

      <div>
      <TextInput
          id="lname"
          label="visitors.fields.lname"
          placeholder="visitors.fields.lname"
          autocomplete='family-name'
          required
          {...props}
        />

        <TextInput
          id="cname2"
          label="visitors.fields.cname2"
          placeholder="visitors.fields.cname2"
          autocomplete='org'
          required
          {...props}
        />


        <TextInput
          id="phone"
          type="tel"
          label="visitors.fields.phone"
          placeholder="visitors.fields.phone"
          autocomplete="tel"
          required
          {...props}
        />

        </div>

        : null
    }

      <FormButton label="visitors.form.register" {...props} />

    </form>
  );
};



export default formik({

  required : ["fname", "lname", "cname2", "phone"],
  apiUrl : ""

})(MyForm);
