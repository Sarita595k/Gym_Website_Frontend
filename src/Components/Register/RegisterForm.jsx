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
        <div>
            <p>{errorMessage}</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nameIs">Enter your name</label><br />
                <input type="text" name="name" id="nameIs" value={details.name} onChange={handleChange} placeholder="john doe"
                    className="border" /><br />
                <label htmlFor="emailIs">Enter your email</label><br />
                <input type="email" name="email" id="emailIs" value={details.email} onChange={handleChange} placeholder="johndoe@gmail.com"
                    className="border" /><br />
                <label htmlFor="passwordIs">Enter your password</label><br />
                <input type="password" name="password" id="passwordIs" value={details.password} onChange={handleChange} placeholder="*************"
                    className="border" /><br />
                <button type="submit">Submit</button>
            </form>
            <p>already a member of our gym then <Link to="/login">login here</Link> </p>
        </div>
    )
}

export default RegisterForm