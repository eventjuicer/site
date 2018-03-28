


import { withFormik } from 'formik';
import Yup from 'yup';
import fetch from 'isomorphic-unfetch'

const validations = {


}


const apiUrl = "https://api.eventjuicer.com.local/v1/public/hosts/targiehandlu.pl.local/register"

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

        fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            fields : payload,
            tickets : {1070 : 1}
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
