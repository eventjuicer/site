import * as Yup from 'yup';
import _pick from 'lodash/pick';


export const validations = {

      fname: Yup.string()
      .min(2, "common.errors.too_short")
      .required('common.errors.required'),
  
      lname: Yup.string()
      .min(2, "common.errors.too_short")
      .required('common.errors.required'),
  
      cname2: Yup.string()
      .min(2, "common.errors.too_short")
      .required('common.errors.required'),

      position: Yup.string()
      .min(2, "common.errors.too_short")
      .max(50, 'common.errors.too_long')
      .required('common.errors.required'),
  
      phone: Yup.string()
      .min(8, 'common.errors.phone_invalid')
      .max(15, 'common.errors.phone_invalid')
      .required('common.errors.required')
      .matches(/^(?:\+?\d{5,15}|\d{5,15})$/, 'common.errors.phone_invalid'),
  
      email: Yup.string()
      .email('common.errors.email_invalid')
      .required('common.errors.required'),
  
      presenter: Yup.string()
      .min(5, 'common.errors.too_short')
      .max(100, 'common.errors.too_long')
      .required('common.errors.required'),

      presentation_title: Yup.string()
      .min(20, 'common.errors.too_short')
      .max(200, 'common.errors.too_long')
      .required('common.errors.required'),
  
      presentation_description: Yup.string()
      .min(100, 'common.errors.too_short')
      .max(1000, 'common.errors.too_long')
      .required('common.errors.required'),
  
  
  };


export const validationSchema = ({ fields }) => {
    return Yup.object().shape(_pick(validations, Object.keys(fields || {})));
};
