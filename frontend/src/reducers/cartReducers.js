import { CART_ADD_ITEM,
        CART_REMOVE_ITEM,
 } from "../constants/cartConstants";    
 

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch(action.type) {
        case CART_ADD_ITEM:
            const item = action.payload
            const existItem = state.cartItems.find((x) => x.product === item.product) // x.product is the id of the product
            if(existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => x.product === existItem.product ? item : x) // x.product is the id of the product
                }
            }
            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.product !== action.payload) // x.product is the id of the product
            }
            
        default:
            return state
    }
}

