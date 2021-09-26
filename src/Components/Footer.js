import "./Footer.css"

// import { Link } from 'react-router-dom'
import Job from "@material-ui/icons/WorkOffOutlined"
import Star from "@material-ui/icons/Stars"
import Gift from "@material-ui/icons/Redeem"
import Helo from "@material-ui/icons/HelpOutline"
import footer from "../images/footer.jpeg"
function Footer() {
  return (
    <div>




      <div className="bottom">
        <div className="row1">
          <div className="col1">
            <p><strong>ABOUT</strong></p>
            <p>Contact Us</p>
            <p>About us</p>
            <p>Career</p>
            <p>Flipkart Stories</p>
            <p>Press</p>
            <p>Flipkart</p>
            <p>Wholesale</p>
            <p>Corporate</p>
            <p>Information</p>
          </div>
          <div className="col2">
            <p><strong>HELP</strong></p>
            <p>Payements</p>
            <p>Shipping</p>
            <p>Cancellation</p>
            <p>returns</p>
            <p>FAQ</p>
            <p>Report</p>
            <p>Infringement</p>

          </div>
        </div>


        <div className="row1">
          <div className="col3">
            <p><strong>POLICY</strong></p>
            <p>Return Policy</p>
            <p>Term Of Use</p>
            <p>Security</p>
            <p>Privacy</p>
            <p>Site map</p>
            <p>EPR COmpliance</p>

          </div>

          <div className="col4">
            <p><strong>Social</strong></p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Youtube</p>
          </div>
          <div className="col4">
            <p><strong>MAIL US:</strong></p>
            <p>Flipkart Internet Private Limited,</p>
            <p>Buildings Alyssa, Begonia &</p>
            <p>Clove Embassy Tech Village,</p>
            <p>Outer Ring Road, Devarabeesanahalli Village</p>
            <p>Bengaluru, 560103,</p>
            <p>Karnataka, India</p>
          </div>
          <div className="col4">
            <p><strong>Registered Office Address:</strong></p>
            <p>Flipkart Internet Private Limited,</p>
            <p>Buildings Alyssa, Begonia &</p>
            <p>Clove Embassy Tech Village,</p>
            <p>Outer Ring Road, Devarabeesanahalli Village</p>
            <p>Bengaluru, 560103,</p>
            <p>Karnataka, India</p>
            <p>CIN : U51109KA2012PTC066107</p>
            <p>Telephone: 1800 202 9898</p>
          </div>

        </div>




      </div>

      <div className="Footer_foot">
        <div className="Foot_last">
          <Job className="FooterIcon" />
          <p>Sell On Flipkart</p>
        </div>
        <div className="Foot_last">
          <Star className="FooterIcon" />
          <p>Advertise</p>
        </div>
        <div className="Foot_last ">
          <Gift className="FooterIcon" />
          <p>GiftCart</p>
        </div>
        <div className="Foot_last footer_pic">
          <Helo className="FooterIcon" />
          <p>HelpCenter</p>
        </div>
        <div className="Foot_last">
          <p>© 2007-2021 FlipKart.com</p>
        </div>
        <div className="Foot_last">
          <img className="footer_pic" src={footer} alt="img1" />
        </div>

      </div>








    </div>
  )
}

export default Footer;