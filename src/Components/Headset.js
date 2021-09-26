import React from 'react'
import "./Furniture.css"
import Product from "../Components/Product"
import prd1 from "../images/headset1.jfif"
import prd2 from "../images/headset2.jfif"
import prd3 from "../images/headset3.jfif"
import prd4 from "../images/headset4.jfif"
import prd5 from "../images/headset5.jfif"
import prd6 from "../images/headset6.jfif"
import prd7 from "../images/headset7.jfif"
import prd8 from "../images/headset8.jfif"
import prd9 from "../images/headset9.jfif"
import prd10 from "../images/headset10.jfif"
import prd11 from "../images/headset11.jfif"
import prd12 from "../images/headset12.jfif"
import prd13 from "../images/headset13.jfif"
import prd14 from "../images/headset14.jfif"
import prd15 from "../images/headset15.jfif"
export default function Furniture() {
    return (
        <div>
            <div className="main">

                <div className="prd_row1">
                    <Product id="Headset1" prdName="Headset" img={prd1} price="Price : ₹10,820 " review="5.5" ></Product>
                    <Product id="Headset2" prdName=" Headset" img={prd2} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Headset3" prdName="Headset" img={prd3} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Headset4" prdName="Headset" img={prd4} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Headset5" prdName="Headset" img={prd5} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Headset6" prdName="Headset" img={prd6} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Headsetr7" prdName="Headset" img={prd7} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Headset8" prdName=" Headset" img={prd8} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>
            <div className="main1">

                <div className="prd_row1">
                    <Product id="Headset9" prdName=" Headset" img={prd9} price=" ₹10,820  25% off" review="5.5" ></Product>
                    <Product id="Headset10" prdName=" Headset" img={prd10} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Headset11" prdName=" Headset" img={prd11} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Headset12" prdName=" Headset" img={prd12} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Headset13" prdName=" Headset" img={prd13} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Headset14" prdName=" Headset " img={prd14} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Headset15" prdName=" Headset" img={prd15} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Headset16" prdName=" Headset" img={prd1} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>

        </div>
    )
}
