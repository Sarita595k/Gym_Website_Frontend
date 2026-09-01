import AiNutrition from "../Components/NutritionPage/AiNutrition"
import NutritionHero from "../Components/NutritionPage/NutritionHero"
import { PantrySwap } from "../Components/NutritionPage/PantrySwap"
import WhatToEat from "../Components/NutritionPage/WhatToEat"

const NutritionPlan = () => {
    return (
        <div>
            <NutritionHero />
            <AiNutrition />
            <WhatToEat />
            <PantrySwap />
        </div>
    )
}

export default NutritionPlan