import React from "react";
import Navbar2 from "../Header/Navbar2";
import Footer2 from "../Footer/Footer2";
import "./AppleBag.css"
import box from "./../../Images/Box.png"
import bag from "./../../Images/Apple-bag.png"

const AppleBag = () => {
   return (
      <>
         <Navbar2 />

         <div className="apple-bag">
            <div className="ab-bcc">
               <p>Save up to ₹10000.00 instantly on eligible products with HDFC Bank Credit Cards. Plus No Cost EMI from most leading banks.</p>
               <p>Learn more <i class="fa-solid fa-angle-right fa-xs"></i></p>
            </div>

            <div className="apple-bag-layout">
               <div className="apple-bag-total">
                  <p>Your bag total is ₹309600.00 or ₹49992.00/mo.<span>^</span></p>
               </div>
               <div className="ab-checkout"><button>Check Out</button></div>

               <div className="ab-horizontal-line"></div>


               <div className="ab-product-layout">
                  <div className="ab-product-img">
                     <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/45-stainless-graphite-milanese-graphite-s9?" alt="" />
                  </div>
                  <div className="ab-product-details">
                     <div className="ab-pd-name-price">
                        <div className="ab-pd-name">
                           <p>Apple Watch Series 9 GPS + Cellular 45mm Graphite Stainless Steel Case with Graphite Milanese Loop</p>
                        </div>
                        <div className="ab-pd-price">
                           <div className="ab-pd-quantity">
                              <select>
                                 <option value="1">1</option>
                                 <option value="2">2</option>
                                 <option value="3">3</option>
                                 <option value="4">4</option>
                                 <option value="5">5</option>
                                 <option value="6">6</option>
                              </select>
                           </div>
                           <p>₹80900.00</p>
                        </div>
                     </div>

                     <p className="ab-pd-card-savings">Get up to ₹7256.00 savings with eligible card(s)^</p>

                     <div className="ab-pd-installment">
                        <p>Pay 15% pa for 6 months: ^</p>
                        <p>₹12817.00/mo.^</p>
                     </div>

                     <p className="ab-pd-remove">Remove</p>
                     <p className="ab-pd-save-for-later">Save for later</p>

                     <div className="ab-horizontal-line"></div>

                     <div className="ab-pd-apple-care">
                        <div className="ab-pd-apple-care-logo"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/APPLECARE-plus_ICON?wid=400&hei=400&fmt=jpeg&qlt=95&fit=constrain&.v=1527725457537" alt="" /></div>
                        <div className="ab-pd-apple-care-details">
                           <div className="ab-pd-acd-text">
                              <p>AppleCare+ for Apple Watch Series 9 Stainless Steel</p>
                              <p>₹7900.00</p>
                           </div>

                           <div className="ab-pd-installment">
                              <p>Pay 15% pa for 6 months: ^</p>
                              <p>₹1375.00/mo.^</p>
                           </div>

                           <p className="ab-pd-acd-hardware">Automatically registered with your Apple hardware.</p>
                           <p className="ab-pd-remove">Remove</p>
                        </div>
                     </div>

                     <div className="ab-horizontal-line"></div>

                     <div className="ab-pd-order">
                        <div className="ab-pd-order-today">
                           <div className="ab-pd-ot-logo"><img src={box} alt="" /></div>
                           <div className="ab-pd-ot-text">
                              <p>Order today.Delivers to <span>400601 <i class="fa-solid fa-angle-down fa-xs"></i></span></p>
                              <p className="ab-pd-ot-date">Mon 23 Oct — Free</p>
                           </div>
                        </div>

                        <div className="ab-pd-order-now">
                           <div className="ab-pd-on-logo"><img src={bag} alt="" /></div>
                           <div className="ab-pd-on-text">
                              <p>Order now. Pick up, in-store:</p>
                              <p className="ab-pd-on-date">Today at <span>Apple BKC</span></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>


               <div className="ab-horizontal-line"></div>


               <div className="ab-product-layout">
                  <div className="ab-product-img">
                     <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-max-blacktitanium-select?" alt="" />
                  </div>
                  <div className="ab-product-details">
                     <div className="ab-pd-name-price">
                        <div className="ab-pd-name">
                           <p>iPhone 15 Pro Max 1TB Black Titanium</p>
                        </div>
                        <div className="ab-pd-price">
                           <div className="ab-pd-quantity">
                              <select>
                                 <option value="1">1</option>
                                 <option value="2">2</option>
                                 <option value="3">3</option>
                                 <option value="4">4</option>
                                 <option value="5">5</option>
                                 <option value="6">6</option>
                              </select>
                           </div>
                           <p>₹199900.00</p>
                        </div>
                     </div>

                     <p className="ab-pd-card-savings">Get up to ₹14209.00 savings with eligible card(s)^</p>

                     <div className="ab-pd-installment">
                        <p>Pay 15% pa for 6 months: ^</p>
                        <p>₹32317.00/mo.^</p>
                     </div>

                     <p className="ab-pd-remove">Remove</p>
                     <p className="ab-pd-save-for-later">Save for later</p>

                     <div className="ab-horizontal-line"></div>

                     <div className="ab-pd-apple-care">
                        <div className="ab-pd-apple-care-logo"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/APPLECARE-plus_ICON?wid=400&hei=400&fmt=jpeg&qlt=95&fit=constrain&.v=1527725457537" alt="" /></div>
                        <div className="ab-pd-apple-care-details">
                           <div className="ab-pd-acd-text">
                              <p>AppleCare+ for iPhone 15 Pro Max</p>
                              <p>₹20900.00</p>
                           </div>

                           <div className="ab-pd-installment">
                              <p>Pay 15% pa for 6 months: ^</p>
                              <p>₹3483.00/mo.^</p>
                           </div>

                           <p className="ab-pd-acd-hardware">Automatically registered with your Apple hardware.</p>
                           <p className="ab-pd-remove">Remove</p>
                        </div>
                     </div>

                     <div className="ab-horizontal-line"></div>

                     <div className="ab-pd-order">
                        <div className="ab-pd-order-today">
                           <div className="ab-pd-ot-logo"><img src={box} alt="" /></div>
                           <div className="ab-pd-ot-text">
                              <p>Order today.Delivers to <span>400601 <i class="fa-solid fa-angle-down fa-xs"></i></span></p>
                              <p className="ab-pd-ot-date">3 Nov - 9 Nov — Free</p>
                           </div>
                        </div>

                        <div className="ab-pd-order-now">
                           <div className="ab-pd-on-logo"><img src={bag} alt="" /></div>
                           <div className="ab-pd-on-text">
                              <p>Order now. Pick up, in-store:</p>
                              <p className="ab-pd-on-date">Today at <span>Apple BKC</span></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>


               <div className="ab-horizontal-line"></div>

               <div className="ab-total-amt-checkout-lay">
                  <div className="ab-total-amt-checkout">
                     <div className="ab-tmc-subtotal">
                        <p>Subtotal</p>
                        <p>₹309600.00</p>
                     </div>
                     <div className="ab-tmc-Shipping">
                        <p>Shipping</p>
                        <p>FREE</p>
                     </div>

                     <div className="ab-horizontal-line"></div>

                     <div className="ab-tmc-total">
                        <p>Total</p>
                        <p>₹309600.00</p>
                     </div>

                     <div className="ab-tmc-monthly-payment">
                        <p>Monthly payment</p>
                        <p>₹49992.00/mo.^ with EMI</p>
                     </div>
                     <p className="ab-tmc-card-savings">Total savings of ₹22350.00 with eligible card(s)^</p>
                     <p className="ab-tmc-cashback">Explore instant Cashback<sup>§§</sup> and No Cost EMI<sup>§§</sup></p>

                     <div className="ab-tmc-checkout">
                        <button>Check Out</button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="ab-chat-now">
               <div className="ab-horizontal-line"></div>
               <p className="ab-chat-now-text">Need some help? <span>Chat now</span> or call 000800 040 1966.</p>
               <div className="ab-horizontal-line"></div>
            </div>

            <div className="apple-bag-new-arrivals">
               <div className="ab-new-arrivals-text">
                  <h4>New Arrivals</h4>
                  <p>Check out the latest accessories.</p>
                  <p>Shop <i class="fa-solid fa-chevron-right fa-2xs"></i></p>
               </div>
            </div>

            <div className="ab-horizontal-line"></div>

            <div className="ab-questions-about-buying">
               <p>Questions About Buying</p>
               <div className="ab-qab-plus"><i class="fa-solid fa-plus"></i></div>
            </div>
         </div>

         <Footer2 />
      </>
   )
}

export default AppleBag;