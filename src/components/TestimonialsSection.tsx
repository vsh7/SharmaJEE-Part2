import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Arjun Mehta",
      rank: "AIR 47, JEE Advanced",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      text: "SharmaJEE's teaching methodology is exceptional. The way complex concepts are broken down made Physics and Chemistry so much easier to understand. Highly recommended!",
      rating: 5,
      year: "2023"
    },
    {
      id: 2,
      name: "Priya Sharma",
      rank: "AIR 156, JEE Advanced",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c86c?w=100&h=100&fit=crop&crop=face",
      text: "The mock tests and doubt clearing sessions were game-changers for me. I improved my score by 150+ marks in just 6 months of preparation with SharmaJEE.",
      rating: 5,
      year: "2023"
    },
    {
      id: 3,
      name: "Rohit Kumar",
      rank: "AIR 289, JEE Advanced",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      text: "The personalized attention and study plan helped me stay focused. Mathematics became my strongest subject thanks to the excellent problem-solving techniques taught here.",
      rating: 5,
      year: "2022"
    },
    {
      id: 4,
      name: "Sneha Patel",
      rank: "AIR 92, JEE Advanced",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      text: "SharmaJEE doesn't just teach you concepts, they teach you how to think and approach problems. This approach helped me crack even the toughest questions in the exam.",
      rating: 5,
      year: "2023"
    },
    {
      id: 5,
      name: "Riya Kapoor",
      rank: "AIR 110, JEE Advanced",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      text: "The innovative teaching techniques and personalized strategies offered at SharmaJEE gave me the edge I needed. A true game-changer in exam preparation!",
      rating: 5,
      year: "2023"
    },
    {
      id: 6,
      name: "Manish Gupta",
      rank: "AIR 205, JEE Advanced",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop&crop=face",
      text: "SharmaJEE goes beyond standard coaching. Their unique and energetic approach pushes you to think differently and approach problems with confidence.",
      rating: 5,
      year: "2022"
    }
  ];
  
  return (<>
    
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Success <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our students who have achieved their dreams and secured top ranks in JEE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
            key={testimonial.id}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 relative overflow-hidden animate-fade-in hover:scale-105"
            style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="h-16 w-16 text-blue-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg italic">
                "{testimonial.text}"
              </p>

              {/* Student Info */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
                    />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    {testimonial.year}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-blue-600 font-semibold">{testimonial.rank}</p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-6 bg-white px-8 py-6 rounded-2xl shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
              <div className="text-gray-600 text-sm">JEE Qualifiers</div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">50+</div>
              <div className="text-gray-600 text-sm">AIR Under 100</div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">95%</div>
              <div className="text-gray-600 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
          </>
  );
};

export default TestimonialsSection;
