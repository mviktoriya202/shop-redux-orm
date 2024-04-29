import OrderItem from "../../../widgets/OrderItem";
import {useSelector} from "react-redux";
import {selectHistoryItems} from "../../../redux/selectors/modelsSelectors";

function HistoryList(){
    const historyList = useSelector(selectHistoryItems)
    return(
        <section className="flex flex-wrap justify-between items-center">
            {
                historyList.map( (item, index) =>{
                    return(
                        <OrderItem key={item.id} {...item}/>
                    )
                })
            }
        </section>
    )
}

export default HistoryList