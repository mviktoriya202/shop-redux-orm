import HistoryList from "../features/main/history/HistoryList";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {isBannerVisible} from "../redux/actions/actions";

function History() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(isBannerVisible(false))
    }, [dispatch]);
    return (
        <section>
            <h1 className='font-raleway  text-black text-lg font-bold leading-[23.48px] text-left'>
                История заказов
            </h1>
            <HistoryList/>
        </section>
    )
}

export default History