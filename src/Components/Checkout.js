import './Checkout.css'
import Star from "@material-ui/icons/Star"
import { useDispatch } from "react-redux"
import Fassure from "../images/fassured.png"
export default function Checkout({ id, add, prdName, img, price, review, oldprice }) {
    let dispatch = useDispatch();
    return (

        <div className="stdiv">

            <div className="checkout">
                <div className="checkout__img">
                    <img className="img1" src={img} alt="img2" />
                </div>
                <div className="section2">
                    <span><strong>{prdName}</strong></span>
                    <div className="checkout__star">
                        <span className="checkout__review"><strong>{review} </strong></span><Star className="star" />
                        <span className="checkout__items">(1524)</span>

                    </div>
                    <div className="checkout__price"><span>{price}</span>
                        <span className="checkout__oldprice">{oldprice}2255</span>
                        <span className="fassured"><img src={Fassure} alt="img3" /></span>
                    </div>
                    <span className="checkout__cart"><button className='prd4__btn' onClick={() => dispatch({ type: "REMOVE_PRODUCT", id: id })} >Remove from Cart</button></span>
                </div>
            </div>





        </div>

    )
}
