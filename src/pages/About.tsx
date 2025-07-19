import { GraduationCap, Award, Users, BookOpen, Target, Heart, CheckCircle, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  const timelineEvents = [
    {
      year: "2015",
      title: "The Foundation",
      description: "Embarked on the JEE journey as an aspirant, experiencing firsthand the challenges that shape every student's path to success.",
      icon: BookOpen,
      color: "from-blue-800 to-blue-600"
    },
    {
      year: "2017",
      title: "Academic Excellence",
      description: "Achieved AIR 142 in JEE Advanced, securing admission to IIT Delhi in Mechanical Engineering with distinction.",
      icon: GraduationCap,
      color: "from-blue-800 to-blue-600"
    },
    {
      year: "2018",
      title: "Mentorship Calling",
      description: "Discovered the profound impact of quality mentorship while tutoring fellow students, igniting a passion for education.",
      icon: Users,
      color: "from-blue-800 to-blue-600"
    },
    {
      year: "2019",
      title: "SharmaJEE Genesis",
      description: "Established SharmaJEE with a vision to democratize premium JEE preparation and make excellence accessible to all.",
      icon: Target,
      color: "from-blue-800 to-blue-600"
    },
    {
      year: "2020-2024",
      title: "Legacy of Success",
      description: "Cultivated a thriving community of 1000+ successful students, establishing proven methodologies for IIT success.",
      icon: Award,
      color: "from-blue-800 to-blue-600"
    }
  ];

  const achievements = [
    { number: "1000+", label: "Students Mentored", icon: Users, description: "Guided to success" },
    { number: "95%", label: "Success Rate", icon: Target, description: "Consistent excellence" },
    { number: "50+", label: "AIR Under 100", icon: Award, description: "Top performers" },
    { number: "5+", label: "Years Excellence", icon: BookOpen, description: "Proven track record" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 transform rotate-45 animate-pulse" />
          <div className="absolute bottom-32 right-20 w-24 h-24 bg-blue-300/15 transform -rotate-12 animate-bounce" />
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-500/20 rounded-full animate-ping" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600/20 backdrop-blur-md border border-blue-400/30 text-blue-100 mb-8 animate-fade-in">
              <Star className="h-5 w-5 mr-2 text-yellow-400" />
              <span className="text-sm font-semibold">Meet Your Success Architect</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in">
              About <span className="text-blue-200">Excellence</span>
            </h1>
            <p
              className="text-2xl sm:text-3xl text-blue-200 mb-8 animate-fade-in font-medium"
              style={{ animationDelay: '200ms' }}
            >
              From Aspiration to Achievement - A Journey of Transformation
            </p>
          </div>
        </div>
      </section>

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
                      src="./AboutMe/image.png"
                      alt="Vaibhav Sharma - Founder"
                      className="w-full rounded-2xl shadow-xl"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-800 to-blue-600 text-white p-4 rounded-2xl shadow-xl">
                    <div className="text-2xl font-bold">AIR 142</div>
                    <div className="text-sm opacity-90">JEE Advanced</div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-3/5">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
                  Meet <span className="text-blue-600">Vaibhav Sharma</span>
                </h2>
                <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
                  <p className="text-2xl text-blue-600 font-semibold mb-6">
                    "Excellence is not a destination, but a journey of continuous growth and dedication."
                  </p>
                  <p>
                    My transformative journey began in 2015 as a determined JEE aspirant, navigating the same challenges that thousands of students face today. The relentless pressure, fierce competition, and overwhelming curriculum - I have walked this path with unwavering determination.
                  </p>
                  <p>
                    Achieving AIR 142 in JEE Advanced and graduating with honors from IIT Delhi opened my eyes to a profound truth: JEE success transcends mere knowledge - it demands deep conceptual understanding, strategic application, and most importantly, the right mentorship.
                  </p>
                  <p>
                    This revelation inspired the birth of SharmaJEE in 2019. What commenced as mentoring a select group of students has evolved into a comprehensive platform that has empowered over 1000 students to realize their IIT dreams.
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

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
        <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8">
          Journey of <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">Excellence</span>
        </h2>
        <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          From a determined JEE aspirant to mentoring thousands of future engineers – witness the evolution of educational excellence.
        </p>
          </div>

          <div className="relative">
        {/* Central vertical line for desktop */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-800 to-blue-600"></div>

        {timelineEvents.map((event, index) => (
          <div key={event.year} className="mb-16 relative flex flex-col md:flex-row items-center">
            {/* Left side card (for desktop, when index is even) */}
            <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : ''}`}>
          {index % 2 === 0 && (
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-blue-100 hover:shadow-blue-600/10 transition-all duration-500">
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${event.color} bg-opacity-10 mb-6`}>
            <event.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h3>
              <p className="text-gray-700 text-lg leading-relaxed">{event.description}</p>
            </div>
          )}
            </div>

            {/* Timeline dot */}
            <div className="z-10 flex-shrink-0">
          <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600 rounded-full border-4 border-white shadow-lg">
            <span className="text-white font-bold text-sm">{event.year}</span>
          </div>
            </div>

            {/* Right side card (for desktop, when index is odd) */}
            <div className={`hidden md:block md:w-1/2 ${index % 2 !== 0 ? 'text-left pl-8' : ''}`}>
          {index % 2 !== 0 && (
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-blue-100 hover:shadow-blue-600/10 transition-all duration-500">
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${event.color} bg-opacity-10 mb-6`}>
            <event.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h3>
              <p className="text-gray-700 text-lg leading-relaxed">{event.description}</p>
            </div>
          )}
            </div>

            {/* Mobile layout */}
            <div className="md:hidden flex items-center w-full mt-8">
          <div className="flex flex-col items-center mr-4">
            <div className="w-2 h-full bg-gradient-to-b from-blue-800 via-blue-700 to-blue-600"></div>
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600 rounded-full -mt-6">
              <span className="text-white font-bold text-sm">{event.year}</span>
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-blue-100 flex-1">
            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${event.color} bg-opacity-10 mb-6`}>
              <event.icon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h3>
            <p className="text-gray-700 text-lg leading-relaxed">{event.description}</p>
          </div>
            </div>
          </div>
        ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8">
              Impact & <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Measurable excellence that speaks to our commitment to student success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.label}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-blue-600/10 transition-all duration-500 group-hover:scale-105 border border-blue-100">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl mb-6 group-hover:from-blue-100 group-hover:to-blue-200 transition-colors duration-300">
                    <achievement.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-gray-700 font-semibold text-lg mb-2">{achievement.label}</div>
                    <div className="text-blue-600 text-sm font-medium">{achievement.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 transform rotate-45 animate-pulse" />
          <div className="absolute bottom-32 right-20 w-24 h-24 bg-blue-300/15 transform -rotate-12 animate-bounce" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="bg-blue-600/20 backdrop-blur-md rounded-3xl p-4 w-20 h-20 mx-auto mb-12 border border-blue-400/30">
              <Heart className="h-12 w-12 mx-auto text-blue-200 animate-pulse" />
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold mb-12">
              Our Vision
            </h2>
            <blockquote className="text-2xl sm:text-3xl text-blue-100 leading-relaxed mb-16 font-medium italic">
              "To architect a future where every deserving student has access to world-class education and personalized mentorship, 
              transcending geographical and economic barriers. Education is the great equalizer, 
              and we are committed to making this vision a transformative reality."
            </blockquote>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
              <div className="bg-blue-600/20 backdrop-blur-md rounded-3xl p-8 border border-blue-400/30 hover:bg-blue-600/30 transition-all duration-300">
                <CheckCircle className="h-12 w-12 text-blue-200 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Premium Education</h3>
                <p className="text-blue-100 text-lg">Delivering world-class educational experiences accessible to every student</p>
              </div>
              <div className="bg-blue-600/20 backdrop-blur-md rounded-3xl p-8 border border-blue-400/30 hover:bg-blue-600/30 transition-all duration-300">
                <CheckCircle className="h-12 w-12 text-blue-200 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Personalized Mentorship</h3>
                <p className="text-blue-100 text-lg">Providing individualized attention and strategic guidance for every learner</p>
              </div>
              <div className="bg-blue-600/20 backdrop-blur-md rounded-3xl p-8 border border-blue-400/30 hover:bg-blue-600/30 transition-all duration-300">
                <CheckCircle className="h-12 w-12 text-blue-200 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Excellence Assurance</h3>
                <p className="text-blue-100 text-lg">Ensuring every student achieves their maximum potential and beyond</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
