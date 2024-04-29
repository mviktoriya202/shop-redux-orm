import Product from "../../../shared/Product";
import Button from "../../../shared/Button";
import {IProduct} from "../../../entities/types";
import {createCartItem} from "../../../redux/actions/actions";
import { useSelector} from "react-redux";
import {useEffect} from "react";
import {getProducts} from "./api/api";
import Loading from "../../../widgets/loading-error/Loading";
import Error from "../../../widgets/loading-error/Error";
import {hasButton, prodError, prodLoading, selectProducts} from "../../../redux/selectors/modelsSelectors";
import {useSearchParams} from "react-router-dom";
import {useAppDispatch} from "../../../redux/hooks";

function Products() {
    // @ts-ignore
    const dispatch = useAppDispatch();

    const products: IProduct[] = useSelector(selectProducts);
    const loading = useSelector(prodLoading);
    const error = useSelector(prodError)
    const showButton = useSelector(hasButton)

    const [searchParams, setSearchParams] = useSearchParams()
    const catId = searchParams.get('category_id')
    const range = searchParams.get('range')

    const handleShowMore = () => {
        const params = Object.fromEntries(searchParams);
        let newRange = "[0,24]"
        let parsedRange = range ? JSON.parse(range) : JSON.parse(newRange);
        newRange = `[0,${+parsedRange[1] + 24}]`
        setSearchParams({...params, range: newRange})
    }

    const handleAdd = (prod: IProduct) => {
        // @ts-ignore
        dispatch(createCartItem(prod));
    }

    useEffect(() => {
        dispatch(getProducts({range: range ? range : `[0,24]`, category_id: catId ? +catId : undefined}))
    }, [dispatch, catId, range])


    if (loading) {
        return <Loading/>
    }

    if (error) {
        return <Error message='Failed to fetch products.'/>
    }

    return (
        <div className='flex flex-col w-full gap-[30px]'>
            <div className='flex w-full flex-wrap'>
                {
                    products.map((product: IProduct) => {
                        return <Product addToCart={handleAdd} {...product} key={product.id}/>
                    })
                }
            </div>
            {showButton && (
                <div onClick={handleShowMore} className='flex items-center justify-center w-full'>
                    <Button title='Показать больше товаров' size='lg'/>
                </div>
            )}
        </div>
    )
}

export default Products