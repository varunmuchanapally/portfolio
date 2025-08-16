import React from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm currently pursuing my Master's in Computer Science at the University of Central Florida, 
                building upon my strong foundation from BV Raju Institute of Technology in India. My journey 
                has been marked by continuous growth and adaptation.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With hands-on experience in full-stack development, machine learning, and data analysis, 
                I've had the privilege of contributing to innovative projects at companies like One Convergence 
                and Forage AI, where I was promoted to Team Lead for delivering impactful results.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm passionate about leveraging technology to solve real-world problems, whether it's building 
                RAG systems for LLMs, creating web scrapers, or developing safety tools for cybersecurity.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-blue-400 mr-3" size={24} />
                  <h4 className="text-xl font-semibold text-white">Education</h4>
                </div>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-gray-200">Master of Science in Computer Science</h5>
                    <p className="text-gray-400 text-sm">University of Central Florida • GPA: 3.8/4.0 • Jun 2026</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-200">Bachelor of Technology in Computer Science</h5>
                    <p className="text-gray-400 text-sm">BV Raju Institute of Technology • GPA: 8.05/10.0 • May 2024</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <Award className="text-blue-400 mr-3" size={24} />
                  <h4 className="text-xl font-semibold text-white">Key Achievement</h4>
                </div>
                <p className="text-gray-300">
                  Promoted to Team Lead at One Convergence for a group of 5 interns, 
                  demonstrating leadership and delivering exceptional results.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700 rounded-lg p-4 text-center hover:bg-gray-600 transition-colors duration-300">
                  <MapPin className="text-blue-400 mx-auto mb-2" size={20} />
                  <p className="text-gray-300 text-sm">Currently in<br />Orlando, FL</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-4 text-center hover:bg-gray-600 transition-colors duration-300">
                  <Calendar className="text-blue-400 mx-auto mb-2" size={20} />
                  <p className="text-gray-300 text-sm">Available<br />Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;