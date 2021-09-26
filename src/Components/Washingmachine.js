import React from 'react'
import "./Furniture.css"
import Product from "../Components/Product"
import prd1 from "../images/washing1.jpeg"
import prd2 from "../images/washing2.jpeg"
import prd3 from "../images/washing3.jpeg"
import prd4 from "../images/washing4.jpeg"
import prd5 from "../images/washing5.jpeg"
import prd6 from "../images/washing6.jpeg"
import prd7 from "../images/washing7.jpeg"
import prd8 from "../images/washing8.jpeg"
import prd9 from "../images/washing1.jpeg"
import prd10 from "../images/washing3.jpeg"
import prd11 from "../images/washing1.jpeg"
import prd12 from "../images/washing2.jpeg"
import prd13 from "../images/washing3.jpeg"
import prd14 from "../images/washing4.jpeg"
import prd15 from "../images/washing5.jpeg"
export default function Furniture() {
    return (
        <div>
            <div className="main">

                <div className="prd_row1">
                    <Product id="washing1" prdName="Whirlpool 7.5 kg 5 Star, " img={prd1} price="Price : ₹10,820 " review="5.5" ></Product>
                    <Product id="washing2" prdName="SAMSUNG 6.5 kg Diamond Drum " img={prd2} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="washing3" prdName="IFB 6 kg 5 Star Aqua Energie, Laundry Add, Tub Clean" img={prd3} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="washing4" prdName="SAMSUNG 6.5 kg Diamond Drum " img={prd4} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="washing5" prdName="Whirlpool 7.5 kg 5 Star, with " img={prd5} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="washing6" prdName="IFB 6 kg 5 Star Aqua Energie, Laundry Add, Tub Clean" img={prd6} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="washingr7" prdName="SAMSUNG 6.5 kg Diamond Drum " img={prd7} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="washing8" prdName="Whirlpool 7.5 kg 5 Star, " img={prd8} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>
            <div className="main1">

                <div className="prd_row1">
                    <Product id="washing9" prdName="IFB 6 kg 5 Star Aqua Energie, Laundry Add, Tub Clean" img={prd9} price=" ₹10,820  25% off" review="5.5" ></Product>
                    <Product id="washing10" prdName="SAMSUNG 6.5 kg Diamond Drum " img={prd10} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="washing11" prdName="Whirlpool 7.5 kg 5 Star, " img={prd11} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="washing12" prdName="SAMSUNG The Frame  QLED Ultra HD (4K) Smart washing " img={prd12} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="washing13" prdName="IFB 6 kg 5 Star Aqua Energie, Laundry Add, Tub Clean" img={prd13} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="washing14" prdName="Whirlpool 7.5 kg 5 Star,  " img={prd14} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                <div className="prd_row2">
                    <Product id="washing15" prdName="SAMSUNG 6.5 kg Diamond Drum " img={prd15} price=" Price : ₹ 5580" review="5.5" ></Product>
                    <Product id="washing16" prdName="Whirlpool 7.5 kg 5 Star, " img={prd1} price=" Price : ₹ 5580" review="5.5" ></Product>
                </div>
                


            </div>

        </div>
    )
}
