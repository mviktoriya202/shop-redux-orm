import {IProductProps} from "../entities/types";

function Product({addToCart, ...props}: IProductProps) {
    return (
        <article className="w-[270px] m-[10px] gap-[10px] flex flex-col justify-between items-start">
            <img src={props.image_url ? props.image_url : "/images/product.png"} alt="product" className="h-[214px]" />
            <p className='text-black text-base font-normal leading-[19.6px] text-left w-full truncate'> {props.name}</p>
            <p className='text-xl font-semibold leading-[26px] text-left text-primary'>от {props.stock && props.stock}₽</p>
            <p className='text-textSecondary text-left '>{props.price && props.price}₽ <span className='text-mainAccentLight'>0%</span></p>
            <button onClick={() => {
                addToCart({...props});
            }}
                    className='text-primary border w-full rounded-[26px] border-primary py-[10px] px-[40px]'>Добавить в
                корзину
            </button>
        </article>
    )
}

export default Product