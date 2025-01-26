import React from 'react';
import { Clock } from 'lucide-react';

const Timeline = () => {
  const timelineEvents = [
    {
      date: "October 2024",
      title: "AI Chat Bot for NTU",
      description: "The reason behind the project: Help all NTU students and answer their routine questions directly without human intervention with high flexibility and personalized responses",
    },
    {
        date: "November 2024",
        title: "NTU Exam System",
        description: "The reason behind the project: Facilitating the students’ examination process using an integrated examination system that includes immediate evaluation of students and an integrated security system that ensures that there is no cheating in the examination process.",
    },
    {
      date: "December 2024",
      title: "Scopus Gate",
      description: "The reason behind the project: To showcase the educational and technological capabilities of the Northern Technical University and facilitate the process of research and university collaborations.",
    },
    {
      date: "December 2024",
      title: "Smart Schedule System",
      description: "The reason behind the project: Facilitating the process of creating schedules in schools and universities and creating conflict-free schedules using artificial intelligence.",
    },
    {
      date: "January 2025",
      title: "SunWay Kindergarten System",
      description: "The reason behind the project: Organizing the entry and exit process of children and organizing children’s information in integrated databases with a comprehensive accounting system.",
    }
  ];

  return (
    <section className="mt-24 relative min-h-[400px]">

      {/* Section Header */}
      <div className="relative z-10">
        <h2 className="text-3xl text-white font-bold mb-16 flex items-center gap-3">
          <Clock className="w-8 h-8 text-blue-400" />
          Professional Timeline
        </h2>

        {/* Timeline Container */}
        <div className="relative px-4 py-20">
          {/* Main timeline line */}
          <div className="absolute left-0 right-0 h-1 top-24 bg-gradient-to-r from-blue-600/20 via-blue-400/40 to-blue-600/20 rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-pulse" />
          </div>

          {/* Timeline Events */}
          <div className="relative">
            {timelineEvents.map((event, index) => (
              <div
                key={event.title}
                className="group relative"
                style={{
                  left: `${(index / (timelineEvents.length - 1)) * 100}%`,
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  width: '300px'
                }}
              >
                {/* Timeline node with hover effect */}
                <div className="absolute left-1/2 -translate-x-1/2 top-24 w-6 h-6 bg-blue-400/20 rounded-full transform -translate-y-1/2 
                             cursor-pointer transition-all duration-300 group-hover:scale-125 group-hover:bg-blue-400">
                  <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20" />
                  <div className="absolute inset-1.5 bg-gray-900 rounded-full group-hover:bg-blue-900 transition-colors duration-300" />
                  
                  {/* Hover label */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {event.date}
                  </div>
                </div>

                {/* Content card - Only visible on hover */}
                <div className="absolute top-32 left-1/2 -translate-x-1/2 w-full opacity-0 group-hover:opacity-100 transition-all duration-300 
                             transform translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 backdrop-blur-sm
                               shadow-[0_0_30px_rgba(59,130,246,0.2)] relative overflow-hidden">
                    
                    {/* Digital corner effects */}
                    <div className="absolute top-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-transparent opacity-100" />
                    <div className="absolute top-0 left-0 w-0.5 h-12 bg-gradient-to-b from-blue-400 to-transparent opacity-100" />
                    
                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-lg text-white font-semibold">{event.title}</h3>
                      <p className="text-gray-300 text-sm">{event.description}</p>
                    </div>
                    
                    {/* Bottom corner effects */}
                    <div className="absolute bottom-0 right-0 w-12 h-0.5 bg-gradient-to-l from-blue-400 to-transparent opacity-100" />
                    <div className="absolute bottom-0 right-0 w-0.5 h-12 bg-gradient-to-t from-blue-400 to-transparent opacity-100" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-20px) scale(1.2); }
          }

          @keyframes gridMove {
            0% { transform: perspective(1000px) rotateX(10deg) rotateY(0deg) translateY(0); }
            25% { transform: perspective(1000px) rotateX(0deg) rotateY(10deg) translateY(-10px); }
            50% { transform: perspective(1000px) rotateX(-10deg) rotateY(0deg) translateY(0); }
            75% { transform: perspective(1000px) rotateX(0deg) rotateY(-10deg) translateY(-10px); }
            100% { transform: perspective(1000px) rotateX(10deg) rotateY(0deg) translateY(0); }
          }
        `}
      </style>
    </section>
  );
};

export default Timeline;