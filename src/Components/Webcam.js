import React from 'react'
import "./Furniture.css"
import Product from "../Components/Product"
import prd1 from "../images/webcam1.jfif"
import prd2 from "../images/webcam2.jfif"
import prd3 from "../images/webcam3.jfif"
import prd4 from "../images/webcam4.jfif"
import prd5 from "../images/webcam5.jfif"
import prd6 from "../images/webcam6.jfif"
import prd7 from "../images/webcam7.jfif"
import prd8 from "../images/webcam8.jfif"
import prd9 from "../images/webcam9.jfif"
import prd10 from "../images/webcam10.jfif"
import prd11 from "../images/webcam11.jfif"
import prd12 from "../images/webcam12.jfif"
import prd13 from "../images/webcam13.jfif"
import prd14 from "../images/webcam14.jfif"
import prd15 from "../images/webcam15.jfif"
export default function Furniture() {
    return (
        <div>
            <div className="main">

                <div className="prd_row1">
                    <Product id="Web Camera1" prdName="Web Camera" img={prd1} price="Price : ₹10,820 " review="5.5" ></Product>
                    <Product id="Web Camera2" prdName=" Web Camera" img={prd2} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Web Camera3" prdName="Web Camera" img={prd3} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Web Camera4" prdName="Web Camera" img={prd4} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Web Camera5" prdName="Web Camera" img={prd5} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Web Camera6" prdName="Web Camera" img={prd6} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Web Camerar7" prdName="Web Camera" img={prd7} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Web Camera8" prdName=" Web Camera" img={prd8} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>
            <div className="main1">

                <div className="prd_row1">
                    <Product id="Web Camera9" prdName=" Web Camera" img={prd9} price=" ₹10,820  25% off" review="5.5" ></Product>
                    <Product id="Web Camera10" prdName=" Web Camera" img={prd10} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Web Camera11" prdName=" Web Camera" img={prd11} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Web Camera12" prdName=" Web Camera" img={prd12} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Web Camera13" prdName=" Web Camera" img={prd13} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Web Camera14" prdName=" Web Camera " img={prd14} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Web Camera15" prdName=" Web Camera" img={prd15} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Web Camera16" prdName=" Web Camera" img={prd1} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>

        </div>
    )
}
