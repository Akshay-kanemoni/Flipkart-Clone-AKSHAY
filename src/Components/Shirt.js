import React from 'react'
import "./Furniture.css"
import Product from "../Components/Product"
import prd1 from "../images/shirt1.jpeg"
import prd2 from "../images/shirt2.jpeg"
import prd3 from "../images/shirt3.jpeg"
import prd4 from "../images/shirt4.jpeg"
import prd5 from "../images/shirt5.jpeg"
import prd6 from "../images/shirt6.jpeg"
import prd7 from "../images/shirt7.jpeg"
import prd8 from "../images/shirt8.jpeg"
import prd9 from "../images/shirt9.jpeg"
import prd10 from "../images/shirt10.jpeg"
import prd11 from "../images/shirt11.jpeg"
import prd12 from "../images/shirt12.jpeg"
import prd13 from "../images/shirt13.jpeg"
import prd14 from "../images/shirt14.jpeg"
import prd15 from "../images/shirt15.jpeg"
export default function Furniture() {
    return (
        <div>
            <div className="main">

                <div className="prd_row1">
                    <Product id="shirt1" prdName="Men Slim Fit Checkered Casual Shirt" img={prd1} price="Price : ₹10,820 " review="5.5" ></Product>
                    <Product id="shirt2" prdName="Men Slim Fit Checkered Casual Shirt" img={prd2} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="shirt3" prdName="Men Slim Fit Checkered Casual Shirt" img={prd3} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="shirt4" prdName="Men Slim Fit Checkered Casual Shirt" img={prd4} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="shirt5" prdName="Men Slim Fit Checkered Casual Shirt" img={prd5} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="shirt6" prdName="Men Slim Fit Checkered Casual Shirt" img={prd6} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="shirt7" prdName="Men Slim Fit Checkered Casual Shirt" img={prd7} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="shirt8" prdName="Men Slim Fit Checkered Casual Shirt" img={prd8} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>
            <div className="main1">

                <div className="prd_row1">
                    <Product id="shirt9" prdName="Men Slim Fit Checkered Casual Shirt" img={prd9} price=" ₹10,820  25% off" review="5.5" ></Product>
                    <Product id="shirt10" prdName="Men Slim Fit Checkered Casual Shirt" img={prd10} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="shirt11" prdName="Men Slim Fit Checkered Casual Shirt" img={prd11} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="shirt12" prdName="Men Slim Fit Checkered Casual Shirt" img={prd12} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="shirt13" prdName="Men Slim Fit Checkered Casual Shirt" img={prd13} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="shirt14" prdName="Men Slim Fit Checkered Casual Shirt " img={prd14} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="shirt15" prdName="Men Slim Fit Checkered Casual Shirt" img={prd15} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="shirt16" prdName="Men Slim Fit Checkered Casual Shirt" img={prd1} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>

        </div>
    )
}
