import React from 'react'
import "./Furniture.css"
import Product from "../Components/Product"
import prd1 from "../images/bag1.jfif"
import prd2 from "../images/bag2.jfif"
import prd3 from "../images/bag3.jfif"
import prd4 from "../images/bag4.jfif"
import prd5 from "../images/bag5.jfif"
import prd6 from "../images/bag6.jfif"
import prd7 from "../images/bag7.jfif"
import prd8 from "../images/bag8.jfif"
import prd9 from "../images/bag9.jfif"
import prd10 from "../images/bag10.jfif"
import prd11 from "../images/bag11.jfif"
import prd12 from "../images/bag12.jfif"
import prd13 from "../images/bag13.jfif"
import prd14 from "../images/bag14.jfif"
import prd15 from "../images/bag15.jfif"
export default function Furniture() {
    return (
        <div>
            <div className="main">

                <div className="prd_row1">
                    <Product id="Bag1" prdName="Bag" img={prd1} price="Price : ₹10,820 " review="5.5" ></Product>
                    <Product id="Bag2" prdName="COLLEGE BAG" img={prd2} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Bag3" prdName="Bag" img={prd3} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Bag4" prdName="White Sneaker" img={prd4} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Bag5" prdName="Bag" img={prd5} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Bag6" prdName="Bag" img={prd6} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Bagr7" prdName="Bag" img={prd7} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Bag8" prdName="COLLEGE BAG" img={prd8} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>
            <div className="main1">

                <div className="prd_row1">
                    <Product id="Bag9" prdName="COLLEGE BAG" img={prd9} price=" ₹10,820  25% off" review="5.5" ></Product>
                    <Product id="Bag10" prdName="COLLEGE BAG" img={prd10} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Bag11" prdName="COLLEGE BAG" img={prd11} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Bag12" prdName="COLLEGE BAG" img={prd12} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Bag13" prdName="COLLEGE BAG" img={prd13} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Bag14" prdName="COLLEGE BAG " img={prd14} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Bag15" prdName="COLLEGE BAG" img={prd15} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Bag16" prdName="COLLEGE BAG" img={prd1} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>

        </div>
    )
}
