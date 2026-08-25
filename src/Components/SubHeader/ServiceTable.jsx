import style from "styled-components"

const TableTh = style.th`
border-width:1px;
text-align:center;
padding:1rem;
`
const TableTd = style.td`
border-width:1px;
padding:1rem;
text-align:center;
`
const TableHead = style.td`
// font-size:1rem;
color:amber;
text-align:center;
border-width:1px;
font-weight:bold;
`
const ServiceTable = () => {
    return (
        <div className="overflow-hidden shadow-2xl shadow-gray-300 lg:w-[80%] m-auto lg:mt-10 text-xs lg:text-[1rem]">
            <table className="border-collapse">
                <tr className="bg-gray-100">
                    <TableTh className="text-amber-800">Service Pillar</TableTh>
                    <TableTh className="text-amber-800">Key Focus & Features</TableTh>
                    <TableTh className="text-amber-800">Primary Benefit</TableTh>
                    <TableTh className="text-amber-800">Recommended Call to Action</TableTh>
                </tr>
                <tr className="bg-gray-300">
                    <TableHead >Group Fitness Classes</TableHead>
                    <TableTd>High-energy sessions including Yoga, HIIT, Strength, and Cardio conditioning.</TableTd>
                    <TableTd>Builds endurance and keeps workouts fun and engaging in a group setting.</TableTd>
                    <TableTd><a href="#" className="text-amber-800 font-semibold">View Full Class Schedule</a></TableTd>
                </tr>
                <tr className="bg-gray-100">
                    <TableHead>Personal Training</TableHead>
                    <TableTd>Certified coaches, bespoke 1-on-1 workout plans, and tailored nutritional guidance.</TableTd>
                    <TableTd>Accelerates results safely with direct accountability and personalized technique correction.</TableTd>
                    <TableTd><a href="#" className="text-amber-800 font-semibold">Book a Free Consultation</a></TableTd>
                </tr>
                <tr className="bg-gray-300">
                    <TableHead>Facilities & Amenities</TableHead>
                    <TableTd>Modern resistance machines, Olympic free-weight zones, clean locker rooms, and recovery areas.</TableTd>
                    <TableTd>Delivers a complete, premium training experience with top-tier equipment.</TableTd>
                    <TableTd><a href="#" className="text-amber-800 font-semibold">Take a Virtual Tour</a></TableTd>
                </tr>
                <tr className="bg-gray-100">
                    <TableHead>Community & Culture</TableHead>
                    <TableTd>Inclusive, supportive gym culture with member challenges, group milestones, and social events.</TableTd>
                    <TableTd>Fosters long-term motivation and consistency by connecting you with a supportive fitness family.</TableTd>
                    <TableTd><a href="#" className="text-amber-800 font-semibold">Join the Avsar Tribe</a></TableTd>
                </tr>
            </table>
        </div>
    )
}

export default ServiceTable