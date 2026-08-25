export const testimonials = [
    {
        id: 1,
        name: "Radhika Sharma",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
        membershipDuration: "Member for 10 months",
        serviceUsed: "1-on-1 Personal Training",
        highlightResult: "Lost 14 kg & gained core strength",
        rating: 5,
        quote: "Training at Avsar Gym completely shifted my mindset. My personal trainer tailored every workout to my busy schedule and corrected form mistakes I had been making for years. The results speak for themselves."
    },
    {
        id: 2,
        name: "Priya Nair",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300",
        membershipDuration: "Member for 6 months",
        serviceUsed: "Group Fitness Classes (HIIT & Yoga)",
        highlightResult: "Boosted stamina & reduced daily stress",
        rating: 5,
        quote: "The energy in the morning HIIT sessions is unmatched. The community pushes you through the hardest sets, and switching to yoga on weekends gives me the perfect recovery balance."
    },
    {
        id: 3,
        name: "Vikram Mehta",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
        membershipDuration: "Member for 1.5 years",
        serviceUsed: "Strength & Conditioning",
        highlightResult: "Deadlift increased from 90kg to 170kg",
        rating: 5,
        quote: "Top-tier Olympic lifting bars, plenty of squat racks, and an environment where everyone is focused. It is easily the best-equipped strength facility in town without the usual overcrowding."
    },
    {
        id: 4,
        name: "Ananya Deshmukh",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300",
        membershipDuration: "Member for 4 months",
        serviceUsed: "Nutrition & Lifestyle Coaching",
        highlightResult: "Overcame chronic fatigue & built clean eating habits",
        rating: 5,
        quote: "I used to struggle with restrictive dieting until I met the nutrition team here. They built a sustainable meal plan using everyday home-cooked foods without cutting out my favorite meals."
    },
    {
        id: 5,
        name: "Arjun Patel",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
        membershipDuration: "Member for 8 months",
        serviceUsed: "Cardio Conditioning & Weight Loss",
        highlightResult: "Completed first 10K run",
        rating: 5,
        quote: "From barely being able to run for two minutes on a treadmill to completing a 10K road race, the progressive cardio programming and coach check-ins kept me consistent and injury-free."
    }
];
const Reviews = () => {
    return (
        <div className="w-full text-center m-auto">
            {testimonials.map((client, index) => (
                <div key={index} className="flex flex-col items-center">
                    <img src={client.avatar} alt="client" className="rounded-[50%] h-32 w-32 shadow-2xl" />
                    <p>{client.name}</p>
                    <h5 className="m-5 w-full">{client.quote}</h5>
                    {/* <p>{client.rating}</p> */}
                    <h6 >{client.serviceUsed}</h6>
                    <h6>{client.membershipDuration}</h6>

                </div>))}
        </div>
    )
}

export default Reviews