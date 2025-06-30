
import HeroSection from '../components/HeroSection';
import CoursesSection from '../components/CoursesSection';
import ModulesSection from '../components/ModulesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CoursesSection />
      <ModulesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
