import React from 'react'
import "./Furniture.css"
import Product from "../Components/Product"
import prd1 from "../images/toy1.jfif"
import prd2 from "../images/toy2.jfif"
import prd3 from "../images/toy3.jfif"
import prd4 from "../images/toy4.jfif"
import prd5 from "../images/toy5.jfif"
import prd6 from "../images/toy6.jfif"
import prd7 from "../images/toy7.jfif"
import prd8 from "../images/toy8.jfif"
import prd9 from "../images/toy9.jfif"
import prd10 from "../images/toy10.jfif"
import prd11 from "../images/toy11.jfif"
import prd12 from "../images/toy12.jfif"
import prd13 from "../images/toy13.jfif"
import prd14 from "../images/toy14.jfif"
import prd15 from "../images/toy15.jfif"
export default function Furniture() {
    return (
        <div>
            <div className="main">

                <div className="prd_row1">
                    <Product id="BABY TOYS1" prdName="BABY TOYS" img={prd1} price="Price : ₹10,820 " review="5.5" ></Product>
                    <Product id="BABY TOYS2" prdName=" BABY TOYS" img={prd2} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="BABY TOYS3" prdName="BABY TOYS" img={prd3} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="BABY TOYS4" prdName="BABY TOYS" img={prd4} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="BABY TOYS5" prdName="BABY TOYS" img={prd5} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="BABY TOYS6" prdName="BABY TOYS" img={prd6} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="BABY TOYSr7" prdName="BABY TOYS" img={prd7} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="BABY TOYS8" prdName=" BABY TOYS" img={prd8} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>
            <div className="main1">

                <div className="prd_row1">
                    <Product id="BABY TOYS9" prdName=" BABY TOYS" img={prd9} price=" ₹10,820  25% off" review="5.5" ></Product>
                    <Product id="BABY TOYS10" prdName=" BABY TOYS" img={prd10} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="BABY TOYS11" prdName=" BABY TOYS" img={prd11} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="BABY TOYS12" prdName=" BABY TOYS" img={prd12} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="BABY TOYS13" prdName=" BABY TOYS" img={prd13} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="BABY TOYS14" prdName=" BABY TOYS " img={prd14} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="BABY TOYS15" prdName=" BABY TOYS" img={prd15} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="BABY TOYS16" prdName=" BABY TOYS" img={prd1} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>

        </div>
    )
}
