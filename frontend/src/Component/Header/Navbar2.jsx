import React from "react";
import "./Navbar2.css"
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
   const router = useNavigate()

   function storeSite() {
      router("/store")
   }

   function signInSite(){
       router("/sign-in")
   }

   function homepageSite(){
      router("/")
  }
   return (
      <>
         <div className="navbar2">
            <div className="navbar2-content">
               <div className="navbar2-apple-logo" onClick={homepageSite}>
                  <i class="fa-brands fa-apple fa-lg"></i>
               </div>

               <div className="navbar2-text">
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

               <div className="navbar2-search-bag">
                  <div className="navbar2-search-logo"><i class="fa-solid fa-magnifying-glass"></i></div>
                  <div className="navbar2-bag-logo" onClick={signInSite}><i class="fa-solid fa-bag-shopping"></i></div>
               </div>
            </div>
         </div>
         {/* <div className="navbar2-space"></div> */}
      </>
   )
}

export default Navbar2