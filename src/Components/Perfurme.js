import React from 'react'
import "./Furniture.css"
import Product from "../Components/Product"
import prd1 from "../images/set1.jpeg"
import prd2 from "../images/set2.jpeg"
import prd3 from "../images/set3.jpeg"
import prd4 from "../images/set4.jpeg"
import prd5 from "../images/set5.jpeg"
import prd6 from "../images/set6.jpeg"
import prd7 from "../images/set7.jpeg"
import prd8 from "../images/set8.jpeg"
import prd9 from "../images/set9.jpeg"
import prd10 from "../images/set10.jpeg"
import prd11 from "../images/set11.jpeg"
import prd12 from "../images/set12.jpeg"
import prd13 from "../images/set13.jpeg"
import prd14 from "../images/set14.jpeg"
import prd15 from "../images/set15.jpeg"
export default function Furniture() {
    return (
        <div>
            <div className="main">

                <div className="prd_row1">
                    <Product id="per1" prdName="AXE Dark Temptation 150 ml (Pack of 2) and Pulse 150 ml Deodorant" img={prd1} price="Price : ₹10,820 " review="5.5" ></Product>
                    <Product id="per2" prdName="AXE Dark Temptation 150 ml (Pack of 2) and Pulse 150 ml Deodorant" img={prd2} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="per3" prdName="AXE Dark Temptation 150 ml (Pack of 2) and Pulse 150 ml Deodorant" img={prd3} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="per4" prdName="AXE Dark Temptation 150 ml (Pack of 2) and Pulse 150 ml Deodorant" img={prd4} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="per5" prdName="AXE Ice Chill Collection For Men" img={prd5} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="per6" prdName="AXE Ice Chill Collection For Men" img={prd6} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="perr7" prdName="AXE Deodorant " img={prd7} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="per8" prdName="AXE Deodorant V" img={prd8} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>
            <div className="main1">

                <div className="prd_row1">
                    <Product id="per9" prdName="AXE Ice Chill Collection For Men " img={prd9} price=" ₹10,820  25% off" review="5.5" ></Product>
                    <Product id="per10" prdName="AXE Deodorant " img={prd10} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="per11" prdName="RoyalOak Engineered Wood Shoe Rack" img={prd11} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="per12" prdName="AXE Deodorant " img={prd12} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="per13" prdName="AXE Ice Chill Collection For Men" img={prd13} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="per14" prdName="AXE Deodorant " img={prd14} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="per15" prdName="FurnitureKraft Nancy Metal King Bed" img={prd15} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="per16" prdName="AXE Ice Chill Collection For Men" img={prd1} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>

        </div>
    )
}
