import Heading from "../SubHeader/Heading"
import WhatToEatGrid from "./WhatToEatGrid"
const WhatToEat = () => {
    return (
        <div>
            <Heading heading="Simple Swaps for Real Results" subHeading="Essential Foods for Strength & Recovery"
                paragraph="A quick-reference guide to distinguish high-impact whole foods from low-value, processed alternatives. Keep your metabolism charged and your energy levels rock solid." />
            <WhatToEatGrid />
        </div>
    )
}

export default WhatToEat