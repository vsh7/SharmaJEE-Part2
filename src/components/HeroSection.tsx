import { useNavigate } from 'react-router-dom';
import TypewriterEffect from './TypewriterEffect';
import { ArrowDown, BookOpen, Trophy, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const typewriterTexts = [
    "Padho kahi Se Revision yahi se",
    "Padho kahi se Modules yahi se",
    "Padho kahi se Courses yahi se"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const navigate = useNavigate();
  return (
    <section
      className="relative border-t-[40px] border-white min-h-screen flex items-center justify-center overflow-hidden animate-gradient"
    >
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-400/10 transform rotate-45 animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-32 right-20 w-12 h-12 bg-blue-300/15 transform -rotate-12 animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-blue-500/20 transform rotate-12 animate-ping" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-blue-600/10 transform rotate-45 animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-10 w-6 h-6 bg-blue-400/15 rounded-full animate-bounce" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-14 h-14 bg-blue-500/10 transform -rotate-45 animate-pulse" style={{ animationDelay: '5s' }} />

        {/* Animated grid overlay */}
        <div className="absolute inset-0 animate-float" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(234, 194, 194, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto mt-10">
          {/* Animated Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600/20 backdrop-blur-md border border-blue-400/30 text-blue-100 mb-8 animate-fade-in transform hover:scale-105 transition-all duration-300">
            <Sparkles className="h-6 w-6 mr-2 text-yellow-400 animate-pulse" />
            <span className="text-m font-semibold ">India's first Market Place for JEE, Made with Love by IITians</span>
          </div>

          {/* Main Title with Animation */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in" style={{ 
                animationDelay: '200ms',
                textShadow: '0 4px 20px rgba(0,0,0,0.3)'
                }}>
                Master the{' '}
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text text-transparent animate-pulse">
                  JEE Journey
                </span>
          </h1>
          
          {/* Typewriter Effect */}
          <div className="text-2xl sm:text-3xl lg:text-4xl text-blue-100 mb-10 h-24 flex items-center justify-center animate-fade-in" style={{ animationDelay: '400ms' }}>
            <TypewriterEffect 
              texts={typewriterTexts} 
              className="font-semibold" 
              typingSpeed={80} 
              deletingSpeed={40} 
              pauseDuration={2500} 
            />
          </div>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-blue-200 mb-16 max-w-4xl mx-auto leading-relaxed font-medium animate-fade-in" style={{ 
            animationDelay: '600ms',
            textShadow: '0 2px 10px rgba(0,0,0,0.2)'
          }}>
            Transform your JEE Preparation with best in class lectures, mentorship and carefully chose sequential learning methodology designed by a team of IITians.
          </p>
          

          {/* CTA Buttons with Hover Animations */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20 animate-fade-in" style={{ animationDelay: '800ms' }}>
            <button 
             onClick={() => window.open("https://docs.google.com/forms/d/1NoT6I3k0DZpPUFq40KcIvkfXJ1E5BquJiWzNNJqzswQ/edit", "_blank")}
              className="group bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-xl hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-white/25 border-2 border-transparent hover:border-white/30 transform hover:rotate-1"
            >
              Join the Waitlist - Get 25% off
              <BookOpen className="inline-block ml-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
            </button>
            
            <button 
              // onClick={() => scrollToSection('/testimonials')}
              onClick={()=>navigate('testimonials')} 
              className="group border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 hover:border-white hover:scale-105 transition-all duration-300 backdrop-blur-sm transform hover:-rotate-1"
            >
              Success Stories
              <Trophy className="inline-block ml-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Enhanced Scroll indicator with Animation */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="bg-blue-600/20 backdrop-blur-md rounded-full p-4 border border-blue-400/30 hover:bg-blue-600/30 hover:scale-110 transition-all duration-300 cursor-pointer group">
            <ArrowDown className="h-6 w-6 text-blue-200 group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
      </div>

      <style>{`
        /* Animated background gradient */
        @keyframes animate-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background: linear-gradient(-45deg, #0d1b2a, #1b263b, #415a77);
          background-size: 600% 600%;
          animation: animate-gradient 16s ease infinite;
        }
        @keyframes animate-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-float {
          animation: animate-float 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
