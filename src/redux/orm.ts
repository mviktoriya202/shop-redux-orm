import {ORM} from 'redux-orm';
import Category from "./models/Category";
import Product from "./models/Product";
import History from "./models/History";
import Cart from "./models/Cart";


const orm = new ORM({
    stateSelector: state => state.orm,
});
orm.register(Category);
orm.register(Product)
orm.register(Cart)
orm.register(History)

export default orm;
