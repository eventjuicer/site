import TextInput from './TextInput';
import FormButton from './FormButton';
import withFormik from './formik';
import { MyTypography as Typography } from '../components';
import {translate} from '../i18n';
import compose from 'recompose/compose';


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

const AccountForm = props => {
  
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
    fields,
    start,
    baseLabel
  } = props;

  const started = Object.keys(touched).length;

  if (new Object(status) === status) {

    if("qrcode" in status){
      return <img src={status.qrcode} alt="" style={{maxWidth: 300}} />;
    }
    
    if("error" in status && "message" in status.error){
      return <h3>{status.error.message}</h3>;
    }
  }

  return (

    <form onSubmit={handleSubmit}>

    <Typography template="legend" label={`${baseLabel}.form.intro`} />

    {Object.keys(fields).map((name, idx) => (
            <TextInput
              key={idx}
              id={name}
              label={`${baseLabel}.fields.${name}`}
              {...props}
            />
    ))}
  

    <FormButton disabled={isSubmitting} label={`${baseLabel}.form.submit`} {...props} />
    </form>
  );
};

AccountForm.defaultProps = {
  baseLabel : 'exhibitors.account',
  fields : {}
};

const enhance = compose(
  translate,
  withFormik
)

export default enhance(AccountForm);
