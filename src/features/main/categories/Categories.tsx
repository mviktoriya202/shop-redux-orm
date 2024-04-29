import Tag from "../../../shared/Tag";
import {useEffect} from "react";
import {ICategory} from "../../../entities/types";
import Error from "../../../widgets/loading-error/Error";
import Loading from "../../../widgets/loading-error/Loading";
import { useSelector} from "react-redux";
import {getCategories} from "./api/api";
import {catError, catLoading, selectCategories} from "../../../redux/selectors/modelsSelectors";
import {useSearchParams} from 'react-router-dom'
import {useAppDispatch} from "../../../redux/hooks";

function Categories() {
    // @ts-ignore
    const dispatch = useAppDispatch();
    const loading = useSelector(catLoading);
    const error = useSelector(catError);
    const categories: ICategory[] = useSelector(selectCategories);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setSearchParams] = useSearchParams()

    const handleFilter = (id: number) => {
        if(id === 0){
            setSearchParams({})
        }else{
            setSearchParams({category_id: id.toString()})
        }
    }

    useEffect(() => {
        dispatch(getCategories())

    }, [dispatch]);

    if (loading) {
        return <Loading/>
    }

    if (error) {
        return <Error message='Failed to fetch categories.'/>
    }

    return (
        <section className="flex gap-3 py-[20px] flex-wrap">
            <Tag index={0} onCLick={handleFilter}  name='Все' id={0}/>
            {categories?.length > 0 && categories.map(({id, name},i: ICategory | any) => {
                return <Tag index={i+1} onCLick={handleFilter} key={id} name={name} id={id}/>
            })}
        </section>
    )
}

export default Categories;