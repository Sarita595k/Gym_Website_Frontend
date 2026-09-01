import SideImage from "../../assets/Login/LoginSideBanner.png"
import Heading from "../SubHeader/Heading"
import LoginForm from './LoginForm'

const LoginComp = () => {
    return (
        <div>
            <Heading heading="Access Your Member Portal"
                subHeading="Consistency is Where Transformations Happen"
                paragraph="Sign in to access your workout logs, review your
                \ weekly AI nutrition blueprints, and track your strength milestones.
                 Your goals are waiting—let’s get to work." />
            <div className="flex justify-center items-center py-10">
                <LoginForm />
                <img src={SideImage} alt="" className="h-[45vw]" />
            </div>
        </div >
    )
}

export default LoginComp