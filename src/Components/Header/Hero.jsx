import { useEffect, useState } from "react"
import slide1 from "../../assets/Hero/slide1.png"
import slide5 from "../../assets/Hero/slide2.png"
import slide3 from "../../assets/Hero/slide3.png"
import slide4 from "../../assets/Hero/slide4.png"
import slide2 from "../../assets/Hero/slide5.png"

const slides = [slide1, slide2, slide3, slide4, slide5]

const Hero = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const sliderTimer = setInterval(() => {
            setIndex(prevIndex => {
                const nextIndex = prevIndex + 1
                if (nextIndex == slides.length) {
                    return 0
                }
                return nextIndex
            })
        }, 5000);
        return (() => clearInterval(sliderTimer))
    }, [])
    return (
        <div className="relative">
            <div className="relative w-full h-full">
                <img src={slides[index]} alt="slides" className="w-full h-full object-full opacity-90" />
            </div>
            <div className="absolute top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2 z-10 text-center whitespace-nowrap p-2">
                <h1 className="bg-black text-5xl font-bold text-gray-300">The Fastest Path to a Stronger You.</h1>
                <h3 className="bg-gray-300 text-2xl mt-2">Stop Waiting. Start Winning.</h3>
            </div>
        </div>
    )
}

export default Hero