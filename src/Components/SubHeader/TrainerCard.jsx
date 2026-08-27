import Trainer1 from "../../assets/Trainer/trainer1.png"
import Trainer2 from "../../assets/Trainer/trainer2.png"
import Trainer3 from "../../assets/Trainer/trainer3.png"
import Trainer4 from "../../assets/Trainer/trainer4.png"

const trainerDetails = [{
    id: 1,
    name: "pam haliton",
    imgSrc: Trainer1,
    trainingType: "health coach"
}, {
    id: 2,
    name: "arjun sovit",
    imgSrc: Trainer2,
    trainingType: "yoga instructor"
}, {
    id: 3,
    name: "babli chow",
    imgSrc: Trainer3,
    trainingType: "fitness trainer"
}, {
    id: 4,
    name: "drish vashth",
    imgSrc: Trainer4,
    trainingType: "personal trainer"
}]
const TrainerCard = () => {
    return (
        <div className="w-full mx-auto px-4 pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {trainerDetails.map((trainer, index) => (
                    <div key={index} className="text-center flex flex-col m-auto p-4 shadow-md shadow-emerald-700">
                        <img src={trainer.imgSrc} alt={trainer.name} className="h-80" />
                        <div className="capitalize text-left">
                            <h3 className="text-lg pt-2 text-emerald-600 font-para font-semibold">{trainer.trainingType}</h3>
                            <h1 className="text-gray-700/50">{trainer.name}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default TrainerCard