import {
    IS_BANNER_VISIBLE,
    IS_BUTTON_VISIBLE,
    SET_CATEGORY_ERROR,
    SET_CATEGORY_LOADING,
    SET_PRODUCT_ERROR, SET_PRODUCT_LOADING
} from "../actions/actions";

const initialState = {
    categoryLoading: false,
    categoryError: false,
    productError: false,
    productLoading: false,
    showButton:true,
    showBanner:false
};

const stateReducer = (state = initialState, action: { type: string; payload: any; }) => {
    switch (action.type) {
        case SET_CATEGORY_LOADING:
            return {
                ...state,
                categoryLoading: action.payload,
            };
        case SET_CATEGORY_ERROR:
            return {
                ...state,
                categoryError: action.payload,
            };
        case SET_PRODUCT_LOADING:
            return {
                ...state,
                productLoading: action.payload,
            };
        case SET_PRODUCT_ERROR:
            return {
                ...state,
                productError: action.payload,
            };
        case IS_BUTTON_VISIBLE:
            return {
                ...state,
                showButton: action.payload,
            };
        case IS_BANNER_VISIBLE:
            return {
                ...state,
                showBanner: action.payload,
            };
        default:
            return state;
    }
};

export default stateReducer;
