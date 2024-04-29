import Button from "../../../shared/Button";
import {IDeliveryCardProps} from "../../../entities/types";
import {useSelector} from "react-redux";
import {selectCartItems} from "../../../redux/selectors/modelsSelectors";

function DeliveryCard(props: IDeliveryCardProps) {
    const cartItems = useSelector(selectCartItems)

    return (
        <article className='flex max-780:ml-0 ml-[100px] flex-col gap-[10px] '>
            <div
                className='flex min-w-[292px] flex-col p-[20px] rounded-[20px] bg-backgroundSecondary text-textSecondary items-center justify-between'>
                <p className='w-full flex items-center justify-between'>
                    <span>Стоимость товаров:</span>
                    <span>
                          {cartItems.reduce((previousValue, curr) => {
                              return previousValue + (curr.stock * curr.count || 0);
                          }, 0)} ₽
                    </span>
                </p>
                <p className='w-full flex items-center justify-between'>
                    <span>Стоимость доставки:</span>
                    <span>200₽</span>
                </p>
                <p className='w-full my-[15px] flex items-center justify-between'>
                    <span>Итого:</span>
                    <b className='text-black'>
                        {cartItems.reduce((previousValue, curr) => {
                            return previousValue + (curr.stock * curr.count || 0);
                        }, 200)} ₽
                    </b>
                </p>

            </div>
            <div className='w-full flex items-center justify-center' onClick={() => {
                props.onSubmit()
            }}>
                <Button title='Сделать заказ' size='lg'/>
            </div>
        </article>
    )
}

export default DeliveryCard;