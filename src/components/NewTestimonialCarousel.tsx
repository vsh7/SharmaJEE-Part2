import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FlipCard from './NewTestimonial';
import studentsData from '../pages/TestimonialData'; // Assumed to exist

export default function StudentCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleStudents = showAll ? studentsData : studentsData.slice(0, 6);
  const cardWidth = 320;
  const scrollAmount = cardWidth * 2;
  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < visibleStudents.length - 3;

  const scrollTo = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    if (dir === 'left' && canScrollLeft) {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setCurrentIndex(Math.max(0, currentIndex - 2));
    } else if (dir === 'right' && canScrollRight) {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setCurrentIndex(Math.min(visibleStudents.length - 3, currentIndex + 2));
    }
  };

  useEffect(() => {
    if (showAll && scrollRef.current) {
      scrollRef.current.scrollTo({
        left: cardWidth * 6,
        behavior: 'smooth',
      });
      setCurrentIndex(6);
    }
  }, [showAll]);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent mb-3">
          Student Success Stories
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Real stories from real learners who transformed their careers.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">
        <Button
          onClick={() => scrollTo('left')}
          disabled={!canScrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full w-10 h-10 bg-white shadow-md hover:bg-gray-200 disabled:opacity-40"
        >
          <ChevronLeft />
        </Button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto px-16 py-6 scrollbar-hide scroll-smooth"
        >
          {visibleStudents.map((student, i) => (
            <div className="flex-shrink-0 w-80" key={student.id || i}>
              <FlipCard
                studentName={student.studentName}
                collegeName={student.collegeName}
                studentPhoto={student.studentPhoto}
                backYoutubeUrl={student.backYoutubeUrl}
                frontContent={
                  <p className="text-sm text-gray-600 text-center px-2">
                    {student.testimonial || 'Tap ▶ to watch testimonial'}
                  </p>
                }
              />
            </div>
          ))}
        </div>

        <Button
          onClick={() => scrollTo('right')}
          disabled={!canScrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full w-10 h-10 bg-white shadow-md hover:bg-gray-200 disabled:opacity-40"
        >
          <ChevronRight />
        </Button>
      </div>

      {/* Show More Button */}
      {!showAll && studentsData.length > 6 && (
        <div className="text-center mt-6">
          <Button
            onClick={() => setShowAll(true)}
            className="rounded-full px-6 py-4 border border-primary text-primary hover:bg-primary hover:text-white transition-all"
            variant="outline"
          >
            <Users className="mr-2 h-4 w-4" />
            Show More Success Stories
          </Button>
        </div>
      )}

      {/* Indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: Math.ceil(visibleStudents.length / 3) }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              Math.floor(currentIndex / 2) === index ? 'bg-primary w-6' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
