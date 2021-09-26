import React from 'react'
import "./Furniture.css"
import Product from "../Components/Product"
import prd1 from "../images/watches1.jfif"
import prd2 from "../images/watches2.jfif"
import prd3 from "../images/watches3.jfif"
import prd4 from "../images/watches4.jfif"
import prd5 from "../images/watches5.jfif"
import prd6 from "../images/watches6.jfif"
import prd7 from "../images/watches7.jfif"
import prd8 from "../images/watches8.jfif"
import prd9 from "../images/watches9.jfif"
import prd10 from "../images/watches10.jfif"
import prd11 from "../images/watches11.jfif"
import prd12 from "../images/watches12.jfif"
import prd13 from "../images/watches13.jfif"
import prd14 from "../images/watches14.jfif"
import prd15 from "../images/watches15.jfif"
export default function Furniture() {
    return (
        <div>
            <div className="main">

                <div className="prd_row1">
                    <Product id="watches1" prdName="watches" img={prd1} price="Price : ₹10,820 " review="5.5" ></Product>
                    <Product id="watches2" prdName="Wrist watch" img={prd2} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="watches3" prdName="watches" img={prd3} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="watches4" prdName="White Sneaker" img={prd4} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="watches5" prdName="watches" img={prd5} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="watches6" prdName="Watches" img={prd6} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="watchesr7" prdName="Watches" img={prd7} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="watches8" prdName="Wrist watch" img={prd8} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>
            <div className="main1">

                <div className="prd_row1">
                    <Product id="watches9" prdName="Wrist watch" img={prd9} price=" ₹10,820  25% off" review="5.5" ></Product>
                    <Product id="watches10" prdName="Wrist watch" img={prd10} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="watches11" prdName="Wrist watch" img={prd11} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="watches12" prdName="Wrist watch" img={prd12} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="watches13" prdName="Wrist watch" img={prd13} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="watches14" prdName="Wrist watch " img={prd14} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="watches15" prdName="Wrist watch" img={prd15} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="watches16" prdName="Wrist watch" img={prd1} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>

        </div>
    )
}
