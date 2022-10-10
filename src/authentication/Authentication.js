import { createUserWithEmailAndPassword,  } from "firebase/auth"
import { useState } from "react";
import { auth } from "./Firebase";
import './Authentication.css'
function Authentication({closeModal}) {
    const [registerEmail, setRegisterEmail]=useState("");
    const [registerPass, setRegisterPass]=useState("");
    const register = async () => {
        try{
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPass
            )
            closeModal(false)
            overlay.classList.add('hidden')
            // console.log(user)
        }catch{
            alert("Error")
        }   
    } 
    let overlay = document.querySelector(".overlay")
    
    overlay.classList.remove('hidden') 
    return (    
        <div className='popup'>
            <div className='close-btn' onClick={(e)=>{
                closeModal(false)
                overlay.classList.add('hidden')
            }}>&times;</div>
            <div className='form'>
                <h2>Register User</h2>
                    {/* <h2>User</h2>
                    {user.email} */}
                <div className="form-element">
                    <label>Email</label>
                    <input type="text" id="email" placeholder="Enter email" onChange={(event)=>{setRegisterEmail(event.target.value)}}/>
                </div>
                <div className="form-element">
                    <label>Password</label>
                    <input type="password" id="password" placeholder="Enter password" onChange={(event)=>{setRegisterPass(event.target.value)}}/>
                </div>
                <div className="form-element">
                    <button onClick={register} >Sign Up</button>
                </div>
            </div>
        </div>
    ) 
}
export default Authentication;
