import React from "react";
import "./Homepage.css"
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
   const router = useNavigate()

   function iPhone15ProSite(){
      router("/iPhone15pro")
   }

   return (
      <>
         <Navbar />

         <div className="homepage">
            {/* <div className="navbar-bg"></div> */}
            <div className="bankoffers-ad">
               <p>Get up to ₹8000.00 instant savings on selected products with eligible HDFC Bank cards.*</p>
               <div className="bankoffers-ad-shopNow">
                  <p>Shop now</p>
                  <div className="bankoffers-right-logo"><i class="fa-solid fa-angle-right fa-xs"></i></div>
               </div>
            </div>

            <div className="iPhone-15-pro" onClick={iPhone15ProSite}>
               <div className="text-box-1">
                  <p>iPhone 15 Pro</p>
                  <p>Titanium. So strong. So light. So Pro.</p>
                  <div className="info-buy">
                     <div className="learn-pro">
                        <p>Learn more</p>
                        <div className="product-right-arrow"><i class="fa-solid fa-angle-right"></i></div>
                     </div>
                     <div className="buy">
                        <p>Buy</p>
                        <div className="product-right-arrow"><i class="fa-solid fa-angle-right"></i></div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="iPhone-15">
               <div className="text-box-2">
                  <p>iPhone 15</p>
                  <p>New camera. New design. Newphoria.</p>
                  <div className="info-buy">
                     <div className="learn-pro-2">
                        <p>Learn more</p>
                        <div className="product-right-arrow"><i class="fa-solid fa-angle-right"></i></div>
                     </div>
                     <div className="buy-2">
                        <p>Buy</p>
                        <div className="product-right-arrow"><i class="fa-solid fa-angle-right"></i></div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="watch-series-9">
               <div className="text-box-3">
                  <div><img src="https://www.apple.com/v/home/be/images/logos/apple-watch-series-9/hero_logo_apple_watch_series_9__eg5xcrxghuaa_large.png" alt="" /></div>
                  <p>Smarter. Brighter. Mightier.</p>
                  <div className="info-buy">
                     <div className="learn-pro">
                        <p>Learn more</p>
                        <div className="product-right-arrow"><i class="fa-solid fa-angle-right"></i></div>
                     </div>
                     <div className="buy">
                        <p>Buy</p>
                        <div className="product-right-arrow"><i class="fa-solid fa-angle-right"></i></div>
                     </div>
                  </div>
               </div>
            </div>



            <div className="product-layout">
               <div className="ipad-pro">
                  <div className="product-text-box-1">
                     <p>iPad Pro</p>
                     <div className="supercharged">
                        <p>Supercharged by</p>
                        <div className="m2-img"><img src="https://www.apple.com/v/home/be/images/logos/ipad-pro/promo_m2_chip__enw2kz91lsuq_large.png" alt="" /></div>
                     </div>
                     <div className="product-info-buy">
                        <div className="product-learn-pro">
                           <p>Learn more</p>
                           <div className="product-right-arrow-2"><i class="fa-solid fa-angle-right"></i></div>
                        </div>
                        <div className="product-buy">
                           <p>Buy</p>
                           <div className="product-right-arrow-2"><i class="fa-solid fa-angle-right"></i></div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="watch-ultra-2">
                  <div className="product-text-box-2">
                     <div><img src="https://www.apple.com/v/home/be/images/logos/apple-watch-ultra-2/promo_logo_apple_watch_ultra2__ggg2x39rsvqu_large.png" alt="" /></div>
                     <p>Next-level adventure.</p>
                     <div className="product-info-buy-2">
                        <div className="product-learn-pro">
                           <p>Learn more</p>
                           <div className="product-right-arrow-2"><i class="fa-solid fa-angle-right"></i></div>
                        </div>
                        <div className="product-buy">
                           <p>Buy</p>
                           <div className="product-right-arrow-2"><i class="fa-solid fa-angle-right"></i></div>
                        </div>
                     </div>
                  </div>
               </div>


               <div className="macBook-air-15">
                  <div className="product-text-box-3">
                     <p>MacBook Air 15<i>"</i></p>
                     <p>Impressively big. Impossibly thin.</p>
                     <div className="product-info-buy-3">
                        <div className="product-learn-pro">
                           <p>Learn more</p>
                           <div className="product-right-arrow-2"><i class="fa-solid fa-angle-right"></i></div>
                        </div>
                        <div className="product-buy">
                           <p>Buy</p>
                           <div className="product-right-arrow-2"><i class="fa-solid fa-angle-right"></i></div>
                        </div>
                     </div>
                  </div>
               </div>


               <div className="airPods-pro">
                  <div className="product-text-box-4">
                     <p>AirPods Pro</p>
                     <p>Adaptive Audio. Now playing.</p>
                     <div className="product-info-buy-3">
                        <div className="product-learn-pro">
                           <p>Learn more</p>
                           <div className="product-right-arrow-2"><i class="fa-solid fa-angle-right"></i></div>
                        </div>
                        <div className="product-buy">
                           <p>Buy</p>
                           <div className="product-right-arrow-2"><i class="fa-solid fa-angle-right"></i></div>
                        </div>
                     </div>
                  </div>
               </div>


               <div className="trade-in">
                  <div className="product-text-box-5">
                     <div><img src="https://www.apple.com/v/home/be/images/logos/iphone-tradein/logo_tradein__d1fpktgipvki_large.png" alt="" /></div>
                     <p>Upgrade and save. It's that easy</p>
                     <div className="product-info-buy-3">
                        <div className="see-what">
                           <p>See what your device is worth</p>
                           <div className="product-right-arrow-2"><i class="fa-solid fa-angle-right"></i></div>
                        </div>
                     </div>
                  </div>
               </div>


               <div className="homePod-mini">
                  <div className="product-text-box-6">
                     <p>HomePod mini</p>
                     <div className="product-info-buy-3">
                        <div className="product-learn-pro">
                           <p>Learn more</p>
                           <div className="product-right-arrow-2"><i class="fa-solid fa-angle-right"></i></div>
                        </div>
                        <div className="product-buy">
                           <p>Buy</p>
                           <div className="product-right-arrow-2"><i class="fa-solid fa-angle-right"></i></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="tv-plus-layout">
               <div className="tv-plus">
                  <img src="https://is1-ssl.mzstatic.com/image/thumb/BkCQwrg5nkdzmB4uocPNhQ/980x551.jpg" alt="" />
               </div>
               <div className="tv-plu-slick">
                  <div className="slick-1"><i class="fa-solid fa-circle fa-2xs"></i></div>
                  <div className="slick-2"><i class="fa-solid fa-circle fa-2xs"></i></div>
                  <div className="slick-3"><i class="fa-solid fa-circle fa-2xs"></i></div>
                  <div className="slick-4"><i class="fa-solid fa-circle fa-2xs"></i></div>
                  <div className="slick-5"><i class="fa-solid fa-circle fa-2xs"></i></div>
                  <div className="slick-6"><i class="fa-solid fa-circle fa-2xs"></i></div>
                  <div className="slick-7"><i class="fa-solid fa-circle fa-2xs"></i></div>
               </div>
            </div>
         </div>

         <Footer />
      </>
   )
}

export default Homepage