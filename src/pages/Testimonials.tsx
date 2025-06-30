import { useState } from 'react';
import { Star, Quote, Play, Award, Users, MessageSquare } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Testimonials = () => {
  const detailedTestimonials = [
    {
      id: 1,
      name: "Arjun Mehta",
      rank: "AIR 47, JEE Advanced 2023",
      college: "IIT Bombay - Computer Science",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "SharmaJEE completely transformed my approach to JEE preparation. The way Rohit sir explains complex Physics concepts made everything so clear. I went from scoring 120 marks in my first mock test to 285 in the actual JEE Advanced. The personalized attention and doubt clearing sessions were game-changers. I couldn't have asked for better guidance!",
      videoUrl: "#",
      year: "2023"
    },
    {
      id: 2,
      name: "Priya Sharma",
      rank: "AIR 92, JEE Advanced 2023", 
      college: "IIT Delhi - Electrical Engineering",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c86c?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "What sets SharmaJEE apart is the holistic approach to JEE preparation. It's not just about memorizing formulas - Rohit sir taught me how to think analytically and approach problems systematically. The mock tests were incredibly helpful in building my confidence. Chemistry, which was my weakest subject, became one of my strongest thanks to the detailed explanations and practice sessions.",
      videoUrl: "#",
      year: "2023"
    },
    {
      id: 3,
      name: "Rohit Kumar",
      rank: "AIR 156, JEE Advanced 2023",
      college: "IIT Kanpur - Mechanical Engineering", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "Mathematics was always challenging for me until I joined SharmaJEE. Rohit sir's problem-solving techniques and shortcuts made calculus and coordinate geometry so much easier. The study material is comprehensive and the regular assessments helped me track my progress. Most importantly, the motivational support during tough times kept me going. Highly recommend to every JEE aspirant!",
      videoUrl: "#",
      year: "2023"
    },
    {
      id: 4,
      name: "Sneha Patel",
      rank: "AIR 203, JEE Advanced 2022",
      college: "IIT Madras - Chemical Engineering",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", 
      rating: 5,
      testimonial: "The structured curriculum and personalized study plan at SharmaJEE made all the difference. Coming from a small town, I was worried about the level of competition, but Rohit sir's teaching gave me the confidence to compete with the best. The organic chemistry sessions were particularly brilliant - concepts that seemed impossible became crystal clear. Forever grateful for this guidance!",
      videoUrl: "#",
      year: "2022"
    },
    {
      id: 5,
      name: "Karan Singh",
      rank: "AIR 278, JEE Advanced 2022",
      college: "IIT Roorkee - Civil Engineering",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "SharmaJEE's mock test series is incredible! The questions are at par with actual JEE difficulty, and the detailed solutions helped me understand my mistakes. Rohit sir's physics lectures are legendary - he makes even the most complex topics seem simple. The peer group here is also very supportive and competitive at the same time.",
      videoUrl: "#", 
      year: "2022"
    },
    {
      id: 6,
      name: "Anjali Gupta",
      rank: "AIR 312, JEE Advanced 2022",
      college: "IIT Guwahati - Electronics",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "As a female student in a male-dominated field, I sometimes felt intimidated, but SharmaJEE provided such a supportive environment. Rohit sir's teaching style is inclusive and encouraging. The mathematics problem-solving sessions were particularly helpful. I'm now pursuing my dream at IIT Guwahati, and it's all thanks to the solid foundation I got here.",
      videoUrl: "#",
      year: "2022"
    }
  ];

  const stats = [
    { number: "1000+", label: "Happy Students", icon: Users },
    { number: "95%", label: "Success Rate", icon: Award },
    { number: "4.9/5", label: "Average Rating", icon: Star },
    { number: "50+", label: "Video Reviews", icon: Play }
  ];

  const years = ["All", "2023", "2022"];
  const [selectedYear, setSelectedYear] = useState("All");

  const filteredTestimonials = selectedYear === "All" 
    ? detailedTestimonials 
    : detailedTestimonials.filter(t => t.year === selectedYear);

  return (
    <div className="min-h-screen bg-white mt-10">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <MessageSquare className="h-16 w-16 mx-auto mb-6 text-blue-200 animate-bounce" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Student <span className="bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent">Testimonials</span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Hear What Our Successful Students Have to Say
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedYear === year
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {filteredTestimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 relative overflow-hidden group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Quote Background */}
                <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <Quote className="h-20 w-20 text-blue-600" />
                </div>

                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-blue-600 font-semibold text-sm">{testimonial.rank}</p>
                      <p className="text-gray-600 text-sm">{testimonial.college}</p>
                    </div>
                  </div>
                  
                  {/* Play Button */}
                  <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-300 group-hover:scale-110">
                    <Play className="h-5 w-5" />
                  </button>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({testimonial.rating}.0)</span>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed text-base italic mb-6">
                  "{testimonial.testimonial}"
                </p>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="h-16 w-16 mx-auto mb-8 text-blue-200 animate-pulse" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed mb-12">
              Join thousands of students who have achieved their IIT dreams with SharmaJEE's proven methodology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Your Journey Today
                <Star className="inline-block ml-2 h-5 w-5" />
              </button>
              
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                Watch More Reviews
                <Play className="inline-block ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
