import Heading from './Heading'
import TrainerCard from './TrainerCard'
import wrestlerImage from "../../assets/randomImage/wrestler.png"
const Trainer = () => {
    return (
        <div className='mb-10'>
            <>
                <Heading heading="Expert Guidance. Zero Guesswork" subHeading="Meet the Coaches Behind Your Transformation"
                    paragraph="Every great fitness journey starts with the right guidance. Learn from experienced fitness professionals certified in strength conditioning, functional training, and sustainable weight management." />
                <div className="z-10 m-auto text-center w-20 h-20">
                    <img src={wrestlerImage} alt="" />
                </div>
            </>
            <TrainerCard />
        </div>
    )
}

export default Trainer