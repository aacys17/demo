// import React from 'react';
// import { Button, TextField} from "@material-ui/core";
// import { Field, Form, Formik } from "formik";
// import { object, string } from "yup";
// import axios from 'axios'
// import {Link} from 'react-router-dom'


// // import { createTheme } from '@material-ui/core';

// // const theme = createTheme({
// //   palette: {
// //     primary: {
// //       main: 'white',
// //     },
// //     secondary: {
// //       main: '#f44336',
// //     },
// //   },
// // });

// // const ButtonWrapper = styled.div`
// // background: aliceblue;
// // color:black;
// // padding:1rem;
// // display:flex;
// // justify-content:center;
// // &:hover{
// //   cursor:pointer;
// // }
// // `

// const initialValues = {
//   email: "",
//   password: "",
//   username: ""
// }

// // const useStyles = makeStyles({
// //   root: {
// //     "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
// //       borderColor: "green"
// //     }}});

// const Register = () => {
//   return (<div>
//     <div className="MaterialForm">
//       <Formik initialValues={initialValues} onSubmit={async(values, formikHelpers) =>{
//         console.log(values)
//         const response = await axios.post('http://localhost:5000/users',values)
//         console.log(response)
//       }}
//       validationSchema={object({
//         email: string().required("Please enter email").email("Invalid email"),
//         password: string().required("Please enter password").min(7, "Password should be minimum of 7 characters"),
//         username: string().required("Please enter username").min(2, "Name too short"),
//       })}
//       >
//         {({errors, isValid, touched, dirty}) => (
    
//           <Form className='form-wrapper'> 
//               <h1>WMC</h1>
//               <p>Create your Account</p>
//             <Field className = 'input-field'
//             // className={classes.fieldA}
//               // style={{background:'white'}}
//               name="email"
//               type="email"
//               as={TextField}
//               variant="filled"
//               // color="primary"
//               // style={{background:'white',color:'white'}}        
//               label="Email" theme={{ colors: { primary: 'red' } }}
//               error={Boolean(errors.email) && Boolean(touched.email)}
//               helperText={Boolean(touched.email) && Boolean(errors.email)}
//             />
            
//             <Field
//             className = 'input-field'

             
//               name="password"
//               type="password"
//               as={TextField}
             
//               // color="primary"
//               // style={{background:'white',color:'white'}}
//               label="Password"
//               error={Boolean(errors.password) && Boolean(touched.password)}
//               helperText={Boolean(touched.password) && Boolean(errors.password)}
//             />
            
//             <Field
//              className = 'input-field'

             
//               name="username"
//               type="username"
//               as={TextField}
//               variant="filled"
//               label="Username"
//               error={Boolean(errors.username) && Boolean(touched.username)}
//               helperText={Boolean(touched.username) && Boolean(errors.username)}
//             />
//             <Button  style={{background:'red',color:'white',marginTop: '1rem',textDecoration:'none'}}type="submit" variant="contained" size="large" >
//               Create Account
//             </Button>
//        <div className="footer">
//            <Link to="/login" className='linkClass'>Already have an account?? Sign In</Link>
//             </div>
            
//           </Form>
        
//         )}
      
//       </Formik> 
//     </div>
//     </div>
//   );
// };




// export default Register;






import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { TextField } from '@material-ui/core';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Link, useHistory } from 'react-router-dom';
import {
  RegisterForm,
  FormGroup,
  Heading,
  FieldControl,
  Btnsubmit,
  Linking,
  Maindiv,
} from './registerwrapper';


const end_point = 'http://localhost:5000/users';

const registerSchema = yup.object().shape({
  email: yup.string().email('Invalid Email').required('Email cannot be empty'),
  password: yup.string().required('Password cannot be empty'),
  username: yup.string().required('Username cannot be empty'),
});


function Register() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const onSubmit = async (values) => {
    console.log(values);
    setLoading(true);
    const payload = JSON.parse(values);
    console.log(payload);
    //axios code here
    try {
      const response = await axios.post(end_point, payload);
      console.log(response.data);
      setLoading(false);
      if (response.data) {
        alert('Signup successfull');
      } else {
        alert('Something went wrong');
      }
    } catch (err) {
      alert(err.message);
      setMessage(err.message);
    }
  };

  return (
    <Maindiv>
      <Formik
        onSubmit={async (values) => {
          console.log(values);
          onSubmit(JSON.stringify(values, null, 2));
          history.push('/login');
        }}
        initialValues={{
          email: '',
          password: '',
          username: '',
        }}
        validationSchema={registerSchema}
      >
        {({ errors, touched }) => (
          <RegisterForm>
            <FormGroup>
              <Heading>
                <h1>Register</h1>
              </Heading>
              <div className="form-field">
                <FieldControl
                  name="email"
                  type="email"
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  label="Email"
                  as={TextField}
               />
              </div>
              <div className="form-field">
                <FieldControl
                  name="password"
                  type="password"
                  error={touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  label="Password"
                  as={TextField}
                />
              </div>
              <div className="form-field">
                <FieldControl
                  name="username"
                  type="input"
                  error={touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                  label="Username"
                  as={TextField}
                />
              </div>

              <Btnsubmit>Register</Btnsubmit>
            </FormGroup>
          </RegisterForm>
        )}
      </Formik>
      <Linking to="/login" className="links">
        Already have an account? Sign In
      </Linking>
    </Maindiv>
  );
}

export default Register;


