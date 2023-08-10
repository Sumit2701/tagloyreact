import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  let navigate = useNavigate();    
  const [username, setusername] = useState()
    const [password, setpassword] = useState()
    const handleSubmit=()=>{navigate('/')}
    return ( 
        <div className="flex justify-center items-center">
                <div className=" mt-20 p-10 border-4 justify-center items-center">
                    <h1 className="text-2xl text-black ">Leave Tracker</h1>
                <form onSubmit = {handleSubmit}>
                    Login
                <label className="block my-6"> Username  <input onChange={(e)=>setusername(e.target.value)} required className="block p-1 border" placeholder="username">
                    </input></label> 
                <label className="block my-6"> Password   <input onChange={(e)=>setpassword(e.target.value)} required className="block p-1 border" placeholder="password">
                    </input></label>
                    <button type='submit' className='bg-blue-500 hover:bg-blue-300 px-4 py-2 rounded'  >
                        Login
                    </button>
                </form>
                </div>
        </div>
     );
}

export default Login;