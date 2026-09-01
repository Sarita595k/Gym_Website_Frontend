import React, { useState } from 'react'

const LoginForm = () => {
    const [details, setDetails] = useState({
        userEmail: "",
        userPassword: ""
    })
    return (
        <div className='border h-[45vw] p-10'>
            <h1 className='text-emerald-900 font-bold capitalize text-2xl'>enter your credentials</h1>
            <p className='text-xs sm:text-sm text-gray-500 mt-1'>Welcome back. Enter your email and password to access your dashboard.</p>
            <form className="pt-10">
                <label htmlFor="emailIs">Enter your email</label><br />
                <input type="email" name="userEmail" id="emailIs" className='border' /><br />
                <label htmlFor="passwordIs">Enter your password</label><br />
                <input type="password" name="userPassword" id="passwordIs" className='border' /><br />
                <input type="submit" />

            </form>
        </div>
    )
}

export default LoginForm