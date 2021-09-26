import React from 'react'
import "./Furniture.css"
import Product from "../Components/Product"
import prd1 from "../images/tv1.jpeg"
import prd2 from "../images/tv2.jpeg"
import prd3 from "../images/tv3.jpeg"
import prd4 from "../images/tv4.jpeg"
import prd5 from "../images/tv5.jpeg"
import prd6 from "../images/tv6.jpeg"
import prd7 from "../images/tv7.jpeg"
import prd8 from "../images/tv8.jpeg"
import prd9 from "../images/tv1.jpeg"
import prd10 from "../images/tv3.jpeg"
import prd11 from "../images/tv1.jpeg"
import prd12 from "../images/tv2.jpeg"
import prd13 from "../images/tv3.jpeg"
import prd14 from "../images/tv4.jpeg"
import prd15 from "../images/tv5.jpeg"
export default function Furniture() {
    return (
        <div>
            <div className="main">

                <div className="prd_row1">
                    <Product id="Tv1" prdName="Nokia 80 cm (32 inch) HD Ready LED Smart Android TV " img={prd1} price="Price : ₹10,820 " review="5.5" ></Product>
                    <Product id="Tv2" prdName="SAMSUNG The Frame  QLED Ultra HD (4K) Smart TV " img={prd2} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Tv3" prdName="Mi 4A PRO 80 cm (32 inch) HD Ready LED Smart Android TV" img={prd3} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Tv4" prdName="SAMSUNG The Frame  QLED Ultra HD (4K) Smart TV " img={prd4} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Tv5" prdName="Nokia 80 cm (32 inch) HD Ready LED Smart Android TV with " img={prd5} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Tv6" prdName="Mi 4A PRO 80 cm (32 inch) HD Ready LED Smart Android TV" img={prd6} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Tvr7" prdName="SAMSUNG The Frame  QLED Ultra HD (4K) Smart TV " img={prd7} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Tv8" prdName="Nokia 80 cm (32 inch) HD Ready LED Smart Android TV " img={prd8} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>
            <div className="main1">

                <div className="prd_row1">
                    <Product id="Tv9" prdName="Mi 4A PRO 80 cm (32 inch) HD Ready LED Smart Android TV" img={prd9} price=" ₹10,820  25% off" review="5.5" ></Product>
                    <Product id="Tv10" prdName="SAMSUNG The Frame  QLED Ultra HD (4K) Smart TV " img={prd10} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Tv11" prdName="Nokia 80 cm (32 inch) HD Ready LED Smart Android TV " img={prd11} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Tv12" prdName="SAMSUNG The Frame  QLED Ultra HD (4K) Smart TV " img={prd12} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Tv13" prdName="Mi 4A PRO 80 cm (32 inch) HD Ready LED Smart Android TV" img={prd13} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Tv14" prdName="Nokia 80 cm (32 inch) HD Ready LED Smart Android TV  " img={prd14} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="Tv15" prdName="SAMSUNG The Frame  QLED Ultra HD (4K) Smart TV " img={prd15} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="Tv16" prdName="Nokia 80 cm (32 inch) HD Ready LED Smart Android TV " img={prd1} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>

        </div>
    )
}
