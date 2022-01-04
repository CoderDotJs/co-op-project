import React, { useState } from 'react';
// import Swal from 'sweetalert2';

import useFirebase from '../../firebase/useFirebase';
import './Login.css'

const Login = () => {

   const [userInfo, setUserInfo] = useState({});
   const { SignInUser, signInWithGoogle } = useFirebase();

   const handleonChange = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newUser = { ...userInfo };
      newUser[field] = value;
      setUserInfo(newUser);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      SignInUser(userInfo.email, userInfo.password1);
   }
   return (

      <div className="container">
         <div className="row">
            <div className="col-md-8 col-sm-12 col-lg-12 mx-auto">
               <div className="myform form ">
                  <div className="logo mb-3">
                     <div className="col-md-12 text-center">
                        <h1>Login</h1>
                     </div>
                  </div>
                  <form onSubmit={handleSubmit} name="login">

                     <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input className='form-control'
                           onBlur={handleonChange}
                           type="email"
                           name="email"
                           placeholder="Email"
                           required
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Password</label>
                        <input className='form-control'
                           onBlur={handleonChange}
                           type="password"
                           name="password1"
                           placeholder="Password"
                           required
                        />
                     </div>

                     <div className="form-group">
                        <p className="text-center">By signing up you accept our <a href="##">Terms Of Use</a></p>
                     </div>
                     <div className="col-md-12 text-center ">
                        <button type="submit" className=" btn px-4 btn-block mybtn btn-primary tx-tfm">Login</button>
                     </div>
                     <div className="col-md-12 ">
                        <div className="login-or">
                           <hr className="hr-or" />
                           <span className="span-or">or</span>
                        </div>
                     </div>
                     <div className="col-md-12 mb-3">
                        <p className="text-center">
                           <span  onClick={signInWithGoogle} className="google btn mybtn"><i className="fab fa-google-plus">
                           </i> Register using Google
                           </span>
                        </p>
                     </div>
                  </form>


               </div>

            </div>
         </div>
      </div>
   );
};

export default Login;