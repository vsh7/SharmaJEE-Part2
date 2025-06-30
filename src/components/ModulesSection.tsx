
import { Book, Calculator, Atom, Beaker, CheckCircle } from 'lucide-react';

const ModulesSection = () => {
  const modules = [
    {
      id: 1,
      subject: "Physics",
      icon: Atom,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      chapters: [
        "Mechanics & Motion",
        "Thermodynamics",
        "Waves & Oscillations",
        "Electromagnetism",
        "Modern Physics",
        "Optics"
      ]
    },
    {
      id: 2,
      subject: "Chemistry",
      icon: Beaker,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      chapters: [
        "Organic Chemistry",
        "Inorganic Chemistry",
        "Physical Chemistry",
        "Chemical Bonding",
        "Coordination Compounds",
        "Electrochemistry"
      ]
    },
    {
      id: 3,
      subject: "Mathematics",
      icon: Calculator,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      chapters: [
        "Calculus",
        "Algebra",
        "Coordinate Geometry",
        "Trigonometry",
        "Probability & Statistics",
        "Vector & 3D Geometry"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Study <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Modules</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive modules covering all subjects with detailed chapter-wise breakdown for systematic learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div 
              key={module.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-8">
                <div className={`inline-flex p-4 rounded-2xl ${module.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <module.icon className={`h-8 w-8 ${module.textColor}`} />
                </div>

                <h3 className={`text-3xl font-bold mb-6 ${module.textColor}`}>
                  {module.subject}
                </h3>

                <div className="space-y-4">
                  {module.chapters.map((chapter, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center space-x-3 group/item hover:bg-gray-50 p-3 rounded-lg transition-colors duration-300"
                    >
                      <CheckCircle className={`h-5 w-5 ${module.textColor} group-hover/item:scale-110 transition-transform duration-300`} />
                      <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                        {chapter}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <button className={`w-full py-3 bg-gradient-to-r ${module.color} text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                    Explore {module.subject}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-purple-50 px-8 py-4 rounded-2xl">
            <Book className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-semibold text-gray-800">
              All modules include video lectures, practice problems, and doubt resolution
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
