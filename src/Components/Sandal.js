import React from 'react'
import "./Furniture.css"
import Product from "../Components/Product"
import prd1 from "../images/sandal1.jpeg"
import prd2 from "../images/sandal2.jpeg"
import prd3 from "../images/sandal3.jpeg"
import prd4 from "../images/sandal4.jpeg"
import prd5 from "../images/sandal5.jpeg"
import prd6 from "../images/sandal6.jpeg"
import prd7 from "../images/sandal7.jpeg"
import prd8 from "../images/sandal8.jpeg"
import prd9 from "../images/sandal9.jpeg"
import prd10 from "../images/sandal10.jpeg"
import prd11 from "../images/sandal11.jpeg"
import prd12 from "../images/sandal12.jpeg"
import prd13 from "../images/sandal13.jpeg"
import prd14 from "../images/sandal14.jpeg"
import prd15 from "../images/sandal15.jpeg"
export default function Furniture() {
    return (
        <div>
            <div className="main">

                <div className="prd_row1">
                    <Product id="sparx sandal1" prdName="sparx sandal" img={prd1} price="Price : ₹10,820 " review="5.5" ></Product>
                    <Product id="sparx sandal2" prdName="sparx sandal" img={prd2} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="sparx sandal3" prdName="sparx sandal" img={prd3} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="sparx sandal4" prdName="sparx sandal" img={prd4} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="sparx sandal5" prdName="sparx sandal" img={prd5} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="sparx sandal6" prdName="sparx sandal" img={prd6} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="sparx sandalr7" prdName="sparx sandal" img={prd7} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="sparx sandal8" prdName="sparx sandal" img={prd8} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>
            <div className="main1">

                <div className="prd_row1">
                    <Product id="sparx sandal9" prdName="sparx sandal" img={prd9} price=" ₹10,820  25% off" review="5.5" ></Product>
                    <Product id="sparx sandal10" prdName="sparx sandal" img={prd10} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="sparx sandal11" prdName="sparx sandal" img={prd11} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="sparx sandal12" prdName="sparx sandal" img={prd12} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="sparx sandal13" prdName="sparx sandal" img={prd13} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="sparx sandal14" prdName="sparx sandal " img={prd14} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="sparx sandal15" prdName="sparx sandal" img={prd15} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="sparx sandal16" prdName="sparx sandal" img={prd1} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>

        </div>
    )
}
