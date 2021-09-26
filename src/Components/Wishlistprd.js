import './Checkout.css'
import Star from "@material-ui/icons/Star"
import { useDispatch } from "react-redux"
import Fassured from "../images/fassured.png"
export default function Checkout({ id, add, prdName, img, price, review, oldprice }) {
    let dispatch = useDispatch();
    return (

        <div className="stdiv">
            <div><img className="add" src={add} alt="img1" />
            </div>
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
                        <span className="fassured"><img src={Fassured} alt="img2" /></span>
                    </div>
                    <span className="checkout__cart"><button className='prd4__btn' onClick={() => dispatch({ type: "REMOVE_WISH", id: id })} >Remove from Wishlist</button></span>
                    <br></br>
                    <span className="checkout__cart"><button className='prd4__btn' onClick={() => dispatch({ type: "ADD_TO_CART", item: { id: id, img: img, prdName: prdName, review: review, price: price } })} >Add to Cart</button></span>

                </div>

            </div>





        </div>

    )
}
