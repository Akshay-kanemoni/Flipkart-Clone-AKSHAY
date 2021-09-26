import React from 'react'
import "./Furniture.css"
import Product from "../Components/Product"
import prd1 from "../images/mobile1.jfif"
import prd2 from "../images/mobile2.jfif"
import prd3 from "../images/mobile3.jfif"
import prd4 from "../images/mobile4.jfif"
import prd5 from "../images/mobile5.jfif"
import prd6 from "../images/mobile6.jfif"
import prd7 from "../images/mobile7.jfif"
import prd8 from "../images/mobile8.jfif"
import prd9 from "../images/mobile9.jfif"
import prd10 from "../images/mobile10.jfif"
import prd11 from "../images/mobile11.jfif"
import prd12 from "../images/mobile12.jfif"
import prd13 from "../images/mobile13.jfif"
import prd14 from "../images/mobile14.jfif"
import prd15 from "../images/mobile15.jfif"
export default function Furniture() {
    return (
        <div>
            <div className="main">

                <div className="prd_row1">
                    <Product id="mobile1" prdName="Redmi" img={prd1} price="Price : ₹10,820 " review="5.5" ></Product>
                    <Product id="mobile2" prdName=" Redmi" img={prd2} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="mobile3" prdName="Redmi" img={prd3} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="mobile4" prdName="Oppo" img={prd4} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="mobile5" prdName="Oppo" img={prd5} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="mobile6" prdName="Oppo" img={prd6} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="mobiler7" prdName="honor" img={prd7} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="mobile8" prdName=" honor" img={prd8} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>
            <div className="main1">

                <div className="prd_row1">
                    <Product id="mobile9" prdName=" honor" img={prd9} price=" ₹10,820  25% off" review="5.5" ></Product>
                    <Product id="mobile10" prdName="Oneplus" img={prd10} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="mobile11" prdName=" Oneplus" img={prd11} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="mobile12" prdName=" Oneplus" img={prd12} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="mobile13" prdName="Vivo" img={prd13} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="mobile14" prdName=" Vivo " img={prd14} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="mobile15" prdName="vivo" img={prd15} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="mobile16" prdName="Redmi" img={prd1} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>

        </div>
    )
}
