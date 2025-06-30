
import { useState } from 'react';
import { ChevronDown, ChevronUp, MessageSquare, BookOpen, Users, Clock, Award, Phone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqCategories = [
    {
      title: "General Questions",
      icon: MessageSquare,
      color: "from-blue-500 to-cyan-500",
      faqs: [
        {
          question: "What makes SharmaJEE different from other coaching institutes?",
          answer: "SharmaJEE focuses on personalized attention with small batch sizes, proven teaching methodologies by an IIT graduate, and a track record of 95% success rate. We emphasize conceptual clarity over rote learning and provide individual mentorship to each student."
        },
        {
          question: "Who is the founder and what are his credentials?",
          answer: "SharmaJEE is founded by Rohit Sharma, an IIT Delhi Mechanical Engineering graduate who secured AIR 142 in JEE Advanced 2017. With 5+ years of teaching experience, he has mentored over 1000 students with 50+ achieving AIR under 100."
        },
        {
          question: "What is the success rate of students at SharmaJEE?",
          answer: "We maintain a consistent 95% success rate in JEE Mains qualification over the past 5 years. Over 50 students have secured ranks under AIR 100 in JEE Advanced, with our students achieving an average improvement of 150+ marks from their initial mock tests."
        }
      ]
    },
    {
      title: "Courses & Curriculum",
      icon: BookOpen,
      color: "from-green-500 to-emerald-500", 
      faqs: [
        {
          question: "What courses do you offer for JEE preparation?",
          answer: "We offer three main courses: JEE Mains Complete Course (12 months, ₹15,999), JEE Advanced Mastery (8 months, ₹19,999), and Crash Course JEE (3 months, ₹8,999). Each course includes comprehensive study material, mock tests, and doubt clearing sessions."
        },
        {
          question: "What subjects and topics are covered in your courses?",
          answer: "All courses cover Physics, Chemistry, and Mathematics comprehensively. Physics includes Mechanics, Thermodynamics, Waves, Electromagnetism, and Modern Physics. Chemistry covers Organic, Inorganic, and Physical Chemistry. Mathematics includes Calculus, Algebra, Coordinate Geometry, and Trigonometry."
        },
        {
          question: "Do you provide study materials and books?",
          answer: "Yes, we provide comprehensive study materials including detailed notes, formula sheets, previous year questions, and practice problem sets. All materials are carefully curated and regularly updated based on the latest JEE patterns."
        },
        {
          question: "How many mock tests are conducted?",
          answer: "We conduct weekly mock tests throughout the course duration. JEE Mains course includes 50+ mock tests, JEE Advanced course includes 30+ mock tests, and Crash Course includes 12+ mock tests. All tests are followed by detailed analysis sessions."
        }
      ]
    },
    {
      title: "Admission & Enrollment",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      faqs: [
        {
          question: "What is the admission process?",
          answer: "The admission process is simple: 1) Contact us via phone/email, 2) Attend a counseling session to understand your current level, 3) Choose the appropriate course, 4) Complete the enrollment with fee payment. We also offer trial classes for new students."
        },
        {
          question: "Is there any entrance test for admission?",
          answer: "We conduct a diagnostic test to assess your current preparation level, but it's not an elimination test. This helps us understand your strengths and weaknesses to provide personalized guidance and recommend the most suitable course."
        },
        {
          question: "What are the batch sizes?",
          answer: "We maintain small batch sizes to ensure personalized attention. Regular batches have maximum 25-30 students, while premium batches are limited to 15-20 students. This allows for better interaction and individual doubt clearing."
        },
        {
          question: "Can I switch between courses if needed?",
          answer: "Yes, course switching is allowed within the first month of enrollment. If you feel the current course doesn't match your preparation level, we can help you transition to a more suitable program with appropriate fee adjustments."
        }
      ]
    },
    {
      title: "Teaching & Support",
      icon: Award,
      color: "from-orange-500 to-red-500",
      faqs: [
        {
          question: "What is the teaching methodology?",
          answer: "Our teaching methodology focuses on conceptual clarity, problem-solving techniques, and strategic exam preparation. We use interactive sessions, real-world applications, and step-by-step problem solving to make complex concepts easy to understand."
        },
        {
          question: "How are doubts handled?",
          answer: "We have dedicated doubt clearing sessions twice a week. Students can also approach instructors after class or submit doubts online. We ensure no doubt goes unresolved and provide additional practice problems for better understanding."
        },
        {
          question: "Is individual mentorship provided?",
          answer: "Yes, each student gets personal mentorship including regular performance reviews, customized study plans, weak area identification, and motivational support. We track individual progress and provide targeted guidance."
        },
        {
          question: "What support is provided for exam stress and motivation?",
          answer: "We conduct regular motivational sessions, stress management workshops, and provide psychological support during exam periods. Our mentors are always available to help students overcome anxiety and maintain confidence."
        }
      ]
    },
    {
      title: "Schedule & Logistics", 
      icon: Clock,
      color: "from-yellow-500 to-orange-500",
      faqs: [
        {
          question: "What are the class timings?",
          answer: "We offer flexible timing options: Morning batches (7:00 AM - 12:00 PM), Afternoon batches (1:00 PM - 6:00 PM), and Evening batches (6:00 PM - 9:00 PM). Weekend batches are also available for school students."
        },
        {
          question: "Are online classes available?",
          answer: "Yes, we offer both online and offline modes. Online classes include live interactive sessions, recorded lectures, online mock tests, and virtual doubt clearing. The curriculum and quality remain the same across both modes."
        },
        {
          question: "What happens if I miss classes?",
          answer: "All classes are recorded and made available to students within 24 hours. Additionally, we provide class notes and assignments. Make-up sessions can be arranged for important topics if multiple classes are missed."
        },
        {
          question: "Is there any holiday or break schedule?",
          answer: "We follow a systematic schedule with planned breaks during major festivals. However, intensive crash courses and doubt clearing sessions continue during exam periods. A detailed academic calendar is provided at the start of each course."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, faqIndex: number) => {
    const globalIndex = faqCategories.slice(0, categoryIndex).reduce((acc, cat) => acc + cat.faqs.length, 0) + faqIndex;
    setOpenIndex(openIndex === globalIndex ? null : globalIndex);
  };

  const getGlobalIndex = (categoryIndex: number, faqIndex: number) => {
    return faqCategories.slice(0, categoryIndex).reduce((acc, cat) => acc + cat.faqs.length, 0) + faqIndex;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="mt-10 pt-24 pb-16 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <MessageSquare className="h-16 w-16 mx-auto mb-6 text-blue-200 animate-bounce" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Frequently Asked <span className="text-blue-200">Questions</span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Get answers to all your questions about JEE preparation at SharmaJEE
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div 
                key={category.title}
                className="mb-12 animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10`}>
                    <category.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{category.title}</h2>
                </div>

                {/* FAQs */}
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = getGlobalIndex(categoryIndex, faqIndex);
                    const isOpen = openIndex === globalIndex;
                    
                    return (
                      <div 
                        key={faqIndex}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5 text-blue-600 transition-transform duration-300" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-400 transition-transform duration-300" />
                            )}
                          </div>
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-6 animate-fade-in">
                            <div className="border-t border-gray-100 pt-4">
                              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Phone className="h-16 w-16 mx-auto mb-8 text-yellow-400 animate-pulse" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              Still Have Questions?
            </h2>
            <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed mb-12">
              Our team is here to help! Get in touch with us for personalized guidance and answers to your specific questions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <Phone className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-blue-100">+91 98765 43210</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <MessageSquare className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-blue-100">info@sharmajee.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <Users className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-blue-100">Schedule a counseling session</p>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Free Counseling
              <MessageSquare className="inline-block ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
