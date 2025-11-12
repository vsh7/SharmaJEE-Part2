import { Star } from 'lucide-react'
import React from 'react'



const AboutVaibhav: React.FC = () => {
    return (
        <div>
           

            {/* Enhanced Story Section */}
            <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-2/5">
                                <div className="relative group">
                                    <div className="absolute -inset-6 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                                    <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
                                        <img
                                            src="./HomePage/founder.webp"
                                            alt="Vaibhav Sharma - Founder"
                                            className="w-full rounded-2xl shadow-xl"
                                        />
                                    </div>
                                    <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-800 to-blue-600 text-white p-4 rounded-2xl shadow-xl">
                                        <div className="text-2xl font-bold">IIT Mandi</div>
                                        <div className="text-sm opacity-90">2017-2021</div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-3/5">
                                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
                                    Meet <span className="text-blue-600">the Founder</span>
                                </h2>
                                <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
                                   
                                    {/* <p>
                                        My transformative journey began in 2014 as a determined JEE aspirant, navigating the same challenges that thousands of students face today. The relentless pressure, fierce competition, and overwhelming curriculum - I have walked this path with unwavering determination.
                                    </p> */}
                                    <p>
                                        Achieving good rank  in JEE Advanced and graduating with honors from IIT Mandi opened my eyes to a profound truth: JEE success transcends mere knowledge - it demands deep conceptual understanding, strategic application, and most importantly, the right mentorship.
                                    </p>
                                    <p>
                                        This revelation inspired the birth of SharmaJEE in 2023. What commenced as mentoring a select group of students has evolved into a comprehensive platform that has empowered over 100 students to realize their IIT dreams.
                                    </p>
                                    <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600">
                                        <p className="font-semibold text-blue-900 text-xl">
                                            <strong>My Mission:</strong> To democratize premium JEE preparation, making world-class education accessible, comprehensible, and achievable for every deserving student.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* < /> */}
        </div>
    )
};

export default AboutVaibhav
