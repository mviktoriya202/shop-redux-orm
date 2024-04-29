import DeliveryForm from "../features/main/delivery/DeliveryForm";
import DeliveryCard from "../features/main/delivery/DeliveryCard";
import {FieldValues, useForm} from "react-hook-form";
import {IFormInput, IOrder} from "../entities/types";
import {deleteAllCartItems, isBannerVisible, setHistoryData} from "../redux/actions/actions";
import {selectCartItems} from "../redux/selectors/modelsSelectors";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


function Delivery() {
    const form = useForm<FieldValues>({
        mode: 'all',
    })
    const dispatch = useDispatch()
    const nav = useNavigate()

    const cartItems = useSelector(selectCartItems)
    const {reset, handleSubmit} = form
    const onSubmit = (data: IFormInput) => {
        let newHistoryData: IOrder[] = [];

        cartItems.forEach((el) => {
            let newObj = {
                id: el.id ? el.id : Math.random(),
                clientName: data.name,
                count: el.count | 1,
                productName: el.name ? el.name : '',
                address: data.address,
                date: data.date,
                image_url:el.image_url
            }
            newHistoryData.push(newObj)
        })

        dispatch(setHistoryData(newHistoryData))
        dispatch(deleteAllCartItems())
        nav('/')
        reset()
    }

    useEffect(() => {
        dispatch(isBannerVisible(false))
    }, [dispatch]);

    return (
        <section className='w-full'>
            <h1 className='font-raleway  text-black text-lg font-bold leading-[23.48px] text-left'>
                Доставка
            </h1>
            <div className='flex flex-row  w-full max-780:flex-col items-center justify-center'>
                <DeliveryForm onSubmit={onSubmit} form={form}/>
                {/*@ts-ignore*/}
                <DeliveryCard onSubmit={handleSubmit(onSubmit)}/>
            </div>
        </section>
    )
}

export default Delivery