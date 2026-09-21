import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const LoginForm = () => {
    const navigate = useNavigate()
    const [details, setDetails] = useState({
        email: "",
        password: ""
    })
    const [errorMessage, setErrorMessage] = useState("")

    const handleChange = (event) => {
        const { name, value } = event.target
        setDetails(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setErrorMessage("")
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/user/login`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                }, credentials: 'include',
                body: JSON.stringify(details)
            })
            const data = await response.json()
            if (!response.ok) {
                throw new Error(data.message || "Login failed")
            }
            localStorage.setItem("token", data.token)
            localStorage.setItem("user details", JSON.stringify(data.user))
            navigate("/dashboard")
            console.log("login successful", data)
        } catch (err) {
            console.log(err.message)
            setErrorMessage(err.message)
        }

    }


    return (
        <>
            <div className='border h-[45vw] p-10'>
                <h1 className='text-emerald-900 font-bold capitalize text-2xl'>enter your credentials</h1>
                <p className='text-xs sm:text-sm text-gray-500 mt-1'>Welcome back. Enter your email and password to access your dashboard.</p>
                {/* showing error message  */}
                <p>{errorMessage}</p>
                <form className="pt-10" onSubmit={handleSubmit}>
                    <label htmlFor="emailIs">Enter your email</label><br />
                    <input type="email" name="email" id="emailIs" className='border' value={details.email} onChange={handleChange} /><br />
                    <label htmlFor="passwordIs">Enter your password</label><br />
                    <input type="password" name="password" id="passwordIs" className='border' value={details.password} onChange={handleChange} /><br />
                    <button type='submit'>Submit</button>
                </form>
                <p>not joined our gym yet! no worries just click on <Link to="/register">sign up</Link> to joined our gym.</p>
            </div>
        </>
    )
}

export default LoginForm