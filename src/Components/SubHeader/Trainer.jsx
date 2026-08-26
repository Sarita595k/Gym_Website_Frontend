import Heading from './Heading'
import TrainerCard from './TrainerCard'

const Trainer = () => {
    return (
        <div className='mb-10'>
            <>
                <Heading heading="Expert Guidance. Zero Guesswork" subHeading="Meet the Coaches Behind Your Transformation"
                    paragraph="Every great fitness journey starts with the right guidance. Learn from experienced fitness professionals certified in strength conditioning, functional training, and sustainable weight management." />
            </>
            <TrainerCard />
        </div>
    )
}

export default Trainer