import React from 'react'
import { Trophy, TrendingUp, Award, Star, GraduationCap, Target, ArrowUp } from 'lucide-react';
const achievements = [
    {
      icon: Trophy,
      title: "81.25% Success Rate",
      description: "Selection Rate of JEE Adv 2024 and Similar in other exam also"
    },
    {
      icon: TrendingUp,
      title: "83.3% Success Rate",
      description: "Consistent performance year over year"
    },
    {
      icon: Award,
      title: "98% Improved",
      description: "Rank improvement from previous attempts"
    },
    {
      icon: Star,
      title: "2000+ Mentored",
      description: "Total students Mentored Across the teaching Career"
    }
  ];
function HomeAchievements() {
  return (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Key <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Achievements</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="inline-flex p-4 rounded-2xl bg-blue-600 bg-opacity-10 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default HomeAchievements
