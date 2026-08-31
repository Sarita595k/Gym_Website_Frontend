import video from "../../assets/video/video.mp4"
import HeaderHeading from "./HeaderHeading"
const SecondHero = () => {
    return (<div className="relative">
        <div className="w-full h-full overflow-hidden ">
            <video autoPlay muted loop playsInline className="w-full">
                <source src={video} type="video/mp4"></source>
            </video>
        </div>
        <div className="absolute inset-0 bg-emerald-900/50"></div>
        <div className="absolute inset-0">
            <HeaderHeading heading="UNLEASH YOUR POWER" subheading="State-of-the-art combat and strength conditioning." />
        </div>
    </div>
    )
}

export default SecondHero