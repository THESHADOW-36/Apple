import React, { useState } from "react";
import "./SignUp.css"
import Navbar3 from "../Header/Navbar3";
import img1 from "./../../Images/Access-logo.png"
import Footer4 from "../Footer/Footer4";
import { useNavigate } from "react-router-dom";
import { API } from "../../Constant/Network";
import { Url } from "../../Constant/Url";
import toast from "react-hot-toast";

const SignUp = () => {
   const [userData, setUserData] = useState({ firstname: "", lastname: "", country: "", countryCode: "", dob: "", email: "", password: "", confirmPassword: "", phone: "" });
   const router = useNavigate();

   const handleChange = (event) => {
      setUserData({ ...userData, [event.target.name]: event.target.value })
   }

   const regSubmit = async (event) => {
      event.preventDefault();
      if (userData.firstname && userData.lastname && userData.country && userData.dob && userData.email && userData.password && userData.confirmPassword && userData.phone) {
         if (userData.password === userData.confirmPassword) {
            API.post(Url.register, userData).subscribe({
               async next(response) {
                  console.log(response.token)
                  await localStorage.setItem("my-token", response.token);
                  if (response.success) {
                     alert("Registration Successfull")
                     router("/sign-in")
                  } else {
                     throw new Error("Something went wrong...")
                  }
               },
               error(error) {
                  console.log(error.response.data);
                  toast.error(error.response.data.message);
               },
               complete() {
                  console.log("complete");
               }
            })
         } else {
            toast.error("Password is incorrect")
         }
      } else {
         toast.error("All fields are mandatory")
      }
   }

   return (
      <>
         <Navbar3 />

         <div className="sign-up">
            <div className="su-apple-id-bg">
               <div className="su-apple-id">
                  <p>Apple ID</p>
                  <div className="su-scf">
                     <p>Sign In</p>
                     <p>Create Your Apple ID</p>
                     <p>FAQ</p>
                  </div>
               </div>
            </div>

            <form onSubmit={regSubmit}>
               <div className="su-create-ur-id-layout">
                  <p className="su-create-ur-id-text">Create Your Apple ID</p>
                  <p className="su-apple-id-text">One Apple ID is all you need to access all Apple services.</p>

                  <div className="su-username">
                     <div className="su-first-name"><input type="text" name="firstname" placeholder="first name" onChange={handleChange} /></div>
                     <div className="su-last-name"><input type="text" name="lastname" placeholder="last name" onChange={handleChange} /></div>
                  </div>

                  <p className="su-country-dob">COUNTRY / REGION</p>
                  <div className="su-country-region-box">
                     <div className="su-option-box">
                        <select name='country' value={userData.country} onChange={handleChange}>
                           <option value="India">India</option>
                           <option value="Afghanistan">Afghanistan</option>
                           <option value="America">America</option>
                           <option value="Austria">Austria</option>
                           <option value="Cambodia">Cambodia</option>
                           <option value="Canada">Canada</option>
                           <option value="China">China</option>
                           <option value="France">France</option>
                           <option value="Hong Kong">Hong Kong</option>
                           <option value="Japan">Japan</option>
                           <option value="Malaysia">Malaysia</option>
                           <option value="New Zealand">New Zealand</option>
                           <option value="Portugal">Portugal</option>
                           <option value="Russia">Russia</option>
                           <option value="Thailand">Thailand</option>
                        </select>
                     </div>

                     <div className="su-input-box"><input type="date" name='dob' value={userData.dob} onChange={handleChange} /></div>
                  </div>
               </div>

               <div className="su-horizontal-line-layout"><div className="su-horizontal-line"></div></div>

               <div className="su-create-ur-id-layout">
                  <div className="su-input-box"><input type="text" name='email' value={userData.email} onChange={handleChange} placeholder="name@example.com" /></div>
                  <p className="su-new-apple-id">This will be your new Apple ID.</p>
                  <div className="su-input-box"><input type="text" name='password' value={userData.password} onChange={handleChange} placeholder="password" /></div>
                  <div className="su-input-box"><input type="text" name='confirmPassword' value={userData.confirmPassword} onChange={handleChange} placeholder="confirm password" /></div>
               </div>

               <div className="su-horizontal-line-layout"><div className="su-horizontal-line"></div></div>

               <div className="su-create-ur-id-layout">
                  <div className="su-gap"></div>
                  <div className="su-option-box">
                     <select name='countryCode' value={userData.countryCode} onChange={handleChange}>
                        <option value="IN">+91 (India)</option>
                        <option value="AF">+93 (Afghanistan)</option>
                        <option value="AX">+358 (Åland Islands)</option>
                        <option value="AL">+355 (Albania)</option>
                        <option value="DZ">+213 (Algeria)</option>
                        <option value="AS">+1 (American Samoa)</option>
                        <option value="AD">+376 (Andorra)</option>
                        <option value="AO">+244 (Angola)</option>
                        <option value="AI">+1 (Anguilla)</option>
                        <option value="AQ">+672 (Antarctica)</option>
                        <option value="AG">+1 (Antigua &amp; Barbuda)</option>
                        <option value="AR">+54 (Argentina)</option>
                        <option value="AM">+374 (Armenia)</option>
                        <option value="AW">+297 (Aruba)</option>
                        <option value="AU">+61 (Australia)</option>
                        <option value="AT">+43 (Austria)</option>
                        <option value="AZ">+994 (Azerbaijan)</option>
                        <option value="BS">+1 (Bahamas)</option>
                        <option value="BH">+973 (Bahrain)</option>
                        <option value="BD">+880 (Bangladesh)</option>
                        <option value="BB">+1 (Barbados)</option>
                        <option value="BY">+375 (Belarus)</option>
                        <option value="BE">+32 (Belgium)</option>
                        <option value="BZ">+501 (Belize)</option>
                        <option value="BJ">+229 (Benin)</option>
                        <option value="BM">+1 (Bermuda)</option>
                        <option value="BT">+975 (Bhutan)</option>
                        <option value="BO">+591 (Bolivia)</option>
                        <option value="BA">+387 (Bosnia &amp; Herzegovina)</option>
                        <option value="BW">+267 (Botswana)</option>
                        <option value="BV">+47 (Bouvet Island)</option>
                        <option value="BR">+55 (Brazil)</option>
                        <option value="VG">+1 (British Virgin Islands)</option>
                        <option value="BN">+673 (Brunei)</option>
                        <option value="BG">+359 (Bulgaria)</option>
                        <option value="BF">+226 (Burkina Faso)</option>
                        <option value="BI">+257 (Burundi)</option>
                        <option value="KH">+855 (Cambodia)</option>
                        <option value="CM">+237 (Cameroon)</option>
                        <option value="CA">+1 (Canada)</option>
                        <option value="CV">+238 (Cape Verde)</option>
                        <option value="BQ">+599 (Caribbean Netherlands)</option>
                        <option value="KY">+1 (Cayman Islands)</option>
                        <option value="CF">+236 (Central African Republic)</option>
                        <option value="TD">+235 (Chad)</option>
                        <option value="IO">+246 (Chagos Archipelago)</option>
                        <option value="CL">+56 (Chile)</option>
                        <option value="CN">+86 (China mainland)</option>
                        <option value="CX">+61 (Christmas Island)</option>
                        <option value="CC">+61 (Cocos (Keeling)Islands)</option>
                        <option value="CO">+57 (Colombia)</option>
                        <option value="KM">+269 (Comoros)</option>
                        <option value="CK">+682 (Cook Islands)</option>
                        <option value="CR">+506 (Costa Rica)</option>
                        <option value="CI">+225 (Côte d’Ivoire)</option>
                        <option value="HR">+385 (Croatia)</option>
                        <option value="CW">+599 (Curaçao)</option>
                        <option value="CY">+357 (Cyprus)</option>
                        <option value="CZ">+420 (Czechia)</option>
                        <option value="CD">+243 (Democratic Republic of the Congo)</option>
                        <option value="DK">+45 (Denmark)</option>
                        <option value="DJ">+253 (Djibouti)</option>
                        <option value="DM">+1 (Dominica)</option>
                        <option value="DO">+1 (Dominican Republic)</option>
                        <option value="EC">+593 (Ecuador)</option>
                        <option value="EG">+20 (Egypt)</option>
                        <option value="SV">+503 (El Salvador)</option>
                        <option value="GQ">+240 (Equatorial Guinea)</option>
                        <option value="ER">+291 (Eritrea)</option>
                        <option value="EE">+372 (Estonia)</option>
                        <option value="SZ">+268 (Eswatini)</option>
                        <option value="ET">+251 (Ethiopia)</option>
                        <option value="FK">+500 (Falkland Islands)</option>
                        <option value="FO">+298 (Faroe Islands)</option>
                        <option value="FJ">+679 (Fiji)</option>
                        <option value="FI">+358 (Finland)</option>
                        <option value="FR">+33 (France)</option>
                        <option value="GF">+594 (French Guiana)</option>
                        <option value="PF">+689 (French Polynesia)</option>
                        <option value="TF">+262 (French Southern Territories)</option>
                        <option value="GA">+241 (Gabon)</option>
                        <option value="GM">+220 (Gambia)</option>
                        <option value="GE">+995 (Georgia)</option>
                        <option value="DE">+49 (Germany)</option>
                        <option value="GH">+233 (Ghana)</option>
                        <option value="GI">+350 (Gibraltar)</option>
                        <option value="GR">+30 (Greece)</option>
                        <option value="GL">+299 (Greenland)</option>
                        <option value="GD">+1 (Grenada)</option>
                        <option value="GP">+590 (Guadeloupe)</option>
                        <option value="GU">+1 (Guam)</option>
                        <option value="GT">+502 (Guatemala)</option>
                        <option value="GG">+44 (Guernsey)</option>
                        <option value="GN">+224 (Guinea)</option>
                        <option value="GW">+245 (Guinea-Bissau)</option>
                        <option value="GY">+592 (Guyana)</option>
                        <option value="HT">+509 (Haiti)</option>
                        <option value="HM">+61 (Heard &amp; Mc Donald Islands)</option>
                        <option value="HN">+504 (Honduras)</option>
                        <option value="HK">+852 (Hong Kong)</option>
                        <option value="HU">+36 (Hungary)</option>
                        <option value="IS">+354 (Iceland)</option>
                        <option value="ID">+62 (Indonesia)</option>
                        <option value="IQ">+964 (Iraq)</option>
                        <option value="IE">+353 (Ireland)</option>
                        <option value="IM">+44 (Isle of Man)</option>
                        <option value="IL">+972 (Israel)</option>
                        <option value="IT">+39 (Italy)</option>
                        <option value="JM">+1 (Jamaica)</option>
                        <option value="JP">+81 (Japan)</option>
                        <option value="JE">+44 (Jersey)</option>
                        <option value="JO">+962 (Jordan)</option>
                        <option value="KZ">+7 (Kazakhstan)</option>
                        <option value="KE">+254 (Kenya)</option>
                        <option value="KI">+686 (Kiribati)</option>
                        <option value="XK">+383 (Kosovo)</option>
                        <option value="KW">+965 (Kuwait)</option>
                        <option value="KG">+996 (Kyrgyzstan)</option>
                        <option value="LA">+856 (Laos)</option>
                        <option value="LV">+371 (Latvia)</option>
                        <option value="LB">+961 (Lebanon)</option>
                        <option value="LS">+266 (Lesotho)</option>
                        <option value="LR">+231 (Liberia)</option>
                        <option value="LY">+218 (Libya)</option>
                        <option value="LI">+423 (Liechtenstein)</option>
                        <option value="LT">+370 (Lithuania)</option>
                        <option value="LU">+352 (Luxembourg)</option>
                        <option value="MO">+853 (Macao)</option>
                        <option value="MG">+261 (Madagascar)</option>
                        <option value="MW">+265 (Malawi)</option>
                        <option value="MY">+60 (Malaysia)</option>
                        <option value="MV">+960 (Maldives)</option>
                        <option value="ML">+223 (Mali)</option>
                        <option value="MT">+356 (Malta)</option>
                        <option value="MH">+692 (Marshall Islands)</option>
                        <option value="MQ">+596 (Martinique)</option>
                        <option value="MR">+222 (Mauritania)</option>
                        <option value="MU">+230 (Mauritius)</option>
                        <option value="YT">+262 (Mayotte)</option>
                        <option value="MX">+52 (Mexico)</option>
                        <option value="FM">+691 (Micronesia)</option>
                        <option value="MD">+373 (Moldova)</option>
                        <option value="MC">+377 (Monaco)</option>
                        <option value="MN">+976 (Mongolia)</option>
                        <option value="ME">+382 (Montenegro)</option>
                        <option value="MS">+1 (Montserrat)</option>
                        <option value="MA">+212 (Morocco)</option>
                        <option value="MZ">+258 (Mozambique)</option>
                        <option value="MM">+95 (Myanmar)</option>
                        <option value="NA">+264 (Namibia)</option>
                        <option value="NR">+674 (Nauru)</option>
                        <option value="NP">+977 (Nepal)</option>
                        <option value="NL">+31 (Netherlands)</option>
                        <option value="NC">+687 (New Caledonia)</option>
                        <option value="NZ">+64 (New Zealand)</option>
                        <option value="NI">+505 (Nicaragua)</option>
                        <option value="NE">+227 (Niger)</option>
                        <option value="NG">+234 (Nigeria)</option>
                        <option value="NU">+683 (Niue)</option>
                        <option value="MP">+1 (Northern Mariana Islands)</option>
                        <option value="MK">+389 (North Macedonia)</option>
                        <option value="NO">+47 (Norway)</option>
                        <option value="OM">+968 (Oman)</option>
                        <option value="PK">+92 (Pakistan)</option>
                        <option value="PW">+680 (Palau)</option>
                        <option value="PS">+970 (Palestinian Territories)</option>
                        <option value="PA">+507 (Panama)</option>
                        <option value="PG">+675 (Papua New Guinea)</option>
                        <option value="PY">+595 (Paraguay)</option>
                        <option value="PE">+51 (Peru)</option>
                        <option value="PH">+63 (Philippines)</option>
                        <option value="PN">+870 (Pitcairn Island)</option>
                        <option value="PL">+48 (Poland)</option>
                        <option value="PT">+351 (Portugal)</option>
                        <option value="PR">+1 (Puerto Rico)</option>
                        <option value="QA">+974 (Qatar)</option>
                        <option value="CG">+242 (Republic of the Congo)</option>
                        <option value="RE">+262 (Réunion)</option>
                        <option value="RO">+40 (Romania)</option>
                        <option value="RU">+7 (Russia)</option>
                        <option value="RW">+250 (Rwanda)</option>
                        <option value="KN">+1 (Saint Kitts &amp; Nevis)</option>
                        <option value="WS">+685 (Samoa)</option>
                        <option value="SM">+378 (San Marino)</option>
                        <option value="ST">+239 (Sao Tome &amp; Principe)</option>
                        <option value="SA">+966 (Saudi Arabia)</option>
                        <option value="SN">+221 (Senegal)</option>
                        <option value="RS">+381 (Serbia)</option>
                        <option value="SC">+248 (Seychelles)</option>
                        <option value="SL">+232 (Sierra Leone)</option>
                        <option value="SG">+65 (Singapore)</option>
                        <option value="SX">+1 (Sint Maarten)</option>
                        <option value="SK">+421 (Slovakia)</option>
                        <option value="SI">+386 (Slovenia)</option>
                        <option value="SB">+677 (Solomon Islands)</option>
                        <option value="SO">+252 (Somalia)</option>
                        <option value="ZA">+27 (South Africa)</option>
                        <option value="KR">+82 (South Korea)</option>
                        <option value="SS">+211 (South Sudan)</option>
                        <option value="ES">+34 (Spain)</option>
                        <option value="LK">+94 (Sri Lanka)</option>
                        <option value="PM">+508 (St. Pierre &amp; Miquelon)</option>
                        <option value="BL">+590 (St Barthélemy)</option>
                        <option value="SH">+290 (St Helena)</option>
                        <option value="LC">+1 (St Lucia)</option>
                        <option value="MF">+1 (St Martin)</option>
                        <option value="VC">+1 (St Vincent &amp; the Grenadines)</option>
                        <option value="SD">+249 (Sudan)</option>
                        <option value="SR">+597 (Suriname)</option>
                        <option value="SJ">+47 (Svalbard &amp; Jan Mayen Islands)</option>
                        <option value="SE">+46 (Sweden)</option>
                        <option value="CH">+41 (Switzerland)</option>
                        <option value="TW">+886 (Taiwan)</option>
                        <option value="TJ">+992 (Tajikistan)</option>
                        <option value="TZ">+255 (Tanzania)</option>
                        <option value="TH">+66 (Thailand)</option>
                        <option value="TL">+670 (Timor-Leste)</option>
                        <option value="TG">+228 (Togo)</option>
                        <option value="TK">+690 (Tokelau)</option>
                        <option value="TO">+676 (Tonga)</option>
                        <option value="TT">+1 (Trinidad &amp; Tobago)</option>
                        <option value="TN">+216 (Tunisia)</option>
                        <option value="TR">+90 (Türkiye)</option>
                        <option value="TM">+993 (Turkmenistan)</option>
                        <option value="TC">+1 (Turks &amp; Caicos Islands)</option>
                        <option value="TV">+688 (Tuvalu)</option>
                        <option value="UG">+256 (Uganda)</option>
                        <option value="UA">+380 (Ukraine)</option>
                        <option value="AE">+971 (United Arab Emirates)</option>
                        <option value="GB">+44 (United Kingdom)</option>
                        <option value="US">+1 (United States)</option>
                        <option value="UY">+598 (Uruguay)</option>
                        <option value="UZ">+998 (Uzbekistan)</option>
                        <option value="VU">+678 (Vanuatu)</option>
                        <option value="VA">+39 (Vatican City)</option>
                        <option value="VE">+58 (Venezuela)</option>
                        <option value="VN">+84 (Vietnam)</option>
                        <option value="VI">+1 (Virgin Islands (U.S.)</option>
                        <option value="WF">+681 (Wallis &amp; Futuna Islands)</option>
                        <option value="EH">+212 (Western Sahara)</option>
                        <option value="YE">+967 (Yemen)</option>
                        <option value="ZM">+260 (Zambia)</option>
                        <option value="ZW">+263 (Zimbabwe)</option>

                     </select>
                  </div>

                  <div className="su-input-box"><input type="number" name="phone" onChange={handleChange} placeholder="phone number" min={0} /></div>
                  <p className="messaging-data-rates">Make sure you enter a phone number you can always access. It will be used to verify your identity any time you sign in on a new device or web browser. Messaging or data rates may apply.</p>

                  <div className="su-messaging-verify">
                     <p>Verify with a:</p>
                     <div className="su-radio">
                        <input type="radio" />
                        <p>Text message</p>
                     </div>
                     <div className="su-radio">
                        <input type="radio" />
                        <p>Phone call</p>
                     </div>
                  </div>
               </div>

               <div className="su-horizontal-line-layout"><div className="su-horizontal-line"></div></div>

               <div className="su-create-ur-id-layout">
                  <div className="su-announcements-apps">

                     <div className="su-announcements">
                        <div className="su-checkbox"><input type="checkbox" defaultChecked /></div>
                        <div className="su-announcements-text">
                           <p>Announcements</p>
                           <p>Receive Apple emails and communications including announcements, marketing, recommendations and updates about Apple products, services and software.</p>
                        </div>
                     </div>

                     <div className="su-apps">
                        <div className="su-checkbox"><input type="checkbox" defaultChecked /></div>
                        <div className="su-apps-text">
                           <p>Apps, Music, TV and More</p>
                           <p>Receive Apple emails and communications including new releases, exclusive content, special offers and marketing, and recommendations for apps, music, movies, TV, books, podcasts and more.</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="su-horizontal-line-layout"><div className="su-horizontal-line"></div></div>

               <div className="su-create-ur-id-layout">
                  <div className="su-captcha">
                     <div className="su-captcha-img"><img src="data:image/jpeg;base64, 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" alt="" /></div>
                     <div className="su-captcha-box">
                        <div className="su-captcha-input"><input type="text" placeholder="Type the characters in the image" /></div>
                        <div className="su-captcha-new-code">
                           <p>New code</p>
                           <div className="su-captcha-vertical-line"></div>
                           <p>Visually-impaired</p>
                        </div>
                     </div>
                  </div>
               </div>


               <div className="su-horizontal-line-layout"><div className="su-horizontal-line"></div></div>

               <div className="su-create-ur-id-layout">
                  <div className="su-access-ur-data">
                     <div className="su-access-ur-data-logo"><img src={img1} alt="" /></div>
                     <p className="su-access-ur-data-text">Your Apple ID information is used to allow you to sign in securely and access your data. Apple records certain data for security, support and reporting purposes. If you agree, Apple may also use your Apple ID information to send you marketing emails and communications, including based on your use of Apple services. <span>See how your data is managed.</span></p>
                     <div className="su-access-ur-data-button"><button type="submit">Continue</button></div>
                  </div>
               </div>
            </form>

            <div className="su-footer"></div>
         </div >

         <Footer4 />
      </>
   )
}

export default SignUp;