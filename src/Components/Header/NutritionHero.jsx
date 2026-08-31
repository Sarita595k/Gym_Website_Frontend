import HeaderHeading from "./HeaderHeading"
import VideoComp from "./VideoComp"
import nutrition from "../../assets/Nutrition/nutrition.mp4"
const NutritionHero = () => {
    return (<div className="relative">
        <VideoComp videoIs={nutrition} />
        <div className="absolute inset-0 bg-emerald-900/50"></div>
        <div className="absolute inset-0">
            <HeaderHeading heading="Eat Clean. Train Heavy. Live Better" subheading="AI-Powered Meal Plans Backed by Certified Coaches" />
        </div>
    </div>
    )
}

export default NutritionHero