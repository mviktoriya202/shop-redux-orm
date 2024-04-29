interface IBanner {
    image: string;
    title: string;
}

function Banner({title, image}: IBanner) {
    return (
        <article style={{backgroundImage: `url(${image})`}}
                 className='bg-cover max-1080:w-[200px] max-1080:h-[111px] cursor-pointer w-[310px] h-[168px] my-[20px] text-white font-raleway text-20 font-bold leading-23 rounded-[20px] flex items-center justify-center'>
           <span>
               {title}
           </span>
        </article>
    )
}

export default Banner