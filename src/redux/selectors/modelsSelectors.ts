import {createSelector} from "redux-orm";
import orm from "../orm";
import {IState} from "../../entities/types";

export const selectCategories = createSelector(orm, (session) => {
    return session.Category.all().toModelArray().map((item: any) => item.ref);
})

export const selectProducts = createSelector(orm, (session) => {
    return session.Product.all().toModelArray().map((item: any) => item.ref);
})

export const selectCartItems = createSelector(orm, (session) => {
    return session.Cart.all().toModelArray().map((item: any) => item.ref);
})

export const selectHistoryItems = createSelector(orm, (session) => {
    return session.History.all().toModelArray().map((item: any) => item.ref);
})

export const prodLoading = (state: { State: IState }) => state.State.productLoading
export const prodError = (state: { State: IState }) => state.State.productError
export const catLoading = (state: { State: IState }) => state.State.categoryLoading
export const catError = (state: { State: IState }) => state.State.categoryError
export const hasButton = (state: { State: IState }) => state.State.showButton
export const hasBanner = (state: { State: IState }) => state.State.showBanner
