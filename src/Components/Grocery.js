import React from 'react'
import "./Furniture.css"
import Product from "../Components/Product"
import prd1 from "../images/grocery1.jpeg"
import prd2 from "../images/grocery2.jpeg"
import prd3 from "../images/grocery3.jpeg"
import prd4 from "../images/grocery4.jpeg"
import prd5 from "../images/grocery5.jpeg"
import prd6 from "../images/grocery6.jpeg"
import prd7 from "../images/grocery7.jpeg"
import prd8 from "../images/grocery8.jpeg"
import prd9 from "../images/grocery9.jpeg"
import prd10 from "../images/grocery10.jpeg"
import prd11 from "../images/grocery11.jpeg"
import prd12 from "../images/grocery12.jpeg"
import prd13 from "../images/grocery13.jpeg"
import prd14 from "../images/grocery14.jpeg"
import prd15 from "../images/grocery15.jpeg"
export default function Furniture() {
    return (
        <div>
            <div className="main">

                <div className="prd_row1">
                    <Product id="Grocery1" prdName="Madhur sugar" img={prd1} price="Price : ₹10,820 " review="5.5" ></Product>
                    <Product id="Grocery2" prdName="Thums up" img={prd2} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Grocery3" prdName="Pillsburry chakki atta" img={prd3} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Grocery4" prdName="Farmley Cashew" img={prd4} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Grocery5" prdName="ORICE CHIPS" img={prd5} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Grocery6" prdName="Parle's chips" img={prd6} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Groceryr7" prdName="PARLE Chatkeens" img={prd7} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Grocery8" prdName="BINGO Chips" img={prd8} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>
            <div className="main1">

                <div className="prd_row1">
                    <Product id="Grocery9" prdName="Parachute Aloevera" img={prd9} price=" ₹10,820  25% off" review="5.5" ></Product>
                    <Product id="Grocery10" prdName="Dabur Anmol" img={prd10} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Grocery11" prdName="Navaratna Ayurvedic oil" img={prd11} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Grocery12" prdName="Clinic plus+" img={prd12} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Grocery13" prdName="Indulkeha Bring raj Oil" img={prd13} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Grocery14" prdName="Parachute Coconut Oil" img={prd14} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Grocery15" prdName="SunSilk " img={prd15} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Grocery16" prdName="Sugar" img={prd1} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>

        </div>
    )
}
