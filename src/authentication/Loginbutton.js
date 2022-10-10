import { useEffect, useState } from 'react'
import Authentication from './Authentication'
import { onAuthStateChanged } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import Login from './Login';
import { auth } from './Firebase'
import './Authentication.css'

export default function LoginButton() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  // const [open3, setOpen3] = useState(false);
  const [user, setUser] = useState({})
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser)
      setUser(currentUser)
    })
  }, [auth])
  async function logout() {
    // console.log("fgh")
    await signOut(auth)
  }
  return (
    <>
     <div className='user-data' >{(user?.email)?.split('@gmail.com')}</div>
      <div className="tab-btn-wrapper text-center">
        {user ? <><button type="button" className="tab tab-active" onClick={() => { logout() }}>Logout</button> </>
          : <button type="button" className="tab tab-active" onClick={() => { setOpen(true) }}>Register</button>}
        {user ? '' : <button type="button" className="tab tab-active" onClick={() => { setOpen1(true) }}>Login</button>}
      </div>
      {open && <Authentication closeModal={setOpen} />}
      {open1 && <Login closeModal1={setOpen1} />}
    </>
  )
}


