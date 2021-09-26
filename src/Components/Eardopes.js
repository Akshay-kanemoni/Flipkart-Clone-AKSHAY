import React from 'react'
import "./Furniture.css"
import Product from "../Components/Product"
import prd1 from "../images/dopes1.jfif"
import prd2 from "../images/dopes2.jfif"
import prd3 from "../images/dopes3.jfif"
import prd4 from "../images/dopes4.jfif"
import prd5 from "../images/dopes5.jfif"
import prd6 from "../images/dopes6.jfif"
import prd7 from "../images/dopes7.jfif"
import prd8 from "../images/dopes5.jfif"
import prd9 from "../images/dopes1.jfif"
import prd10 from "../images/dopes2.jfif"
import prd11 from "../images/dopes3.jfif"
import prd12 from "../images/dopes7.jfif"
import prd13 from "../images/dopes4.jfif"
import prd14 from "../images/dopes5.jfif"
import prd15 from "../images/dopes6.jfif"
export default function Furniture() {
    return (
        <div>
            <div className="main">

                <div className="prd_row1">
                    <Product id="Ear Dopes1" prdName="Ear Dopes" img={prd1} price="Price : ₹10,820 " review="5.5" ></Product>
                    <Product id="Ear Dopes2" prdName=" Ear Dopes" img={prd2} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Ear Dopes3" prdName="Ear Dopes" img={prd3} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Ear Dopes4" prdName="Ear Dopes" img={prd4} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Ear Dopes5" prdName="Ear Dopes" img={prd5} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Ear Dopes6" prdName="Ear Dopes" img={prd6} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Ear Dopes7" prdName="Ear Dopes" img={prd7} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Ear Dopes8" prdName=" Ear Dopes" img={prd8} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>
            <div className="main1">

                <div className="prd_row1">
                    <Product id="Ear Dopes9" prdName=" Ear Dopes" img={prd9} price=" ₹10,820  25% off" review="5.5" ></Product>
                    <Product id="Ear Dopes10" prdName=" Ear Dopes" img={prd10} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Ear Dopes11" prdName=" Ear Dopes" img={prd11} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Ear Dopes12" prdName=" Ear Dopes" img={prd12} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Ear Dopes13" prdName=" Ear Dopes" img={prd13} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Ear Dopes14" prdName=" Ear Dopes " img={prd14} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Ear Dopes15" prdName=" Ear Dopes" img={prd15} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Ear Dopes16" prdName=" Ear Dopes" img={prd1} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>

        </div>
    )
}
