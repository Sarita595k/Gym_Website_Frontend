import bgImage from "../../assets/randomImage/girlYoga.png"
import Heading from './Heading'
import Reviews from './Reviews'
import rimage from "../../assets/randomImage/rimage.png"
const Testimonials = () => {
    return (
        <div className="relative">
            <div style={{ backgroundImage: `${bgImage}` }} className="z-10">
                <Heading heading="Real People. Real Power"
                    subHeading="See how our members turned ambition into daily habit."
                    paragraph="From first-time lifters to seasoned athletes, hear 
                directly from the community that shows up, grinds together, and
                 celebrates every milestone at Avsar Gym." />
                <div className="z-10 m-auto text-center w-30 h-30">
                    <img src={rimage} alt="" />
                </div>
                <Reviews />
            </div>
        </div>
    )
}

export default Testimonials