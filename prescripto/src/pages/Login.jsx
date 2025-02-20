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
        <div className='flex flex-col border rounded-lg gap-2 border-gray-300 text-gray-500 p-26'>
          <p className='text-2xl font-semibold text-gray-700'>{state === 'Sign up' ? 'Create Account' : 'Log in'}</p>
          <p>Please {state === 'Sign up' ? 'create an account' : 'sign in'} to book appointment</p>
          { state === 'Sign up' ? 
          <>
            <label htmlFor="" >Username</label>
            <input className='border rounded-sm' type="name" />
          </> : null}
          <label htmlFor="" >Email</label>
          <input className='border rounded-sm' type="name" />
          <label htmlFor="" >Password</label>
          <input className='border rounded-sm' type="name" />
          <button className='bg-[var(--primary)] my-3 text-white p-3 px-6 w-fit m-auto rounded-md hover:scale-105 transition-all cursor-pointer'>
          {state === 'Sign up' ? 'Create account' : 'Log in'}</button>
          {state === 'Sign up' ? <p>Already have an account? <a href=""> Login here</a></p> : null}
        </div>
      </form>
    </div>
  )
}

export default Login