import React from 'react'
import "./Furniture.css"
import Product from "../Components/Product"
import prd1 from "../images/lacessories1.jfif"
import prd2 from "../images/lacessories2.jfif"
import prd3 from "../images/lacessories3.jpeg"
import prd4 from "../images/lacessories4.jpeg"
import prd5 from "../images/lacessories5.jpeg"
import prd6 from "../images/lacessories6.jpeg"
import prd7 from "../images/lacessories7.jpeg"
import prd8 from "../images/lacessories8.jpeg"
import prd9 from "../images/lacessories9.jpeg"
import prd10 from "../images/lacessories10.jpeg"
import prd11 from "../images/lacessories11.jpeg"
import prd12 from "../images/lacessories12.jpeg"
import prd13 from "../images/lacessories13.jpeg"
import prd14 from "../images/lacessories14.jpeg"
import prd15 from "../images/lacessories15.jpeg"
export default function Furniture() {
    return (
        <div>
            <div className="main">

                <div className="prd_row1">
                    <Product id="lacessories1" prdName="Wireless keyborad" img={prd1} price="Price : ₹10,820 " review="5.5" ></Product>
                    <Product id="lacessories2" prdName="Wireless mouse" img={prd2} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="lacessories3" prdName="WIFI ROUTER" img={prd3} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="lacessories4" prdName="JIO ROUTER" img={prd4} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="lacessories5" prdName="LAPTOP BAG" img={prd5} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="lacessories6" prdName="COOL PAD" img={prd6} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="lacessoriesr7" prdName="USD ADAPTER" img={prd7} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="lacessories8" prdName="QUICK HEAL ANTIVIRUS" img={prd8} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>
            <div className="main1">

                <div className="prd_row1">
                    <Product id="lacessories9" prdName="HDMI" img={prd9} price=" ₹10,820  25% off" review="5.5" ></Product>
                    <Product id="lacessories10" prdName="HDMI PRO" img={prd10} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="lacessories11" prdName="GRAPHIC CARD" img={prd11} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="lacessories12" prdName="NORTON ANTIVIRUS" img={prd12} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="lacessories13" prdName="COOL PAD PRO" img={prd13} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="lacessories14" prdName="COOL PAD BENCH" img={prd14} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="lacessories15" prdName="COOL PAD BENCH" img={prd15} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="lacessories16" prdName="WIRELESS KEYBOARD" img={prd1} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>

        </div>
    )
}
