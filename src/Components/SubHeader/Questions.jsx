import { useState } from "react"

const questionsList = [{
    id: 1,
    ques: "What are the operating hours for Avsar Gym ?",
    answer: "We are open Monday through Saturday from 5: 30 AM to 10: 30 PM, and on Sundays from 7:00 AM to 8:00 PM to accommodate both early morning lifters and late - night workouts."
}, {
    id: 2,
    ques: "Do you offer a free trial pass before purchasing a membership ?",
    answer: "Yes! We offer a complimentary 1 - day trial pass that gives you full access to the gym floor, cardio equipment, and one group class so you can experience the facility firsthand."
}, {
    id: 3,
    ques: "Are personal trainers available for beginners ?",
    answer: "Yes.All our personal trainers are certified fitness professionals.New members receive a complimentary fitness assessment and orientation session to help design an effective starter workout routine safely."
}, {
    id: 4,
    ques: "What group fitness classes are included in the membership ?",
    answer: "Our group fitness schedule includes High - Intensity Interval Training(HIIT), Yoga, Strength & Conditioning, Cardio Blast, and Core & Mobility sessions led by experienced coaches."
}, {
    id: 5,
    ques: "Do I need to bring my own workout gear or lock ?",
    answer: "Please bring comfortable athletic wear, clean indoor training shoes, and a water bottle.We provide day - use lockers, shower facilities, and hydration stations.You may bring your own padlock or purchase one at the front desk."
}, {
    id: 6,
    ques: "Can I pause or freeze my membership if I travel or get injured ?",
    answer: "Yes.Quarterly and annual membership plans allow you to pause your membership for up to 30 to 60 days with advance notice to our front desk or support team."
}, {
    id: 7,
    ques: "Do you provide customized diet and nutrition guidance ?",
    answer: "Yes.Our certified nutrition coaches offer customized meal strategies tailored to your specific fitness goals, dietary preferences(vegetarian, non - vegetarian, vegan), and daily schedule."
}, {
    id: 8,
    ques: "Are locker and shower facilities available at the gym ?",
    answer: "Yes, we provide fully maintained, clean locker rooms equipped with secure lockers, changing areas, and private shower booths for all active members."
}, {
    id: 9,
    ques: "What types of membership plans do you offer ?",
    answer: " We offer flexible plans ranging from Monthly, Quarterly, and Annual memberships, as well as specialized packages for 1 - on - 1 personal training and group class access."
}, {
    id: 10,
    ques: "How do I join or renew my membership at Avsar Gym ?",
    answer: "You can sign up directly on our website through the Membership Plans section, or visit our front desk in person to complete your registration and biometric check -in."
}]


const Questions = () => {
    const [openId, setOpenId] = useState(null)

    const handleClick = (id) => {
        setOpenId(prev => prev == id ? null : id)
    }

    return (
        <div className="mx-auto mt-10 px-2 space-y-3">
            {questionsList.map((question) => {
                const isOpen = openId === question.id;

                return (
                    <div
                        key={question.id}
                        className="border border-emerald-700/30 rounded-lg overflow-hidden shadow-sm">

                        <div
                            className="flex bg-emerald-800 text-white justify-between items-center p-4 cursor-pointer select-none"
                            onClick={() => handleClick(question.id)}>
                            <h3 className="font-heading text-lg font-medium pr-4">
                                {question.ques}
                            </h3>
                            <button
                                type="button"
                                className="font-bold text-2xl text-emerald-200 hover:text-white"
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevents duplicate triggers if clicking the button specifically
                                    handleClick(question.id);
                                }}>
                                {isOpen ? "−" : "+"}
                            </button>
                        </div>

                        {isOpen && (
                            <div className="bg-emerald-50 text-gray-800 p-4 border-t border-emerald-700/20">
                                <p className="font-para text-sm md:text-base leading-relaxed">
                                    {question.answer}
                                </p>
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default Questions