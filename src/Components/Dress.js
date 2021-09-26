import React from 'react'
import "./Furniture.css"
import Product from "../Components/Product"
import prd1 from "../images/dress1.jpeg"
import prd2 from "../images/dress2.jpeg"
import prd3 from "../images/dress3.jpeg"
import prd4 from "../images/dress4.jpeg"
import prd5 from "../images/dress5.jpeg"
import prd6 from "../images/dress6.jpeg"
import prd7 from "../images/dress7.jpeg"
import prd8 from "../images/dress8.jpeg"
import prd9 from "../images/dress9.jpeg"
import prd10 from "../images/dress10.jpeg"
import prd11 from "../images/dress11.jpeg"
import prd12 from "../images/dress12.jpeg"
import prd13 from "../images/dress13.jpeg"
import prd14 from "../images/dress14.jpeg"
import prd15 from "../images/dress15.jpeg"
export default function Furniture() {
    return (
        <div>
            <div className="main">

                <div className="prd_row1">
                    <Product id="dress1" prdName="Women Ethnic Dress" img={prd1} price="Price : ₹10,820 " review="5.5" ></Product>
                    <Product id="dress2" prdName="Women Ethnic Dress" img={prd2} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="dress3" prdName="Women Ethnic Dress" img={prd3} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="dress4" prdName="Women Ethnic Dress" img={prd4} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="dress5" prdName="Women Ethnic Dress" img={prd5} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="dress6" prdName="Women Ethnic Dress" img={prd6} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="dress7" prdName="Women Ethnic Dress" img={prd7} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="dress8" prdName="Women Ethnic Dress" img={prd8} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>
            <div className="main1">

                <div className="prd_row1">
                    <Product id="dress9" prdName="Women Ethnic Dress" img={prd9} price=" ₹10,820  25% off" review="5.5" ></Product>
                    <Product id="dress10" prdName="Women Ethnic Dress" img={prd10} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="dress11" prdName="Women Ethnic Dress" img={prd11} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="dress12" prdName="Women Ethnic Dress" img={prd12} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="dress13" prdName="Women Ethnic Dress" img={prd13} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="dress14" prdName="Women Ethnic Dress " img={prd14} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="dress15" prdName="Women Ethnic Dress" img={prd15} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="dress16" prdName="Men Slim Fit Checkered Casual Shirt" img={prd1} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>

        </div>
    )
}
