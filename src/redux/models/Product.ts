import {attr, fk, Model} from "redux-orm";
import {setProductData} from "../actions/actions";
import { IProduct} from "../../entities/types";

class Product extends Model {
    static modelName = 'Product';

    static fields = {
        id: attr(),
        category_id: fk({
            to: 'Category',
            as: 'category',
            relatedName: 'products',
        }),
        description: attr(),
        name: attr(),
    };

    static reducer({type, payload}: { type: string, payload: any }, Product: any) {
        switch (type) {
            case setProductData.type: {
                const products = payload;
                if (!products.length) {
                    console.warn("Unable to create products");
                } else {
                    Product.all().delete()
                    products.forEach((product: IProduct | any) => {
                        Product.create(product);
                    });
                }
                break;
            }
            default:
                break;
        }
    }
}

export default Product