  import { useState } from 'react';
  import { Play, X } from 'lucide-react';
  import { Button } from '@/components/ui/button';

  interface TestimonialCardProps {
    student: {
      id: string;
      name: string;
      college: string;
      photo: string;
      videoUrl: string;
      testimonialText: string;
    };
  }

  const TestimonialCard = ({ student }: TestimonialCardProps) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    const handleVideoClick = () => {
      setIsFlipped(true);
      setIsVideoLoaded(true);
    };

    const handleCloseVideo = () => {
      setIsFlipped(false);
      setIsVideoLoaded(false);
    };

    return (
      <div className="relative w-80 h-96 perspective-1000">
        <div 
          className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* Front Side */}
          <div className="absolute inset-0 backface-hidden bg-gradient-card rounded-3xl shadow-card hover:shadow-hover transition-shadow duration-300 p-6 flex flex-col">
            <div className="relative mb-6">
              <img
                src={student.photo}
                alt={student.name}
                className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-primary/20"
              />
              <Button
                onClick={handleVideoClick}
                variant="secondary"
                size="sm"
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 rounded-full w-10 h-10 p-0 bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft"
              >
                <Play className="w-4 h-4 ml-0.5" />
              </Button>
            </div>
            
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold text-foreground mb-1">{student.name}</h3>
              <p className="text-muted-foreground font-medium">{student.college}</p>
            </div>
            
            <div className="flex-1">
              <p className="text-muted-foreground leading-relaxed text-sm">{student.testimonialText}</p>
            </div>
          </div>

          {/* Back Side */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-card rounded-3xl shadow-card p-4 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-foreground">{student.name}</h3>
              <Button
                onClick={handleCloseVideo}
                variant="secondary"
                size="sm"
                className="rounded-full w-8 h-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex-1 relative rounded-2xl overflow-hidden bg-muted">
              {isVideoLoaded && (
                <video
                  src={student.videoUrl}
                  controls
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error('Video failed to load:', e);
                    // Fallback to placeholder
                    // e.currentTarget.poster = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' dy='.3em' fill='%236b7280'%3EVideo Unavailable%3C/text%3E%3C/svg%3E";
                  }}
                />
              )}
              {!isVideoLoaded && (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default TestimonialCard;