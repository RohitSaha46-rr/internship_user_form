import React, { useState,useEffect } from 'react'
import './content.css';
const Content = () => {
   
    const[userinfo,setinfo]=useState({
        username:"",
        phn_number:"",
        dob:"",
        gender:"",
        contact:"",
        state:"",
        city:"",
        pincode:""

    })
    let name,value;
    const eventHandler=(e)=>{
      name=e.target.name;
      value=e.target.value;
      setinfo({...userinfo,[name]:value});
    }
    const fun=()=>{
        alert("Form has been submitted");
        localStorage.setItem('user_form',JSON.stringify(userinfo));
    }
   
  return (
    <div className='content'>
        <div className='main_content'>
            <div className='left'>

            </div>
            <div className='right'>
                <h1>Hello!</h1>
                <h1>We are glad to see you:))</h1>
                <form onSubmit={fun}>
                <div className='box1'>
                <div className="inpuut">
            <input type="text" id="name" autocomplete="off" required onChange={eventHandler} name='username' value={userinfo.username}></input>
            <label className='input'>Name</label>  
        </div>
        <div className="inpuut">
            <input type="text" id="name" autocomplete="off" required onChange={eventHandler} name='phn_number' value={userinfo.phn_number}></input>
            <label className='input'>Phone Number</label>  
        </div>
        </div>
        {/* /-----------------------------------------------------------box2-----------------------------------------------/ */}
        <div className='box1'>
                <div className="inpuut">
            <input type="text" id="name" autocomplete="off" required  onChange={eventHandler} name='dob' value={userinfo.dob}></input>
            <label className='input'>D.O.B</label>  
        </div>
        <div className="inpuut">
            <input type="text" id="name" autocomplete="off" required onChange={eventHandler} name='gender' value={userinfo.gender}></input>
            <label className='input'>Gender</label>  
        </div>
        </div>
        {/* /--------------------------------------------------------------box3-------------------------------------------------/ */}
        <div className='box1'>
                <div className="inpuut">
            <input type="text" id="name" autocomplete="off" required  onChange={eventHandler} name='contact' value={userinfo.contact}></input>
            <label className='input'>Contact</label>  
        </div>
        <div className="inpuut">
            <input type="text" id="name" autocomplete="off" required onChange={eventHandler} name='state' value={userinfo.state}></input>
            <label className='input'>State</label>  
        </div>
        </div>
        {/* /------------------------------------------------------------------box4---------------------------------------------/ */}
        <div className='box1'>
                <div className="inpuut">
            <input type="text" id="name" autocomplete="off" required onChange={eventHandler} name='city' value={userinfo.city}></input>
            <label className='input'>City</label>  
        </div>
        <div className="inpuut">
            <input type="number" id="name" autocomplete="off" required onChange={eventHandler} name='pincode' value={userinfo.pincode}></input>
            <label className='input'>Pincode</label>  
        </div>
        </div>
        <div className='check'>
            <input type="checkbox" className='checkbox'></input>
            <label>I agree Terms of service and Privacy Policy.</label>
        </div>
        <button type='submit' className='btn'>Sign Up</button>
        </form>
            </div>
        </div>
    </div>
  )
}

export default Content