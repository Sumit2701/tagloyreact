function Sidebar(collapse) {
    return (  
        
        <div className="bg-gray-400 w-60 h-screen">
                <div className="p-5">
                    <div >
                        <a href="/" className="block cursor-pointer p-2 hover:bg-gray-600   bg-gray-300 border-2" >
                            Home
                        </a>
                        
                        <a href="/AboutUs" className="block cursor-pointer p-2 hover:bg-gray-600 my-1  bg-gray-300 ">
                            About Us
                        </a>
                        <a href='Contact' className="block cursor-pointer  hover:bg-gray-600   bg-gray-300 p-2">
                            Contact
                        </a>
                    </div>
                </div>
        </div>
    );
}

export default Sidebar;