import {IButton} from "../entities/types";

function Button({size, title}: IButton) {
    return (
        <button
            className={`bg-primary max-1080:rounded-2xl rounded-[51px] text-white ${size === 'sm' ? 'py-[10px] px-[20px] max-1080:p-[5px] ' : 'py-[16px] px-[50px] max-1080:p-[12px]'}`}>
            {title}
        </button>
    )
}

export default Button