import Logo from "../../shared/Logo";
import Address from "../../shared/Address";
import React, {useState} from "react";
import Search from "../../shared/Search";
import CartButton from "../../shared/CartButton";
import UserLogo from "../../shared/UserLogo";
import {IProduct} from "../../entities/types";
import {useSelector} from "react-redux";
import {selectCartItems} from "../../redux/selectors/modelsSelectors";

function Header() {
    const [value, setValue] = useState<string>('')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    const cartItems: IProduct[] = useSelector(selectCartItems);
    return (
        <header className='px-[50px] max-540:px-0 max-1250:px-[25px]  py-[20px] w-full flex max-1080:gap-4 justify-between max-1080:flex-col flex-row '>
            <div className=' flex justify-between items-center'>
                <Logo/>
                <Address address='Александровск-Са...'/>
            </div>
            <div className=' flex justify-between items-center'>
                <Search value={value} onChange={handleChange}/>
                <CartButton count={cartItems.length}/>
                <UserLogo/>
            </div>
        </header>
    )
}

export default Header