import React from "react";
import "./Navbar3.css"
import { useNavigate } from "react-router-dom";

const Navbar3 = () => {
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
         <div className="navbar3">
            <div className="navbar3-content">
               <div className="apple-logo" onClick={homepageSite}>
                  <i class="fa-brands fa-apple fa-lg"></i>
               </div>

               <div className="navbar3-text">
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

               <div className="navbar3-search-bag">
                  <div className="navbar3-search-logo"><i class="fa-solid fa-magnifying-glass"></i></div>
                  <div className="navbar3-bag-logo" onClick={signInSite}><i class="fa-solid fa-bag-shopping"></i></div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Navbar3