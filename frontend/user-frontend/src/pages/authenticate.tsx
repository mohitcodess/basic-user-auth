import React from "react"
import { useLocation, useNavigate } from "react-router";
useLocation
const Authenticate =(props:{
    url:string,
    element:React.FC,
    props?:any
})=>{
    const token = localStorage.getItem('token');
    const navigator = useNavigate();
    if(!token) navigator('/login')
        
    return <props.element {...props.props}/>
}