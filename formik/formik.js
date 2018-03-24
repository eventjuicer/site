


import { withFormik } from 'formik';
import Yup from 'yup';
import fetch from 'isomorphic-unfetch'

const validations = {


}
//
//
// fetch('/bear', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({ hungry: true })
// }).then( r => {
//   open(r.headers.get('location'));
//   return r.json();
// })
//

export default (

  ({required, optional}) => {

    return withFormik({
      validationSchema: Yup.object().shape({
        fname: Yup.string()
          .min(2, "C'mon, your name is longer than that")
          .required('First name is required.'),
        lname: Yup.string()
          .min(2, "C'mon, your name is longer than that")
          .required('Last name is required.'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required!'),
      }),

      isInitialValid: false,
      validateOnBlur : true,
      validateOnChange : true,

      mapPropsToValues: ({ user }) => ({
        ...user,
      }),
      handleSubmit: (payload, { props, setSubmitting, setErrors }) => {
        setSubmitting(true);
        alert("asd");
        alert(payload.email);
        setSubmitting(false);
      },
      displayName: 'MyForm',
    })

  }

)
