import React from 'react'
import "./Furniture.css"
import Product from "../Components/Product"
import prd1 from "../images/laptop1.jpeg"
import prd2 from "../images/laptop2.jpeg"
import prd3 from "../images/laptop3.jpeg"
import prd4 from "../images/laptop4.jpeg"
import prd5 from "../images/laptop5.jpeg"
import prd6 from "../images/laptop6.jpeg"
import prd7 from "../images/laptop7.jpeg"
import prd8 from "../images/laptop8.jpeg"
import prd9 from "../images/laptop9.jpeg"
import prd10 from "../images/laptop10.jpeg"
import prd11 from "../images/laptop11.jpeg"
import prd12 from "../images/laptop12.jpeg"
import prd13 from "../images/laptop13.jpeg"
import prd14 from "../images/laptop14.jpeg"
import prd15 from "../images/laptop15.jpeg"
export default function Furniture() {
    return (
        <div>
            <div className="main">

                <div className="prd_row1">
                    <Product id="laptop1" prdName="LENOVO idealpad 3" img={prd1} price="Price : ₹10,820 " review="5.5" ></Product>
                    <Product id="laptop2" prdName="lDELL inspiron Core" img={prd2} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="laptop3" prdName="HP 15s Ryzen" img={prd3} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="laptop4" prdName="ASUS Celeron" img={prd4} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="laptop5" prdName="LENOVO idealpad4" img={prd5} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="laptop6" prdName="DELL vostro core i3" img={prd6} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="laptopr7" prdName="Asus VIVO book" img={prd7} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="laptop8" prdName="Lenovo idealpad5" img={prd8} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>
            <div className="main1">

                <div className="prd_row1">
                    <Product id="laptop9" prdName="Lenovo 5580" img={prd9} price=" ₹10,820  25% off" review="5.5" ></Product>
                    <Product id="laptop10" prdName="Dell i35520" img={prd10} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="laptop11" prdName="ACER Aspire 5" img={prd11} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="laptop12" prdName="HP 15s core" img={prd12} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="laptop13" prdName="HP 15s core" img={prd13} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="laptop14" prdName="HP pavilion " img={prd14} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="laptop15" prdName="Dell vistro" img={prd15} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="laptop16" prdName="Asus TF" img={prd1} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>

        </div>
    )
}
