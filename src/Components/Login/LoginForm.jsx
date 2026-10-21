import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import loginBanner from "../../assets/Login/loginBanner.mp4"
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
        <div className='text-center h-[25vw] w-full flex items-center justify-center'>
            <div>
                <h1 className='text-emerald-900 font-bold capitalize text-2xl'>enter your credentials</h1>
                <p className='text-xs sm:text-sm text-gray-500 mt-1'>Welcome back. Enter your email and password to access your dashboard.</p>
                {/* showing error message  */}
                <p className='text-red-500 pt-5'>{errorMessage}</p>
                <form className="pt-5" onSubmit={handleSubmit}>
                    <label htmlFor="emailIs">Enter your email</label><br />
                    <input type="email" name="email" id="emailIs" className='border px-2 py-0.5' value={details.email} onChange={handleChange} /><br />
                    <label htmlFor="passwordIs">Enter your password</label><br />
                    <input type="password" name="password" id="passwordIs" className='border px-2 py-0.5' value={details.password} onChange={handleChange} /><br />
                    <button type='submit' className='bg-emerald-900 text-white px-10 py-2 my-5 cursor-pointer
                 hover:bg-[radial-gradient(at_top_left,#065f46,#000,#000)] hover:border-emerald-900 transition-transform duration-500 ease-in-out'>Submit</button>
                </form>
                <p className='capitalize pb-12'>not joined our gym yet! no worries just click on <Link to="/register" className='text-emerald-900 font-semibold hover:bg-emerald-700 hover:text-white'>sign up</Link> to joined our gym.</p>
            </div>
        </div >
    )
}

export default LoginForm