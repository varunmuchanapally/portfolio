import React from 'react';
import { Code, Database, Cloud, Cpu, BarChart, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-400" size={24} />,
      skills: ["Python", "C++", "JavaScript", "HTML", "CSS", "SQL", "JSON"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Globe className="text-green-400" size={24} />,
      skills: ["Flask", "Node.js", "Express.js", "Scikit-learn", "NumPy", "Pandas", "PyTorch", "XGBoost"]
    },
    {
      title: "Databases",
      icon: <Database className="text-purple-400" size={24} />,
      skills: ["MySQL", "MongoDB", "Weaviate Vector DB"]
    },
    {
      title: "Tools & Infrastructure", 
      icon: <Cloud className="text-orange-400" size={24} />,
      skills: ["AWS", "Docker", "Git", "Postman", "REST API"]
    },
    {
      title: "Data & Visualization",
      icon: <BarChart className="text-red-400" size={24} />,
      skills: ["Tableau", "Matplotlib", "Data Analysis", "Statistical Modeling"]
    },
    {
      title: "Specialized Areas",
      icon: <Cpu className="text-cyan-400" size={24} />,
      skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "RAG Systems"]
    }
  ];

  const interests = [
    "Full Stack Development",
    "Machine Learning",
    "Data Analysis", 
    "Natural Language Processing",
    "Deep Learning",
    "System Architecture"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-blue-400 mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold text-white ml-3">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Interests Section */}
          <div className="bg-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Areas of Interest</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {interests.map((interest, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;