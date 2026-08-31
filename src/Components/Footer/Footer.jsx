import CopyRight from "./CopyRight"

const timing = [{
    id: 1,
    day: "monday",
    timings: "8:00 AM- 9:00 AM"
},
{
    id: 2,
    day: "tuesday",
    timings: "8:00 AM- 9:00 AM"
}, {
    id: 3,
    day: "wednesday",
    timings: "8:00 AM- 9:00 AM"
}, {
    id: 4,
    day: "thursday",
    timings: "8:00 AM- 9:00 AM"
}, {
    id: 5,
    day: "friday",
    timings: "8:00 AM- 9:00 AM"
}, {
    id: 6,
    day: "saturday",
    timings: "8:00 AM- 7:00 AM"
}, {
    id: 7,
    day: "sunday",
    timings: "closed"
}
]
const Footer = () => {
    return (
        <div >
            <div className="w-full grid lg:grid-cols-3 md:text-center justify-between px-5 py-10 bg-emerald-50 shadow-md shadow-emerald-800">
                <div className="w-full">
                    <h1 className="text-3xl border-b-2 py-2 md:text-5xl lg:text-5xl text-emerald-900 font-heading">Avsar gym</h1>
                    <p className="capitalize font-para text-sm lg:text-md my-5 text-gray-800"> we are your ultimate opportunity to unlock your full potential. With state-of-the-art facilities, expert personal trainers dedicated to your personal growth, and a diverse range of motivating fitness programs</p>
                </div>
                <div className="my-5">
                    <h1 className="text-xl capitalize text-emerald-900 font-subHeading">address :</h1>
                    <address className="capitalize text-gray-800">71, canal street, Bangalore, IN</address>
                    <p className="capitalize text-gray-800">tel:+123456789</p>
                    <p className="capitalize text-gray-800">fax:+123456789</p>
                    <p className="text-gray-800">Email: support@avsargym.com</p>
                </div>
                <div className="capitalize text-left">
                    <h1 className="text-xl capitalize font-subHeading text-emerald-900 border-b-2 py-2">opening hours</h1>

                    {timing.map((time, index) => (
                        <div key={index}>
                            <div className="flex justify-between px-4 font-para text-gray-800">
                                <p>{time.day}</p>
                                <p>{time.timings}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <CopyRight />
        </div>
    )
}

export default Footer