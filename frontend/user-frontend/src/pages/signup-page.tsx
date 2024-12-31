import React, { useState } from "react"
import { Link } from "react-router"
import axios from "axios"
import { useNavigate } from "react-router"
const SIGNUP_URL = "http://127.0.0.1:5000/signup"
const SignupPage = () => {
    const [signupForm,setSignupForm] = useState({
        username:"",
        password:"",
        confirmPassword:""
    })
    const navigate = useNavigate();

    const handleSignupOnClick= async ()=>{
        if(signupForm.password!=signupForm.confirmPassword){
            alert('confirm passsword and password must be same')
            return;
        }
        try{
            // signup api call
            const response = await axios.post(SIGNUP_URL,{
                username:signupForm.username,
                password:signupForm.password
            })
            alert(response.data.msg)

            navigate('/login')
            



        }catch(err:any){
            alert(err.errors)
        }finally{
            setSignupForm({
                username:"",
                password:"",
                confirmPassword:""
            })
    
        }

        
    }
    
    

    return <div className="h-screen w-screen flex justify-center items-center  ">
        <div className="h-1/4 w-1/4 bg-[#F8E1B7] p-8 rounded-md flex flex-col gap-4">
            <div className="flex gap-2">
                <span className="font-mono font-bold text-lg">Username</span>
                <input className="p-2 h-8 rounded-sm border border-black" type="text" value={signupForm.username} onChange={(e)=>setSignupForm(prev=>({...prev,username:e.target.value}))} />
            </div>
            <div className="flex gap-2">
                <span className="font-mono font-bold text-lg">Password</span>
                <input className="p-2 h-8 rounded-sm border border-black" type="password" value={signupForm.password} onChange={(e)=>setSignupForm(prev=>({...prev,password:e.target.value}))} />
            </div>
            <div className="flex gap-2">
                <span className="font-mono font-bold text-lg">Confirm Password</span>
                <input className="p-2 h-8 rounded-sm border border-black" type="password" value={signupForm.confirmPassword} onChange={(e)=>setSignupForm(prev=>({...prev,confirmPassword:e.target.value}))} />
            </div>
           
            <button className="bg-[#CBA35C] text-[#754E1A] font-bold  text-lg inline mt-4 mr-4 rounded-sm hover:bg-white hover:text-black" onClick={handleSignupOnClick}>Create User</button>
            <span className="font-bold font-mono ">Already a  user?? Login <Link className="text-[#754E1A] underline" to="/login">here</Link></span>

        </div>

    </div>

}

export default SignupPage