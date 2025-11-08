import { Button } from "react-day-picker";
import FlipCard from "../components/NewTestimonial";

// studentsData.ts
const students = [
  {
    id: 1,
    name: "Aditya Yadav",
    college: "IIT Delhi",
    image: "/HomePage/StudentTestimonials/Aditya-iitDelhi.png",
    videoUrl: "https://www.youtube.com/embed/8g_5jr9HXXo",
    testimonial:(
      <p className="text-gray-700 text-center">
        My IIT journey began late, but finding the right teacher changed everything. Vaibhav Sir made even boring topics interesting and was always there to help—even at 3 AM. That emotional connection with him still means a lot to me.
      </p>
    ),
  },
  {
    id: 2,
    name: "Aviral Agarwal",
    college: "IIT Kharagpur",
    image: "/HomePage/StudentTestimonials/image.png",
    videoUrl: "https://www.youtube.com/embed/mA7j85gudHY",
    testimonial:(
      <p className="text-gray-700 text-center">
        I had settled for an average rank, but Vaibhav Sir made me believe I could aim higher,under AIR 1000. That mindset shift changed everything, and I ended up securing a top rank in JEE Mains.
      </p>
    ),
  },
  {
    id: 3,
    name: "Dhruv Dhupar",
    college: "IIT Delhi",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    videoUrl: "https://www.youtube.com/embed/zfgKf6p5Pwc",
    testimonial:(
      <p className="text-gray-700 text-center">
        My marks weren’t great at first, but I felt comfortable opening up to Vaibhav Bhaiya. That made all the difference. He supported me throughout, even guiding me about college later on.
      </p>
    ),
},
  {
    id: 4,
    name: "Avni Agnihotri",
    college: "IGDTUW Delhi",
    image: "/students/sanya.jpg",
    videoUrl: "https://www.youtube.com/embed/4QE7Ni3taHg",
    testimonial:(
      <p className="text-gray-700 text-center">
        From making Maths easier to guiding me from JEE Mains to Advanced, his support and fun teaching style made a huge difference in my journey.
      </p>
    ),
  },
  {
    id: 5,
    name: "Iswin Kumar",
    college: "IIT Kanpur",
    image: "/students/aditya.jpg",
    videoUrl: "https://www.youtube.com/embed/TDfjBFTBBcs",
    testimonial:(
      <p className="text-gray-700 text-center">
        This journey taught me the value of consistency. Vaibhav Bhaiya supported us like a true elder brother, both emotionally and academically. He believed in me, even when I doubted myself and that made all the difference.
      </p>
    ),
  },
  {
    id: 6,
    name: "Molik Tyagi",
    college: "IIT Mandi",
    image: "/students/tanya.jpg",
    videoUrl: "https://www.youtube.com/embed/3a3ZkoRnrAQ",
    testimonial:(
      <p className="text-gray-700 text-center">
        Balancing boards and JEE in 12th was tough, but Vaibhav Bhaiya handled all my Maths doubts. After failing to qualify for the Olympiads, his personal motivation lifted me up, and that support meant a lot.
      </p>
    ),
  },
  {
    id: 7,
    name: "Mudit Tiwari",
    college: "IIT Indore",
    image: "/students/yash.jpg",
    videoUrl: "https://www.youtube.com/embed/pl7fCtEdXYc",
    testimonial:(
      <p className="text-gray-700 text-center">
        
It was a really fun experience, and Vaibhav Bhaiya proved to be a great and approachable teacher. His sense of humor makes learning easy and relaxed, and you can comfortably share your problems with him.



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
