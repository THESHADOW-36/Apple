import React, { useState } from "react";
import Navbar2 from "../Header/Navbar2";
import Footer2 from "../Footer/Footer2";
import "./ShopiPhone.css"
import IPhonePopUp from "../ShopiPhonePopUp/IPhonePopUp";

const ShopiPhone = () => {
  const [iPhone15proVisibility, setIPhone15proVisibility] = useState(false)

  function displayiPhone15pro() {
    setIPhone15proVisibility(iPhone15proVisibility => iPhone15proVisibility = true)
  }

  return (
    <>
      <IPhonePopUp display={iPhone15proVisibility} setDisplay={setIPhone15proVisibility} />
      <Navbar2 />
      <div className="shopiPhone">
        <div className="si-bcc">
          <p>Save up to ₹6000.00 instantly on iPhone with HDFC Bank Credit Cards. <sup>§§</sup></p>
          <p>Plus No Cost EMI from most leading banks. <sup>§</sup><span>See offers <i class="fa-solid fa-angle-right fa-2xs"></i></span></p>
        </div>

        <div className="store-text-line">
          <p>Shop iPhone</p>
          <div className="shopping-help-visit">
            <div className="shv-layout">
              <div className="shv-img"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-chat-specialist-icon-202305?wid=35&hei=35&fmt=jpeg&qlt=95&.v=1684947928869" alt="" /></div>
              <div className="shv-text">
                <p>Need shopping help?</p>
                <p>Ask an iPhone Specialist</p>
              </div>
            </div>

            <div className="shv-layout">
              <div className="shv-apple-logo"><i class="fa-brands fa-apple fa-xs"></i></div>
              <div className="shv-text">
                <p>Visit an Apple Store</p>
                <p>Find one near you <i class="fa-solid fa-angle-right fa-2xs"></i></p>
              </div>
            </div>
          </div>
        </div>

        <div className="si-content">
          <div className="si-cat">
            <p>All Models</p>
            <p>Festive specials.</p>
            <p>Shopping Guides</p>
            <p>Acessories</p>
            <p>Setup and Support</p>
            <p>The iPhone Experience</p>
            <div className=""><i class="fa-solid fa-angle-right"></i></div>
          </div>

          <div className="si-all-models">
            <h4 className="si-am-title">All models. <span>Take your pick.</span></h4>
            <div className="si-am-content">

              <div className="si-am-layout" onClick={displayiPhone15pro}>
                <div className="si-am-product-details">
                  <p className="si-am-new-product">NEW</p>
                  <p className="si-am-product-name">iPhone 15 Pro & <br /> iPhone 15 Pro Max</p>
                </div>

                <div className="si-am-image">	<img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1693086290312" alt="" /></div>
                <div className="si-am-product-content">
                  <div className="si-am-color-palatte">
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-naturaltitanium-select_SW_COLOR?wid=16&hei=16&fmt=png-alpha&.v=1692895646951" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-bluetitanium-select_SW_COLOR?wid=16&hei=16&fmt=png-alpha&.v=1692895646952" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-whitetitanium-select_SW_COLOR?wid=16&hei=16&fmt=png-alpha&.v=1692895648938" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-blacktitanium-select_SW_COLOR?wid=16&hei=16&fmt=png-alpha&.v=1692895646488" alt="" /></div>
                  </div>

                  <div className="si-am-buy-price">
                    <p className="si-am-product-price">From ₹21483.00/mo. with instant savings<sup>§§</sup> and No Cost EMI<sup>§§</sup> or ₹134900.00‡</p>
                    <button className="si-am-buy">Buy</button>
                  </div>
                </div>
              </div>

              <div className="si-am-layout">
                <div className="si-am-product-details">
                  <p className="si-am-new-product">NEW</p>
                  <p className="si-am-product-name">iPhone 15 & <br /> iPhone 15 Plus</p>
                </div>

                <div className="si-am-image">	<img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15hero-202309?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1693086290559" alt="" /></div>
                <div className="si-am-product-content">
                  <div className="si-am-color-palatte">
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-naturaltitanium-select_SW_COLOR?wid=16&hei=16&fmt=png-alpha&.v=1692895646951" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-bluetitanium-select_SW_COLOR?wid=16&hei=16&fmt=png-alpha&.v=1692895646952" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-whitetitanium-select_SW_COLOR?wid=16&hei=16&fmt=png-alpha&.v=1692895648938" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-blacktitanium-select_SW_COLOR?wid=16&hei=16&fmt=png-alpha&.v=1692895646488" alt="" /></div>
                  </div>

                  <div className="si-am-buy-price">
                    <p className="si-am-product-price">From ₹21483.00/mo. with instant savings<sup>§§</sup> and No Cost EMI<sup>§§</sup> or ₹134900.00‡</p>
                    <button className="si-am-buy">Buy</button>
                  </div>
                </div>
              </div>

              <div className="si-am-layout">
                <div className="si-am-product-details">
                  <p className="si-am-new-product">NEW</p>
                  <p className="si-am-product-name">iPhone 14 & <br /> iPhone 14 Plus</p>
                </div>

                <div className="si-am-image">	<img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1693086290654" alt="" /></div>
                <div className="si-am-product-content">
                  <div className="si-am-color-palatte">
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-naturaltitanium-select_SW_COLOR?wid=16&hei=16&fmt=png-alpha&.v=1692895646951" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-bluetitanium-select_SW_COLOR?wid=16&hei=16&fmt=png-alpha&.v=1692895646952" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-whitetitanium-select_SW_COLOR?wid=16&hei=16&fmt=png-alpha&.v=1692895648938" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-blacktitanium-select_SW_COLOR?wid=16&hei=16&fmt=png-alpha&.v=1692895646488" alt="" /></div>
                  </div>

                  <div className="si-am-buy-price">
                    <p className="si-am-product-price">From ₹21483.00/mo. with instant savings<sup>§§</sup> and No Cost EMI<sup>§§</sup> or ₹134900.00‡</p>
                    <button className="si-am-buy">Buy</button>
                  </div>
                </div>
              </div>

              <div className="si-am-layout">
                <div className="si-am-product-details">
                  <p className="si-am-new-product">NEW</p>
                  <p className="si-am-product-name">iPhone 15 Pro & <br /> iPhone 15 Pro Max</p>
                </div>

                <div className="si-am-image">	<img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1693086290312" alt="" /></div>
                <div className="si-am-product-content">
                  <div className="si-am-color-palatte">
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-naturaltitanium-select_SW_COLOR?wid=16&hei=16&fmt=png-alpha&.v=1692895646951" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-bluetitanium-select_SW_COLOR?wid=16&hei=16&fmt=png-alpha&.v=1692895646952" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-whitetitanium-select_SW_COLOR?wid=16&hei=16&fmt=png-alpha&.v=1692895648938" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-blacktitanium-select_SW_COLOR?wid=16&hei=16&fmt=png-alpha&.v=1692895646488" alt="" /></div>
                  </div>

                  <div className="si-am-buy-price">
                    <p className="si-am-product-price">From ₹21483.00/mo. with instant savings<sup>§§</sup> and No Cost EMI<sup>§§</sup> or ₹134900.00‡</p>
                    <button className="si-am-buy">Buy</button>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="si-festive-specials">
            <p>Festive specials. <span>All you need to rejoice.</span></p>
            <div className="si-fs-content">
              <p className="si-fs-empty">
              </p>

              <div className="si-fs-festival-offer">
                <div className="si-fs-product-content">
                  <p className="si-fs-product-name">FESTIVE OFFER</p>
                  <p className="si-fs-product-specification">Save up to ₹6000.00 instantly on iPhone with HDFC Bank Credit Cards.<sup>§§</sup></p>
                </div>
              </div>

              <div className="si-fs-apple-trade-in">
                <div className="si-fs-product-content">
                  <p className="si-fs-product-name">APPLE TRADE IN</p>
                  <p className="si-fs-product-specification">Get up to ₹67800.00 credit when you exchange your eligible smartphone.*</p>
                </div>
              </div>

              <div className="si-fs-today-at-apple">
                <div className="si-fs-product-content">
                  <p className="si-fs-product-name">TODAY AT APPLE</p>
                  <p className="si-fs-product-specification">Celebrate Diwali at Apple BKC. Join free sessions to spark your creativity on iPhone.</p>
                </div>
              </div>
            </div>
          </div>


          <div className="si-shopping-guides">
            <p>Shopping guides. <span>Can’t decide? Start here.</span></p>
            <div className="si-sg-content">
              <p className="si-sg-empty">
              </p>

              <div className="si-sg-festival-offer">
                <div className="si-sg-product-content">
                  <p className="si-sg-product-name">COMPARE ALL MODELS</p>
                  <p className="si-sg-product-specification">Which iPhone is <br /> right for you?</p>
                </div>
              </div>

              <div className="si-sg-apple-trade-in">
                <div className="si-sg-product-content">
                  <p className="si-sg-product-name">IPHONE SPECIALIST</p>
                  <p className="si-sg-product-specification">Shop one on one with a Specialist online.</p>
                </div>
              </div>

              <div className="si-sg-today-at-apple">
                <div className="si-sg-product-content">
                  <p className="si-sg-product-name">SWITCH TO IPHONE</p>
                  <p className="si-sg-product-specification">Switching to iPhone is super simple.</p>
                </div>
              </div>
            </div>
          </div>


          {/* Shop pg format */}

          <div className="store-accessories">
            <p>Accessories. <span>Essentials that pair perfectly with your favourite devices.</span></p>
            <div className="sa-content">
              <p className="sa-empty">
              </p>


              <div className="sa-ad-1">
                <div className="sa-ad-content">
                  <p className="sa-ad-name">Introducing FineWoven accessories. </p>
                  <p className="sa-ad-specification">Durable micro-twill with a luxurious suede-like feel, made from 68 per cent post-consumer recycled content.</p>
                </div>
              </div>


              <div className="sa-layout">
                <div className="sa-image">	<img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT4J3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1693594197616" alt="" /></div>
                <div className="sa-product-content">
                  <div className="sa-color-palatte">
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT4L3_SW_COLOR?wid=32&hei=32&fmt=jpeg&qlt=95&.v=1693069953764" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT4U3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069984396" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT4J3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069886347" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT4Q3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069969869" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT4H3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069825324" alt="" /></div>
                  </div>
                  <div className="sa-product-details">
                    <p className="sa-new-product">New</p>
                    <p className="sa-product-name">iPhone 15 Pro FineWoven Case with MagSafe - Taupe</p>
                    <p className="sa-product-price">MRP ₹5900.00 (Incl. of all taxes)</p>
                  </div>
                </div>
              </div>
              <div className="sa-layout">
                <div className="sa-image">	<img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT2N3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1692994298447" alt="" /></div>
                <div className="sa-product-content">
                  <div className="sa-color-palatte">
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT4L3_SW_COLOR?wid=32&hei=32&fmt=jpeg&qlt=95&.v=1693069953764" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT4U3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069984396" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT4J3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069886347" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT4Q3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069969869" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT4H3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069825324" alt="" /></div>
                  </div>
                  <div className="sa-product-details">
                    <p className="sa-new-product">New</p>
                    <p className="sa-product-name">iPhone FineWoven Wallet with MagSafe - Black</p>
                    <p className="sa-product-price">MRP ₹5900.00 (Incl. of all taxes)</p>
                  </div>
                </div>
              </div>
              <div className="sa-layout">
                <div className="sa-image">	<img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MTJC3ref?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1692936507700" alt="" /></div>
                <div className="sa-product-content">
                  <div className="sa-color-palatte">
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MTJC3ref_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693005422196" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MTJE3ref_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693005423020" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MTJ93ref_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693005420473" alt="" /></div>
                  </div>
                  <div className="sa-product-details">
                    <p className="sa-new-product">New</p>
                    <p className="sa-product-name">45mm Evergreen Magnetic <br /> Link - M/L</p>
                    <p className="sa-product-price">MRP ₹9500.00 (Incl. of all taxes)</p>
                  </div>
                </div>
              </div>
              <div className="sa-layout">
                <div className="sa-image">	<img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MUH73ref?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1692936516435" alt="" /></div>
                <div className="sa-product-content">
                  <div className="sa-color-palatte">
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MUHA3ref_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693005423915" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MUH73ref_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693005423956" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MUHE3ref_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693005424097" alt="" /></div>
                  </div>
                  <div className="sa-product-details">
                    <p className="sa-new-product">New</p>
                    <p className="sa-product-name">41mm Mulberry Modern Buckle - Medium</p>
                    <p className="sa-product-price">MRP ₹14500.00 (Incl. of all taxes)</p>
                  </div>
                </div>
              </div>
              <div className="sa-layout">
                <div className="sa-image">	<img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT3G3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1693593632903" alt="" /></div>
                <div className="sa-product-content">
                  <div className="sa-color-palatte">
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT3E3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=95&.v=1692999094517" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT3J3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=95&.v=1692998347289" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT4J3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069886347" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT4Q3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069969869" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT4H3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069825324" alt="" /></div>
                  </div>
                  <div className="sa-product-details">
                    <p className="sa-new-product">New</p>
                    <p className="sa-product-name">iPhone 15 FineWoven Case with MagSafe - Pacific Blue</p>
                    <p className="sa-product-price">MRP ₹5900.00 (Incl. of all taxes)</p>
                  </div>
                </div>
              </div>
              <div className="sa-layout">
                <div className="sa-image">	<img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT2H3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1692915693368" alt="" /></div>
                <div className="sa-product-content">
                  <div className="sa-color-palatte">
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT3E3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=95&.v=1692999094517" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT3J3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=95&.v=1692998347289" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT4J3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069886347" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT4Q3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069969869" alt="" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT4H3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069825324" alt="" /></div>
                  </div>
                  <div className="sa-product-details">
                    <p className="sa-new-product">New</p>
                    <p className="sa-product-name">AirTag FineWoven Key Ring - Black</p>
                    <p className="sa-product-price">MRP ₹3900.00 (Incl. of all taxes)</p>
                  </div>
                </div>
              </div>

              <div className="sa-ad-2">
                <div className="sa-ad-content">
                  <p className="sa-ad-name">Explore all accessories.</p>
                </div>
              </div>
              <p className="sa-empty">
              </p>
            </div>
          </div>
        </div>



        <div className="si-shopping-guides">
          <p>Setup and support. <span>Our Specialists are here to help.</span></p>
          <div className="si-sg-content">
            <p className="si-sg-empty">
            </p>

            <div className="si-sg-quick-setup">
              <div className="si-sg-product-content">
                <p className="si-sg-product-name">QUICK START SETUP</p>
                <p className="si-sg-product-specification">Automatically set up your new iPhone with your current iOS device.</p>
              </div>
            </div>

            <div className="si-sg-data-transfer">
              <div className="si-sg-product-content">
                <p className="si-sg-product-name">EASY DATA TRANSFER</p>
                <p className="si-sg-product-specification">Access all the iCloud+ storage you need to move everything over to your new iPhone.</p>
              </div>
            </div>

            <div className="si-sg-switch-to-iPhone">
              <div className="si-sg-product-content">
                <p className="si-sg-product-name">SWITCH TO IPHONE</p>
                <p className="si-sg-product-specification">Switching to iPhone is super simple.</p>
              </div>
            </div>
          </div>
        </div>



        <div className="si-shopping-guides">
          <p>The iPhone experience. <span>Designed to connect with everything Apple.</span></p>
          <div className="si-sg-content">
            <p className="si-sg-empty">
            </p>

            <div className="si-sg-apple-tv">
              <div className="si-sg-product-content">
                <p className="si-sg-product-name-0">APPLE TV+</p>
                <p className="si-sg-product-specification-0">Get 3 months of Apple TV+ free when you buy an iPhone.***</p>
              </div>
            </div>

            <div className="si-sg-airpods">
              <div className="si-sg-product-content">
                <p className="si-sg-product-name">AIRPODS</p>
                <p className="si-sg-product-specification">Magic runs in the family.</p>
              </div>
            </div>

            <div className="si-sg-airtag">
              <div className="si-sg-product-content">
                <p className="si-sg-product-name">AIRTAG</p>
                <p className="si-sg-product-specification">A super-easy way to keep track of your stuff.</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div >
      <Footer2 />
    </>
  )
}

export default ShopiPhone;