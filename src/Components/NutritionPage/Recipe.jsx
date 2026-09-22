import React, { useState } from 'react'

// Sub-component for individual card state (Read More / Show Less)
const RecipeCard = ({ recipeIs, index }) => {
    const [showFullInstructions, setShowFullInstructions] = useState(false)

    const instructions = recipeIs.instructions || []
    // Preview the first 2 steps when collapsed
    const previewLimit = 2
    const hasMore = instructions.length > previewLimit
    const displayedInstructions = showFullInstructions ? instructions : instructions.slice(0, previewLimit)

    return (
        <div className="bg-black/90 border border-emerald-900/60 rounded-2xl shadow-xl shadow-emerald-950/20 p-6 sm:p-8 flex flex-col gap-6 backdrop-blur-sm">
            {/* Header & Quick Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-emerald-900/40 pb-5">
                <div>
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider bg-emerald-950/80 border border-emerald-800/60 px-2.5 py-1 rounded-full">
                        Meal #{index + 1}
                    </span>
                    <h2 className="text-2xl font-bold text-white mt-2 capitalize tracking-tight">
                        {recipeIs.mealName}
                    </h2>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-emerald-200/80 font-medium">
                    <span className="flex items-center gap-1.5 bg-neutral-900/90 border border-emerald-900/50 px-3 py-1.5 rounded-lg text-neutral-300">
                        ⏱️ {recipeIs.prepTime || 15} mins
                    </span>
                    <span className="flex items-center gap-1.5 bg-neutral-900/90 border border-emerald-900/50 px-3 py-1.5 rounded-lg text-neutral-300">
                        👥 Serves {recipeIs.people || 1}
                    </span>
                </div>
            </div>

            {/* Nutritional Macros Banner */}
            <div>
                <h3 className="text-xs font-semibold text-emerald-500/80 uppercase tracking-widest mb-2.5">
                    Nutritional Profile
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <div className="bg-emerald-950/30 border border-emerald-900/50 rounded-xl p-3 text-center">
                        <p className="text-xs text-emerald-400 font-medium uppercase tracking-wider">Calories</p>
                        <p className="text-lg font-bold text-white mt-0.5">
                            {recipeIs.macros?.calories || 0} <span className="text-xs font-normal text-emerald-400/80">kcal</span>
                        </p>
                    </div>

                    <div className="bg-emerald-950/30 border border-emerald-900/50 rounded-xl p-3 text-center">
                        <p className="text-xs text-emerald-400 font-medium uppercase tracking-wider">Protein</p>
                        <p className="text-lg font-bold text-white mt-0.5">
                            {recipeIs.macros?.protein || 0}g
                        </p>
                    </div>

                    <div className="bg-emerald-950/30 border border-emerald-900/50 rounded-xl p-3 text-center">
                        <p className="text-xs text-emerald-400 font-medium uppercase tracking-wider">Carbs</p>
                        <p className="text-lg font-bold text-white mt-0.5">
                            {recipeIs.macros?.carbs || 0}g
                        </p>
                    </div>

                    <div className="bg-emerald-950/30 border border-emerald-900/50 rounded-xl p-3 text-center">
                        <p className="text-xs text-emerald-400 font-medium uppercase tracking-wider">Fats</p>
                        <p className="text-lg font-bold text-white mt-0.5">
                            {recipeIs.macros?.fats || 0}g
                        </p>
                    </div>
                </div>
            </div>

            {/* Ingredients & Instructions */}
            <div className="grid grid-cols-1 gap-6 pt-1">
                {/* Ingredients */}
                <div className="bg-neutral-900/80 p-5 rounded-xl border border-emerald-950">
                    <h3 className="text-sm font-bold text-emerald-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                        🥗 Ingredients
                    </h3>
                    <ul className="space-y-2">
                        {recipeIs.ingredients?.map((item, itemIdx) => (
                            <li
                                key={itemIdx}
                                className="text-sm text-neutral-300 flex justify-between items-center border-b border-neutral-800/80 pb-1.5 last:border-0"
                            >
                                <span className="capitalize">{item.item}</span>
                                <span className="font-semibold text-emerald-300 text-xs bg-emerald-950/90 border border-emerald-800/50 px-2 py-0.5 rounded">
                                    {item.quantity}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Instructions with Read More */}
                <div className="bg-neutral-900/80 p-5 rounded-xl border border-emerald-950 flex flex-col justify-between">
                    <div>
                        <h3 className="text-sm font-bold text-emerald-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                            🍳 Instructions
                        </h3>
                        <ol className="space-y-3">
                            {displayedInstructions.map((step, stepIdx) => (
                                <li key={stepIdx} className="text-sm text-neutral-300 flex gap-3 items-start">
                                    <span className="flex-shrink-0 w-5 h-5 bg-emerald-800 text-emerald-100 rounded-full text-xs flex items-center justify-center font-bold mt-0.5 shadow-sm">
                                        {stepIdx + 1}
                                    </span>
                                    <span className="leading-relaxed">{step}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Read More / Show Less Button */}
                    {hasMore && (
                        <button
                            onClick={() => setShowFullInstructions(prev => !prev)}
                            className="mt-4 pt-3 border-t border-neutral-800 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 self-start"
                        >
                            {showFullInstructions ? (
                                <>Show Less ↑</>
                            ) : (
                                <>Read More (+{instructions.length - previewLimit} more steps) ↓</>
                            )}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

const Recipe = ({ recipe }) => {
    if (!recipe || recipe.length === 0) return null

    return (
        <div className="max-w-7xl mx-auto w-full my-12 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {recipe.map((recipeIs, index) => (
                    <RecipeCard key={index} recipeIs={recipeIs} index={index} />
                ))}
            </div>
        </div>
    )
}

export default Recipe