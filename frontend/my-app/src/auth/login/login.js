// import React from 'react';
// // import ReactDOM from 'react-dom';
// import { Button, TextField } from "@material-ui/core";
// import { Field, Form, Formik } from "formik";
// import { object, string } from "yup";
// import axios from 'axios'
// import {Link} from 'react-router-dom'




// const initialValues = {
//   email: "",
//   password: ""
// }

// const Login = () => {
  
//   return (<div>
//     <div className="MaterialForm">
//       <Formik initialValues={initialValues} onSubmit={async(values, formikHelpers) =>{
//         console.log(values)
//         const response = await axios.post('http://localhost:5000//users/login',values)
//         console.log(response)
//       }}
//       validationSchema={object({
//         email: string().required("Please enter email").email("Invalid email"),
//         password: string().required("Please enter password")
//       })}
//       >
//         {({errors, isValid, touched, dirty}) => (
    
//           <Form className= 'form-wrapper'>
//             <div>
//               <h1>WMC</h1>
//               <p>Login To Your <br></br> Account</p>
//             </div>
//             <Field className="input-field"
//               name="email"
//               type="email"
//               as={TextField}
//               variant="filled"
//               // style={{background:'white',color:'white'}}        
//               label="Email"
//               fullWidth
//               error={Boolean(errors.email) && Boolean(touched.email)}
//               helperText={Boolean(touched.email) && Boolean(errors.email)}
//             />
          
//             <Field className="input-field"
//               name="password"
//               type="password"
//               as={TextField}
              
//               // color="primary"
//               // style={{background:'white',color:'white'}}
//               label="Password"
//               fullWidth
//               error={Boolean(errors.password) && Boolean(touched.password)}
//               helperText={Boolean(touched.password) && Boolean(errors.password)}
//             />
           
//             <Button  style={{background:'red',color:'white'}}type="submit" variant="contained" size="large" >
//               Login
//             </Button>
//             <div className="footer">
//                 <Link to="/register" className='linkClass'>Don't have an account?? Sign Up</Link> 
//             </div> 
//           </Form>
        
//         )}
      
//       </Formik> 
//        {/* <div className="footer">
//            <Link to="/" style={{color: 'black'}}>Don't have an account?? Sign Up</Link>
//             </div> */}
//     </div>
//     </div>
//   );
// };




// export default Login;

import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { TextField, Button } from '@material-ui/core';
import {
  Loginform,
  Formgroup,
  FieldControl,
  Btnsubmit,
  Heading,
  Linking,
  Maindiv,
} from './loginwrapper';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import { loginHandler } from '../../services';
import { FaParagraph } from 'react-icons/fa';
import { typography } from '@mui/system';

const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid Email').required('Email cannot be empty'),
  password: yup.string().required('Password cannot be empty'),
});

function Login() {
  const [message, setMessage] = useState('');
  // const [loading, setLoading] = useState(false);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const history = useHistory();

  const [open, setOpen] = React.useState(false);
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const onSubmit = async (values) => {
    // e.preventDefault();
    // console.log('Tried');
    // const response = await loginHandler(values);
    const response = await loginHandler(values);
    if (response.status !== 200) {
      setIsLoginFailed(true);
      console.log(response.data.message);
      setMessage(response.data.message);
       setIsLoginFailed(true);
      // console.log({error: e.message });

      return;


    // try {
    //      const isLoggedIn = await axios.post(
    //     'http://localhost:5000/users/login', payload
    //     // {
    //     //   withCredentials: true,
    //     //   email,
    //     //   password,
    //     // }
    //   );
     


     
    } else{
       const { token } = isLoggedIn.data;
      localStorage.setItem('jwt', token);
      history.push('/dashboard');
    }
      console.log('button clicked');

    // setEmail('');
    // setPassword('');

      // setMessage(e.message);
      // return;      

      // const { authorization, refreshtoken } = response.headers;
      // localStorage.setItem('isLoggedIn', true);
      // localStorage.setItem('accesstoken', authorization);
      // localStorage.setItem('refreshtoken', refreshtoken);
      // history.push('/dashboard');
    
  };
  React.useEffect(() => {
    isLoggedIn && history.push('/dashboard');
  }, [isLoggedIn]);
  return (
    <Maindiv>
      {/* {isLoginFailed && (
        <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
      )} */}
      <Formik
        onSubmit={async (values) => {
          console.log(values);
          onSubmit(JSON.stringify(values, null, 2));
        }}
        initialValues={{
          email: '',
          password: '',
        }}
        // validationSchema={loginSchema}
      >
        {({ errors, touched }) => (
          <Loginform>
            <Formgroup>
              {/* <FontAwesomeIcon icon="FaSignInAlt" />
              <FontAwesomeIcon icon={Arrows}></FontAwesomeIcon> */}

              <Heading>
                <h1>WMC</h1> 
                <h2>Login to your Account</h2>
               
                
              </Heading>
              

              <div className="form-field">
                <FieldControl
                  name="email"
                  type="email"
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  label="Your Email"
                  as={TextField}
                />
              </div>
              <div className="form-field">
                <FieldControl
                  name="password"
                  type="password"
                  error={touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  label="Your Password"
                  as={TextField}
                />
              </div>
              <Btnsubmit variant="outlined">Login</Btnsubmit>
            </Formgroup>
          </Loginform>
        )}
      </Formik>
      <Linking to="/register">Don't have an account? Sign Up</Linking>
    </Maindiv>
  );
}
export default Login;
