import { createStore } from "redux";

let intialState = {
    basket: [],
    user: null,
    wish: []

}

function reducer(state = intialState, action) {

    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, basket: [...state.basket, action.item] }

        case "REMOVE_PRODUCT":
            let newBasket = [...state.basket]
            let index = newBasket.findIndex(item => item.id === action.id);

            if (index >= 0) {
                newBasket.splice(index, 1);
            }

            else {
                console.warn(`can't remove product id ${action.id} as it is not in baskets!`)
            }
            return { ...state, basket: newBasket }

        case "ADD_TO_WISH":
            return { ...state, wish: [...state.wish, action.item] }

        case "REMOVE_WISH":
            let newwishBasket = [...state.wish]
            let wishindex = newwishBasket.findIndex(item => item.id === action.id);

            if (wishindex >= 0) {
                newwishBasket.splice(wishindex, 1);
            }

            else {
                console.warn(`can't remove product id ${action.id} as it is not in baskets!`)
            }
            return { ...state, wish: newwishBasket }

        case "SET_USER":
            return { ...state, user: action.user }
        case 'EMPTY_BASKET':
            return { ...state, basket: [] }
        default:
            return state;

    }
}

let flipkartstore = createStore(reducer);

export default flipkartstore;
