import { MdOutlinePlace } from "react-icons/md";

interface IAddress{
    address: string;
}

function Address({address}: IAddress){
return(
    <div title={address} className='text-textSecondary flex items-center gap-2'>
        <MdOutlinePlace size={20} color='black'/>
        <span>{address}</span>
    </div>
)
}
export default Address;