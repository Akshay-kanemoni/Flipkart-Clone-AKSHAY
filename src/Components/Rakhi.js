import React from 'react'
import "./Furniture.css"
import Product from "../Components/Product"
import prd1 from "../images/rakhi1.jpeg"
import prd2 from "../images/rakhi2.jpeg"
import prd3 from "../images/rakhi3.jpeg"
import prd4 from "../images/rakhi4.jpeg"
import prd5 from "../images/rakhi5.jpeg"
import prd6 from "../images/rakhi6.jpeg"
import prd7 from "../images/rakhi7.jpeg"
import prd8 from "../images/rakhi8.jpeg"
import prd9 from "../images/rakhi9.jpeg"
import prd10 from "../images/rakhi10.jpeg"
import prd11 from "../images/rakhi11.jpeg"
import prd12 from "../images/rakhi12.jpeg"
import prd13 from "../images/rakhi13.jpeg"
import prd14 from "../images/rakhi14.jpeg"
import prd15 from "../images/rakhi15.jpeg"
export default function Furniture() {
    return (
        <div>
            <div className="main">

                <div className="prd_row1">
                    <Product id="Rakhi1" prdName="Rakhi" img={prd1} price=" ₹10,820 " oldprice="2255" review="5.5" ></Product>
                    <Product id="Rakhi2" prdName="Rakhi" img={prd2} price="  ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Rakhi3" prdName="Rakhi" img={prd3} price="  ₹ 5580" review="5.5" ></Product>
                    <Product id="Rakhi4" prdName="Rakhi" img={prd4} price="  ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Rakhi5" prdName="Rakhi" img={prd5} price="  ₹ 5580" review="5.5" ></Product>
                    <Product id="Rakhi6" prdName="Rakhi" img={prd6} price="  ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Rakhir7" prdName="Rakhi" img={prd7} price="  ₹ 5580" review="5.5" ></Product>
                    <Product id="Rakhi8" prdName="Rakhi" img={prd8} price="  ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>
            <div className="main1">

                <div className="prd_row1">
                    <Product id="Rakhi9" prdName="Rakhi" img={prd9} price=" ₹10,820  25% off" review="5.5" ></Product>
                    <Product id="Rakhi10" prdName="Rakhi" img={prd10} price="  ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Rakhi11" prdName="Rakhi" img={prd11} price="  ₹ 5580" review="5.5" ></Product>
                    <Product id="Rakhi12" prdName="Rakhi" img={prd12} price="  ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Rakhi13" prdName="Rakhi" img={prd13} price="  ₹ 5580" review="5.5" ></Product>
                    <Product id="Rakhi14" prdName="Rakhi " img={prd14} price="  ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Rakhi15" prdName="Rakhi" img={prd15} price="  ₹ 5580" review="5.5" ></Product>
                    <Product id="Rakhi16" prdName="Rakhi" img={prd1} price="  ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>

        </div>
    )
}
