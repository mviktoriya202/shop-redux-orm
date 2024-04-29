import {createAsyncThunk} from "@reduxjs/toolkit";
import {setCategoryData, setCategoryError, setCategoryLoading} from "../../../../redux/actions/actions";
import axios from "axios";
import {ICategory, IRootState} from "../../../../entities/types";
import orm from "../../../../redux/orm";
import {api} from "../../../../redux/api";


export const getCategories = createAsyncThunk(
    'categories/fetch',
    async (_, {getState, dispatch}) => {
        try {
            dispatch(setCategoryLoading(true))
            dispatch(setCategoryError(false));
            const response = await axios.get(`${api}/Categories`);

            const categories = response.data;

            const state = getState() as IRootState;

            const session = orm.session(state.orm);
            categories.forEach((category: ICategory | any) => {
                session.Category.create(category);
            });
            dispatch(setCategoryData(categories));
            dispatch(setCategoryLoading(false))

            return categories;
        } catch (error) {
            console.error(`Error fetching category `, error);
            dispatch(setCategoryError(true));
            dispatch(setCategoryLoading(false));
            return null;
        }
    }
);


