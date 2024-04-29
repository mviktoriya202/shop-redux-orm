import {attr, Model} from "redux-orm";
import {setCategoryData} from "../actions/actions";
import {ICategory} from "../../entities/types";

class Category extends Model {
    static modelName = 'Category';

    static fields = {
        id: attr(),
        name: attr(),
        parent_id: attr(),
    };

    static reducer({type, payload}: { type: string, payload: any }, Category: any) {
        switch (type) {
            case setCategoryData.type: {
                const categories = payload;
                if (!categories.length) {
                    console.warn("Unable to create categories");
                } else {
                    categories.forEach((category: ICategory | any) => {
                        Category.upsert(category);
                    });
                }
                break;
            }
            default:
                break;
        }
    }
}

export default Category