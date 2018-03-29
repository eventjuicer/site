import { withFormik } from 'formik';
import Yup from 'yup';
import fetch from 'isomorphic-unfetch'
import _pick from 'lodash/pick'
import _pickBy from 'lodash/pickBy'

export const filterFields = (fields, start) => {
  const all = Object.keys(fields)
  return start ? all.filter(f => start.indexOf(f)===-1) : all
}

const validations = {
  fname: Yup.string()
    .min(2, "C'mon, your name is longer than that")
    .required('First name is required.'),
  lname: Yup.string()
    .min(2, "C'mon, your name is longer than that")
    .required('Last name is required.'),
  cname2: Yup.string()
    .min(2, "C'mon, your name is longer than that")
    .required('Last name is required.'),
  phone: Yup.string()
      .min(9, "Phone is valid?")
      .max(13, "Phone is valid?")
      .required('Phone is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required!'),
}

const validationSchema = ({fields}) => {
  return Yup.object().shape(
    _pick(validations,
      Object.keys(fields || {})
    )
  );
}

const apiUrl = "https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/register"

export default withFormik({
      validationSchema: validationSchema,
      isInitialValid: false,
      validateOnBlur : true,
      validateOnChange : true,
      //RE-RENDER on wrapped component props change?
      enableReinitialize : false,
      mapPropsToValues: ({ data }) => ({
        ...data,
      }),
      handleSubmit: (payload, { props, setSubmitting, setErrors, setStatus }) => {
        setSubmitting(true);

        fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            fields : payload,
            tickets : {[props.ticketId] : 1}
          })
        }).then( response => {
          if(response.status !== 200)
          {

          }
          return response.json();
        }).then( data => {
          if("data" in data && "token" in data.data)
          {
             setStatus("ok")
          }
          //error?
          if("error" in data)
          {
            setStatus("error")
          }
      
          setSubmitting(false);
       })
      },
      displayName: 'MyForm',
});
