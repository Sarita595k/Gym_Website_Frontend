import LoginBanner from '../Components/Login/LoginBanner'
import LoginComp from '../Components/Login/LoginComp'
import RegisterForm from '../Components/Register/RegisterForm'
import RegisterHeading from '../Components/Register/RegisterHeading'

const Register = () => {
    return (
        <div>
            <LoginBanner />
            <RegisterHeading />
            <RegisterForm />
        </div>
    )
}

export default Register