import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'

const Login = () => {
    const [state, setState] = useState('Admin')





  return (
    <form>
        <div>
            <p><span> {state}</span>Login</p>
        </div>
    </form>>
  )
}

export default Login