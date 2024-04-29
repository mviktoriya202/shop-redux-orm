import {PiShoppingCart} from "react-icons/pi";
import {Link} from "react-router-dom";

interface ICart {
    count: number;
}

function CartButton({count = 1}: ICart) {
    return (
        <Link to='/cart'>
            <div className='p-[17px] max-1250:p-[10px] relative rounded-full border border-textSecondary'>
                <PiShoppingCart size={17} className='text-textSecondary'/>
                <span
                    className='absolute p-1  top-[-10px] right-0 text-primary text-base font-raleway font-semibold leading-[19.6px] bg-white '>{count}{count > 0 && '+'}</span>
            </div>
        </Link>

    )
}

export default CartButton