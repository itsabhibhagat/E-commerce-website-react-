// import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add,remove} from "../redux/Slices/CartSlice"

const Product=({post})=>{
    const {cart}=useSelector((state) => state);
    
    const dispatch =useDispatch();

    const addtocart=()=>{
        dispatch(add(post));
        toast.success("Added to Cart")
    }

    const removefromcart=()=>{
        dispatch(remove(post.id));
        toast.error("Removed from Cart")
    }
    

    // const [selected,setselected]=useState([])
    return (
        <div className=" flex flex-col items-center justify-between
         hover:scale-110 transition duration-300 ease-in gap-3 mt-10 ml-5 rounded-xl 
         hover:shadow-lg shadow-black ">
            <div>
                <h1 className=" font-semibold text-gray-700 text-lg text-center truncate w-40 mt-1 ">{post.title}</h1>
            </div>
            <div>
                <p className=" w-40 text-gray-400 font-normal text-[10px] text-left ">{post.description.split(" ").splice(0,10).join(" ") + ("...")}</p>
            </div>
            <div className=" h-[180px]">
                <img src={post.image} className=" w-full h-full"/>
            </div>
            <div className=" flex justify-evenly gap-12 items-center w-full mt-5 mb-5 ">
                <div>
                    <p className=" text-green-600 font-semibold ">${post.price}</p>
                </div>
                {/* <div>
                    <p>{post.category}</p>
                </div> */}
                <div>
                    <button>
                    {
                        cart.some((p)=>p.id === post.id) ? 
                        (<button onClick={removefromcart} className=" border rounded-full text-xs
                         border-gray-700 font-semibold pt-1 pb-1 pl-2 pr-2 text-gray-700 
                         hover:bg-gray-700 hover:text-white duration-200 transition ease-in"> 
                            Remove Item
                        </button>) : 
                        (<button onClick={addtocart} className=" border rounded-full text-xs
                        border-gray-700 font-semibold pt-1 pb-1 pl-2 pr-2 text-gray-700 
                        hover:bg-gray-700 hover:text-white duration-200 transition ease-in">
                            Add to Cart
                        </button>)
                    }
                    </button>
                    
                </div>
            </div>
            

        </div>
    )
}
export default Product;