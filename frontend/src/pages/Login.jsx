import React,{useState} from 'react'

const Login = () => {

const [state,setState]= useState('Sign Up')
const [name, setName] = useState('')
const [email,setEmail]= useState('')
const [password,setPassword]= useState('')

const onSubmitHandler = async(event)=>{
  event.preventDefault()
}


  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-green-600 text-sm shadow-lg'>
        <p className='text-2xl fonst-semibold'>{state === 'Sign Up' ? "Create Account": "Login"}</p>
        <p>Please {state === 'Sign Up' ? "sign up": "Log in "} to book appointment</p>
        <div className='w-full'>
          <p>Full Name</p>
          <input type='text' onChange={(e)=>setName(e.target.name)} value={name} required/>
        </div>
        <div className='w-full'>
          <p>Email</p>
          <input type='email' onChange={(e)=>setName(e.target.name)} value={name} required/>
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input type='password' onChange={(e)=>setName(e.target.name)} value={name} required/>
        </div>

        <button>{state === 'Sign Up' ? "Create Account": "Login"}</button>
      </div>

    </form>
  )
}

export default Login