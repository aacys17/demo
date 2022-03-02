// import { Button, TextField} from "@material-ui/core";
// import { Field, Form, Formik } from "formik";
// import { object, string } from "yup";
// import axios from 'axios'

// const initialValues = {
//     title: "",
//     image: ""
// }

// const Post  = () => {
  
//   return (<div>
//     <div className="MaterialForm">
//       <Formik initialValues={initialValues} onSubmit={async(values, formikHelpers) =>{
//         console.log(values)
//         const response = await axios.post('http://localhost:5000//tasks',values)
//         console.log(response)
//       }}
//       validationSchema={object({
//        title: string().required("Please enter something")
//       })}
//       >
//         {({errors, isValid, touched, dirty}) => (
    
//           <Form className= 'form-wrapper'>
//             <div>
//               <h1>
//                   <Button  style={{background:'red',color:'white'}} variant="contained" size="small" >
//               Back
//             </Button>
//               </h1>
//               <p>Add New Post</p>
//             </div>
//             <Field className="input-field"
//               name="title"
//               type="title"
//               as={TextField}
//               variant="filled"
//               // style={{background:'white',color:'white'}}        
//               label="Tell us your thoughts"
//               fullWidth
//               error={Boolean(errors.title) && Boolean(touched.title)}
//               helperText={Boolean(touched.title) && Boolean(errors.title)}
//             />
          
            
           
//             <Button  style={{background:'red',color:'white'}}type="submit" variant="contained" size="large" >
//               Post
//             </Button>
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




// export default Post;