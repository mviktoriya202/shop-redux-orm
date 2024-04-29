import {Link} from "react-router-dom";

function  UserLogo(){
return(
    <Link to='/delivery-history'>
        <img className='w-[50px] h-[50px] max-1250:w-[40px] max-1250:h-[40px] rounded-full' src="/images/user-logo.png" alt="user"/>
    </Link>
)
}

export default UserLogo