import React from 'react'
import "./Furniture.css"
import Product from "../Components/Product"
import prd1 from "../images/earphones1.jfif"
import prd2 from "../images/earphones2.jfif"
import prd3 from "../images/earphones3.jfif"
import prd4 from "../images/earphones4.jfif"
import prd5 from "../images/earphones5.jfif"
import prd6 from "../images/earphones6.jfif"
import prd7 from "../images/earphones7.jfif"
import prd8 from "../images/earphones8.jfif"
import prd9 from "../images/earphones9.jfif"
import prd10 from "../images/earphones10.jfif"
import prd11 from "../images/earphones11.jfif"
import prd12 from "../images/earphones12.jfif"
import prd13 from "../images/earphones13.jfif"
import prd14 from "../images/earphones14.jfif"
import prd15 from "../images/earphones15.jfif"
export default function Furniture() {
    return (
        <div>
            <div className="main">

                <div className="prd_row1">
                    <Product id="Wireless Neckband1" prdName="Wireless Neckband" img={prd1} price="Price : ₹10,820 " review="5.5" ></Product>
                    <Product id="Wireless Neckband2" prdName=" Wireless Neckband" img={prd2} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Wireless Neckband3" prdName="Wireless Neckband" img={prd3} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Wireless Neckband4" prdName="Wireless Neckband" img={prd4} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Wireless Neckband5" prdName="Wireless Neckband" img={prd5} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Wireless Neckband6" prdName="Wireless Neckband" img={prd6} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Wireless Neckbandr7" prdName="Wireless Neckband" img={prd7} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Wireless Neckband8" prdName=" Wireless Neckband" img={prd8} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>
            <div className="main1">

                <div className="prd_row1">
                    <Product id="Wireless Neckband9" prdName=" Wireless Neckband" img={prd9} price=" ₹10,820  25% off" review="5.5" ></Product>
                    <Product id="Wireless Neckband10" prdName=" Wireless Neckband" img={prd10} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Wireless Neckband11" prdName=" Wireless Neckband" img={prd11} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Wireless Neckband12" prdName=" Wireless Neckband" img={prd12} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Wireless Neckband13" prdName=" Wireless Neckband" img={prd13} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Wireless Neckband14" prdName=" Wireless Neckband " img={prd14} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Wireless Neckband15" prdName=" Wireless Neckband" img={prd15} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Wireless Neckband16" prdName=" Wireless Neckband" img={prd1} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>

        </div>
    )
}
