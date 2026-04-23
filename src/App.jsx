
import './App.css'
import { useState } from 'react'

function App() {
  const [fname,setFname]=useState("");
  const [lname,setLname]=useState("");
  const [fullname,setFullname]=useState("");


  const handleSubmit = () => {
    // if(!fname || !lname) {
    //   alert("Please enter both first name and last name.");
    //   return;
    // }
    if(fname && lname) {
      setFullname(`${fname} ${lname}`);
    }
    setFname("");
    setLname("");
  }

  return (
    <>
       <h1>Full Name Display</h1>
       <form onSubmit={(e) => {e.preventDefault(); handleSubmit();}}>
            <div className='input'>
              <span>First Name:</span>
              <input type="text" value={fname} onChange={(e)=>setFname(e.target.value)} required />
            </div>
            <div className='input'>
              <span>Last Name:</span>
              <input type="text" value={lname} onChange={(e)=>setLname(e.target.value)} required />
            </div>
            <button type='submit'>Submit</button>
        </form>
       {fullname && <p>Full Name: {fullname}</p>}
    </>
  )
}

export default App
