


import { withFormik } from 'formik';
import Yup from 'yup';
import fetch from 'isomorphic-unfetch'

const validations = {


}


export default (

  (params) => {

    return withFormik({

      validationSchema: Yup.object().shape({
        // fname: Yup.string()
        //   .min(2, "C'mon, your name is longer than that")
        //   .required('First name is required.'),
        // lname: Yup.string()
        //   .min(2, "C'mon, your name is longer than that")
        //   .required('Last name is required.'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required!'),
      }),

      isInitialValid: false,
      validateOnBlur : true,
      validateOnChange : true,

      //RE-RENDER on wrapped component props change?
      enableReinitialize : false,

      mapPropsToValues: ({ user }) => ({
        ...user,
      }),

      handleSubmit: (payload, { props, setSubmitting, setErrors, setStatus }) => {

        console.log(props);

        setSubmitting(true);

        fetch(props.url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            fields : payload,
            tickets : {1070 : 1}
          })
        }).then( r => {

          if(status !== 200)
          {

          }
          return r.json();
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

        console.log(data)
        setSubmitting(false);

       })



      },
      displayName: 'MyForm',
    })

  }

)



/*

(...)
bodyUsed
:
true
headers
:
Headers {}
ok
:
true
redirected
:
false
status
:
200
statusText
:
"OK"
type
:
"cors"



*/
