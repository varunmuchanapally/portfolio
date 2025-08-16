import React from 'react';
import {
  ExternalLink,
  Github,
  Shield,
  Globe,
  TrendingUp,
  Zap,
} from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'SafeURL: URL Safety Checker',
      description: 'A comprehensive cybersecurity tool...',
      technologies: [
        'Python',
        'Flask',
        'Safe Browsing API',
        'SSL/TLS',
        'Cybersecurity',
      ],
      features: [
        'HTTPS verification and SSL certificate validation',
        'Geolocation analysis for threat detection',
        'Reputation scoring using Google Safe Browsing API',
        'User-friendly interface',
        'Real-time safety assessments',
      ],
      icon: <Shield className="text-green-400" size={32} />,
      color: 'from-green-600 to-teal-600',
      url: 'https://github.com/varunmuchanapally/FCSAP-SafeURL',
    },
    {
      title: 'ProfessorVRX: Multilingual Learning Assistant',
      description: 'An interactive Flask-based web application...',
      technologies: [
        'Python',
        'Flask',
        'Google Gemini API',
        'Google Cloud TTS',
        'Multilingual NLP',
      ],
      features: [
        'Support for 5+ languages',
        'AI-powered explanations',
        'Text-to-speech in multiple languages',
        '60% reduction in delivery time',
        'Interactive interface',
      ],
      icon: <Globe className="text-blue-400" size={32} />,
      color: 'from-blue-600 to-indigo-600',
      url: 'https://github.com/varunmuchanapally/Professor-VRX',
    },
    {
      title: 'Yield Curve Spread Prediction',
      description: 'An XGBoost regression model that forecasts...',
      technologies: [
        'Python',
        'XGBoost',
        'Scikit-learn',
        'FRED API',
        'Time Series Analysis',
      ],
      features: [
        'Advanced XGBoost regression modeling',
        'Real-time macroeconomic data integration',
        'Early recession detection',
        'Treasury yield spread forecasting',
        'Economic indicator analysis',
      ],
      icon: <TrendingUp className="text-yellow-400" size={32} />,
      color: 'from-yellow-600 to-orange-600',
      url: 'https://github.com/varunmuchanapally/Yield-Curve-Prediciton',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-400 mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg">
              Innovative solutions addressing real-world challenges
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-750 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    {/* Project Icon and Title */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 lg:mb-0`}
                      >
                        {project.icon}
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="flex-1">
                      <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between mb-6">
                        <div className="mb-4 xl:mb-0">
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {project.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                        <div className="flex gap-3 flex-shrink-0">
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                          >
                            <Github size={16} />
                            <span className="hidden sm:inline">Code</span>
                          </a>
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <Zap size={18} className="mr-2 text-blue-400" />
                          Key Features
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {project.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-start"
                            >
                              <span className="text-blue-400 mr-3 mt-1 text-sm">
                                ▸
                              </span>
                              <span className="text-gray-300 text-sm">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600 hover:border-blue-400 hover:text-blue-300 transition-all duration-200"
                            >
                              {tech}
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

          {/* Call to Action
          <div className="text-center mt-12">
            <p className="text-gray-400 text-lg mb-6">
              Interested in seeing more of my work?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Github size={18} />
              View All Projects
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
