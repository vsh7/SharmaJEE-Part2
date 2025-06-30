
// import { BookOpen, Clock, Users, Star } from 'lucide-react';

// const CoursesSection = () => {
//   const courses = [
//     {
//       id: 1,
//       title: "JEE Mains Complete Course",
//       description: "Comprehensive preparation for JEE Mains with all subjects covered in detail.",
//       duration: "12 Months",
//       students: "500+",
//       rating: 4.9,
//       price: "₹15,999",
//       features: ["Physics", "Chemistry", "Mathematics", "Mock Tests", "Doubt Clearing"],
//       color: "from-blue-500 to-cyan-500"
//     },
//     {
//       id: 2,
//       title: "JEE Advanced Mastery",
//       description: "Advanced level preparation for JEE Advanced with intensive problem solving.",
//       duration: "8 Months",
//       students: "300+",
//       rating: 4.8,
//       price: "₹19,999",
//       features: ["Advanced Physics", "Organic Chemistry", "Calculus", "Previous Years", "Weekly Tests"],
//       color: "from-purple-500 to-pink-500"
//     },
//     {
//       id: 3,
//       title: "Crash Course JEE",
//       description: "Intensive crash course for last-minute preparation with key concepts.",
//       duration: "3 Months",
//       students: "200+",
//       rating: 4.7,
//       price: "₹8,999",
//       features: ["Important Topics", "Formula Sheets", "Quick Revision", "Sample Papers", "Tips & Tricks"],
//       color: "from-orange-500 to-red-500"
//     }
//   ];

//   return (
//     <section id="courses" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//             Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Courses</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Choose from our carefully designed courses that cater to different learning needs and preparation timelines.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {courses.map((course, index) => (
//             <div 
//               key={course.id}
//               className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in hover:scale-105"
//               style={{ animationDelay: `${index * 200}ms` }}
//             >
//               <div className={`h-2 bg-gradient-to-r ${course.color}`} />
              
//               <div className="p-8">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className={`p-3 rounded-lg bg-gradient-to-r ${course.color} bg-opacity-10`}>
//                     <BookOpen className="h-6 w-6 text-blue-600" />
//                   </div>
//                   <div className="flex items-center space-x-1 text-yellow-500">
//                     <Star className="h-4 w-4 fill-current" />
//                     <span className="text-sm font-medium text-gray-700">{course.rating}</span>
//                   </div>
//                 </div>

//                 <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
//                   {course.title}
//                 </h3>
                
//                 <p className="text-gray-600 mb-6 leading-relaxed">
//                   {course.description}
//                 </p>

//                 <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
//                   <div className="flex items-center space-x-1">
//                     <Clock className="h-4 w-4" />
//                     <span>{course.duration}</span>
//                   </div>
//                   <div className="flex items-center space-x-1">
//                     <Users className="h-4 w-4" />
//                     <span>{course.students}</span>
//                   </div>
//                 </div>

//                 <div className="mb-6">
//                   <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {course.features.map((feature, idx) => (
//                       <span
//                         key={idx}
//                         className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full font-medium"
//                       >
//                         {feature}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <div>
//                     <span className="text-3xl font-bold text-gray-900">{course.price}</span>
//                     <span className="text-gray-500 text-sm ml-1">one-time</span>
//                   </div>
//                   <button className={`px-6 py-3 bg-gradient-to-r ${course.color} text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
//                     Enroll Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoursesSection;
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, BookOpen, Users, Clock, Target, Play, Award, TrendingUp } from 'lucide-react';

const CoursesSection = () => {
  const courses = [
    {
      title: 'JEE Mains Foundation',
      subtitle: 'Complete Foundation Course',
      price: '₹15,000',
      originalPrice: '₹20,000',
      duration: '6 Months',
      students: '2,500+',
      rating: '4.8',
      features: [
        'Live Interactive Classes',
        'Recorded Video Lectures',
        'Weekly Mock Tests',
        'Doubt Clearing Sessions',
        'Study Materials Included',
        'Performance Analytics'
      ],
      popular: false,
      badge: 'Beginner Friendly'
    },
    {
      title: 'JEE Advanced Pro',
      subtitle: 'Advanced Problem Solving',
      price: '₹25,000',
      originalPrice: '₹35,000',
      duration: '8 Months',
      students: '3,200+',
      rating: '4.9',
      features: [
        'Advanced Problem Solving',
        'IIT-level Question Bank',
        'Personal Mentorship',
        'Daily Practice Sets',
        'Previous Year Analysis',
        'Rank Prediction Tool'
      ],
      popular: true,
      badge: 'Most Popular'
    },
    {
      title: 'Complete JEE Package',
      subtitle: 'Mains + Advanced Complete',
      price: '₹35,000',
      originalPrice: '₹50,000',
      duration: '12 Months',
      students: '1,800+',
      rating: '4.9',
      features: [
        'Mains + Advanced Prep',
        'Unlimited Doubt Support',
        'One-on-One Sessions',
        'Crash Course Included',
        'Interview Preparation',
        'College Counseling'
      ],
      popular: false,
      badge: 'Complete Solution'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-xl text-gray-600">Structured learning paths designed for JEE success</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className={`relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in ${course.popular ? 'ring-2 ring-orange-500 shadow-xl' : 'shadow-lg'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {course.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    {course.badge}
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {course.badge}
                  </span>
                  <div className="flex items-center text-sm text-gray-600">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    {course.rating}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">{course.title}</CardTitle>
                <CardDescription className="text-gray-600 text-lg">{course.subtitle}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{course.price}</span>
                  <span className="text-lg text-gray-500 line-through ml-2">{course.originalPrice}</span>
                </div>
                <div className="flex justify-center gap-4 mt-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {course.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    course.popular ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600' : 'bg-blue-600 hover:bg-blue-700'
                  } text-white py-3 text-lg font-semibold rounded-full`}
                >
                  Enroll Now
                </Button>

                <p className="text-center text-sm text-gray-500 mt-3">
                  💳 EMI options available | 🎯 Free trial for 7 days
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;