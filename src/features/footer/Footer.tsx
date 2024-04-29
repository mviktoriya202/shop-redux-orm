import Logo from "../../shared/Logo";
import {IoLogoFacebook} from "react-icons/io";
import {FaVk} from "react-icons/fa6";
import {FaSquareInstagram} from "react-icons/fa6";

function Footer() {
    return (
        <footer className='max-w-[100vw] px-[50px] py-[32px]  bg-backgroundSecondary'>
            <div className="flex flex-row max-640:flex-col items-center justify-between w-full ">

                <section className="footer-section">
                    <Logo/>
                </section>
                <section className="flex gap-5">
                    <div className="flex flex-col gap-2">
                        <span
                            className='font-raleway text-base font-normal leading-[22.4px]'>Присоединяйтесь к нам</span>
                        <div className="flex gap-2">
                            <IoLogoFacebook size={28} className="text-primary"/>
                            <FaVk size={28} className="text-primary"/>
                            <FaSquareInstagram size={28} className="text-primary"/>
                        </div>
                    </div>
                    <div>
                    <span
                        className='font-raleway text-base font-normal leading-[22.4px]'>Устанавливайте приложение</span>
                        <div className="flex gap-2">
                            <img src="/images/Google%20Play.png" alt="google" height='32px'/>
                            <img src="/images/App%20Store.png" alt="apple" height='32px'/>
                        </div>
                    </div>
                </section>
            </div>
                <div className='flex flex-col items-center justify-center w-full py-[35px]'>
                      <ul className='flex gap-3 list-none text-textSecondary font-raleway text-sm font-normal leading-[17.08px]'>
                          <li>© Sionic</li>
                          <li>Правовая информация</li>
                          <li>Политика конфиденциальности</li>
                      </ul>
                </div>
        </footer>
    )
}

export default Footer;