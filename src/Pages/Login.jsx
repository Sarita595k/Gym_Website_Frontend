import Banner from "../assets/Login/loginBanner.mp4"
import VideoComp from '../Components/Header/VideoComp'
import LoginBanner from "../Components/Login/LoginBanner"
import LoginComp from "../Components/Login/LoginComp"
import LoginForm from "../Components/Login/LoginForm"

const Login = () => {
    return (
        <>
            <LoginBanner />
            <LoginComp />
            <LoginForm />
        </>
    )
}

export default Login