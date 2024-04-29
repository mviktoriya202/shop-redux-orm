import bannerMockData from "../../entities/bannerMockData";
import Banner from "../../shared/Banner";
import Button from "../../shared/Button";
import {useSelector} from "react-redux";
import {hasBanner} from "../../redux/selectors/modelsSelectors";

function AsideBanners() {
    const showBanner = useSelector(hasBanner)
    return (
        <aside className='flex flex-col max-780:flex-row max-780:flex-wrap gap-[20px]  min-h-[70vh] px-[16px] p-0 border-l border-backgroundSecondary'>
            <article
                className='bg-cover border border-mainAccentLight cursor-pointer max-1080:w-[200px] max-1080:h-[111px] w-[310px] h-[168px]   text-white font-raleway text-20 font-bold leading-23 rounded-[20px] flex items-center justify-center'>
                <img src="/images/banner-image.png" alt="bag" width='91' height='82' />
                <div className='flex flex-col items-center justify-center'>
                    <p className='text-primary text-xl font-semibold leading-[26px] text-left'>Получай товары <br/>
                        БЕСПЛАТНО!</p>
                    <Button title='Узнать подробнее' size='sm'/>
                </div>
            </article>
            {showBanner && (
                bannerMockData.map((item) => {
                    return (
                        <Banner key={item.id} image={item.image} title={item.title}/>
                    )
                })
            )}

        </aside>
    )
}

export default AsideBanners;