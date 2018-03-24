

import TextField from 'material-ui/TextField';
//import compose from 'recompose/compose';
import {translate} from '../i18n'

/*
dirty : false
errors : {}
handleBlur : ƒ (e)
handleChange : ƒ (e)
handleReset : ƒ ()
handleSubmit : ƒ (e)
id : "fname"
initialValues : {}
isSubmitting : false
isValid : false
label : "visitors.fields.fname"
locale : "pl"
placeholder : "visitors.fields.fname"
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
type : "text"
user : {}
validateForm : ƒ (values)
validateOnBlur : true
validateOnChange : true
values : {}
*/

const TextInput = (props) => {

  const {type, id, label, placeholder, autocomplete, classes, values, touched, errors, handleChange, handleBlur, translate} = props;

  const renderError = id in errors

  return ( <TextField
          id={id}
          label={translate(label)}
          //className={classes.XXXX}
          value={id in values ? values[id] : ""}
          onChange={handleChange}
          onBlur={handleBlur}
          margin="normal"
          error={renderError}
          helperText={renderError ? errors[id] : ""}
          placeholder={translate(placeholder)}
          autoComplete={autocomplete}
      //    autoComplete="family-name"
          fullWidth
        />

 )

}

TextInput.defaultProps = {
  type : "text",
  autocomplete : ""
}

export default translate(TextInput);
