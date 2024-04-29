import CartList from "../features/main/cart/CartList";
import {deleteAllCartItems, isBannerVisible} from "../redux/actions/actions";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {IProduct} from "../entities/types";
import {selectCartItems} from "../redux/selectors/modelsSelectors";

function Cart() {
    const dispatch = useDispatch()
    const cartItems: IProduct[] = useSelector(selectCartItems);

    const handleRemoveAll = () => {
        dispatch(deleteAllCartItems())
    }


    useEffect(() => {
        dispatch(isBannerVisible(true))
    }, [dispatch]);
    return (
        <section className="w-full">
            <div className="flex items-center pb-[20px]">
                <h1 className='font-raleway  text-black text-lg font-bold leading-[23.48px] text-left'>
                    Корзина
                </h1>
                {cartItems.length > 0 && (
                    <span
                        onClick={handleRemoveAll}
                        className='text-mainAccentLight text-xs font-semibold leading-[15.32px] text-center ml-16 cursor-pointer'>Очистить корзину</span>
                )}
            </div>
            <CartList/>
        </section>
    )
}

export default Cart;