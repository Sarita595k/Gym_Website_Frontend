import AiNutrition from "../Components/NutritionPage/AiNutrition"
import NutritionHero from "../Components/NutritionPage/NutritionHero"
import { PantrySwap } from "../Components/NutritionPage/PantrySwap"
import Recipe from "../Components/NutritionPage/Recipe"
import WhatToEat from "../Components/NutritionPage/WhatToEat"

const NutritionPlan = () => {
    return (
        <div>
            <NutritionHero />
            <AiNutrition />
            <WhatToEat />
            <PantrySwap />
            <Recipe />
        </div>
    )
}

export default NutritionPlan