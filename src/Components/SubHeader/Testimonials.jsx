import bgImage from "../../assets/randomImage/girlYoga.png"
import Heading from './Heading'
import Reviews from './Reviews'

const Testimonials = () => {
    return (
        <div>
            <div style={{ backgroundImage: `${bgImage}` }}>
                <Heading heading="Real People. Real Power"
                    subHeading="See how our members turned ambition into daily habit."
                    paragraph="From first-time lifters to seasoned athletes, hear 
                directly from the community that shows up, grinds together, and
                 celebrates every milestone at Avsar Gym." />

                <Reviews />
            </div>
        </div>
    )
}

export default Testimonials