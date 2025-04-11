import React, { useState } from 'react'
{/* Login component renders the login and signup form of the website and organizes in a logical structure (top to bottom) that is easy for the user*/}
const Login = () => {

{/* useState is used to manage the current state of the form, either login or signup */}
const [currentState, setCurrentState] = useState('Sign up');

{/* onSubmitHandler is used to handle the form submission, prevents refresh upon user pressing submit */}
const onSubmitHandler = async (event) => {
  event.preventDefault();
}
{/* displays login, sign in, sign up dependent on current state, dispalys forgot password section?, and button to toggle between the states  */}
  return (
    /* form onSubmit function to prevent refresh upon user pressing submit */
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='cinzel-default text-3xl'>{currentState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === 'Login' ? '' : <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/>}
      <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
      <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
       <p className='cursor-pointer'>Forgot your Password?</p>
       {
        currentState === 'Login'
        ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
        : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
       }
      </div>
      {/* onClick function to toggle between login and signup, changes the currentState */}
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
} 

export default Login
