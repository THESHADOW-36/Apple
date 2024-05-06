import React from "react";
import "./IPhonePopUp.css"
import inch from "./../../Images/6-inch.png"
import actionButton from "./../../Images/Action-button.png"
import mainCamera from "./../../Images/Main-camera.png"
import A17 from "./../../Images/A17.png"
import usbC from "./../../Images/USB-c.png"
import wayToPay from "./../../Images/Way-to-pay.png"
import tradeIn from "./../../Images/Trade-in.png"
import freeDelivery from "./../../Images/Free-delivery.png"

const IPhonePopUp = ({ display, setDisplay }) => {

  function closeButton() {
    setDisplay(display => !display)
  }

  return (
    <>
      <div>
        {display
          ?
            <div className="iPhone-popup-bg" >
              <div className="iPhone-popup">
                <div className="ip-closebutton">
                  <i onClick={closeButton} class="fa-solid fa-circle-xmark"></i>
                </div>

                <div className="ip-content">
                  <div className="ipc-top">
                    <div className="ipct-left">
                      <div className="ipctl-phone-title">
                        <p className="ipctl-pt-name-1">iPhone 15 Pro</p>
                        <p className="ipctl-pt-name-2">iPhone 15 Pro Max</p>
                      </div>
                      <div className="ipctl-phone-img-box">
                        <div className="ipctl-pib-nav-left"><i class="fa-solid fa-chevron-left fa-xl"></i></div>
                        <div className="ipctl-phone-img"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346851387" alt="" /></div>
                        <div className="ipctl-pib-nav-right"><i class="fa-solid fa-chevron-right fa-xl"></i></div>
                      </div>
                      <div className="ipctl-phone-variety">
                        <div><i class="fa-solid fa-circle"></i></div>
                        <div><i class="fa-solid fa-circle"></i></div>
                        <div><i class="fa-solid fa-circle"></i></div>
                        <div><i class="fa-solid fa-circle"></i></div>
                        <div><i class="fa-solid fa-circle"></i></div>
                        <div><i class="fa-solid fa-circle"></i></div>
                      </div>
                      <div className="ipctl-finishes">
                        <p>Available in 4 finishes</p>
                        <div className="ipctl-finishes-color-lay">
                          <div className="ipctl-finishes-color"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-naturaltitanium-select_SW_COLOR?wid=16&hei=16&fmt=png-alpha&.v=1692895646951" alt="" /></div>
                          <div className="ipctl-finishes-color"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-bluetitanium-select_SW_COLOR?wid=16&hei=16&fmt=png-alpha&.v=1692895646952" alt="" /></div>
                          <div className="ipctl-finishes-color"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-whitetitanium-select_SW_COLOR?wid=16&hei=16&fmt=png-alpha&.v=1692895648938" alt="" /></div>
                          <div className="ipctl-finishes-color"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-blacktitanium-select_SW_COLOR?wid=16&hei=16&fmt=png-alpha&.v=1692895646488" alt="" /></div>
                        </div>
                      </div>
                    </div>

                    <div className="ipct-right">
                      <div className="ipct-right-content">
                        <p className="ipctr-new">NEW</p>
                        <p className="ipctr-phone-name">iPhone 15 Pro</p>
                        <div className="ipctr-no-cost-emi">
                          <p>From ₹21483.00/mo. with instant savings<sup>§§</sup> and No Cost EMI<sup>§§</sup> or ₹134900.00<sup>‡</sup></p>
                          <button className="ipctr-buy-button">Buy</button>
                        </div>

                        <div className="ipctr-specs">
                          <div className="ipctr-specs-details">
                            <div className="ipctr-sd-img"><img src={inch} alt="" /></div>
                            <p className="ipctr-sd-text">15.5 cm (6.1-inch) Super Retina XDR display¹ featuring ProMotion, Always-On and <br /> Dynamic Island</p>
                          </div>
                          <div className="ipctr-specs-details">
                            <div className="ipctr-sd-img"><img src={actionButton} alt="" /></div>
                            <p className="ipctr-sd-text">Strong and light titanium design with Action button — a fast track to your favourite feature</p>
                          </div>
                          <div className="ipctr-specs-details">
                            <div className="ipctr-sd-img"><img src={mainCamera} alt="" /></div>
                            <p className="ipctr-sd-text">48MP Main camera for super-high-resolution photos and 3x Telephoto camera</p>
                          </div>
                          <div className="ipctr-specs-details">
                            <div className="ipctr-sd-img"><img src={A17} alt="" /></div>
                            <p className="ipctr-sd-text">A17 Pro chip delivers a massive leap in graphics performance, transforming mobile gaming</p>
                          </div>
                          <div className="ipctr-specs-details">
                            <div className="ipctr-sd-img"><img src={usbC} alt="" /></div>
                            <p className="ipctr-sd-text">USB-C connector with USB 3 for up to 20x faster transfer speeds² and new pro workflows</p>
                          </div>
                        </div>

                        <div className="ipctr-explore">
                          <p>Explore iPhone 15 Pro further</p>
                          <div><i class="fa-solid fa-angle-right fa-2xs"></i></div>
                        </div>


                      </div>
                    </div>
                  </div>
                  <div className="ipc-bottom">
                    <div className="ipcb-lay">
                      <div className="ipcb-content">
                        <div className="ipcb-logo"><img src={wayToPay} alt="" /></div>
                        <div className="ipcb-text">
                          <p>Flexible ways to pay</p>
                          <p>No Cost EMI<sup>§</sup> and EMI<sup>◊◊</sup> available.</p>
                        </div>
                      </div>
                      <div className="ipcb-content">
                        <div className="ipcb-logo-2"><img src={tradeIn} alt="" /></div>
                        <div className="ipcb-text">
                          <p>Apple Trade In</p>
                          <p>Trade in your eligible device for credit towards your next purchase.*</p>
                        </div>
                      </div>
                      <div className="ipcb-content">
                        <div className="ipcb-logo"><img src={freeDelivery} alt="" /></div>
                        <div className="ipcb-text">
                          <p>Free delivery and pickup.</p>
                          <p>Get free delivery or pick up at your Apple Store</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="ipc-notes">
                  <p>* Trade-in values will vary based on the condition, year and configuration of your trade-in device, and is computed on Maximum Retail Price. You must be at least 18 years old to be eligible to trade in for credit. Not all devices are eligible for credit. We only accept MacBook portables for Trade In at our Apple Stores. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply. Credit applied towards your new device will be based on the received device matching the description you provided when your estimate was made and upon validation. Apple reserves the right to refuse or limit the quantity of any device for any reason.</p>
                  <br />
                  <p>◊◊ Monthly pricing is after purchase using EMI with qualifying cards at 15% pa over a 6 month tenure. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions.</p>
                  <br />
                  <p>Representative example: Based on purchase of ₹79900.00. Total amount payable ₹83432.00 paid over 6 months as 6 monthly payments of ₹13905.00 at an interest rate of 15% pa. Total interest paid to bank: ₹3532.00.</p>
                  <br />
                  <p>§ No Cost EMI is available with the purchase of an eligible product made using eligible cards on 3- or 6-month tenures from most leading banks. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions. Minimum order spend applies as per your card issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuing bank. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply.</p>
                  <br />
                  <p>Representative example: Based on a 6 month tenure. ₹79900.00 total cost includes 15% pa and No Cost EMI savings of ₹3380.00, paid over 6 months as 6 monthly payments of ₹13317.00.</p>
                  <br />
                  <p>§§ Instant savings otherwise referred to as instant cashback, is available on the Apple Online Store and Apple Retail Stores with the purchase of an eligible product with qualifying HDFC Bank Credit Cards and EasyEMI Credit Cards only from October 15 2023 to November 14 2023, with the exception of iPhone 14 and iPhone 14 Plus and AirPods Pro (2nd generation), which will have instant savings applicable between October 15 2023 to November 7 2023 only. Minimum transaction value of ₹10001 applies. Click here to see instant savings amounts and eligible devices. Instant savings are available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuing bank. Total transaction value is calculated after any trade-in credit or eligible discount applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant savings being recalculated, and any refund may be adjusted to account for instant savings clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant savings.</p>
                  <br />
                  <p>Special pricing available to qualified customers. To learn more about how to start qualifying for special pricing, talk to an Apple Specialist in a store or give us a call on 000800 040 1966.</p>
                  <br />
                  <p>1. The display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.12 inches (iPhone 15, iPhone 15 Pro) or 6.69 inches (iPhone 15 Plus, iPhone 15 Pro Max) diagonally. Actual viewable area is less.</p>
                  <br />
                  <p>2. USB 3 cable with 10Gb/s speed required.</p>
                  <br />
                  <p>‡ Listed pricing is Maximum Retail Price (inclusive of all taxes).</p>
                </div>



              </div>
            </div>
          :
          <div></div>
        }
      </div >
    </>
  )
}

export default IPhonePopUp;