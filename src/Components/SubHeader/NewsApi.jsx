import { useEffect, useState } from "react"

const NewsApi = () => {
    const newsApiLink = `https://gnews.io/api/v4/search?q=nutrition+OR+fitness+OR+diet&country=in&lang=en&apikey=${import.meta.env.VITE_NEWS_API_KEY}`
    const [newsData, setNewsData] = useState([])

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(`${newsApiLink}`)
                if (!response.ok) {
                    return "Error in fetching response from api"
                }
                const data = await response.json()
                console.log(data.articles)
                setNewsData(data.articles || [])
            } catch (err) {
                console.log(err)
            }
        }
        fetchNews()
    }, [])
    return (
        <div className="grid grid-cols-2 w-full gap-10 relative">
            {newsData.map((newsDetails, index) => (
                <div key={index} className="relative">
                    <img src={newsDetails.image} alt={newsDetails.title} className="opacity-45 hover:opacity-100" />
                    <h1 className="absolute bottom-0 text-lg">{newsDetails.title}</h1>

                </div>
            ))}
        </div>
    )
}

export default NewsApi