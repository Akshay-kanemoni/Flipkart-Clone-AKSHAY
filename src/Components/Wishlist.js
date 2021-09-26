import React from 'react'
import './Cart.css'
import Image2 from '../images/cart.png'
import Location from '@material-ui/icons/PinDrop'
// import Product from "../Components/Product"
// import prd1 from "../images/furniture1.jpeg"
import { useSelector } from 'react-redux'
import Checkout from "../Components/Wishlistprd"
// import Fassure from "../images/fassured.png"
import { Link } from 'react-router-dom'

export default function Cart() {

    // let [enableCart , setEnableCart] = useState(false);
    let wish = useSelector(state => state.wish)
    let Checkoutproductdetails = wish.map(item => <Checkout id={item.id} prdName={item.prdName} price={item.price} review={item.review} img={item.img} />)
    return (
        <div className='cart'>
            <div className={wish.length > 0 ? "cart__master__On" : "cart__master__Off"}>
                <div className='cart__section__1'>
                    <div className='cart__section1__header'>
                        <div className='cart__count'>
                            My Cart ({wish.length})
                        </div>
                        <div className='cart__address'>
                            <span><Location /> Deliver to</span>
                            <select>
                                <option>Mahabubnagar - 509001</option>
                                <option>Hyderabad - 500008</option>
                            </select>
                        </div>
                    </div>
                    <div className='cart__section1__body'>
                        {Checkoutproductdetails}
                    </div>
                    <div className='cart__place__order'>
                        <button>PLACE ORDER</button>
                    </div>
                </div>
            </div>
            <div className={wish.length > 0 ? "empty__cart__Off" : "empty__cart__On"}>
                <div className='cart__name'>
                    <p>My wishlist</p>
                </div>
                <div className='empty_cart_details'>
                    <img src={Image2} alt="img1" />
                    <p>Your Wishlist is empty!</p>
                    <p>Add items to it now.</p>
                    <Link to='/fashion'><button>Login</button></Link>
                </div>
            </div>
        </div>
    )
}
