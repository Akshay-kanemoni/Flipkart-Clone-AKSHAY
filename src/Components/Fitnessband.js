import React from 'react'
import "./Furniture.css"
import Product from "../Components/Product"
import prd1 from "../images/band1.jfif"
import prd2 from "../images/band2.jfif"
import prd3 from "../images/band3.jfif"
import prd4 from "../images/band4.jfif"
import prd5 from "../images/band5.jfif"
import prd6 from "../images/band6.jfif"
import prd7 from "../images/band7.jfif"
import prd8 from "../images/band8.jfif"
import prd9 from "../images/band9.jfif"
import prd10 from "../images/band10.jfif"
import prd11 from "../images/band11.jfif"
import prd12 from "../images/band12.jfif"
import prd13 from "../images/band13.jfif"
import prd14 from "../images/band14.jfif"
import prd15 from "../images/band15.jfif"
export default function Furniture() {
    return (
        <div>
            <div className="main">

                <div className="prd_row1">
                    <Product id="FitnessBand1" prdName="FitnessBand" img={prd1} price="Price : ₹10,820 " review="5.5" ></Product>
                    <Product id="FitnessBand2" prdName=" FitnessBand" img={prd2} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="FitnessBand3" prdName="FitnessBand" img={prd3} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="FitnessBand4" prdName="FitnessBand" img={prd4} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="FitnessBand5" prdName="FitnessBand" img={prd5} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="FitnessBand6" prdName="FitnessBand" img={prd6} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="FitnessBandr7" prdName="FitnessBand" img={prd7} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="FitnessBand8" prdName=" FitnessBand" img={prd8} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>
            <div className="main1">

                <div className="prd_row1">
                    <Product id="FitnessBand9" prdName=" FitnessBand" img={prd9} price=" ₹10,820  25% off" review="5.5" ></Product>
                    <Product id="FitnessBand10" prdName=" FitnessBand" img={prd10} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="FitnessBand11" prdName=" FitnessBand" img={prd11} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="FitnessBand12" prdName=" FitnessBand" img={prd12} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="FitnessBand13" prdName=" FitnessBand" img={prd13} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="FitnessBand14" prdName=" FitnessBand " img={prd14} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="FitnessBand15" prdName=" FitnessBand" img={prd15} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="FitnessBand16" prdName=" FitnessBand" img={prd1} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>

        </div>
    )
}
