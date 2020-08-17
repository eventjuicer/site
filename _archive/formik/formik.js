


import { withFormik } from 'formik';
import fetch from 'isomorphic-unfetch';
import { addToken } from '../helpers';
import { validationSchema } from './validations'


export const filterFields = (fields, start) => {
  const all = Object.keys(fields);
  return start ? all.filter(f => start.indexOf(f) === -1) : all;
};

export default withFormik({

  validationSchema: validationSchema,
  isInitialValid: false,
  validateOnBlur: true,
  validateOnChange: true,
  //RE-RENDER on wrapped component props change?
  enableReinitialize: false,
  mapPropsToValues: ({ data }) => ({
    ...data
  }),
  handleSubmit: (payload, { props, setSubmitting, setErrors, setStatus }) => {

    setSubmitting(true);

    fetch(props.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fields: payload,
        tickets: "ticketId" in props ? { [props.ticketId]: 1 } : {},
        template : "template" in props ? props.template : "",
        locale : "locale" in props ? props.locale : "",
        cc : "cc" in props ? props.cc : "" 
      })
    })
      .then(response => {
        if (response.status !== 200) {
        }
        return response.json();
      })
      .then(data => {

        setSubmitting(false);

         //error?
        if ('error' in data) {
          setStatus(data);
        }

        if ('data' in data) {

          if('token' in data.data){
            addToken(data.data.token);
          }

          if('qrcode' in data.data){
            return setStatus(data.data);
          }
        }

        setStatus('ok');
       
      });
  },

  displayName: 'MyForm'

});
