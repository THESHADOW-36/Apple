import React from "react";
import "./Store.css"
import Navbar2 from "../Header/Navbar2";
import Footer2 from "../Footer/Footer2";
import { useNavigate } from "react-router-dom";

const Store = () => {
	const router = useNavigate()
	function shopiPhoneSite() {
		router("/shop-iphone")
	}
	return (
		<>
			<Navbar2 />

			<div className="store">

				{/* <div className="navbar-bg"></div> */}

				<div className="store-credit-offer">
					<div className="sco-content">
						<div className="sco-left-arrow"><i class="fa-solid fa-angle-left"></i></div>

						<div className="sco-text">
							<p>Get ₹18000.00–₹67800.00 in credit towards iPhone 15 or iPhone 15 Pro when you trade in an iPhone 11 or higher.* </p>
							<div className="sco-shopiPhone">
								<p>Shop iPhone</p>
								<div className="sco-right-logo"><i class="fa-solid fa-angle-right fa-xs"></i></div>
							</div>
						</div>

						<div className="sco-right-arrow"><i class="fa-solid fa-angle-right"></i></div>
					</div>
				</div>

				<div className="store-content-2">
					<div className="store-text-line">
						<p>Store. <span>The best way to buy the products you love.</span></p>
						<div className="shopping-help-visit">
							<div className="shv-layout">
								<div className="shv-img"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-chat-specialist-icon-202305?wid=35&hei=35&fmt=jpeg&qlt=95&.v=1684947928869" alt="" /></div>
								<div className="shv-text">
									<p>Need shopping help?</p>
									<p>Ask a Specialist</p>
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


					<div className="store-apple-products-layout">
						<div className="store-apple-products-empty">
						</div>

						<div className="store-apple-products">
							<div className="store-apple-products-img"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-14-16-mac-nav-202301?wid=200&hei=130&fmt=png-alpha&.v=1670959891635" alt="" /></div>
							<p>Mac</p>
						</div>

						<div className="store-apple-products" onClick={shopiPhoneSite}>
							<div className="store-apple-products-img"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_EMEA?wid=200&hei=130&fmt=png-alpha&.v=1692971740071" alt="" /></div>
							<p>iPhone</p>
						</div>

						<div className="store-apple-products">
							<div className="store-apple-products-img"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=200&hei=130&fmt=png-alpha&.v=1664912135437" alt="" /></div>
							<p>iPad</p>
						</div>

						<div className="store-apple-products">
							<div className="store-apple-products-img"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-watch-nav-202309_GEO_IN?wid=200&hei=130&fmt=png-alpha&.v=1693703814407" alt="" /></div>
							<p>Apple Watch</p>
						</div>

						<div className="store-apple-products">
							<div className="store-apple-products-img"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=200&hei=130&fmt=png-alpha&.v=1660676485885" alt="" /></div>
							<p>AirPods</p>
						</div>

						<div className="store-apple-products">
							<div className="store-apple-products-img"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783380000" alt="" /></div>
							<p>AirTag</p>
						</div>

						<div className="store-apple-products">
							<div className="store-apple-products-img"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=200&hei=130&fmt=png-alpha&.v=1664628458484" alt="" /></div>
							<p>Apple TV 4K</p>
						</div>

						<div className="store-apple-products">
							<div className="store-apple-products-img"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=200&hei=130&fmt=png-alpha&.v=1670389216654" alt="" /></div>
							<p>HomePod</p>
						</div>

						<div className="store-apple-products">
							<div className="store-apple-products-img"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-accessories-nav-202309?wid=200&hei=130&fmt=png-alpha&.v=1692803114952" alt="" /></div>
							<p>Accessories</p>
						</div>
					</div>

					<div className="store-the-latest">
						<p>The latest. <span>Take a look at what’s new right now.</span></p>
						<div className="stl-content">
							<p className="stl-empty">
							</p>
							<div className="stl-iPhone-15-pro">
								<div className="stl-product-content">
									<p className="stl-product-name">IPHONE 15 PRO</p>
									<p className="stl-product-specification">Titanium</p>
									<p className="stl-product-price">From ₹134900.00‡</p>
								</div>
							</div>
							<div className="stl-iPhone-15">
								<div className="stl-product-content">
									<p className="stl-product-name-2">IPHONE 15</p>
									<p className="stl-product-specification-2">Newphoria </p>
									<p className="stl-product-price-2">From ₹79900.00‡</p>
								</div>
							</div>
							<div className="stl-apple-watch-series-9">
								<div className="stl-product-content">
									<p className="stl-product-name">APPLE WATCH SERIES 9</p>
									<p className="stl-product-specification">Smarter. Brighter. Mightier.</p>
									<p className="stl-product-price">From ₹41900.00‡</p>
								</div>
							</div>
							<div className="stl-apple-watch-ultra-2">
								<div className="stl-product-content">
									<p className="stl-product-name-2">APPLE WATCH ULTRA 2</p>
									<p className="stl-product-specification-2">Next-level adventure.</p>
									<p className="stl-product-price-2">From ₹89900.00‡</p>
								</div>
							</div>
							<div className="stl-airpods-pro-2nd-gen">
								<div className="stl-product-content">
									<p className="stl-product-name">AIRPODS PRO (2ND GENERATION)</p>
									<p className="stl-product-specification">Adaptive Audio. <br /> Now playing.</p>
									<p className="stl-product-price">From ₹24900.00‡</p>
								</div>
							</div>
							<div className="stl-macbook-air-15">
								<div className="stl-product-content">
									<p className="stl-product-name-2">MACBOOK AIR 15”</p>
									<p className="stl-product-specification-2">Impressively big. <br /> Impossibly thin.</p>
									<p className="stl-product-price-2">From ₹134900.00‡</p>
								</div>
							</div>
							<div className="stl-iPad-air">
								<div className="stl-product-content">
									<p className="stl-product-name">IPAD AIR</p>
									<p className="stl-product-specification">Light. Bright. Full of might.</p>
									<p className="stl-product-price">From ₹59900.00‡</p>
								</div>
							</div>
						</div>
					</div>


					<div className="help-is-here">
						<p>Help is here. <span>Whenever and however you need it.</span></p>
						<div className="hih-content">
							<p className="hih-empty">
							</p>
							<div className="hih-apple-specialist">
								<div className="hih-product-content">
									<p className="hih-product-name">APPLE SPECIALIST</p>
									<p className="hih-product-specification">Shop one on one with a Specialist online.</p>
								</div>
							</div>
							<div className="hih-get-to-know">
								<div className="hih-product-content">
									<p className="hih-product-name"></p>
									<p className="hih-product-specification">Get to know your new device with a free Personal Session. </p>
								</div>
							</div>
							<div className="hih-watch-and-learn">
								<div className="hih-product-content">
									<p className="hih-product-name">WATCH AND LEARN</p>
									<p className="hih-product-specification">Need support? Our teams are here for you.</p>
								</div>
								<div className="hih-wal-quickOverview">
									<p>Get a quick overview from Pritesh on the Apple <br /> Support App.</p>
									<div className="circle-play">
										<div></div>
										<i class="fa-solid fa-circle-play fa-2xl"></i>
									</div>
								</div>
							</div>
							<p className="hih-empty">
							</p>
						</div>
					</div>


					<div className="apple-store-difference">
						<p>The Apple Store difference. <span>Even more reasons to shop with us.</span></p>
						<div className="asd-content">
							<p className="asd-empty">
							</p>

							<div className="asd-box">
								<div className="asd-box-content">
									<div className="asd-box-icon">
										<i class="fa-regular fa-credit-card fa-2xl"></i>
									</div>
									<p className="asd-specification">Flexible ways to pay. <br /> <span>Plus instant savings §§ <br /> and No Cost EMI.§§</span></p>
								</div>
							</div>

							<div className="asd-box">
								<div className="asd-box-content">
									<div className="asd-box-icon-2">
									</div>
									<p className="asd-specification-2">Exchange your smartphone, <span>get ₹18000.00 – ₹67800.00 in credit towards a new one.*</span></p>
								</div>
							</div>

							<div className="asd-box">
								<div className="asd-box-content">
									<div className="asd-box-icon-3">
									</div>
									<p className="asd-specification-3">Our Business Team. <br /> <span>On your team.</span></p>
								</div>
							</div>

							<div className="asd-box">
								<div className="asd-box-content">
									<div className="asd-box-icon-2">
									</div>
									<p className="asd-specification-2">Trade in your eligible Mac, Apple Watch or iPad for instant credit.*<span> In-store only.</span></p>
								</div>
							</div>

							<div className="asd-box">
								<div className="asd-box-content">
									<div className="asd-box-icon-4">
									</div>
									<p className="asd-specification-4">Make them yours. <br /> <span>Engrave a mix of emoji, names and numbers for free.</span></p>
								</div>
							</div>





							<p className="asd-empty">
							</p>
						</div>
					</div>


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
			</div>
			<Footer2 />
		</>
	)
}

export default Store