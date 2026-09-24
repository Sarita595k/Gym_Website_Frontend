import style from "styled-components";

const TableTh = style.th`
  padding: 1.25rem 1rem;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.05em;
  font-size: 0.85rem;
  text-transform: uppercase;
`;

const TableTd = style.td`
  padding: 1.25rem 1.25rem;
  text-align: center;
  line-height: 1.6;
  font-size: 0.925rem;
`;

const TableHead = style.td`
  padding: 1.25rem 1.25rem;
  text-align: center;
  font-weight: 700;
  font-size: 1rem;
  white-space: nowrap;
`;

const ServiceTable = () => {
    return (
        <div className="w-full py-10 px-4">
            {/* Outer Card with ambient Emerald Glow */}
            <div className="overflow-x-auto rounded-2xl border border-emerald-500/20 bg-gradient-to-b from-neutral-950 via-black to-neutral-950 shadow-[0_0_50px_-12px_rgba(16,185,129,0.25)] lg:w-[85%] mx-auto backdrop-blur-xl">
                <table className="w-full border-collapse">
                    {/* Header */}
                    <thead>
                        <tr className="border-b border-emerald-500/20 bg-emerald-950/40 text-emerald-400">
                            <TableTh>Service Pillar</TableTh>
                            <TableTh>Key Focus & Features</TableTh>
                            <TableTh>Primary Benefit</TableTh>
                            <TableTh>Action</TableTh>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="divide-y divide-emerald-500/10">
                        {/* Row 1 */}
                        <tr className="group transition-all duration-200 hover:bg-emerald-950/25">
                            <TableHead className="text-white group-hover:text-emerald-300 transition-colors">
                                <span className="flex items-center justify-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
                                    Group Fitness Classes
                                </span>
                            </TableHead>
                            <TableTd className="text-neutral-300">
                                High-energy sessions including Yoga, HIIT, Strength, and Cardio conditioning.
                            </TableTd>
                            <TableTd className="text-neutral-400">
                                Builds endurance and keeps workouts fun and engaging in a group setting.
                            </TableTd>
                            <TableTd>
                                <a
                                    href="#"
                                    className="inline-block px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-black hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-200"
                                >
                                    Class Schedule &rarr;
                                </a>
                            </TableTd>
                        </tr>

                        {/* Row 2 */}
                        <tr className="group transition-all duration-200 hover:bg-emerald-950/25 bg-emerald-950/10">
                            <TableHead className="text-white group-hover:text-emerald-300 transition-colors">
                                <span className="flex items-center justify-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
                                    Personal Training
                                </span>
                            </TableHead>
                            <TableTd className="text-neutral-300">
                                Certified coaches, bespoke 1-on-1 workout plans, and tailored nutritional guidance.
                            </TableTd>
                            <TableTd className="text-neutral-400">
                                Accelerates results safely with direct accountability and personalized technique correction.
                            </TableTd>
                            <TableTd>
                                <a
                                    href="#"
                                    className="inline-block px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-black hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-200"
                                >
                                    Consultation &rarr;
                                </a>
                            </TableTd>
                        </tr>

                        {/* Row 3 */}
                        <tr className="group transition-all duration-200 hover:bg-emerald-950/25">
                            <TableHead className="text-white group-hover:text-emerald-300 transition-colors">
                                <span className="flex items-center justify-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
                                    Facilities & Amenities
                                </span>
                            </TableHead>
                            <TableTd className="text-neutral-300">
                                Modern resistance machines, Olympic free-weight zones, clean locker rooms, and recovery areas.
                            </TableTd>
                            <TableTd className="text-neutral-400">
                                Delivers a complete, premium training experience with top-tier equipment.
                            </TableTd>
                            <TableTd>
                                <a
                                    href="#"
                                    className="inline-block px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-black hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-200"
                                >
                                    Virtual Tour &rarr;
                                </a>
                            </TableTd>
                        </tr>

                        {/* Row 4 */}
                        <tr className="group transition-all duration-200 hover:bg-emerald-950/25 bg-emerald-950/10">
                            <TableHead className="text-white group-hover:text-emerald-300 transition-colors">
                                <span className="flex items-center justify-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
                                    Community & Culture
                                </span>
                            </TableHead>
                            <TableTd className="text-neutral-300">
                                Inclusive, supportive gym culture with member challenges, group milestones, and social events.
                            </TableTd>
                            <TableTd className="text-neutral-400">
                                Fosters long-term motivation and consistency by connecting you with a supportive fitness family.
                            </TableTd>
                            <TableTd>
                                <a
                                    href="#"
                                    className="inline-block px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-black hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-200"
                                >
                                    Join Tribe &rarr;
                                </a>
                            </TableTd>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ServiceTable;