import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IProduct, IRootState} from "../../../../entities/types";
import orm from "../../../../redux/orm";
import {api} from "../../../../redux/api";
import {
    isButtonVisible,
    setProductData,
    setProductError,
    setProductLoading,
} from "../../../../redux/actions/actions";

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (params: { range?: string; category_id?: number }, { getState, dispatch }) => {
        try {
            dispatch(setProductLoading(true));

            // Fetch products
            const url = `${api}/Products`;
            const queryParams: any = {};

            if (params.range !== undefined) {
                queryParams.range = params.range;
            }

            if (params.category_id !== undefined) {
                queryParams.filter = `{"category_id":"${params.category_id}"}`;
            }

            const queryString = new URLSearchParams(queryParams).toString();
            const response = await axios.get(`${url}?${queryString}`);
            const products = response.data;

            const state = getState() as IRootState;
            const session = orm.session(state.orm);

            const productPromises = products.map(async (product: IProduct) => {
                const imageResponse = await axios.get(`${api}/ProductImages?filter={"product_id":${product.id}}`);
                const imageUrl = imageResponse.data && imageResponse.data.length > 0 ? imageResponse.data[0].image_url : '';
                const priceResponse = await axios.get(`${api}/ProductVariations?filter={"product_id":${product.id}}`);
                const price = priceResponse.data && priceResponse.data.length > 0 ? priceResponse.data[0].price : 0;
                const stock = priceResponse.data && priceResponse.data.length > 0 ? priceResponse.data[0].stock : 0;

                const mergedProduct = {
                    ...product,
                    image_url: imageUrl,
                    price,
                    stock
                };

                // @ts-ignore
                session.Product.create(mergedProduct);

                return mergedProduct;
            });

            const mergedProducts = await Promise.all(productPromises);

            // @ts-ignore
            dispatch(setProductData(mergedProducts));

            if (!products.length || mergedProducts.length === session.Product.all().toModelArray().map((item: any) => item.ref).length / 2) {
                dispatch(isButtonVisible(false));
            } else {
                dispatch(isButtonVisible(true));
            }

            dispatch(setProductLoading(false));
            return mergedProducts;

        } catch (error) {
            dispatch(setProductError(true));
            dispatch(setProductLoading(false));
            console.error(`Error fetching products:`, error);
            return null;
        }
    }
);
