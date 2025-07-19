import { Button } from "react-day-picker";
import FlipCard from "../components/NewTestimonial";

// studentsData.ts
const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    college: "IIT Bombay",
    image: "/students/aarav.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    testimonial:(
      <p className="text-gray-700 text-center">
        I'm Anjali, focused on energy systems and sustainable solutions.
      </p>
    ),
  },
  {
    id: 2,
    name: "Meera Singh",
    college: "IIT Delhi",
    image: "/students/meera.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    testimonial:(
      <p className="text-gray-700 text-center">
        I'm Anjali, focused on energy systems and sustainable solutions.
      </p>
    ),
  },
  {
    id: 3,
    name: "Rohan Verma",
    college: "BITS Pilani",
    image: "/students/rohan.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    testimonial:(
      <p className="text-gray-700 text-center">
        I'm Anjali, focused on energy systems and sustainable solutions.
      </p>
    ),
},
  {
    id: 4,
    name: "Sanya Mehta",
    college: "IIT Kharagpur",
    image: "/students/sanya.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    testimonial:(
      <p className="text-gray-700 text-center">
        I'm Anjali, focused on energy systems and sustainable solutions.
      </p>
    ),
  },
  {
    id: 5,
    name: "Aditya Kapoor",
    college: "IIT Madras",
    image: "/students/aditya.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    testimonial:(
      <p className="text-gray-700 text-center">
        I'm Anjali, focused on energy systems and sustainable solutions.
      </p>
    ),
  },
  {
    id: 6,
    name: "Tanya Chauhan",
    college: "NIT Trichy",
    image: "/students/tanya.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    testimonial:(
      <p className="text-gray-700 text-center">
        I'm Anjali, focused on energy systems and sustainable solutions.
      </p>
    ),
  },
  {
    id: 7,
    name: "Yash Gupta",
    college: "IIT Kanpur",
    image: "/students/yash.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    testimonial:(
      <p className="text-gray-700 text-center">
        I'm Anjali, focused on energy systems and sustainable solutions.
      </p>
    ),
  }
];





function TestTestimonial() {
  return (
    <>
    
      
    <div className="w-full overflow-x-auto bg-gradient-to-br from-blue-50 to-purple-50 pt-8">
    <div className="text-center mb-16 ">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Success <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our students who have achieved their dreams and secured top ranks in JEE.
          </p>
        </div>
    <div className="p-8 bg-slate-100 flex flex-wrap gap-8 justify-center">
      
      {students.map((student, index) => (
        <FlipCard
        key={index}
        studentName={student.name}
        collegeName={student.college}
        studentPhoto={student.image}
        backYoutubeUrl={student.videoUrl}
        frontContent={student.testimonial}
        />
      ))}
        </div>
    </div>
  </>
  );
}
export default TestTestimonial;
