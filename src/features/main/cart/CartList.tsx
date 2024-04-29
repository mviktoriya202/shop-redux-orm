import CartItem from "../../../widgets/CartItem";
import Button from "../../../shared/Button";
import {Link} from "react-router-dom";
import {IProduct} from "../../../entities/types";
import {useSelector} from "react-redux";
import {deleteCartItem, updateCartItem} from "../../../redux/actions/actions";
import {selectCartItems} from "../../../redux/selectors/modelsSelectors";
import {useAppDispatch} from "../../../redux/hooks";

function CartList() {
    // @ts-ignore
    const dispatch = useAppDispatch();

    const cartItems: IProduct[] = useSelector(selectCartItems);

    const handleRemove = (id: number): void => {
        // @ts-ignore
        dispatch(deleteCartItem(id));
    }

    const handleEdit = (data: IProduct): void => {
        // @ts-ignore
        dispatch(updateCartItem(data));
    }

    return (
        <div className="border-backgroundPrimary border rounded-[20px]">
            <div
                className='w-full max-700:flex-col  px-[58px] border-backgroundPrimary border-b rounded-[20px] flex items-center justify-between'>
                {
                    cartItems.length > 0 && (
                        <div>
                            <h1 className='font-raleway  text-black text-lg font-bold leading-[23.48px] text-left'>
                               Товары
                            </h1>
                            <p className='text-base text-black font-normal leading-[22.4px] text-left'>
                                Стоимость корзины: <br/>
                                <span className='text-xl font-bold leading-[23.48px] text-left'>
                                 {cartItems.reduce((previousValue, curr) => {
                                     return previousValue + (curr.stock * curr.count || 0);
                                 }, 0)} ₽</span>
                            </p>
                            <Link to='/delivery'>
                                <Button title='Оформить' size='lg'/>
                            </Link>
                        </div>
                    )
                }
                <div className=' p-2 flex items-center justify-between'>
                    <img src='/images/bag-1.png' alt='bag-1' width='94' height='100'/>
                    <img src='/images/bag-2.png' alt='bag-2' width='57' height='52'/>
                    <img src='/images/bag-3.png' alt='bag-3' width='62' height='58'/>
                </div>
            </div>
            <div className="p-[50px] flex flex-col gap-[20px]">
                {cartItems.map((item: IProduct) => {
                    return <CartItem key={item.id} OnEdit={handleEdit} OnDelete={handleRemove} {...item}/>
                })}</div>
        </div>
    )
}

export default CartList