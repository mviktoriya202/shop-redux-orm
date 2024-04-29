import { createAction } from "@reduxjs/toolkit";

// Action types
export const SET_CATEGORY_LOADING = 'state/setCategoryLoading';
export const SET_CATEGORY_ERROR = 'state/setCategoryError';
export const SET_PRODUCT_LOADING = 'state/setProductLoading';
export const SET_PRODUCT_ERROR = 'state/setProductError';
export const IS_BUTTON_VISIBLE = 'state/isButtonVisible';
export const IS_BANNER_VISIBLE = 'state/isBannerVisible';

// Create actions using createAction
export const createCartItem = createAction("models/cart/create");
export const updateCartItem = createAction("models/cart/update");
export const deleteCartItem = createAction("models/cart/delete");
export const setCategoryData = createAction("models/category/set");
export const setProductData = createAction("models/product/set");
export const setHistoryData = createAction("models/history/set",(payload)=>({
    payload
}));
export const deleteAllCartItems = createAction("models/cart/deleteAll");

export const setCategoryLoading = createAction(SET_CATEGORY_LOADING, (loading) => ({
    payload: loading,
}));

export const isButtonVisible = createAction(IS_BUTTON_VISIBLE,(payload)=>({
    payload
}));

export const isBannerVisible = createAction(IS_BANNER_VISIBLE,(payload)=>({
    payload
}));

export const setCategoryError = createAction(SET_CATEGORY_ERROR, (error) => ({
    payload: error,
}));

export const setProductLoading = createAction(SET_PRODUCT_LOADING, (loading) => ({
    payload: loading,
}));

export const setProductError = createAction(SET_PRODUCT_ERROR, (error) => ({
    payload: error,
}));
