import { useState } from "react";
  import { Play, X } from 'lucide-react';
  import { Button } from '@/components/ui/button';
interface FlipCardProps {
  frontContent: React.ReactNode;
  backYoutubeUrl: string;
  studentName: string;
  collegeName: string;
  studentPhoto: string;
  className?: string;
}

export default function FlipCard({
  frontContent,
  backYoutubeUrl,
  studentName,
  collegeName,
  studentPhoto,
  className="transform transition duration-300 hover:scale-105 hover:bg-red-50"

}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [videoSrc, setVideoSrc] = useState(backYoutubeUrl); // state to control iframe src

  const handleFlip = () => {
    setVideoSrc(backYoutubeUrl); // Reset video src when flipped
    setIsFlipped(true);
  };

  const handleUnflip = () => {
    setIsFlipped(false);
    setVideoSrc(""); // Clear the video src to stop playback
  };

  return (
    <div className={`relative w-80 h-96 bg-white rounded-3xl hover:bg-blue [perspective:1000px] ${className}`}>
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden bg-gradient-card rounded-3xl shadow-card hover:shadow-hover transition-shadow duration-300 p-6 flex flex-col">
            <div className="relative mb-6">

          <img
            src={studentPhoto}
            alt="Student"
            className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-primary/20"
            />
            <Button
                onClick={handleFlip}
                variant="secondary"
                size="sm"
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 rounded-full w-10 h-10 p-0 bg-blue-600 hover:bg-primary/90 text-primary-foreground shadow-soft"
              >
                <Play className="w-4 h-4 ml-0.5" />
              </Button>
            </div>
          <div className="text-center mt-4">
            <h2 className="text-xl font-semibold text-foreground mb-1">{studentName}</h2>
            <p className="text-muted-foreground font-medium">{collegeName}</p>
          </div>
          <div className="flex-1">
              <p className="text-muted-foreground leading-relaxed text-sm">{frontContent}</p>
            </div>
        </div>

        {/* Back Side with YouTube Iframe */}
        <div className="absolute w-full h-full bg-white  rounded-xl p-4 flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)] text-white relative">
          <Button
                onClick={handleUnflip}
                variant="secondary"
                size="sm"
                className="rounded-full w-8 h-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>

          <div className="text-center mb-2">
            <h2 className="text-xl font-bold text-black">{studentName}</h2>
            <p className="text-sm text-gray-800">{collegeName}</p>
          </div>

          <div className="flex-grow flex items-center justify-center mt-4">
            {videoSrc && (
              <iframe
                width="100%"
                height="100%"
                src={videoSrc}
                title={`YouTube video of ${studentName}`}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg w-full h-full"
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
