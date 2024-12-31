import React from "react"
import { Link } from "react-router"
const LoginPage = () => {
    const [loginForm,setLoginForm] = React.useState({
        username:"",
        password:""
    }) 
    const handleLoginOnClick = ()=>{
        // call login api here
        
    }

    return <div className="h-screen w-screen flex justify-center items-center  ">
        <div className="h-1/4 w-1/4 bg-[#F8E1B7] p-8 rounded-md flex flex-col gap-4">
            <div className="flex gap-2">
                <span className="font-mono font-bold text-lg">Username</span>
                <input className="p-2 h-8 rounded-sm border border-black" type="text" onChange={(e)=>setLoginForm(prev=>({...prev,username:e.target.value}))} />
            </div>
            <div className="flex gap-2">
                <span className="font-mono font-bold text-lg">Password</span>
                <input className="p-2 h-8 rounded-sm border border-black" type="password" onChange={(e)=>setLoginForm(prev=>({...prev,password:e.target.value}))}/>
            </div>
            <button className="bg-[#CBA35C] text-[#754E1A] font-bold  text-lg h-8 w-16 mt-4 mr-4 rounded-sm hover:bg-white hover:text-black" onClick={handleLoginOnClick}>Login</button>
            <span className="font-bold font-mono ">new user?? register <Link className="text-[#754E1A] underline" to="/signup">here</Link></span>
        </div>

    </div>

}

export default LoginPage