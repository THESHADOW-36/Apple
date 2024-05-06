import React from "react";
import "./Navbar.css"
import { useNavigate } from "react-router-dom";


const Navbar = () => {
   const router = useNavigate()

   function storeSite() {
      router("/store")
   }

   function signInSite() {
      router("/sign-in")
   }

   function homepageSite() {
      router("/")
   }

   function appleBag(){
      router("/bag")
   }

   return (
      <>
         <div className="navbar">
            <div className="navbar-content">
               <div className="apple-logo" onClick={homepageSite}>
                  <i class="fa-brands fa-apple fa-lg"></i>
               </div>

               <div className="navbar-text">
                  <p onClick={storeSite}>Store</p>
                  <p>Mac</p>
                  <p>iPad</p>
                  <p>iPhone</p>
                  <p>Watch</p>
                  <p>AirPods</p>
                  <p>TV & Home</p>
                  <p>Entertainment</p>
                  <p>Accessories</p>
                  <p>Support</p>
               </div>

               <div className="navbar-search-bag">
                  <div className="navbar-search-logo"><i class="fa-solid fa-magnifying-glass"></i></div>
                  <div className="navbar-bag-logo"><i class="fa-solid fa-bag-shopping"></i>
                     <div className="navbar-bag-bg">
                        <div className="navbar-bag">
                           <div className="navbar-bag-title">
                              <p>Bag</p>
                              <button className="navbar-bag-review" onClick={appleBag}>Review Bag</button>
                           </div>

                           <div className="navbar-bag-product">
                              Your Bag is empty.
                           </div>

                           <div className="navbar-bag-profile">
                              <h4>My Profile</h4>
                              <div className="navbar-bag-profile-text">
                                 <p>Orders</p>
                              </div>
                              <div className="navbar-bag-profile-text">
                                 <p>Your Saves</p>
                              </div>
                              <div className="navbar-bag-profile-text">
                                 <p>Account</p>
                              </div>
                              <div className="navbar-bag-profile-text">
                                 <p onClick={signInSite}>Sign In</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="navbar-space"></div>
      </>
   )
}

export default Navbar