

import { withFormik } from 'formik';
import TextField from 'material-ui/TextField';
import Yup from 'yup';
import classnames from 'classnames';
import Button from 'material-ui/Button';


const formikEnhancer = withFormik({
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

  validateOnBlur : true,
//  validateOnChange : true,
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
});



const TextInput = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  placeholder,
  ...props
}) => {
  const classes = classnames(
    'input-group',
    {
      'animated shake error': !!error,
    },
    className
  );
  return (

      <TextField
         id={id}
         label={label}
         className={classes}
         value={value}
         onChange={onChange}
         margin="normal"
         error={error ? true : false}
         helperText={error ? error : ""}
         placeholder={placeholder}
         autoComplete="family-name"
         fullWidth
       />

  );
};
const MyForm = props => {
  const {
    values,
    touched,
    errors,
    dirty,
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
        type="text"
        label="First Name"
        placeholder="John"
        error={touched.fname && errors.fname}
        value={values.fname}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="lname"
        type="text"
        label="Last Name"
        placeholder="Doe"
        error={touched.lname && errors.lname}
        value={values.lname}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="email"
        type="email"
        label="Email"
        placeholder="Enter your email"
        error={touched.email && errors.email}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {/* <button
        type="button"
        className="outline"
        onClick={handleReset}
        disabled={!dirty || isSubmitting}
      >
        Reset
      </button> */}


      <Button variant="raised" color="primary" disabled={isSubmitting} onClick={handleSubmit}>
    Register
  </Button>

    </form>
  );
};

const MyEnhancedForm = formikEnhancer(MyForm);

//
// const App = () => (
//   <div className="app">
//     <h1>
//       Building input primitives with{' '}
//       <a href="https://github.com/jaredpalmer/formik">
//         Formik
//       </a>
//     </h1>
//     <p>
//       Formik's enables you to quickly build and style your
//       own reusable form-related components extremely
//       quickly.
//     </p>
//     <p>
//       This example does just that. It demonstrates a custom
//       text input, label, and form feedback components as
//       well as a cool shake animation that's triggered if a
//       field is invalid.
//     </p>
//
//     <MyEnhancedForm
//       user={{ email: '', firstName: '', lastName: '' }}
//     />
//     <MoreResources />
//   </div>
// );
//

export default MyEnhancedForm;
