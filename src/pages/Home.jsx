import { useEffect, useState } from "react";
import Spinner from "../components/Spinner"
import Product from "../components/Product"


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading,setloading]=useState(false);
  const [posts,setposts]=useState([]);


  async function fetchproduct(){
    setloading(true);

    try{
        const res = await fetch(API_URL);
        const data = await res.json();
        setposts(data);
    }
    catch(e){
        console.log("error aagya g");
    }
    setloading(false);
  }

  useEffect(()=>{
    fetchproduct();
  },[])
  
  
  return (
    <div className="">
        {
            loading ? 
            (<Spinner/>):
            (posts.length===0 ?
                (<div className=" flex justify-center items-center"><h1>No Data Found</h1></div>):
                (<div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 max-w-6xl
                 mx-auto space-y-10 space-x-5 min-h-[80vh] mt-20 -z-10 ">
                    {
                        posts.map((post)=>{
                            return <Product key={post.id} post={post}/>
                        })
                    }
                </div>)
            )
        }
    </div>
  )
  
};

export default Home;
