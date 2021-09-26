import React from 'react'
import "./Furniture.css"
import Product from "../Components/Product"
import prd1 from "../images/dress1.jpeg"
import prd2 from "../images/grocery2.jpeg"
import prd3 from "../images/furniture3.jpeg"
import prd4 from "../images/grocery4.jpeg"
import prd5 from "../images/lacessories5.jpeg"
import prd6 from "../images/glasses6.jpeg"
import prd7 from "../images/shoes7.jpeg"
import prd8 from "../images/glasses8.jpeg"
import prd9 from "../images/dress9.jpeg"
import prd10 from "../images/furniture10.jpeg"
import prd11 from "../images/grocery11.jpeg"
import prd12 from "../images/glasses12.jpeg"
import prd13 from "../images/shoes13.jpeg"
import prd14 from "../images/furniture14.jpeg"
import prd15 from "../images/shoes15.jpeg"
export default function Furniture() {
    return (
        <div>
            <div className="main">

                <div className="prd_row1">
                    <Product id="Topoffers1" prdName="Dress" img={prd1} price="Price : ₹10,820 " review="5.5" ></Product>
                    <Product id="Topoffers2" prdName="Thums up" img={prd2} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Topoffers3" prdName="Tea poi" img={prd3} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Topoffers4" prdName="Farmley" img={prd4} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Topoffers5" prdName="Bag" img={prd5} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Topoffers6" prdName="Sun Glasses" img={prd6} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Topoffersr7" prdName=" sparxCanvas " img={prd7} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Topoffers8" prdName="SUn glasses combo" img={prd8} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>
            <div className="main1">

                <div className="prd_row1">
                    <Product id="Topoffers9" prdName="Black top" img={prd9} price=" ₹10,820  25% off" review="5.5" ></Product>
                    <Product id="Topoffers10" prdName="Dressing Table" img={prd10} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Topoffers11" prdName="Oil" img={prd11} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Topoffers12" prdName="Folded glasses" img={prd12} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Topoffers13" prdName="Canvas" img={prd13} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Topoffers14" prdName="TV stand " img={prd14} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Topoffers15" prdName="Canvas" img={prd15} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Topoffers16" prdName="top dress" img={prd1} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>

        </div>
    )
}
