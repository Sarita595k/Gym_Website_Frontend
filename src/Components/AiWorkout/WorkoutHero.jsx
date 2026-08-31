import VideoComp from '../Header/VideoComp'
import handVideo from "../../assets/video/video.mp4"
import HeaderHeading from '../Header/HeaderHeading'

const WorkoutHero = () => {
    return (
        <div className='relative'>
            <VideoComp videoIs={handVideo} />
            <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
                <HeaderHeading heading="UNLEASH YOUR POWER"
                    subheading="State-of-the-art combat and strength conditioning." />
            </div>
        </div>
    )
}

export default WorkoutHero