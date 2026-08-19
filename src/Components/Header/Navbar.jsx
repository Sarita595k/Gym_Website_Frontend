import { Link } from "react-router-dom"
import Logo from "../../assets/logo-bg.png"
const Navbar = () => {
    return (
        <div className="flex flex-col">
            <img src={Logo} alt="logo" className="w-60 h-40 m-auto" />
            <div className='flex justify-between bg-[#3c464b] text-white p-2'>
                <Link to="/" className="hover:text-[#d76033]">Home</Link>
                <Link to="/subscription" className="hover:text-[#d76033]">Subscription</Link>
                <Link to="/portfolio" className="hover:text-[#d76033]">Portfolio</Link>
                <Link to="/aiworkout" className="hover:text-[#d76033]">AI-Workout Plan</Link>
                <Link to="/nutrition" className="hover:text-[#d76033]">Nutrition Plan</Link>
                <Link to="/about" className="hover:text-[#d76033]">About us</Link>
                <Link to="/contact" className="hover:text-[#d76033]">Contact us</Link>
                <Link to="/login" className="hover:text-[#d76033]">Login</Link>
            </div>
        </div>
    )
}

export default Navbar