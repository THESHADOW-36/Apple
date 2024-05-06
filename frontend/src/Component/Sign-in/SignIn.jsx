import React, { useContext, useState } from "react";
import "./SignIn.css"
import Navbar2 from "../Header/Navbar2";
import Footer3 from "../Footer/Footer3";
import { useNavigate } from "react-router-dom";
import { API } from "../../Constant/Network";
import { Url } from "../../Constant/Url";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthContext";

const SignIn = () => {
   const router = useNavigate()

   const [userData, setUserData] = useState({ email: "", password: "" });
   console.log("userData", userData)

   const { Login } = useContext(AuthContext)

   const handleChange = (event) => {
      setUserData({ ...userData, [event.target.name]: event.target.value })
   }

   const loginSubmit = async (event) => {
      event.preventDefault();
      if (userData.email && userData.password) {
         API.post(Url.login, userData).subscribe({
            async next(response) {
               await localStorage.setItem("my-token", response.token);
               if (response.token) {
                  Login(response.user)
                  toast.success("Logged in Successfully!");
                  setUserData({ email: "", password: "" });
                  router('/')
               } else {
                  toast.error("Please Check Credentials!")
               }
            },
            error(error) {
               console.log(error);
               toast.error(error.error);
            },
            complete() {
               console.log("complete");
            }
         })
      } else {
         toast.error("All Fields are mandatory")
      }
   }


   function SignUpSite() {
      router("/sign-up")
   }

   return (
      <>
         <Navbar2 />

         <div className="sign-in">
            <p className="check-out">Sign in for faster checkout.</p>

            <div className="sign-in-content">
               <p>Sign in to Apple Store</p>
               <form onSubmit={loginSubmit}>
                  <div className="sign-in-box">
                     <div className="email-phone"><input type="text" name="email" onChange={handleChange} placeholder="Email or Phone Number" /></div>

                     <div className="password"><input type="password" name="password" onChange={handleChange} placeholder="Password" /></div>
                     <div className="remember-forgot">
                        <div className="remember-me">
                           <input type="checkbox" />
                           <p>Remember me</p>
                        </div>

                        <div className="forgot-password">
                           <p>Forgot password?</p>
                        </div>
                     </div>

                     <button className="sign-in-button">Sign In</button>

                     <p className="sign-up-link">Don’t have an Apple ID? <span onClick={SignUpSite}>Create yours now.</span></p>
                  </div>
               </form>
            </div>

            <div className="si-line"></div>
            <p className="need-some-help">Need some help? <span>Chat now</span> or call 1‑800‑MY‑APPLE.</p>
         </div>

         <Footer3 />
      </>
   )
}

export default SignIn;