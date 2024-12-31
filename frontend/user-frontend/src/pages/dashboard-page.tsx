const DashboardPage = (props:{user:string})=>{    
    
    return <div className="h-screen w-screen bg-[#754E1A] flex justify-center items-center">

        <h1> Welcome {props.user}</h1>
    </div>
}


export default DashboardPage