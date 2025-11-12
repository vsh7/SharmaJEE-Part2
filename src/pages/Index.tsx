
import HeroSection from '../components/HeroSection';
import CoursesSection from '../components/CoursesSection';
import ModulesSection from '../components/ModulesSection';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hello from '@/components/Hello';
import TestTestimonial from './TestimonialData';
import HomeAchievements from '@/components/HomeAchievements';
import WhatsappPlugin from '@/components/WhatsappPlugin';


const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <Hello/>
      <TestTestimonial/>
      <CoursesSection />
      <ModulesSection />
      <HomeAchievements/>
      <Footer />
      <WhatsappPlugin/>
    </div>
  );
};

export default Index;
