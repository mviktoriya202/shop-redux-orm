import {IOrder} from "../entities/types";

function OrderItem({productName, date, count, address,image_url,stock}: IOrder) {
    return (
        <article
            className='flex gap-[10px] m-[10px] max-w-[400px] flex-col justify-between p-[20px] rounded-[32px] border border-backgroundPrimary'>
            <div className='flex gap-[10px] h-[100px]'>
                <img src={image_url ? image_url : "/images/product.png"} alt="order" className='h-[100px]'/>
                <p className='flex flex-col justify-between gap-[10px]'>
                    <span
                        className='font-raleway text-lg font-semibold leading-4 text-lef '>{productName.length > 40 ? `${productName.slice(0, 40)}...` : productName}</span>
                    <span className='font-raleway text-textSecondary font-semibold leading-4 text-lef'>{date}</span>
                </p>
            </div>
            <div className='flex gap-[10px]'>
                <p className='flex flex-col justify-between'>
                    <span className='text-textSecondary font-raleway text-[12px] font-medium leading-4 text-left'>Статус заказа</span>
                    <span className='font-raleway text-base font-semibold leading-4 text-lef'>Оплачен/Завершён</span>
                </p>
                <p className='flex flex-col justify-between'>
                    <span className='text-textSecondary font-raleway text-[12px] font-medium leading-4 text-left'>Номер заказа</span>
                    <span
                        className='font-raleway text-primary text-base font-semibold leading-4 text-lef'>#664-333</span>
                </p>
            </div>
            <div className='flex gap-[10px]'>
                <p className='flex flex-col justify-between'>
                    <span className='text-textSecondary font-raleway text-[12px] font-medium leading-4 text-left'>Кол-во товаров</span>
                    <span className='font-raleway text-base font-semibold leading-4 text-lef'>{count}</span>
                </p>
                <p className='flex flex-col justify-between'>
                    <span className='text-textSecondary font-raleway text-[12px] font-medium leading-4 text-left'>Стоимость заказа</span>
                    <span className='font-raleway text-base font-semibold leading-4 text-lef'>{stock} ₽</span>
                </p>
                <p className='flex flex-col justify-between'>
                    <span className='text-textSecondary font-raleway text-[12px] font-medium leading-4 text-left'>Адрес доставки</span>
                    <span className='font-raleway text-base font-semibold leading-4 text-lef'>{address}</span>
                </p>
            </div>
        </article>
    )
}

export default OrderItem