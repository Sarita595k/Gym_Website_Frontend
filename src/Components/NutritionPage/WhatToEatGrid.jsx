import protienBowl from "../../assets/Nutrition/protein.mp4";
import carbsBowl from "../../assets/Nutrition/carbs.mp4";
import fatsBowl from "../../assets/Nutrition/fats.mp4";
import hydrationBowl from "../../assets/Nutrition/hydration.mp4";
import snacksBowl from "../../assets/Nutrition/snacks.mp4";

const dietDetails = [
    {
        id: 1,
        video: protienBowl,
        type: "protein sources",
        fuel: "Paneer, tofu, soya chunks, whole eggs, chicken breast, fish, Greek yogurt, lentils, whey protein",
        drain: "Processed sausages, deep-fried chicken patties, protein bars loaded with added sugar & maltitol",
        swap: "Maximizes muscle protein synthesis without excessive saturated fats or digestive distress."
    },
    {
        id: 2,
        video: carbsBowl,
        type: "Carbohydrates",
        fuel: "Oats, sweet potatoes, brown/white rice, whole wheat roti, foxtail millets, quinoa, bananas",
        drain: "Maida-based breads, instant sweetened noodles, sugary morning cereals, pastries, bakery biscuits",
        swap: "Delivers sustained glycogen replenishment and steady insulin levels instead of sharp energy crashes."
    },
    {
        id: 3,
        video: fatsBowl,
        type: "Fats & Oils",
        fuel: "Cold-pressed mustard/coconut oil, measured desi ghee, raw almonds, walnuts, chia & flax seeds",
        drain: "Hydrogenated vegetable oils, reheated frying oils, palm oil, margarine, trans-fat spreads",
        swap: "Supports natural testosterone and joint lubrication while eliminating systemic cellular inflammation."
    },
    {
        id: 4,
        type: "Hydration & Fluids",
        video: hydrationBowl,
        fuel: "Fresh coconut water, buttermilk (chaas), lemon water with rock salt, green tea, black coffee",
        drain: "Packaged sweetened fruit juices, carbonated soft drinks, high-sugar energy drinks, alcohol",
        swap: "Replaces critical electrolytes lost in sweat without adding empty liquid calories and sugar spikes."
    },
    {
        id: 5,
        type: "Snacks & Craving Busters",
        video: snacksBowl,
        fuel: "Roasted makhana, boiled sprout chaat, roasted chana, air-popped popcorn, fruit with peanut butter",
        drain: "Deep-fried namkeen, samosas, packaged potato chips, milk chocolates, sweets loaded with refined sugar",
        swap: "Satisfies hunger with high fiber, micronutrients, and satiety rather than mindless hyper-palatable calories."
    }
];

const WhatToEatGrid = () => {
    return (
        <div className="flex flex-wrap items-stretch justify-center my-10 px-4 gap-6">
            {dietDetails.map((diet) => (
                <div
                    key={diet.id}
                    className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] text-center shadow-lg shadow-emerald-950/40 rounded-xl overflow-hidden bg-white border border-emerald-100 flex flex-col justify-between p-4"
                >
                    {/* Video Container */}
                    <div className="w-full h-48 overflow-hidden rounded-lg bg-black">
                        <video
                            autoPlay
                            loop
                            playsInline
                            muted
                            className="w-full h-full object-cover"
                        >
                            <source src={diet.video} type="video/mp4" />
                        </video>
                    </div>

                    <h2 className="text-xl uppercase font-heading font-bold text-emerald-800 py-3">
                        {diet.type}
                    </h2>

                    <div className="flex-1 flex flex-col justify-between gap-4 text-left px-2 pb-2">
                        {/* Fuel Section */}
                        <div>
                            <h3 className="font-para text-sm font-semibold tracking-wide capitalize text-emerald-700">
                                ✅ Fuel (What to Include)
                            </h3>
                            <p className="text-sm pt-1 font-normal text-gray-700 leading-relaxed">
                                {diet.fuel}
                            </p>
                        </div>

                        {/* Drain Section */}
                        <div>
                            <h3 className="font-para text-sm font-semibold tracking-wide capitalize text-rose-700">
                                ❌ Drain (What to Avoid or Limit)
                            </h3>
                            <p className="text-sm pt-1 font-normal text-gray-700 leading-relaxed">
                                {diet.drain}
                            </p>
                        </div>

                        {/* Swap Section */}
                        <div className="pt-2 border-t border-gray-100">
                            <h3 className="font-para text-sm font-semibold tracking-wide capitalize text-emerald-900">
                                💡 Why the Swap Matters
                            </h3>
                            <p className="text-sm pt-1 italic font-light text-gray-600 leading-relaxed">
                                {diet.swap}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WhatToEatGrid;