import React from 'react'
import "./Furniture.css"
import Product from "../Components/Product"
import prd1 from "../images/furniture1.jpeg"
import prd2 from "../images/furniture2.jpeg"
import prd3 from "../images/furniture3.jpeg"
import prd4 from "../images/furniture4.jpeg"
import prd5 from "../images/furniture5.jpeg"
import prd6 from "../images/furniture6.jpeg"
import prd7 from "../images/furniture7.jpeg"
import prd8 from "../images/furniture8.jpeg"
import prd9 from "../images/furniture9.jpeg"
import prd10 from "../images/furniture10.jpeg"
import prd11 from "../images/furniture11.jpeg"
import prd12 from "../images/furniture12.jpeg"
import prd13 from "../images/furniture13.jpeg"
import prd14 from "../images/furniture14.jpeg"
import prd15 from "../images/furniture15.jpeg"
export default function Furniture() {
    return (
        <div>
            <div className="main">

                <div className="prd_row1">
                    <Product id="fur1" prdName="limraz furniture L 56 Engineered Wood Study Table" img={prd1} price="Price : ₹10,820  25% off" review="5.5" ></Product>
                    <Product id="fur2" prdName="Flipkart Perfect Homes Opus Engineered Wood Queen Box Bed" img={prd2} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="fur3" prdName="Crystal Furnitech Avia Engineered Wood Coffee Table" img={prd3} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="fur4" prdName="Flipkart Perfect Homes Phonox Engineered Wood TV" img={prd4} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="fur5" prdName="RoyalOak Engineered Wood Shoe Rack" img={prd5} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="fur6" prdName="RoyalOak Engineered Wood Shoe Rack" img={prd6} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="fur7" prdName="FurnitureKraft Nancy Metal King Bed" img={prd7} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="fur8" prdName="Flipkart Perfect Homes Phonox Engineered Wood TV" img={prd8} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>
            <div className="main1">

                <div className="prd_row1">
                    <Product id="fur9" prdName="Flipkart Perfect Homes Julian Engineered Wood 3 Door " img={prd9} price=" ₹10,820  25% off" review="5.5" ></Product>
                    <Product id="fur10" prdName="Flipkart Perfect Homes Phonox Engineered Wood TV" img={prd10} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="fur11" prdName="RoyalOak Engineered Wood Shoe Rack" img={prd11} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="fur12" prdName="RoyalOak Engineered Wood Shoe Rack" img={prd12} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="fur13" prdName="Flipkart Perfect Homes Zouk Engineered Wood TV" img={prd13} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="fur14" prdName="Flipkart Perfect Homes Phonox Engineered Wood TV" img={prd14} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="fur15" prdName="FurnitureKraft Nancy Metal King Bed" img={prd15} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="fur16" prdName="RoyalOak Engineered Wood Shoe Rack" img={prd1} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>

        </div>
    )
}
