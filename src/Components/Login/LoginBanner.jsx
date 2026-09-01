import Banner from "../../assets/Login/loginBanner.mp4"
import VideoComp from '../Header/VideoComp'
import HeaderHeading from "../Header/HeaderHeading"
const LoginBanner = () => {
    return (
        <div className="relative">
            <VideoComp videoIs={Banner} />
            {/* <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
                <HeaderHeading heading="READY TO WORK?"
                    subheading="Log in to unleash your full potential and dominate your daily fitness goals." />
            </div> */}
        </div >
    )
}

export default LoginBanner