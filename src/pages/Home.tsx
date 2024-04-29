import Categories from "../features/main/categories/Categories";
import Products from "../features/main/products/Products";
import {useEffect} from "react";
import {isBannerVisible} from "../redux/actions/actions";
import {useDispatch} from "react-redux";

function Home() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(isBannerVisible(true))
    }, [dispatch]);

    return (
        <section className='w-full'>
            <div className="flex items-center pb-[20px]">
                <h1 className='font-raleway  text-black text-lg font-bold leading-[23.48px] text-left'>
                    Категории товаров
                </h1>
                <span
                    className='text-primary text-xs font-semibold leading-[15.32px] text-center ml-16 cursor-pointer'>Настройки</span>
            </div>

            <Categories/>
            <Products/>
        </section>
    )
}

export default Home;