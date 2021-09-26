import React from 'react'
import "./Furniture.css"
import Product from "../Components/Product"
import prd1 from "../images/shoes1.jpeg"
import prd2 from "../images/shoes2.jpeg"
import prd3 from "../images/shoes3.jpeg"
import prd4 from "../images/shoes4.jpeg"
import prd5 from "../images/shoes5.jpeg"
import prd6 from "../images/shoes6.jpeg"
import prd7 from "../images/shoes7.jpeg"
import prd8 from "../images/shoes8.jpeg"
import prd9 from "../images/shoes9.jpeg"
import prd10 from "../images/shoes10.jpeg"
import prd11 from "../images/shoes11.jpeg"
import prd12 from "../images/shoes12.jpeg"
import prd13 from "../images/shoes13.jpeg"
import prd14 from "../images/shoes14.jpeg"
import prd15 from "../images/shoes15.jpeg"
export default function Furniture() {
    return (
        <div>
            <div className="main">

                <div className="prd_row1">
                    <Product id="shoes1" prdName="White Sneakers" img={prd1} price="Price : ₹10,820 " review="5.5" ></Product>
                    <Product id="shoes2" prdName="Canvas" img={prd2} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="shoes3" prdName="Sneaker" img={prd3} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="shoes4" prdName="White Sneaker" img={prd4} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="shoes5" prdName="Captain america Sneaker" img={prd5} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="shoes6" prdName="AXE Ice Chill Collection For Men" img={prd6} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="shoesr7" prdName="Canvas " img={prd7} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="shoes8" prdName="Canvas" img={prd8} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>
            <div className="main1">

                <div className="prd_row1">
                    <Product id="shoes9" prdName="Canvas" img={prd9} price=" ₹10,820  25% off" review="5.5" ></Product>
                    <Product id="shoes10" prdName="Canvas" img={prd10} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="shoes11" prdName="Canvas" img={prd11} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="shoes12" prdName="Canvas" img={prd12} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="shoes13" prdName="Canvas" img={prd13} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="shoes14" prdName="Canvas " img={prd14} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="shoes15" prdName="Canvas" img={prd15} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="shoes16" prdName="Canvas" img={prd1} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>

        </div>
    )
}
