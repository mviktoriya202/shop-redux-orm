import React from 'react';
import {RiSearchLine} from 'react-icons/ri';

interface ISearch {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

function Search({onChange, value}: ISearch) {
    return (
        <div className="flex items-center max-540:px-1 max-1250:px-3 px-5 py-1 rounded-full border border-solid border-gray-300">
            <input
                value={value}
                onChange={onChange}
                type="text"
                placeholder="Поиск бренда, товара, категории..."
                className="flex-grow px-2 text-base font-raleway font-normal leading-[18.78px] max-1250:leading-[13px] truncate text-left focus:outline-none focus:ring-0"
            />
            <button className="flex max-540:py-1 max-540:w-12 max-540:h-12  max-540:px-1 justify-center items-center max-1250:w-16 w-24 h-12 bg-backgroundSecondary  px-4 py-3 gap-0 rounded-full">
                <RiSearchLine size={18} className='text-textSecondary'/>
            </button>
        </div>
    )
}

export default Search