import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem"


const Cart = () => {
  const {cart} = useSelector((state)=>state);
  const [totalamount,settotalamount] = useState(0);

  useEffect(()=>{
    settotalamount(cart.reduce((acc,curr)=> acc + curr.price,0));

  },[cart]);

  return(
        <div>
            {
                cart.length > 0 ? 
                (<div className=" flex justify-between max-w-[1080px] mx-auto min-h-[80vh] mt-20 -z-10">
                    <div className="">
                        {
                            cart.map((item,index)=>{
                                return <CartItem key={item.id} item={item} itemIndex={index} />
                            })
                        }
                    </div>
                    <div className="mt-14 flex flex-col " >
                        <div>
                            <div className=" text-green-500 font-semibold text-xl ">Your Cart</div>
                            <div className=" text-green-500 text-4xl font-bold scroll-auto">SUMMARY</div>
                            <p className=" mt-4">
                                <span className=" font-semibold text-gray-800">Total items: {cart.length}</span>
                            </p>
                        </div>
                        
                        <div className=" mt-80">
                            <p className=" font-semibold text-sm">Total amount:<span>${totalamount}</span></p>
                            <button className=" text-white bg-green-500 pt-2 pb-2 px-14 mt-3 rounded-md
                            hover:bg-green-600 transition ease-in duration-300">
                                Checkout Now
                            </button>

                        </div>
                    </div>
                   
                    
                </div>):
                (<div className=" flex flex-col justify-center h-screen items-center ">
                    <h1 className=" text-3xl font-semibold">Empty Cart</h1>   
                    <Link to={"/"}>
                    <button className=" bg-green-500 py-2 px-4 rounded-lg mt-3 hover:bg-green-600 hover:scale-105
                     transition ease-in duration-200">Shop Now</button>
                    </Link>
                </div>)
            }
        </div>
    )
};

export default Cart;
