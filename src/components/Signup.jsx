import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/config'
import { FirebaseContext } from '../store/FirebaseContext'



const Signup = () => {

  const {app}=useContext(FirebaseContext)

  const navigate=useNavigate()
  const [userName,setUserName]=useState(null)
  const [email,setEmail]=useState(null)
  const [password,setPassword]=useState(null)

  const handleCreate=async(event)=>{
   event.preventDefault()

   console.log('iamcontext',app)

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        updateProfile(user, {
          displayName: userName,
        });
        //now we are updated the username
        console.log('created user',user);
        navigate("/login")
    
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });


  }

  return (
    <div className='bg-gray-100 grid grid-cols-12 pb-5'>

      <span className='col-span-4'></span>
      <div className='col-span-4 m-10 bg-white rounded-xl'>

      <Link to={'/'}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="m-7 w-7 h-7 cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
        </svg></Link>
        <div className='mx-auto text-center'>
          <img className='p-2 w-24 mx-auto' src="/olx-logo.png" alt="" />

          <h1 className='font-bold text-xl mt-6'>Create your Account </h1>

          <input onChange={(e)=>setUserName(e.target.value)} className='py-2 px-2 border-2 w-3/4 rounded-lg mt-10 border-black' type="text" placeholder='Username' />
          <input onChange={(e)=>setEmail(e.target.value)} className='py-2 px-2 border-2 w-3/4 rounded-lg mt-5 border-black' type="text" placeholder='Email' />
          <input onChange={(e)=>setPassword(e.target.value)} className='py-2 px-2 border-2 w-3/4 rounded-lg mt-5 border-black' type="text" placeholder='Password' />

          <button onClick={(e)=>handleCreate(e)} className='w-3/4 bg-black text-white font-bold text-center text-lg rounded-md py-3 mt-10'>Create</button>

          <Link to={'/login'}><p className='underline my-20'>Login with Account</p></Link>

        </div>


      </div>
      <span className='col-span-4'></span>


    </div>
  )
}

export default Signup    