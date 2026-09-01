const swapPairs = [
    {
        id: 1,
        category: "Breakfast Staples",
        pantry: {
            name: "white bread (2 slices)",
            calories: 160,
            protein: 4,
            carbs: 30,
            fats: 1.5,
            note: "high glycemic index, low fiber"
        },
        swap: {
            name: "sprouted roti (2 rotis)",
            calories: 120,
            protein: 8.5,
            carbs: 22,
            fats: 1,
            note: "rich in complex carbs & active enzymes"
        }
    },
    {
        id: 2,
        category: "Evening Snacks",
        pantry: {
            name: "deep fried aloo tikki (2 pcs)",
            calories: 320,
            protein: 3.5,
            carbs: 42,
            fats: 16,
            note: "trans fat from deep frying"
        },
        swap: {
            name: "grilled paneer tikka (100 g)",
            calories: 220,
            protein: 18,
            carbs: 6,
            fats: 14,
            note: "high protein, calcium rich, grilled"
        }
    },
    {
        id: 3,
        category: "Beverages & Sweets",
        pantry: {
            name: "sweet lassi (300 ml)",
            calories: 280,
            protein: 5,
            carbs: 48,
            fats: 8,
            note: "loaded with added refined sugar"
        },
        swap: {
            name: "masala chaas (300 ml)",
            calories: 90,
            protein: 4.5,
            carbs: 8,
            fats: 3.5,
            note: "probiotic, aids digestion, low calorie"
        }
    },
    {
        id: 4,
        category: "Grains & Curries",
        pantry: {
            name: "white rice (1 cup cooked)",
            calories: 205,
            protein: 4.2,
            carbs: 45,
            fats: 0.4,
            note: "stripped of bran layers and fiber"
        },
        swap: {
            name: "foxtail millet (1 cup cooked)",
            calories: 160,
            protein: 6,
            carbs: 31,
            fats: 1.5,
            note: "low GI, gluten-free, rich in iron"
        }
    }
];
const Swap = () => {
    const totalPantryCalories = swapPairs.reduce((acc, value) => acc + value.pantry.calories, 0)
    const totalSwapCalories = swapPairs.reduce((acc, value) => acc + value.swap.calories, 0)

    const caloriesSaved = totalSwapCalories - totalPantryCalories

    const totalPantryProtein = swapPairs.reduce((acc, value) => acc + value.pantry.protein, 0)
    const totalSwapProtein = swapPairs.reduce((acc, value) => acc + value.swap.protein, 0)
    const proteinGained = totalSwapProtein - totalPantryProtein
    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            {/* Header Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-4 text-center">
                    <p className="text-emerald-800 font-semibold text-lg">Total Calories Saved</p>
                    <p className="text-3xl font-bold text-emerald-600">⚡ {caloriesSaved} kcal</p>
                </div>
                <div className="bg-blue-50 border border-blue-300 rounded-xl p-4 text-center">
                    <p className="text-blue-800 font-semibold text-lg">Total Protein Gained</p>
                    <p className="text-3xl font-bold text-blue-600">💪 +{proteinGained} g</p>
                </div>
            </div>

            {/* Comparison Grid */}
            <div className="flex flex-col gap-6">
                {swapPairs.map((pair) => (
                    <div key={pair.id} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                        <div className="bg-gray-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-600">
                            {pair.category}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                            {/* Pantry Item (Old) */}
                            <div className="p-5 bg-rose-50/30">
                                <span className="text-xs font-semibold uppercase text-rose-600">Swap Out</span>
                                <h3 className="text-lg font-bold capitalize text-gray-800 mt-1 mb-3">{pair.pantry.name}</h3>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    <p className="text-gray-600">Calories: <span className="font-semibold text-gray-900">{pair.pantry.calories} kcal</span></p>
                                    <p className="text-gray-600">Protein: <span className="font-semibold text-gray-900">{pair.pantry.protein} g</span></p>
                                    <p className="text-gray-600">Carbs: <span className="font-semibold text-gray-900">{pair.pantry.carbs} g</span></p>
                                    <p className="text-gray-600">Fats: <span className="font-semibold text-gray-900">{pair.pantry.fats} g</span></p>
                                </div>
                                <p className="mt-3 text-xs italic text-gray-500">⚠️ {pair.pantry.note}</p>
                            </div>

                            {/* Healthy Swap (New) */}
                            <div className="p-5 bg-emerald-50/40">
                                <span className="text-xs font-semibold uppercase text-emerald-600">Swap In</span>
                                <h3 className="text-lg font-bold capitalize text-emerald-900 mt-1 mb-3">{pair.swap.name}</h3>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    <p className="text-emerald-800">Calories: <span className="font-semibold text-emerald-950">{pair.swap.calories} kcal</span></p>
                                    <p className="text-emerald-800">Protein: <span className="font-semibold text-emerald-950">{pair.swap.protein} g</span></p>
                                    <p className="text-emerald-800">Carbs: <span className="font-semibold text-emerald-950">{pair.swap.carbs} g</span></p>
                                    <p className="text-emerald-800">Fats: <span className="font-semibold text-emerald-950">{pair.swap.fats} g</span></p>
                                </div>
                                <p className="mt-3 text-xs italic text-emerald-700">💡 {pair.swap.note}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Swap