import { useEffect, useState } from "react"

const NewsApi = () => {
    const newsApiLink = `https://gnews.io/api/v4/search?q=nutrition+OR+fitness+OR+diet&country=in&lang=en&apikey=${import.meta.env.VITE_NEWS_API_KEY}`
    const [newsData, setNewsData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(newsApiLink)
                if (!response.ok) {
                    throw new Error("Error in fetching response from api")
                }
                const data = await response.json()
                setNewsData(data.articles || [])
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        fetchNews()
    }, [newsApiLink])

    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-12">
            {/* Header */}
            <div className="text-center mb-10">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest bg-emerald-950/80 border border-emerald-800/60 px-3 py-1 rounded-full">
                    Live Updates
                </span>
            </div>

            {/* Loading Skeleton */}
            {loading && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                            key={i}
                            className="h-80 rounded-2xl bg-neutral-900/60 border border-emerald-950 animate-pulse"
                        />
                    ))}
                </div>
            )}

            {/* News Grid */}
            {!loading && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {newsData.map((newsDetails, index) => (
                        <a
                            key={index}
                            href={newsDetails.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative h-80 rounded-2xl overflow-hidden border border-emerald-900/40 bg-neutral-950 shadow-lg shadow-black/40 transition-all duration-300 hover:border-emerald-500/80 hover:shadow-emerald-950/50 hover:-translate-y-1.5 flex flex-col justify-end"
                        >
                            {/* Background Image with Zoom & Opacity Shift */}
                            <img
                                src={
                                    newsDetails.image ||
                                    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80"
                                }
                                alt={newsDetails.title}
                                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500 ease-out"
                            />

                            {/* Gradient Scrim for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent group-hover:from-black group-hover:via-black/50 transition-colors duration-300" />

                            {/* Content Overlay */}
                            <div className="relative z-10 p-5 flex flex-col justify-end gap-2.5">
                                {/* Source Badge & Date */}
                                <div className="flex items-center justify-between text-[11px] font-medium text-emerald-400">
                                    <span className="bg-emerald-950/90 border border-emerald-800/60 px-2.5 py-0.5 rounded-full capitalize">
                                        {newsDetails.source?.name || "Fitness News"}
                                    </span>
                                    <span className="text-neutral-400">
                                        {newsDetails.publishedAt
                                            ? new Date(newsDetails.publishedAt).toLocaleDateString("en-IN", {
                                                month: "short",
                                                day: "numeric",
                                            })
                                            : "Recent"}
                                    </span>
                                </div>

                                {/* Article Headline */}
                                <h3 className="text-base sm:text-lg font-bold text-white line-clamp-2 leading-snug group-hover:text-emerald-300 transition-colors duration-200">
                                    {newsDetails.title}
                                </h3>

                                {/* Description on Hover */}
                                {newsDetails.description && (
                                    <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-300 ease-in-out">
                                        {newsDetails.description}
                                    </p>
                                )}

                                {/* Read Article Link Indicator */}
                                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-200 pt-1">
                                    Read Full Story →
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </section>
    )
}

export default NewsApi