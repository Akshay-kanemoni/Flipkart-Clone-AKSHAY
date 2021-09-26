// import "./Product.css"
// import Star from "@material-ui/icons/Star"
// import HeartIcon from '@material-ui/icons/Favorite'
// import Fassure from "../images/fassured.png"
// import { useState } from "react"
// import { useDispatch } from "react-redux"
// export default function Product1({ id, prdName, img, price, review, add, oldprice }) {
//     let dispatch =useDispatch();
//     let [glow,setGlow]=useState(false)
//     return (



//         <div className="stdiv">
//             <div><img className="add" src={add} />
//             </div>
//             <div className="prd">
//                 <div className="prd__img">
//                     <img className="img1" src={img} />
//                 </div>
//                 <span><strong>{prdName}</strong></span>
//                 <div className="prd__star">
//                     <span className="prd__review"><strong>{review} </strong></span><Star className="star" />
//                     <span className="prd__items">(1524)</span>

//                 </div>
//                 <div className="prd__price"><span>{price}</span>
//                     <span className="prd__oldprice">{oldprice}2255</span>
//                     <span className="fassured"><img src={Fassure} /></span>
//                 </div>
//                 <span className="prd__cart"><button className='prd4__btn' onClick= {()=> dispatch({type: "ADD_TO_CART" , item: {id: id, img : img, prdName : prdName,review : review ,price : price,Fassure:Fassure }})}>Add to Cart</button></span>
//             </div>

//             <div>
//                 <div onClick={glow ? ()=>setGlow(false):()=>setGlow(true)} onMouseEnter={() => setGlow(true)}><HeartIcon className={glow? "hearticon_1_on":"hearticon_1_off"} onClick={() => dispatch({ type: "REMOVE_WISH", id: id })}/></div>  
//                 <div onClick={glow ? ()=>setGlow(false):()=>setGlow(true)}><HeartIcon className={glow? "hearticon_2_on":"hearticon_2_off"} onClick= {()=> dispatch({type: "ADD_TO_WISH" , item: {id: id, img : img, prdName : prdName,review : review ,price : price,Fassure:Fassure }})}/></div>  

//             </div>



//         </div>
//     )



// }

import "./Product.css"
import Star from "@material-ui/icons/Star"
import HeartIcon from '@material-ui/icons/Favorite'
import Fassured from "../images/fassured.png"
import { useState } from "react"
import { useDispatch } from "react-redux"
export default function Product1({ id, prdName, img, price, review, add, oldprice }) {

    let [glow, setglow] = useState(false);
    let dispatch = useDispatch();


    return (



        <div className="stdiv">

            <div className="prd">
                <div className="prd__img">
                    <img className="img1" src={img} alt="img1" />
                </div>
                <span><strong>{prdName}</strong></span>
                <div className="prd__star">
                    <span className="prd__review"><strong>{review} </strong><Star className="star" /></span>
                    <span className="prd__items">(1524)</span>
                </div>
                <div className="prd__price"><span>{price}</span>
                    <span className="prd__oldprice">{oldprice}2255</span>
                    <span className="fassured"><img src={Fassured} alt="img2" /></span>
                </div>
                <span className="prd__cart"><button className='prd4__btn' onClick={() => dispatch({ type: "ADD_TO_CART", item: { id: id, img: img, prdName: prdName, review: review, price: price, } })}>Add to Cart</button></span>
            </div>
            <div>
                <div onClick={glow ? () => setglow(false) : () => setglow(true)} ><HeartIcon className={glow ? "HeartIcon_1_on" : "HeartIcon_1_off"} onClick={() => dispatch({ type: "REMOVE_WISH", id: id })} /></div>
                <div onClick={glow ? () => setglow(false) : () => setglow(true)}><HeartIcon className={glow ? "HeartIcon_2_on" : "HeartIcon_2_off"} onClick={() => dispatch({ type: "ADD_TO_WISH", item: { id: id, img: img, prdName: prdName, review: review, price: price } })} /></div>
            </div>
        </div>
    )



}