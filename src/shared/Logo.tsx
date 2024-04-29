import {Link} from "react-router-dom";

function Logo() {
    return (
        <Link to='/'>
        <span className='text-black max-1250:text-[25px] max-1250:leading-[20px]  font-bold text-[37px] leading-[43.44px] font-raleway'>
        React
    </span>
        </Link>

    )
}

export default Logo;