import React, { useState } from 'react'

const Login = () => {

  const  [state, setState] = useState('Sign up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    
  }


  return (
    <div>
      <form onSubmit={onSubmitHandler} className='flex min-h-[80vh] items-center justify-center'>
        <div className='flex flex-col border rounded-xl gap-3 border-gray-300 text-gray-500 p-12'>
          <p className='text-2xl font-semibold text-gray-700'>{state === 'Sign up' ? 'Create Account' : 'Log in'}</p>
          <p>Please {state === 'Sign up' ? 'create an account' : 'sign in'} to book appointment</p>
          { state === 'Sign up' && 
          <>
            <label htmlFor="" >Full Name</label>
            <input className='border border-gray-300 rounded-sm p-1' type="text" value={name} onChange={(e)=>setName(e.target.name)} required/>
          </>}
          <label htmlFor="" >Email</label>
          <input className='border border-gray-300 rounded-sm p-1' type="text" value={email} onChange={(e)=>setEmail(e.target.email)} required/>
          <label htmlFor="" >Password</label>
          <input className='border border-gray-300 rounded-sm p-1' type="text" value={password} onChange={(e)=>setPassword(e.target.password)} required/>
          <button className='bg-[var(--primary)] my-3 text-white p-3 px-6 w-fit m-auto rounded-md hover:scale-105 transition-all cursor-pointer'>
          {state === 'Sign up' ? 'Create account' : 'Log in'}</button>
          {state === 'Sign up' ? <p className='m-auto'>Already have an account? <a className='text-[var(--primary)] underline' href=""> Login here</a></p> : 
          <p className='m-auto'>Forgot your password? <a className='text-[var(--primary)] underline' href=""> Reset here</a></p>}
        </div>
      </form>
    </div>
  )
}

export default Login