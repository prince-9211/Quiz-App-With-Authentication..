import { useState, useEffect } from 'react'
import './submit.css'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase'
const Submit=()=> {
  const [user, setUser] = useState({})
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
  }, [auth])
  const [name, setName] = useState([]);
  const userAction = async () => {
    const user_list=[];
    const new_user_list = [];
    const newest_user_list = [];
    const response = await fetch('https://authentication-e462d-default-rtdb.firebaseio.com/userDataRecords.json');
    const myJson = await response.json();
    for (const key of Object.keys(myJson)) {
      const val = myJson[key];
      let email = document.getElementsByClassName('user-data')[0].innerText + '@gmail.com';
      if (val.userN.name === email) {
        user_list.push(val);
      }
    }
    for (const element of user_list) {
        new_user_list.push(Object.values(element))
    }
    for (const element of new_user_list) {
      let obj ={
        cat : element[0].category,
        lev : element[1].level,
        nm : element[2].name,
        pt : element[3].point,
        t : element[4].total
      }
      newest_user_list.push(obj)
    }
    setName(newest_user_list)
  }
  useEffect(()=>{
    userAction()
},[])
  return (
  <> 
      <div className='change'>
        {name.map((obj)=>{
          return (
      <div className='popu'> 
        <div className='for'>
          <h3 key={obj.nm}>Name:"{obj.nm}"</h3>
          <h4>Category:"{obj.cat}"</h4>
          <h4>Level:"{obj.lev}"</h4>
          <h4>Total Points:{obj.pt}/{obj.t}</h4>
      </div></div>)
      })} </div>
    </>
  )
}
export default Submit;