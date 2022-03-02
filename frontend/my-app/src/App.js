// // import Registrate from './auth/register/registrate'
// // import "./auth/register/register";
// import React from 'react';
// // import {Router, Route, Switch} from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom';
// import { Routes, Route } from 'react-router';
// import Login from "./auth/login/login";
// import Register from "./auth/register/register";
// import SingleBoard from './components/Board/SingleBoard';
// import Dashboard from './components/Dashboard/dashboard';


// // const  App =()=> {
// //   return (
// //     <BrowserRouter> 
// //    <Routes>
      
// //       <Route exact path="/"  element={<Login/>} />
// //       <Route exact path="/register"  element={<Register/>} />
// //       <Route exact path="/login"  element={<Login/>} />
// //       <Route exact path="/dashboard"  element={<Dashboard/>} />
// //       <Route exact path="/singleboard/:id"  element={<SingleBoard/>} />

     
// //    </Routes>
// //    </BrowserRouter>
// //   );
// // }

//   function App() {

//   return (
//    <BrowserRouter>
//       <Routes>
//       <Route exact path="/"  element={<Login />} />
//       <Route exact path="/register"  element={<Register />} />
//       <Route exact path="/login"  element={<Login />} />
//       <Route exact path="/dashboard"  element={<Dashboard />} />
//       <Route exact path="/singleboard/:id"  element={<SingleBoard />} />

//       </Routes>
//     </BrowserRouter>
//   );
//   }

// //      <BrowserRouter>
// //       <Routes>
// //         <Route exact path="/" element={<Login />} />
// //         <Route exact path="/register" element={<Register />} />
// //         <Route exact path="/login" element={<Login />} />
// //         <Route exact path="/dashboard" element={<Dashboard />} />
// //         <Route exact path="/singleboard/:id" element={<SingleBoard />} />
// //         {/* <Route exact path="/change_password" element={<ChangePassword />} /> */}

// //         {/* <Route exact path="/dashboard" element={<Dashboards />} /> */}
// //       </Routes>
// //     </BrowserRouter>
   
// //  )
// // };
 



// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./auth/login/login";
import Register from "./auth/register/register";
import SingleBoard from './components/Board/SingleBoard';
import Dashboard from './components/Dashboard/dashboard';


function App() {
  return (
    <Router>
      <Switch>
         <Route exact path="/">
          <Login />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/singleboard">
          <SingleBoard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

