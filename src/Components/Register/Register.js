import React from 'react';
import { useForm } from "react-hook-form";
import './Register.css'

const Register = () => { 
    const { register, handleSubmit } = useForm();
    
    const onSubmit = (data) => {
        console.log(data)
      };
      
    return (
        // <form onSubmit={handleSubmit(onSubmit)} className='form-control'>
        // <label htmlhtmlFor="firstName">First Name:</label>
        // <input id="firstName" {...register("firstName", { required: true, maxLength: 20 })} />
        // <label htmlhtmlFor="lastName">Last Name:</label>
        // <input id="lastName" {...register("lastName", { required: true, maxLength: 20 })} />
        // <label htmlhtmlFor="password">Password:</label>
        // <input id="password" type="password" {...register("password", { pattern: /^[A-Za-z]+$/i })} />
        // <label htmlhtmlFor="email">Email:</label>
        // <input id="email" type="email" {...register("email", { required: true })} />
        // <input type="submit" />
        // </form>
        <div className="container">
        <div className="row">
			<div className="col-md-12 col-sm-12 col-lg-12 mx-auto">
				<div className="myform form ">
					 <div className="logo mb-3">
						 <div className="col-md-12 text-center">
							<h1>Register</h1>
						 </div>
					</div>
                   <form onSubmit={handleSubmit(onSubmit)} name="login">
                           <div className="form-group">
                              <label htmlFor="exampleInputEmail1">Email address</label>
                              <input type="firstname" name="firstname"  className="form-control" id="firstname" aria-describedby="emailHelp" placeholder="Enter First Name" {...register("firstName", { required: true })}/>
                           </div>
                           <div className="form-group">
                              <label htmlFor="exampleInputEmail1">Email address</label>
                              <input type="lastName" name="lastName"  className="form-control" id="lastName" aria-describedby="emailHelp" placeholder="Enter Lastname" {...register("lastName", { required: true })}/>
                           </div>
                           <div className="form-group">
                              <label htmlFor="exampleInputEmail1">Email address</label>
                              <input type="email" name="email"  className="form-control" id="emailLogin" aria-describedby="emailHelp" placeholder="Enter email" {...register("email", { required: true })}/>
                           </div>
                           <div className="form-group">
                              <label htmlFor="exampleInputEmail1">Password</label>
                              <input type="password" name="password" id="passwordLogin"  className="form-control" aria-describedby="emailHelp" placeholder="Enter Password" {...register("password", { pattern: /^[A-Za-z]+$/i })}/>
                           </div>
                           <div className="form-group">
                              <p className="text-center">By signing up you accept our <a href="##">Terms Of Use</a></p>
                           </div>
                           <div className="col-md-12 text-center ">
                              <button type="submit" className=" btn px-4 btn-block mybtn btn-primary tx-tfm">Register</button>
                           </div>
                           <div className="col-md-12 ">
                              <div className="login-or">
                                 <hr className="hr-or"/>
                                 <span className="span-or">or</span>
                              </div>
                           </div>
                           <div className="col-md-12 mb-3">
                              <p className="text-center">
                                 <a href="##" className="google btn mybtn"><i className="fab fa-google-plus">
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