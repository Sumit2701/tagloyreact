import { useNavigate } from "react-router-dom";
function Navbar() {
    let navigate = useNavigate();

    
    
    return ( 
        <div className="bg-gray-600 w-full  text-white ">
                <div className="text-xl flex justify-between py-2 px-10 items-center">
                   <h1>
                    Tagloy Media
                   </h1>
                   <btn onClick={()=>{navigate('/Login');
          }} className="bg-white text-black px-4 py-2 rounded cursor-pointer hover:bg-slate-500">
                    Logout
                   </btn>
                </div>
        </div>
     );
}

export default Navbar;