import React from "react";
import Trainer1 from "../../assets/Trainer/trainer1.png";
import Trainer2 from "../../assets/Trainer/trainer2.png";
import Trainer3 from "../../assets/Trainer/trainer3.png";
import Trainer4 from "../../assets/Trainer/trainer4.png";

const trainerDetails = [
    {
        id: 1,
        name: "Pam Haliton",
        imgSrc: Trainer1,
        trainingType: "Health Coach",
        experience: "5+ Years Exp",
    },
    {
        id: 2,
        name: "Arjun Sovit",
        imgSrc: Trainer2,
        trainingType: "Yoga Instructor",
        experience: "7+ Years Exp",
    },
    {
        id: 3,
        name: "Babli Chow",
        imgSrc: Trainer3,
        trainingType: "Fitness Trainer",
        experience: "4+ Years Exp",
    },
    {
        id: 4,
        name: "Drish Vashth",
        imgSrc: Trainer4,
        trainingType: "Personal Trainer",
        experience: "6+ Years Exp",
    },
];

const TrainerCard = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

            {/* Grid Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
                {trainerDetails.map((trainer) => (
                    <div
                        key={trainer.id}
                        className="group  relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-emerald-900/10 border border-gray-100 transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
                    >
                        {/* Image Container with Smooth Zoom & Gradient Overlay */}
                        <div className="relative w-full h-80 overflow-hidden bg-gradient-to-b from-emerald-800 to-black flex items-center justify-center">
                            <img
                                src={trainer.imgSrc}
                                alt={trainer.name}
                                className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                            />

                            {/* Gradient Overlay for subtle contrast */}
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-xs font-medium text-white/90 bg-emerald-600/90 backdrop-blur-sm px-2.5 py-1 rounded-md">
                                    {trainer.experience}
                                </span>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-5 flex flex-col justify-between flex-grow bg-white">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 inline-block mb-1">
                                    {trainer.trainingType}
                                </span>
                                <h3 className="text-lg font-bold text-gray-800 capitalize group-hover:text-emerald-700 transition-colors duration-200">
                                    {trainer.name}
                                </h3>
                            </div>

                            {/* Subtle hover accent line at the bottom */}
                            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                                <span className="text-xs text-gray-500 font-medium">
                                    View Profile
                                </span>
                                <span className="text-emerald-600 text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1">
                                    &rarr;
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrainerCard;