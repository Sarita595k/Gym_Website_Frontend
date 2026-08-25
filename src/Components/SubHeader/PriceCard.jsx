const priceDetails = [{
    id: 1,
    type: "basic / monthly",
    ideal: "Ideal for beginners ",
    access: "Gym access + locker room + 1 trainer check-ins",
    price: "2500 *",
    link: "#",
}, {
    id: 2,
    type: "Pro / Quarterly",
    ideal: "Ideal for beginners+intermidiate ",
    access: "Gym access + group classes + 2 trainer check-ins",
    price: "5000 *",
    link: "#",
}, {
    id: 3,
    type: "Elite / Annual",
    ideal: "beginners, expert and intermideate ",
    access: "Unlimited access + 1-on-1 coaching + nutrition plan",
    price: "12000 *",
    link: "#",
}]
const PriceCard = () => {
    return (
        <div className="flex flex-col lg:flex-row md:flex-row items-center">
            {priceDetails.map((details, index) => (
                <div key={index} className="border w-[50%] text-center my-4 lg:mx-2">
                    <h1 className="font-heading text-xl lg:text-2xl uppercase py-4 ">{details.type}</h1>
                    <hr />
                    <h2 className="py-2 text-sm font-subheading capitalize px-3 lg:py-4 lg:text-lg">{details.ideal}</h2>
                    <hr />
                    <h2 className="py-2 text-sm font-subheading capitalize px-3 lg:py-4 lg:text-lg">{details.access}</h2>
                    <hr />
                    <h2 className="py-2 text-sm font-subheading capitalize px-3 lg:py-4 lg:text-lg">{details.price}</h2>
                    {/* <button>{details.link}</button> */}
                </div>
            ))}
        </div>
    )
}

export default PriceCard