import React from 'react';
import { Mail, Phone, Github, Linkedin, Code2, Database, Globe, BrainCircuit, Rocket, Target, Users,MapPin } from 'lucide-react';
import Image from 'next/image'
import Timeline from './Timeline'  // or whatever your file path is


const HomePage = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
    },
    {
      category: "Backend",
      technologies: ["Python", "Node.js", "PostgreSQL", "MongoDB"]
    },
    {
      category: "DevOps & Tools",
      technologies: ["Git", "Windowns Administration", "Linux"]
    }
  ];

  const projects = [
    {
      title: "NTU Exam System",
      description: "Me and my team (Oyaps) developed a robust and efficient exam system for my university, designed to streamline the examination process for both students and faculty.",
      longDescription: "This project is a comprehensive exam management system created to meet the needs of my university. It provides a seamless platform for conducting, managing, and grading exams efficiently. The system features a secure and intuitive interface for students to access their exams and for faculty to create and manage tests.",
      features: [
        "User Authentication",
        "Exam Creation and Management",
        "Automated Grading",
        "User-Friendly Interface",
        "Secure Environment"
      ],
      technologies: ["PHP", "MySQL"],
      image: "/NTU.jpg",
      link: "https://github.com/yourusername/ecommerce"
    },
    {
      title: "SunWay Kindergarten System",
      description: "A comprehensive management system for a kindergarten that streamlines the entry of children and handles accounting processes. This system ensures security, efficiency, and accuracy in managing daily operations, providing an intuitive solution for staff and administrators.",
      longDescription: "Developed an intelligent task management system that uses machine learning to optimize workflow and prioritize tasks. Features include automated task categorization and smart deadline suggestions.",
      features: [
        "Child Entry Management",
        "Accounting Management",
        "Parent Communication",
        "Data Security"
      ],
      technologies: ["Next JS", "PostgreSQL"],
      image: "/Logo.png",
      link: "https://github.com/yourusername/ai-tasks"
    },
    {
      title: "AI Chat Bot For NTU",
      description: "An AI-powered chatbot for my university to assist new students in quickly finding answers to their questions. This intelligent system offers real-time responses, improving the onboarding experience and reducing the workload on administrative staff.",
      longDescription: "Created a scalable real-time communication platform supporting video calls, file sharing, and team collaboration. Implemented end-to-end encryption and advanced message search.",
      features: [
        "AI-Powered Conversations",
        "24/7 Availability",
        "Personalized Responses",
        "User-Friendly Interface",
        "Multi-Language Support (Arabic,English and Kurdish)"
      ],
      technologies: ["Artificial Intelligence", "Next JS"],
      image: "/bot.jpg",
      link: "https://github.com/yourusername/chat-app"
    },
    {
      title: "Scopus Gate",
      description: "A centralized portal for Scopus-indexed research, focusing on research contributions related to Northern Technical University. The platform provides easy access to research papers, collaboration details, and analytics, fostering academic engagement and visibility.",
      longDescription: "Developed an intelligent task management system that uses machine learning to optimize workflow and prioritize tasks. Features include automated task categorization and smart deadline suggestions.",
      features: [
        "Centralized Repository",
        "Advanced Search and Filter",
        "Collaboration Insights",
        "Author Profiles",
        "Research Analytics"
      ],
      technologies: ["Python", "Next JS", "MongoDB"],
      image: "/scopus.jpg",
      link: "https://github.com/yourusername/ai-tasks"
    },
    {
      title: "Smart Schedule System",
      description: "A smart scheduling system designed for universities and schools to automatically generate conflict-free schedules. The system offers high flexibility, efficient management of all schedule-related tasks, and ensures optimal resource allocation.",
      longDescription: "Created a scalable real-time communication platform supporting video calls, file sharing, and team collaboration. Implemented end-to-end encryption and advanced message search.",
      features: [
        "AI-Powered Conversations",
        "Conflict-Free Scheduling",
        "Resource Management",
        "User-Friendly Interface",
        "Multi-View Options"
      ],
      technologies: ["Artificial Intelligence", "Next JS", "MySQL"],
      image: "/schedule.jpg",
      link: "https://github.com/yourusername/chat-app"
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-gray-900 overflow-hidden">
      {/* Digital background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-500/10 w-1 h-1 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`
              }}
            />
          ))}
        </div>
        
        {/* Animated grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(#1e40af 1px, transparent 1px), linear-gradient(90deg, #1e40af 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        />

        {/* Add animation keyframes */}
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
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            {/* Left column - Photo and floating icons */}
            <div className="relative w-64 h-64 lg:w-96 lg:h-96 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg backdrop-blur-sm border border-white/10">
                <img
                  src="/Ezalden.JPG"
                  alt="Ezalden"
                  className="w-full h-full object-cover rounded-lg p-2"
                />
              </div>
              
              {/* Floating tech icons */}
              <Code2 className="absolute -top-4 -right-4 w-8 h-8 text-blue-400" 
                    style={{animation: 'float 3s ease-in-out infinite'}} />
              <Database className="absolute -bottom-4 -left-4 w-8 h-8 text-purple-400" 
                       style={{animation: 'float 3s ease-in-out infinite', animationDelay: '0.5s'}} />
              <Globe className="absolute -top-4 -left-4 w-8 h-8 text-cyan-400" 
                    style={{animation: 'float 3s ease-in-out infinite', animationDelay: '1s'}} />
            </div>

            {/* Right column - Content */}
            <div className="flex-1 max-w-2xl w-full mx-auto lg:mx-0">
              <div className="space-y-8">
                <div>
                  <h2 className="text-sm text-blue-400 font-mono mb-2">&lt;developer&gt;</h2>
                  <h1 className="text-4xl lg:text-6xl font-bold text-white mb-2">
                    Ezalden Mamon
                  </h1>
                  <h2 className="text-sm text-blue-400 font-mono">&lt;/developer&gt;</h2>
                </div>

                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500" />
                  <p className="text-lg text-gray-300 pl-4">
                  I am a second-year student specializing in Cybersecurity and Cloud Computing Engineering with a strong passion for emerging technologies and innovation. I bring extensive experience in web design and development, combining technical expertise with creative problem-solving to deliver impactful digital solutions. My interests extend to artificial intelligence and leveraging cutting-edge technologies to simplify and enhance everyday life. With a dedication to continuous learning, I strive to explore and harness advancements in technology to address real-world challenges effectively.
                  </p>
                </div>

                {/* Location and University */}
<div className="pt-8 border-t border-white/10">
  <h3 className="text-white text-xl mb-4">Location & Education</h3>
  <div className="flex items-center gap-4 text-gray-300">
    <MapPin className="w-6 h-6 text-blue-400" />
    <p className="text-lg">
      Live in <span className="text-blue-400 font-semibold">Iraq</span>, studying at{' '}
      <a 
        href="https://ntu.edu.iq/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
      >
        Northern Technical University
      </a>
      .
    </p>
  </div>
</div>

                {/* Team Section */}
<div className="pt-8 border-t border-white/10">
  <h3 className="text-white text-xl mb-4">Team</h3>
  <div className="flex items-center gap-4 text-gray-300">
    <Users className="w-6 h-6 text-purple-400" />
    <p className="text-lg text-gray-300">
      Member of the{' '}
      <a 
        href="https://oyaps.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
      >
        Oyaps Team
      </a>
    </p>
  </div>
</div>

                {/* Contact info */}
                <div className="pt-8 border-t border-white/10">
                  <h3 className="text-white text-xl mb-4">Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-gray-300 group">
                      <Mail className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                      <a href="mailto:john.doe@example.com" className="group-hover:text-white transition-colors">
                        ezaldenm6@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-4 text-gray-300 group">
                      <Phone className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                      <a href="tel:+1234567890" className="group-hover:text-white transition-colors">
                        +964 772 690 7 123
                      </a>
                    </div>
                  </div>

                  {/* Social links */}
                  <div className="flex gap-4 mt-6">
                    <a 
                      href="https://github.com/3zzozi" 
                      className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </a>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
<section className="mt-24">
  <h2 className="text-3xl text-white font-bold mb-12 flex items-center gap-3 animate-fadeIn">
    <BrainCircuit className="w-8 h-8 text-blue-400 animate-pulse" />
    Technical Expertise
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {skills.map((skillSet, index) => (
      <div 
        key={skillSet.category}
        className="relative p-6 rounded-lg bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 backdrop-blur-sm overflow-hidden group hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300"
        style={{
          animation: `digitalFade 0.7s ease-out ${index * 0.2}s backwards, glowPulse 3s infinite`
        }}
      >
        {/* Digital corner effects */}
        <div className="absolute top-0 left-0 w-20 h-0.5 bg-gradient-to-r from-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-0 left-0 w-0.5 h-20 bg-gradient-to-b from-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 right-0 w-20 h-0.5 bg-gradient-to-l from-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 right-0 w-0.5 h-20 bg-gradient-to-t from-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <h3 className="text-xl text-white mb-4 transform transition-all duration-300 group-hover:translate-x-2">{skillSet.category}</h3>
        <div className="flex flex-wrap gap-2">
          {skillSet.technologies.map((tech, techIndex) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20 text-sm hover:bg-blue-500/20 transform hover:scale-110 transition-all duration-300"
              style={{
                animation: `slideInRight 0.5s ease-out ${index * 0.2 + techIndex * 0.1}s backwards`
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
  </section>

          {/* Projects Section */}
<section className="mt-24">
  <h2 className="text-3xl text-white font-bold mb-12 flex items-center gap-3">
    <Rocket className="w-8 h-8 text-blue-400" />
    Featured Projects
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project, index) => (
      <div
        key={project.title}
        className="group relative p-6 rounded-lg bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
        style={{
          animation: `fadeInUp 0.6s ease-out ${index * 0.2}s backwards`
        }}
      >
        {/* Digital corner effects */}
        <div className="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-0 left-0 w-1 h-20 bg-gradient-to-b from-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Project Image with enhanced hover effect */}
        <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
          
          {/* Scanning line effect */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent opacity-0 group-hover:opacity-100"
            style={{
              animation: 'scanline 2s linear infinite',
              transform: 'translateY(-100%)'
            }}
          />
        </div>

        {/* Project Title with glow effect */}
        <h3 className="text-2xl text-white mb-3 transition-colors duration-300 group-hover:text-blue-400 relative">
          {project.title}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
        </h3>

        {/* Description with fade-in effect */}
        <p className="text-gray-300 mb-4 transform transition-all duration-300 group-hover:translate-x-2">
          {project.description}
        </p>

        {/* Key Features with animated bullets */}
        <div className="mb-6">
          <h4 className="text-lg text-white mb-3">Key Features</h4>
          <ul className="space-y-2">
            {project.features.map((feature, featureIndex) => (
              <li 
                key={feature} 
                className="flex items-center text-gray-300 transform transition-all duration-300"
                style={{
                  animation: `slideInRight 0.5s ease-out ${featureIndex * 0.1}s backwards`
                }}
              >
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 transition-transform duration-300 group-hover:scale-150" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies with pulse effect */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20 text-sm transition-all duration-300 hover:bg-blue-500/20 hover:scale-105 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Digital corner overlay */}
        <div className="absolute bottom-0 right-0 w-20 h-1 bg-gradient-to-l from-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 right-0 w-1 h-20 bg-gradient-to-t from-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    ))}
  </div>
</section>

<Timeline />

          {/* Future Goals Section */}
          <section className="mt-24 relative">
            <h2 className="text-3xl text-white font-bold mb-12 flex items-center gap-3">
              <Target className="w-8 h-8 text-blue-400" />
              Future Goals
            </h2>

            


            {/* Enhanced digital background */}
            <div className="absolute inset-0 -z-10">
              {/* Floating particles */}
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 3 + 1}px`,
                    height: `${Math.random() * 3 + 1}px`,
                    backgroundColor: `rgba(59, 130, 246, ${Math.random() * 0.3 + 0.1})`,
                    animation: `particleFloat ${3 + Math.random() * 4}s infinite ${Math.random() * 2}s`
                  }}
                />
              ))}
              
              

              

              {/* Scanline effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-b from-blue-500/0 via-blue-500/5 to-blue-500/0"
                style={{
                  animation: 'scanline 3s linear infinite'
                }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div 
                className="relative group perspective-1000"
                style={{
                  animation: 'digitalFade 0.8s ease-out forwards',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="p-6 rounded-lg bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 backdrop-blur-sm hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 mb-4">
                    <Code2 className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl text-white mb-4">Enhance Cybersecurity Expertise</h3>
                  <p className="text-gray-300">
                  To deepen my knowledge and skills in cybersecurity, focusing on innovative solutions to protect digital environments.
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-full transition-all duration-1000 ease-in-out" />
              </div>

              <div 
                className="relative group perspective-1000"
                style={{
                  animation: 'digitalFade 0.8s ease-out 0.2s forwards',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="p-6 rounded-lg bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 backdrop-blur-sm hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 mb-4">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl text-white mb-4">Leverage Emerging Technologies</h3>
                  <p className="text-gray-300">
                  To explore and integrate cutting-edge technologies like AI and cloud computing for impactful projects.
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-full transition-all duration-1000 ease-in-out" />
              </div>

              <div 
                className="relative group perspective-1000"
                style={{
                  animation: 'digitalFade 0.8s ease-out 0.4s forwards',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="p-6 rounded-lg bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 backdrop-blur-sm hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 mb-4">
                    <Rocket className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl text-white mb-4">Simplify Lives Through Innovation</h3>
                  <p className="text-gray-300">
                  To design and develop technological solutions that make everyday life easier and more efficient.
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-full transition-all duration-1000 ease-in-out" />
              </div>
            </div>

            

            {/* Add animations */}
            <style>
              {`
                @keyframes glowPulse {
                  0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.1); }
                  50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.3); }
                }

                @keyframes digitalFade {
                  0% { opacity: 0; transform: scale(0.95) translateY(20px); }
                  50% { opacity: 0.5; transform: scale(0.97) translateY(10px); }
                  100% { opacity: 1; transform: scale(1) translateY(0); }
                }

                @keyframes techFloat {
                  0% { transform: translateY(0) rotate(0deg); }
                  25% { transform: translateY(-10px) rotate(2deg); }
                  75% { transform: translateY(10px) rotate(-2deg); }
                  100% { transform: translateY(0) rotate(0deg); }
                }

                @keyframes borderGlow {
                  0%, 100% { border-color: rgba(59, 130, 246, 0.2); }
                  50% { border-color: rgba(59, 130, 246, 0.5); }
                }

                @keyframes digitalGrid {
                  0% { 
                    transform: perspective(1000px) rotateX(10deg) rotateY(5deg) translateZ(0);
                    box-shadow: 
                      0 0 0 rgba(59, 130, 246, 0.1),
                      10px 10px 20px rgba(0, 0, 0, 0.2);
                  }
                  50% { 
                    transform: perspective(1000px) rotateX(-5deg) rotateY(-10deg) translateZ(20px);
                    box-shadow: 
                      0 0 20px rgba(59, 130, 246, 0.2),
                      20px 20px 40px rgba(0, 0, 0, 0.3);
                  }
                  100% { 
                    transform: perspective(1000px) rotateX(10deg) rotateY(5deg) translateZ(0);
                    box-shadow: 
                      0 0 0 rgba(59, 130, 246, 0.1),
                      10px 10px 20px rgba(0, 0, 0, 0.2);
                  }
                }

                @keyframes scanline {
                  0% {
                    transform: translateY(-100%);
                    opacity: 0;
                  }
                  50% {
                    opacity: 0.5;
                  }
                  100% {
                    transform: translateY(100%);
                    opacity: 0;
                  }
                }

                @keyframes fadeInUp {
      0% { 
        opacity: 0;
        transform: translateY(20px);
      }
      100% { 
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideInRight {
      0% {
        opacity: 0;
        transform: translateX(-20px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes scanline {
      0% {
        transform: translateY(-100%);
      }
      100% {
        transform: translateY(200%);
      }
    }

    .group:hover .hover\:scale-110 {
      transform: scale(1.1);
    }

    @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(-20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes digitalFade {
        0% { 
          opacity: 0;
          transform: translateY(20px);
        }
        50% { 
          opacity: 0.5;
          transform: translateY(10px);
        }
        100% { 
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes glowPulse {
        0%, 100% { 
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.1);
        }
        50% { 
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
        }
      }

                @keyframes textGlitch {
                  0%, 100% { transform: translate(0); }
                  5% { transform: translate(-2px, 2px); }
                  10% { transform: translate(2px, -2px); }
                  15% { transform: translate(-2px, -2px); }
                  20% { transform: translate(2px, 2px); }
                  25% { transform: translate(0); }
                }

                @keyframes particleFloat {
                  0%, 100% { 
                    transform: translate(0, 0) scale(1);
                    opacity: 0.3;
                  }
                  25% { 
                    transform: translate(10px, -10px) scale(1.2);
                    opacity: 0.6;
                  }
                  75% { 
                    transform: translate(-10px, 10px) scale(0.8);
                    opacity: 0.4;
                  }
                }
              `}
            </style>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;