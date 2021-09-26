import './Payment.css'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
export default function Payement() {
    let history = useHistory()
    let dispatch = useDispatch()
    const paymentDone = () => {
        alert("Your Payment is Done!!😁😉 Happy Shopping😆😃")
        history.push("/")
        dispatch({ type: "EMPTY_BASKET" })



    }

    return (
        <div className='cart'>
            <div className='cart__home'>

                <div className='cart__details'>
                    <span className='cart_details_title'>Your Items</span><br></br>
                    <span className='cart__items'>Shipping Address:</span>
                    <span>7-2-18/d2,New prem nagar, Hyderabad</span><br></br>
                    <div className="mode">
                        <p>Choose the payement method</p>
                        <p><input type="radio" name="payment" /> Google pay</p>
                        <p><input type="radio" name="payment" /> UPI</p>
                        <p><input type="radio" name="payment" /> AMAZON PAY</p>
                        <p><input type="radio" name="payment" /> DEBIT CARD</p>
                        <p><input type="radio" name="payment" /> CREDT CARD</p>
                        <button className="button_payment" onClick={paymentDone}>BUY PRODUCTS</button>

                    </div>
                </div>
            </div>
            {/* <div>
                {checkoutProductDetails}
            </div> */}

        </div>
    );
}