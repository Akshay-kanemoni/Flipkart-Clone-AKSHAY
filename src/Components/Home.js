import React from 'react'
import "./Home.css"

import logo1 from "../images/logo1.png"
import logo2 from "../images/logo2.png"
import logo3 from "../images/logo3.png"
import logo4 from "../images/logo4.png"
import logo5 from "../images/logo5.png"
import logo6 from "../images/logo6.jpg"
import logo7 from "../images/logo7.png"
import logo8 from "../images/logo8.png"
import logo9 from "../images/logo9.png"
// import Watch from '@material-ui/icons/WatchLaterOutlined'
import Prd1 from '../images/perfume.jfif'
import Prd2 from '../images/shoes16.jpeg'
import Prd3 from '../images/prd3.jpeg'
import Prd4 from '../images/rakhi.jfif'
import Prd5 from '../images/sunglasses.jfif'
import Prd8 from '../images/Furniture.jpeg'
import Prd6 from '../images/bag.jfif'
import Prd7 from '../images/sandal.jpeg'
import Prd9 from '../images/headset.jfif'
import Prd10 from '../images/menwear.jfif'
import Prd11 from '../images/main_keyboard_skin.jpeg'
import Prd12 from '../images/fitnessband.jfif'
import Prd13 from '../images/main_wire_headphones.jpeg'
import Prd14 from '../images/main_wireless_headphones.jpeg'
import Prd15 from "../images/womenwear.jfif"
import Prd16 from "../images/laptop.jfif"
import Prd20 from "../images/mask.jpeg"
import Prd21 from "../images/webcam.jpeg"
import ADD1 from "../images/add5.jpg"
// import ADD2 from "../images/Add1.jpg"
// import ADD3 from "../images/Add2.jpg"
// import ADD4 from "../images/Add3.jpg"
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="header">

            <div className="offer_products1">
                <div className="prdss heading"><Link to="/topoffer"><img src={logo1} alt="img1" /></Link><p>Top Offers</p></div>
                <div className="prdss"><Link to="/grocery"><img src={logo2} alt="img2" /></Link><p>Grocery</p></div>
                <div className="prdss"><Link to="/mobile"><img src={logo3} alt="img3" /></Link><p>Mobiles</p></div>
                <div className="prdss heading"><Link to="/shirt"><img src={logo4} alt="img4" /></Link><p>Fashion</p></div>
                <div className="prdss heading"><Link to="/tv"><img src={logo5} alt="img5" /></Link><p>Electronics</p></div>
                <div className="prdss"><Link to="/decor"><img src={logo6} alt="img6" /></Link><p>Home</p></div>
                <div className="prdss"><Link to="/washing"><img src={logo7} alt="img7" /></Link><p>Appliances</p></div>
                <div className="prdss heading" ><img src={logo8} alt="img8" /><p>Travel</p></div>
                <div className="prdss"><Link to="/toy"><img src={logo9} alt="img9" /></Link><p>Beauty & More</p></div>
            </div>

            <div className="Add">
                <img src={ADD1} alt="img12" />
            </div>
            <div className="displaynone">
                <div className="home_title">
                    <strong>Deals of the Day</strong>
                    <Link to="/perfume"><button className="button">View All</button></Link></div>
                <div className="offer_products">
                    <div className="prd_offer"><Link to="/perfume"><img src={Prd1} alt="img10"></img></Link><div className="Prd_Det">
                        <p>perfume</p>
                        <p> Up to 60% off</p>
                        <p>Explore now</p>

                    </div></div>
                    <div className="prd_offer"><Link to="/shoes"><img src={Prd2} alt="img11"></img></Link><div className="Prd_Det">
                        <p>shoes</p>
                        <p> Up to 60% off</p>
                        <p>Explore now</p>

                    </div></div>
                    <div className="prd_offer"><Link to="/watches"><img src={Prd3} alt="img13"></img></Link><div className="Prd_Det">
                        <p>Watches</p>
                        <p> Up to 60% off</p>
                        <p>Explore now</p>

                    </div></div>
                    <div className="prd_offer"><Link to="/rakhi"><img src={Prd4} alt="img14"></img></Link><div className="Prd_Det">
                        <p>Rakhi</p>
                        <p> Up to 60% off</p>
                        <p>Explore now</p>

                    </div></div>
                    <div className="prd_offer"><Link to="/glasses"><img src={Prd5} alt="img15"></img></Link><div className="Prd_Det">
                        <p>Sun glasses</p>
                        <p> Up to 60% off</p>
                        <p>Explore now</p>

                    </div></div>
                    <Link to="/furniture"><div className="prd_offer"><img src={Prd8} alt="img16"></img><div className="Prd_Det">
                        <p>Furniture</p>
                        <p> Up to 60% off</p>
                        <p>Explore now</p>

                    </div></div></Link>
                </div>
            </div>


            <div className="displaynone">
                <div className="home_title">

                    <strong>Top Deals On Fashion</strong>
                    <Link to="/rakhi"><button className="button">View All</button></Link>
                </div>
                <div className="offer_products">
                    <div className="prd_offer"><Link to="/bag"><img src={Prd6} alt="img17"></img></Link><div className="Prd_Det">
                        <p>backpacks</p>
                        <p> Up to 60% off</p>
                        <p>Explore now</p>

                    </div></div>
                    <div className="prd_offer"><Link to="/laptop"><img src={Prd16} alt="img18"></img></Link><div className="Prd_Det">
                        <p>Laptop</p>
                        <p> Up to 60% off</p>
                        <p>Explore now</p>

                    </div></div>
                    <div className="prd_offer"><Link to="/laccessories"><img src={Prd11} alt="img19"></img></Link><div className="Prd_Det">
                        <p>Laptop accessories</p>
                        <p> Up to 60% off</p>
                        <p>Explore now</p>

                    </div></div>
                    <div className="prd_offer"><Link to="/headset"><img src={Prd9} alt="img20"></img></Link><div className="Prd_Det">
                        <p>Headset</p>
                        <p> Up to 60% off</p>
                        <p>Explore now</p>

                    </div></div>
                    <div className="prd_offer"><Link to="/shirt"><img src={Prd10} alt="img21"></img></Link><div className="Prd_Det">
                        <p>Mens wear</p>
                        <p> Up to 60% off</p>
                        <p>Explore now</p>

                    </div></div>
                    <div className="prd_offer"><Link to="/dress"><img src={Prd15} alt="img22"></img></Link><div className="Prd_Det">
                        <p>Women Wear</p>
                        <p> Up to 60% off</p>
                        <p>Explore now</p>

                    </div></div>
                </div>
            </div>

            <div className="Add1">
                <img src={ADD1} alt="img23" />
            </div>

            <div className="displaynone">
                <div className="home_title">
                    <strong>Men's Footwear</strong>
                    <Link to="/band"> <button className="button">View All</button></Link>
                </div>
                <div className="offer_products">
                    <div className="prd_offer"><Link to="/sandal"><img src={Prd7} alt="img24"></img></Link><div className="Prd_Det">
                        <p>Mobiles</p>
                        <p> Up to 60% off</p>
                        <p>Explore now</p>

                    </div></div>
                    <div className="prd_offer"><Link to="/band"><img src={Prd12} alt="img25"></img></Link><div className="Prd_Det">
                        <p>Footwear</p>
                        <p> Up to 60% off</p>
                        <p>Explore now</p>

                    </div></div>
                    <div className="prd_offer"><Link to="/earphones"><img src={Prd13} alt="img26"></img></Link><div className="Prd_Det">
                        <p>ear band</p>
                        <p> Up to 60% off</p>
                        <p>Explore now</p>

                    </div></div>
                    <div className="prd_offer"><Link to="/eardopes"><img src={Prd14} alt="img27"></img></Link><div className="Prd_Det">
                        <p>Ear dopes</p>
                        <p> Up to 60% off</p>
                        <p>Explore now</p>

                    </div></div>
                    <div className="prd_offer"><Link to="/mask"><img src={Prd20} alt="img28"></img></Link><div className="Prd_Det">
                        <p>Wired Earphone</p>
                        <p> Up to 60% off</p>
                        <p>Explore now</p>

                    </div></div>
                    <div className="prd_offer"><Link to="/webcam"><img src={Prd21} alt="img29"></img></Link><div className="Prd_Det">
                        <p>Fans</p>
                        <p> Up to 60% off</p>
                        <p>Explore now</p>

                    </div></div>
                </div>
            </div>

            <div className="decorflex">

                <div className="decor1">
                    <div className="decorlayout">
                        <p><strong>Revamp your home in style</strong></p>
                        <div className="decor1">
                            <Link to="/perfume"><p><img className="decor" src={Prd1} alt="img30" /></p></Link>
                            <Link to="/shoes"><p><img className="decor" src={Prd2} alt="img31" /></p></Link>
                        </div>
                        <div className="decor1">
                            <Link to="/watches"><p><img className="decor" src={Prd3} alt="img32" /></p></Link>
                            <Link to="/rakhi"><p><img className="decor" src={Prd4} alt="img33" /></p></Link>
                        </div>


                    </div>
                </div>
                <div className="decor1">
                    <div className="decorlayout">
                        <p><strong>Best deal on Electronics</strong></p>
                        <div className="decor1">
                            <Link to="/eardopes"><p><img className="decor3" src={Prd14} alt="img34" /></p></Link>
                        </div>

                    </div>

                </div>

                <div className="decor1">
                    <div className="decorlayout">
                        <p><strong>Styles  | Up to 70% off</strong></p>
                        <div className="decor1">
                            <Link to="/headset"><p><img className="decor" src={Prd9} alt="img35" /></p></Link>
                            <Link to="/shirt"><p><img className="decor" src={Prd10} alt="img36" /></p></Link>
                        </div>
                        <div className="decor1">
                            <Link to="/laccessories"><p><img className="decor" src={Prd11} alt="img37" /></p></Link>
                            <Link to="/band"><p><img className="decor" src={Prd12} alt="img38" /></p></Link>

                        </div>


                    </div>
                </div>


                <div className="decor1">
                    <div className="decorlayout">
                        <p><strong>Best deal on Women Wear</strong></p>
                        <div className="decor1">
                            <Link to="/dress"><p><img className="decor3" src={Prd15} alt="img39" /></p></Link>
                        </div>

                    </div>

                </div>


                <div className="decor1">
                    <div className="decorlayout">
                        <p><strong>Styles  | Up to 70% off</strong></p>
                        <div className="decor1">
                            <Link to="/glasses"><p><img className="decor" src={Prd5} alt="img40" /></p></Link>
                            <Link to="/bag"><p><img className="decor" src={Prd6} alt="img41" /></p></Link>
                        </div>
                        <div className="decor1">
                            <Link to="/sandal"><p><img className="decor" src={Prd7} alt="img42" /></p></Link>
                            <Link to="/furniture"><p><img className="decor" src={Prd8} alt="img43" /></p></Link>

                        </div>


                    </div>

                </div>
            </div>

        </div>
    )
}
