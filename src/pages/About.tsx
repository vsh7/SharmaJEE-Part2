import { GraduationCap, Award, Users, BookOpen, Target, Heart, CheckCircle, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Timeline } from '@/components/ui/timeline';

const About = () => {
  const data = [
      {
        title: "2023",
        content: (
          <div>
            
              <p className="sm:hidden" >In January, I was promoted to the Executive Body as the Marketing Head, specializing in offline and creative marketing ventures for the company. In October, I transitioned into the role of an Educational Consultant at SWC, continuing my journey in the education sector. In December, I launched Sharmaji Mathematical – VSH7, with the vision of providing a customized and sequential learning platform. The focus was not just on IIT-JEE preparation but on fostering a lifelong learning mindset and the pursuit of knowledge beyond examinations..</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <p className="hidden md:block">In January, I was promoted to the Executive Body as the Marketing Head, specializing in offline and creative marketing ventures for the company. In October, I transitioned into the role of an Educational Consultant at SWC, continuing my journey in the education sector. In December, I launched Sharmaji Mathematical – VSH7, with the vision of providing a customized and sequential learning platform. The focus was not just on IIT-JEE preparation but on fostering a lifelong learning mindset and the pursuit of knowledge beyond examinations..</p>
              {/* <img
                src="/timeline/1.png"
                alt="img-1"
                width={500}
                height={500}
                className="rounded-lg object-cover h-60 md:h-60 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              /> */}
              
              </div>
          </div>
        ),
      },
      {
        title: "2022",
        content: (
          <div>
           <p className="sm:hidden">March brought a promotion to Senior Mathematics Faculty at SWC. By May, I took on a new challenge as the Mathematics Lead and started a new vertical as the Social Media Marketing Manager, leading a team of 10 interns and marketing professionals..</p>
            <div className="grid sm:grid-cols-2 gap-4">
  
  
              <p className="hidden sm:block">March brought a promotion to Senior Mathematics Faculty at SWC. By May, I took on a new challenge as the Mathematics Lead and started a new vertical as the Social Media Marketing Manager, leading a team of 10 interns and marketing professionals..</p>
              {/* <img
                src="/timeline/2.png"
                alt="img-2"
                width={500}
                height={500}
                className="rounded-lg object-cover h-60 md:h-60 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              /> */}
            </div>
          </div>
        ),
      },
      {
        title: "2021",
        content: (
          <div>
            <p className="sm:hidden">In January, I founded my first startup, Anchor-AGE, with the aim of providing academic content and graphic design services to the masses. Over six months, the startup generated ₹15 lakh in revenue and employed over 200 freelancers. However, due to non-scalability, I decided to shut it down—a valuable corporate lesson in entrepreneurship. In May, I joined Swastik Classes (SWC) as a Mathematics Faculty, diving deep into the education industry.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {/* <img
                src="/timeline/3.png"
                alt="img-3"
                width={500}
                height={500}
                className="rounded-lg object-cover h-60 md:h-60 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              /> */}
              <p className="hidden md:block">In January, I founded my first startup, Anchor-AGE, with the aim of providing academic content and graphic design services to the masses. Over six months, the startup generated ₹15 lakh in revenue and employed over 200 freelancers. However, due to non-scalability, I decided to shut it down—a valuable corporate lesson in entrepreneurship. In May, I joined Swastik Classes (SWC) as a Mathematics Faculty, diving deep into the education industry.</p>
  
  
  
  
            </div>
          </div>
        ),
      },
      {
        title: "2020",
        content: (
          <div>
             <p className="sm:hidden">
                In March, I became the Convener of Ruvaan, the first edition of the Literary Fest of IIT Mandi, a legacy I am still proud of as a founding member. By May, I was promoted to Quality Analyst at Doubtnut, and in September, I took on the dual role of Intern Manager and Quality Analyst. In December, I joined Unacademy as an Educator, stepping into the field of online education and content creation.
                </p>
            <div className="grid sm:grid-cols-2 gap-4">
            <p className="hidden md:block">
                In March, I became the Convener of Ruvaan, the first edition of the Literary Fest of IIT Mandi, a legacy I am still proud of as a founding member. By May, I was promoted to Quality Analyst at Doubtnut, and in September, I took on the dual role of Intern Manager and Quality Analyst. In December, I joined Unacademy as an Educator, stepping into the field of online education and content creation.
                </p>
              {/* <img
                src="/timeline/4.png"
                alt="img-4"
                width={500}
                height={500}
                className="rounded-lg object-cover h-60 md:h-60 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                /> */}
                
              
           
              
            </div>
          </div>
        ),
      },
      {
        title: "2019",
        content: (
          <div>
            <p className="sm:hidden">Leadership roles continued as I became the Convener of Youth Parliament and Sponsorship Head of the Sports Fest at IIT Mandi. In May, I took up my first internship, earning ₹2000 per month. This experience made me set a clear goal—to become financially independent. By December, I secured my first full-time internship at Doubtnut as a Subject Matter Expert.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {/* <img
                src="/timeline/4.png"
                alt="img-4"
                width={500}
                height={500}
                className="rounded-lg object-cover h-60 md:h-60 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              /> */}
              <p className="hidden md:block">Leadership roles continued as I became the Convener of Youth Parliament and Sponsorship Head of the Sports Fest at IIT Mandi. In May, I took up my first internship, earning ₹2000 per month. This experience made me set a clear goal—to become financially independent. By December, I secured my first full-time internship at Doubtnut as a Subject Matter Expert.</p>
              
            </div>
          </div>
        ),
      },
      {
        title: "2018",
        content: (
          <div>
           
            <div className="grid sm:grid-cols-2 gap-4">
              <p>This was a year of exploration and diverse experiences. I became the coordinator of the Photography and Movie Club, immersing myself in creativity. I also took up cricket, practiced diligently, and earned a spot on the team. One of my proudest moments was delivering a phenomenal bowling spell of 5 wickets for just 12 runs in the semifinals for my batch of 2021.</p>
              
            </div>
          </div>
        ),
      },
      {
        title: "2017",
        content: (
          <div>
           
            <div className="grid sm:grid-cols-2 gap-4">
              <p>Embarked on my drop-year journey with discipline and focus while ensuring I enjoyed the process wholeheartedly. The results showed significant improvement—JEE Main Rank improved to around 9,000 in April, and my JEE Advanced Rank was approximately 5,000 in May. Though I was initially disappointed, I acknowledged my progress and thanked God for the journey. In August, I joined IIT Mandi, a place that would completely transform my outlook on life.
  
  .</p>
              
            </div>
          </div>
        ),
      },
      {
        title: "2016",
        content: (
          <div>
           
            <div className="grid sm:grid-cols-2 gap-4">
              <p>Two years of randomness defined my JEE preparation journey. With minimal effort initially but a determined push towards the end, I managed to pass my 12th CBSE Boards. However, my JEE results were disappointing - JEE Main Rank of around 96,000 and JEE Advanced score of 62, which meant I wasn&apos;t qualified. This was an absolutely shattering moment, forcing me to confront the harsh realities of life. In June, I turned to meditation and deep thinking, idolizing MS Dhoni and striving to embody his calm and confident demeanor.</p>
              
             
            </div>
          </div>
        ),
      },
      {
        title: "2014",
        content: (
          <div>
           
            <div className="grid sm:grid-cols-2 gap-4">
              <p>Completed my 10th ICSE Board exams, scoring 90.5%, a proud academic achievement that reinforced my potential and dedication.</p>
              
              
            </div>
          </div>
        ),
      },
      {
        title: "2013",
        content: (
          <div>
           
            <div className="grid sm:grid-cols-2 gap-4">
              <p>Represented my school in the Frank Anthony National Debate Competition, a major milestone in my journey of public speaking and intellectual engagement. The same year, I was honored to become the Head Boy, a responsibility that further shaped my leadership skills.</p>
              
             
            </div>
          </div>
        ),
      },
      {
        title: "2011",
        content: (
          <div>
           
            <div className="grid sm:grid-cols-2 gap-4">
              <p>Moved to Haryana and joined Christ Raja Convent, Jind. Another language-learning challenge awaited me as I started learning Punjabi. Like before, I scored zero in my first test, repeating a familiar pattern of struggle and adaptation.</p>
              
            
            </div>
          </div>
        ),
      },
      {
        title: "2009",
        content: (
          <div>
           
            <div className="grid sm:grid-cols-2 gap-4">
              <p>A memorable incident in academics occurred when I scored 49 out of 80 in Maths. What made it significant was that I had left 31 marks worth of questions due to time constraints, teaching me the importance of time management.</p>
              
             
            </div>
          </div>
        ),
      },
      {
        title: "2006",
        content: (
          <div>
           
            <div className="grid sm:grid-cols-2 gap-4">
              <p>Moved to Odisha and joined Saint Lawrence School, Angul. This year also marked the beginning of my journey with a new language—Odia. Scored zero in my first test, but it wasn&apos;t the first time I had experienced such a setback.</p>
              
              
            </div>
          </div>
        ),
      },
      {
        title: "2005",
        content: (
          <div>
           
            <div className="grid sm:grid-cols-2 gap-4">
              <p>Received the first report card, which described me as an &quot;intelligent student but very very naughty&quot; setting the tone for the mischievous yet curious nature that defined my early years.</p>
              
             
            </div>
          </div>
        ),
      },
      {
        title: "2002",
        content: (
          <div>
           
            <div className="grid sm:grid-cols-2 gap-4">
              <p>Started school, stepping into the world of formal education..</p>
              
            
            </div>
          </div>
        ),
      },
      {
        title: "1999",
        content: (
          <div>
           
            <div className="grid sm:grid-cols-2 gap-4">
              <p>Born in Kanpur, marking the beginning of a journey filled with learning, challenges, and achievements.</p>
              
              
            </div>
          </div>
        ),
      },
    ];
  // const timelineEvents = [
  //   {
  //     year: "2015",
  //     title: "The Foundation",
  //     description: "Embarked on the JEE journey as an aspirant, experiencing firsthand the challenges that shape every student's path to success.",
  //     icon: BookOpen,
  //     color: "from-blue-800 to-blue-600"
  //   },
  //   {
  //     year: "2017",
  //     title: "Academic Excellence",
  //     description: "Achieved AIR 142 in JEE Advanced, securing admission to IIT Delhi in Mechanical Engineering with distinction.",
  //     icon: GraduationCap,
  //     color: "from-blue-800 to-blue-600"
  //   },
  //   {
  //     year: "2018",
  //     title: "Mentorship Calling",
  //     description: "Discovered the profound impact of quality mentorship while tutoring fellow students, igniting a passion for education.",
  //     icon: Users,
  //     color: "from-blue-800 to-blue-600"
  //   },
  //   {
  //     year: "2019",
  //     title: "SharmaJEE Genesis",
  //     description: "Established SharmaJEE with a vision to democratize premium JEE preparation and make excellence accessible to all.",
  //     icon: Target,
  //     color: "from-blue-800 to-blue-600"
  //   },
  //   {
  //     year: "2020",
  //     title: "Legacy of Success",
  //     description: "Cultivated a thriving community of 1000+ successful students, establishing proven methodologies for IIT success.",
  //     icon: Award,
  //     color: "from-blue-800 to-blue-600"
  //   },
  //   {
  //     year: "2021",
  //     title: "Legacy of Success",
  //     description: "Cultivated a thriving community of 1000+ successful students, establishing proven methodologies for IIT success.",
  //     icon: Award,
  //     color: "from-blue-800 to-blue-600"
  //   },
  //   {
  //     year: "2024",
  //     title: "Legacy of Success",
  //     description: "Cultivated a thriving community of 1000+ successful students, establishing proven methodologies for IIT success.",
  //     icon: Award,
  //     color: "from-blue-800 to-blue-600"
  //   }
  // ];

  const achievements = [
    { number: "100+", label: "Students Mentored", icon: Users, description: "Guided to success" },
    { number: "95%", label: "Success Rate", icon: Target, description: "Consistent excellence" },
    { number: "20+", label: "AIR Under 10000", icon: Award, description: "Top performers" },
    { number: "5+", label: "Years Excellence", icon: BookOpen, description: "Proven track record" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 transform rotate-45 animate-pulse" />
          <div className="absolute bottom-32 right-20 w-24 h-24 bg-blue-300/15 transform -rotate-12 animate-bounce" />
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-500/20 rounded-full animate-ping" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600/20 backdrop-blur-md border border-blue-400/30 text-blue-100 mb-8 animate-fade-in">
              <Star className="h-5 w-5 mr-2 text-yellow-400" />
              <span className="text-sm font-semibold">Meet Your Success Architect</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in">
              About <span className="text-blue-200">Excellence</span>
            </h1>
            <p
              className="text-2xl sm:text-3xl text-blue-200 mb-8 animate-fade-in font-medium"
              style={{ animationDelay: '200ms' }}
            >
              From Aspiration to Achievement - A Journey of Transformation
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Story Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-2/5">
                <div className="relative group">
                  <div className="absolute -inset-6 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
                    <img
                      src="./AboutMe/image.webp"
                      alt="Vaibhav Sharma - Founder"
                      className="w-full rounded-2xl shadow-xl"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-800 to-blue-600 text-white p-4 rounded-2xl shadow-xl">
                    <div className="text-2xl font-bold">IIT Mandi</div>
                    <div className="text-sm opacity-90">2017-2021</div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-3/5">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
                  Meet <span className="text-blue-600">Vaibhav Sharma</span>
                </h2>
                <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
                  <p className="text-2xl text-blue-600 font-semibold mb-6">
                    "Excellence is not a destination, but a journey of continuous growth and dedication."
                  </p>
                  <p>
                    My transformative journey began in 2014 as a determined JEE aspirant, navigating the same challenges that thousands of students face today. The relentless pressure, fierce competition, and overwhelming curriculum - I have walked this path with unwavering determination.
                  </p>
                  <p>
                  Achieving good rank  in JEE Advanced and graduating with honors from IIT Mandi opened my eyes to a profound truth: JEE success transcends mere knowledge - it demands deep conceptual understanding, strategic application, and most importantly, the right mentorship.
                  </p>
                  <p>
                    This revelation inspired the birth of SharmaJEE in 2023. What commenced as mentoring a select group of students has evolved into a comprehensive platform that has empowered over 100 students to realize their IIT dreams.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600">
                    <p className="font-semibold text-blue-900 text-xl">
                      <strong>My Mission:</strong> To democratize premium JEE preparation, making world-class education accessible, comprehensible, and achievable for every deserving student.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* < /> */}
      {/* Timeline Section */}
      <div className="w-full pt-20">
            <Timeline data={data} />
          </div>
      {/* <AboutMeTimeLine/> */}

      {/* Achievements Section */}
      <section className="py-10 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8">
              Impact & <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Measurable excellence that speaks to our commitment to student success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.label}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-white rounded-3xl shadow-2xl p-4 hover:shadow-blue-600/10 transition-all duration-500 group-hover:scale-105 border border-blue-100">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl mb-6 group-hover:from-blue-100 group-hover:to-blue-200 transition-colors duration-300">
                    <achievement.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-4xl sm:text-5xl font-bold text-gray-900 m-2">
                      {achievement.number}
                    </div>
                    <div className="text-gray-700 font-semibold text-lg mb-2">{achievement.label}</div>
                    <div className="text-blue-600 text-sm font-medium">{achievement.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 transform rotate-45 animate-pulse" />
          <div className="absolute bottom-32 right-20 w-24 h-24 bg-blue-300/15 transform -rotate-12 animate-bounce" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="bg-blue-600/20 backdrop-blur-md rounded-3xl p-4 w-20 h-20 mx-auto mb-12 border border-blue-400/30">
              <Heart className="h-12 w-12 mx-auto text-blue-200 animate-pulse" />
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold mb-12">
              Our Vision
            </h2>
            <blockquote className="text-xl sm:text-3xl text-blue-100 leading-relaxed mb-16 font-medium">
              "To architect a future where every deserving student has access to world-class education and personalized mentorship, 
              transcending geographical and economic barriers. Education is the great equalizer, 
              and we are committed to making this vision a transformative reality."
            </blockquote>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
              <div className="bg-blue-600/20 backdrop-blur-md rounded-3xl p-8 border border-blue-400/30 hover:bg-blue-600/30 transition-all duration-300">
                <CheckCircle className="h-12 w-12 text-blue-200 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Premium Education</h3>
                <p className="text-blue-100 text-lg">Delivering world-class educational experiences accessible to every student</p>
              </div>
              <div className="bg-blue-600/20 backdrop-blur-md rounded-3xl p-8 border border-blue-400/30 hover:bg-blue-600/30 transition-all duration-300">
                <CheckCircle className="h-12 w-12 text-blue-200 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Personalized Mentorship</h3>
                <p className="text-blue-100 text-lg">Providing individualized attention and strategic guidance for every learner</p>
              </div>
              <div className="bg-blue-600/20 backdrop-blur-md rounded-3xl p-8 border border-blue-400/30 hover:bg-blue-600/30 transition-all duration-300">
                <CheckCircle className="h-12 w-12 text-blue-200 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Excellence Assurance</h3>
                <p className="text-blue-100 text-lg">Ensuring every student achieves their maximum potential and beyond</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
