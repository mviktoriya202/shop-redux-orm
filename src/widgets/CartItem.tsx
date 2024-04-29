import {LuTrash2} from "react-icons/lu";
import {ICartItem} from "../entities/types";


function CartItem({description, id, name,category_id, OnEdit, OnDelete, count=1,price,stock,image_url}: ICartItem) {

    const handleAdd = () => {
        let newCount = count++
        OnEdit({price, stock,image_url, id, name, description,category_id, count:newCount})
    }
    const handleRemove = () => {
        if (count > 1) {
            let newCount = count--
            OnEdit({price, stock,image_url,id, name, description,category_id, count:newCount})
        }
    }

    return (
        <div
            className='flex max-700:flex-col max-700:items-center max-700:h-auto gap-[20px] w-full justify-between items-start h-[100px] border-b border-backgroundPrimary pb-[20px]'>
            <div className='flex items-center justify-between'>
                <img src={image_url ? image_url :"/images/cart-item.png"} alt="cart-item" className='h-[60px]'/>
                <p className='text-base font-normal leading-[22.4px] text-left '>{name}</p>
            </div>
            <div
                className='border-backgroundPrimary border p-[12px] rounded-[35px] flex  justify-between items-center gap-4'>
                <button onClick={handleRemove} className='w-[20px] h-[20px] text-backgroundPrimary'>-</button>
                <span>{count}</span>
                <button onClick={handleAdd} className='w-[20px] h-[20px] text-backgroundPrimary'>+</button>
            </div>
            <div className='flex items-center justify-between gap-4'>
                <p className='text-xl font-semibold leading-[26px] text-left text-primary'>от {stock && stock}₽</p>
                <p className='text-textSecondary text-left'>{price && price} ₽<span className='text-mainAccentLight'> 0%</span>
                </p>
            </div>
            <button onClick={() => {
                OnDelete(id)
            }}>
                <LuTrash2 size={14} className='text-backgroundPrimary'/>
            </button>
        </div>
    )
}

export default CartItem;