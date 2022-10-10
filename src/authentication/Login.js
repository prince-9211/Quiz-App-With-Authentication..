import { signInWithEmailAndPassword } from 'firebase/auth';
import {useState} from 'react'
import { auth } from './Firebase';
import './Authentication.css'
function Login({closeModal1}) {
    const [loginEmail, setLoginEmail]=useState("");
    const [loginPass, setLoginPass]=useState("");
    const login = async () => {
        try{
        const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPass
        )
        closeModal1(false)
        overlay.classList.add('hidden')
    }
        catch{
            alert("Error")
        }
    }
    let overlay = document.querySelector(".overlay")
    overlay.classList.remove('hidden') 
    return ( 
        <div className='popup'>
            <div className='close-btn' onClick={(e)=>{
                closeModal1(false)
                overlay.classList.add('hidden') 
                }}>&times;</div>
            <div className='form'>
                <h1>Login User</h1>
                <div className="form-element">
                    <label>Email</label>
                    <input type="text" id="email"  placeholder="Enter email" onChange={(event)=>{setLoginEmail(event.target.value)}}/>
                </div>
                <div className="form-element">
                    <label>Password</label>
                    <input type="password" id="password"  placeholder="Enter password" onChange={(event)=>{setLoginPass(event.target.value)}}/>
                </div>
                <div className="form-element">
                    <button onClick={
                        login
                        }>Sign in</button>
                </div>
            </div>
        </div>
    ) 
}
export default Login;
