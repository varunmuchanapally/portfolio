import React from 'react';
import { Calendar, MapPin, TrendingUp, Users, Code, Database } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "One Convergence",
      location: "San Jose, California",
      duration: "April 2023 - October 2023",
      achievements: [
        "Integrated Weaviate vector database for RAG potential in LLMs, improving search capabilities by 75%",
        "Automated link validation processes for 7 developers with Live/Dead Link Checker script",
        "Enhanced Full Stack features including Contributions Section and Creator Tag functionality with 86% efficiency",
        "Optimized system for 10,000+ authors and improved stability by mitigating race conditions",
        "Promoted to Team Lead for a group of 5 interns for exceptional performance"
      ],
      skills: ["Machine Learning", "Full Stack Development", "Python", "Automation", "Leadership"],
      icon: <TrendingUp className="text-blue-400" size={24} />
    },
    {
      title: "Python Developer Intern",
      company: "Forage AI",
      location: "Eatontown, New Jersey", 
      duration: "May 2022 - October 2022",
      achievements: [
        "Built web scraper with recursive URL extraction achieving 95% accuracy rate",
        "Enhanced data collection efficiency by 40% through optimized scraping techniques",
        "Collaborated with research teams to resolve 20+ technical issues",
        "Maintained and analyzed 100,000+ URL checker outputs for quality assurance",
        "Gained expertise in Python development and key tech stack optimization"
      ],
      skills: ["Python", "Web Scraping", "Data Analysis", "Quality Assurance", "Team Collaboration"],
      icon: <Code className="text-blue-400" size={24} />
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
            <p className="text-gray-400 mt-4 text-lg">Building impactful solutions and leading teams</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-px h-full bg-gray-700 z-0"></div>
                )}
                
                <div className="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                        {exp.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                          <h4 className="text-xl text-blue-400 font-semibold">{exp.company}</h4>
                        </div>
                        <div className="flex flex-col md:items-end text-gray-400 text-sm mt-2 md:mt-0">
                          <div className="flex items-center mb-1">
                            <Calendar size={16} className="mr-1" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <TrendingUp size={18} className="mr-2 text-blue-400" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-gray-300 flex items-start">
                              <span className="text-blue-400 mr-3 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <Database size={18} className="mr-2 text-blue-400" />
                          Technologies & Skills
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-600/30 hover:bg-blue-600/30 transition-colors duration-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;