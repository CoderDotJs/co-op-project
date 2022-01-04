import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import useFirebase from '../../firebase/useFirebase';
import './Register.css'

const Register = () => {

   const [userInfo, setUserInfo] = useState({});

   const { createUser, signInWithGoogle } = useFirebase();

   const handleBlur = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newUser = { ...userInfo };
      newUser[field] = value;
      setUserInfo(newUser);
   };

   const handleSubmit = (e) => {

      if (userInfo.password1 !== userInfo.password2) {
         Swal.fire("Opps!");
         return;
      } else {
         createUser(userInfo.name, userInfo.email, userInfo.password1);
         Swal.fire("User Created Successfully!");
         e.preventDefault();
      }
   };




   return (

      <div className="container">
         <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12 mx-auto">
               <div className="myform form ">
                  <div className="logo mb-3">
                     <div className="col-md-12 text-center">
                        <h1>Register</h1>
                     </div>
                  </div>
                  <form onSubmit={handleSubmit} name="login">
                     <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Full Name</label>
                        <input className='form-control'
                           onBlur={handleBlur}
                           type="text"
                           name="name"
                           placeholder="Full Name"
                           required
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input className='form-control'
                           onBlur={handleBlur}
                           type="email"
                           name="email"
                           placeholder="Email"
                           required
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Password</label>
                        <input className='form-control'
                           onBlur={handleBlur}
                           type="password"
                           name="password1"
                           placeholder="Password"
                           required
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Password</label>
                        <input className='form-control'
                           onBlur={handleBlur}
                           type="password"
                           name="password2"
                           placeholder="Confirm Password"
                           required
                        />
                     </div>
                     <div className="form-group">
                        <p className="text-center">By signing up you accept our <a href="##">Terms Of Use</a></p>
                     </div>
                     <div className="col-md-12 text-center ">
                        <button type="submit" className=" btn px-4 btn-block mybtn btn-primary tx-tfm">Register</button>
                     </div>
                     <div className="col-md-12 ">
                        <div className="login-or">
                           <hr className="hr-or" />
                           <span className="span-or">or</span>
                        </div>
                     </div>
                     <div className="col-md-12 mb-3">
                        <p className="text-center">
                           <a href='#' onClick={signInWithGoogle} className="google btn mybtn"><i className="fab fa-google-plus">
                           </i> Register using Google
                           </a>
                        </p>
                     </div>
                  </form>

               </div>

            </div>
         </div>
      </div>
   );
};

export default Register;