import protienBowl from "../../assets/Nutrition/protein.mp4"
import carbsBowl from "../../assets/Nutrition/carbs.mp4"
import fatsBowl from "../../assets/Nutrition/fats.mp4"
import hydrationBowl from "../../assets/Nutrition/hydration.mp4"
import snacksBowl from "../../assets/Nutrition/snacks.mp4"

const dietDetails = [{
    id: 1,
    video: protienBowl,
    type: "protein sources",
    fuel: "Paneer, tofu, soya chunks, whole eggs, chicken breast, fish, Greek yogurt, lentils, whey protein",
    drain: "Processed sausages, deep-fried chicken patties, protein bars loaded with added sugar & maltitol",
    swap: "Maximizes muscle protein synthesis without excessive saturated fats or digestive distress."
}, {
    id: 2,
    video: carbsBowl,
    type: "Carbohydrates",
    fuel: "Oats, sweet potatoes, brown/white rice, whole wheat roti, foxtail millets, quinoa, bananas",
    drain: "Maida-based breads, instant sweetened noodles, sugary morning cereals, pastries, bakery biscuits",
    swap: "Delivers sustained glycogen replenishment and steady insulin levels instead of sharp energy crashes."
}, {
    id: 3,
    video: fatsBowl,
    type: "Fats & Oils",
    fuel: "Cold-pressed mustard/coconut oil, measured desi ghee, raw almonds, walnuts, chia & flax seeds",
    drain: "Hydrogenated vegetable oils, reheated frying oils, palm oil, margarine, trans-fat spreads",
    swap: "Supports natural testosterone and joint lubrication while eliminating systemic cellular inflammation."
}, {
    id: 4,
    type: "Hydration & Fluids",
    video: hydrationBowl,
    fuel: "Fresh coconut water, buttermilk (chaas), lemon water with rock salt, green tea, black coffee",
    drain: "Packaged sweetened fruit juices, carbonated soft drinks, high-sugar energy drinks, alcohol",
    swap: "Replaces critical electrolytes lost in sweat without adding empty liquid calories and sugar spikes."
}, {
    id: 5,
    type: "Snacks & Craving Busters",
    video: snacksBowl,
    fuel: "Roasted makhana, boiled sprout chaat, roasted chana, air-popped popcorn, fruit with peanut butter",
    drain: "Deep-fried namkeen, samosas, packaged potato chips, milk chocolates, sweets loaded with refined sugar",
    swap: "Satisfies hunger with high fiber, micronutrients, and satiety rather than mindless hyper-palatable calories."
},]
const WhatToEatGrid = () => {
    return (
        <div className="flex flex-wrap items-stretch my-10 px-2 gap-6 justify-around">
            {dietDetails.map(diet => (
                <div key={diet.id} className="w-full md:w-[calc(50%-1.5rem)] text-center shadow-lg shadow-emerald-900 lg:w-[calc(33.3%-1.5rem)]">
                    <video autoPlay loop playsInline muted className="rounded-xl">
                        <source src={diet.video} type="video/mp4" />
                    </video>
                    <h1 className="text-xl text-center uppercase font-heading text-emerald-800 py-3">{diet.type}</h1>
                    <h2 className="font-para text-sm font-semibold px-4 tracking-wide capitalize text-emerald-800">✅ fuel (what to include)
                        <p className="text-sm pt-2 font-light text-gray-700">{diet.fuel}</p></h2>
                    <h2 className="font-para text-sm font-semibold px-4 tracking-wide capitalize text-emerald-800 py-4">❌ Drain (What to Avoid or Limit)
                        <p className="text-sm pt-2 font-light text-gray-700">{diet.fuel}</p>
                    </h2>
                    <h2 className="font-para text-sm font-semibold px-4 tracking-wide capitalize text-emerald-800 py-2">Why the Swap Matters
                        <p className="text-sm pt-2 font-light text-gray-700 pb-2">{diet.swap}</p>
                    </h2>
                </div>
            ))
            }
        </div >
    )
}

export default WhatToEatGrid