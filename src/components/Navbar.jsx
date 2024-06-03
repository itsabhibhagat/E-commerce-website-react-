import { MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const Navbar=()=>{
    const {cart} = useSelector((state)=>state);
    return(
        <div>
            <nav className=" flex  justify-between items-center h-20 max-w-6xl mx-auto">
                
                <NavLink to="/">
                    <div className=" ml-5  ">
                    <img src="../logo.png" alt="logo" className=" h-14"/>
                    </div>
                </NavLink>
                <div className=" flex items-center font-medium text-slate-200 space-x-6">
                    <NavLink to="/"><p>Home</p></NavLink>
                    <NavLink to="/cart">
                        <div className=" relative ">
                            <MdShoppingCart  className=" h-6 w-6"/>
                            {  cart.length > 0 &&
                                <span className=" absolute -top-2 -right-0.5 bg-green-600 text-xs w-4 h-4 flex justify-center 
                                items-center rounded-full animate-bounce text-white">{cart.length}</span>
                            }       
                        </div>
                        
                    </NavLink>
                    
                </div>
            </nav>
        </div>
        
    )
    
}
export default Navbar;
