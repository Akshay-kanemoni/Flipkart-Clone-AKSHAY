import React from 'react'
import "./Furniture.css"
import Product from "../Components/Product"
import prd1 from "../images/glasses1.jpeg"
import prd2 from "../images/glasses2.jpeg"
import prd3 from "../images/glasses3.jpeg"
import prd4 from "../images/glasses4.jpeg"
import prd5 from "../images/glasses5.jpeg"
import prd6 from "../images/glasses6.jpeg"
import prd7 from "../images/glasses7.jpeg"
import prd8 from "../images/glasses8.jpeg"
import prd9 from "../images/glasses9.jpeg"
import prd10 from "../images/glasses10.jpeg"
import prd11 from "../images/glasses11.jpeg"
import prd12 from "../images/glasses12.jpeg"
import prd13 from "../images/glasses13.jpeg"
import prd14 from "../images/glasses14.jpeg"
import prd15 from "../images/glasses15.jpeg"
export default function Furniture() {
    return (
        <div>
            <div className="main">

                <div className="prd_row1">
                    <Product id="Sun Glasses1" prdName="Sun Glasses" img={prd1} price="Price : ₹10,820 " review="5.5" ></Product>
                    <Product id="Sun Glasses2" prdName="Sun Glasses" img={prd2} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Sun Glasses3" prdName="Sun Glasses" img={prd3} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Sun Glasses4" prdName="Sun Glasses" img={prd4} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Sun Glasses5" prdName="Sun Glasses" img={prd5} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Sun Glasses6" prdName="Sun Glasses" img={prd6} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Sun Glassesr7" prdName="Sun Glasses" img={prd7} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Sun Glasses8" prdName="Sun Glasses" img={prd8} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>
            <div className="main1">

                <div className="prd_row1">
                    <Product id="Sun Glasses9" prdName="Sun Glasses" img={prd9} price=" ₹10,820  25% off" review="5.5" ></Product>
                    <Product id="Sun Glasses10" prdName="Sun Glasses" img={prd10} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Sun Glasses11" prdName="Sun Glasses" img={prd11} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Sun Glasses12" prdName="Sun Glasses" img={prd12} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Sun Glasses13" prdName="Sun Glasses" img={prd13} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Sun Glasses14" prdName="Sun Glasses " img={prd14} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Sun Glasses15" prdName="Sun Glasses" img={prd15} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Sun Glasses16" prdName="Sun Glasses" img={prd1} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>

        </div>
    )
}
