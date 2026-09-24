import { LuDumbbell, LuZap, LuCrown } from "react-icons/lu"
const priceDetails = [{
    id: 1,
    type: "basic / monthly",
    icons: LuDumbbell,
    ideal: "Ideal for beginners ",
    access: "Gym access + locker room + 1 trainer check-ins",
    price: "2500/ *",
    link: "#",
    popularity: "Quick and Easy"
}, {
    id: 2,
    type: "Pro / Quarterly",
    icons: LuZap,
    ideal: "Ideal for beginners+intermidiate ",
    access: "Gym access + group classes + 2 trainer check-ins",
    price: "5000/ *",
    link: "#",
    popularity: "most popular"
}, {
    id: 3,
    type: "Elite / Annual",
    icons: LuCrown,
    ideal: "beginners, expert and intermideate ",
    access: "Unlimited access + 1-on-1 coaching + nutrition plan",
    price: "12000/ *",
    link: "#",
    popularity: "best seller"
}]
const PriceCard = () => {
    return (
        <div className="flex flex-col lg:flex-row md:flex-row items-center">
            {priceDetails.map((details, index) => {
                const IconComponent = details.icons
                return (
                    < div key={index} className="relative bg-[radial-gradient(at_top_left,#065f46,#000,#000)] w-[50%] text-center my-8 lg:mx-2 shadow-md border-t border-emerald-100 shadow-emerald-900 
                rounded-xl hover:scale-105 transition-transform duration-300 ease-out" >
                        <h1 className="text-emerald-300 absolute bg-[radial-gradient(at_top_left,#065f46,#000,#000)] -top-7 py-3 px-10 left-1/2 -translate-x-1/2 capitalize rounded-3xl">{details.popularity}</h1>
                        <IconComponent className="w-8 h-8 text-emerald-600 mx-auto mt-6" />
                        <h1 className="font-heading text-xl lg:text-2xl uppercase py-4 border-b border-emerald-400 text-emerald-500">{details.type}</h1>
                        <h2 className="py-2 text-sm font-subheading capitalize px-3 lg:py-4 lg:text-lg border-b text-gray-200 border-emerald-400">{details.ideal}</h2>
                        <h2 className="py-2 text-sm font-subheading capitalize px-3 lg:py-4 lg:text-lg border-b text-gray-200 border-emerald-400">{details.access}</h2>
                        <h2 className="py-2 text-sm font-subheading capitalize px-3 lg:py-4 lg:text-lg border-b text-gray-200 border-emerald-400">{details.price}</h2>
                        <button className="py-3 m-5 bg-emerald-700 text-gray-200 px-4 capitalize hover:text-white hover:bg-[radial-gradient(at_top_left,#065f46,#000,#000)]
                   rounded-xl transition-colors duration-500 ease-in "><a href="#">purchase now</a></button>
                    </div>

                )
            })
            }
        </div >
    )
}

export default PriceCard