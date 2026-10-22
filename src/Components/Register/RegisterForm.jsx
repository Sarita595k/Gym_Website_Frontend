import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

const RegisterForm = () => {
    const navigate = useNavigate()
    const [details, setDetails] = useState({
        name: "",
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
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/user/register`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                }, credentials: 'include',
                body: JSON.stringify(details)
            })
            const data = await response.json()
            if (!response.ok) {
                throw new Error(data.message || "Registration failed")
            }
            navigate("/login")

        } catch (err) {
            console.log(err.message)
            setErrorMessage(err.message)
        }
    }
    return (
        <div className="flex-col justify-center items-center text-center pt-10">
            <p>{errorMessage}</p>
            <form onSubmit={handleSubmit}>
                {/* <label htmlFor="nameIs">Enter your name</label><br /> */}
                <input type="text" name="name" id="nameIs" value={details.name} onChange={handleChange} placeholder="Enter your name"
                    className="border" /><br />
                {/* <label htmlFor="emailIs">Enter your email</label><br /> */}
                <input type="email" name="email" id="emailIs" value={details.email} onChange={handleChange} placeholder="Enter your email"
                    className="border" /><br />
                {/* <label htmlFor="passwordIs">Enter your password</label><br /> */}
                <input type="password" name="password" id="passwordIs" value={details.password} onChange={handleChange} placeholder="Enter your password"
                    className="border" /><br />
                <button type='submit' className='bg-emerald-900 text-white px-10 py-2 my-5 cursor-pointer
                 hover:bg-[radial-gradient(at_top_left,#065f46,#000,#000)] hover:border-emerald-900 transition-transform duration-500 ease-in-out'>Submit</button>
            </form>
            <p className="pt-3 pb-5">Already a member of our gym then <Link to="/login" className="capitalize text-emerald-900 font-semibold hover:text-emerald-600">login here</Link> </p>
        </div>
    )
}

export default RegisterForm