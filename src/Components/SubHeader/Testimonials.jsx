import React from 'react'
import Heading from './Heading'
import Reviews from './Reviews'

const Testimonials = () => {
    return (<>

        <div>
            <Heading heading="Real People. Real Power"
                subHeading="See how our members turned ambition into daily habit."
                paragraph="From first-time lifters to seasoned athletes, hear 
                directly from the community that shows up, grinds together, and
                 celebrates every milestone at Avsar Gym." />
        </div>
        <Reviews />
    </>
    )
}

export default Testimonials