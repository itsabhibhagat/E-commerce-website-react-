import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/CartSlice"

const CartItem=({item,itemIndex})=>{
    const dispatch =useDispatch();
    
    const removefromcart=()=>{
        dispatch(remove(item.id))
        toast.error("removed Item")
    }
    return(
        
            <div className=" flex mt-10 mb-10 gap-x-10 gap-y-20 hover:shadow-lg hover:scale-105 transition ease-in duration-200">
                <div className="">
                    <img src={item.image} alt="" className=" h-[200px] w-[180px]" />
                </div>
                <div className=" w-[400px]">
                    <h1 className=" font-semibold text-gray-700 text-xl">{item.title}</h1>
                    <h1 className=" text-sm text-gray-500 mt-4">{item.description.split(" ").splice(0,12).join(" ")+("...")}</h1>
                    <div className=" flex justify-between mt-4">
                        <p className=" text-green-600 font-semibold">${item.price}</p>
                        <div onClick={removefromcart} className="relative rounded-full w-8 h-8 bg-pink-200 right-4
                         hover:cursor-pointer">
                        
                            <MdDelete className=" text-pink-700 absolute right-2 bottom-2 "/>
                        
                        </div>
                    </div>
                    
                </div>
                
            </div>
        
    )
}
export default CartItem;