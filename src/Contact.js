import { useState } from "react";
import Sidebar from "./Sidebar";
function Home() {
    const [collapse, setcollapse] = useState(true)
    const Collapse =()=>{
        setcollapse(
        collapse?false:true)
    }
    return ( 
        <div className="w-full flex">
           
           {collapse && <Sidebar/>}
           <div >  
                <btn onClick={Collapse} className="cursor-pointer bg-gray-400">
                   {collapse?"Close":"Open"}
                </btn>
            </div>
           <div className="w-11/12 p-10">

                <h1 className="text-4xl">
                    
                    
                    
                    This is Contact page</h1>
           </div>
        </div>
     );
}

export default Home;