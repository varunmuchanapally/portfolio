import React from 'react';
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Github,
  Download,
  ExternalLink,
} from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-blue-400 mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg">
              Ready to create something amazing together? Let's discuss your
              next project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                Let's Connect
              </h3>
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-700 transition-colors duration-200">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <a
                      href="mailto:varunprasad.muchanapally@ucf.edu"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      varunprasad.muchanapally@ucf.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-700 transition-colors duration-200">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-gray-400">Orlando, Florida</p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple-700 transition-colors duration-200">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Available For</h4>
                    <p className="text-gray-400">Full-time opportunities</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h4 className="text-xl font-bold text-white mb-6">
                  Find Me Online
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/varun-prasad-muchanapally-743a561bb/"
                    className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-200 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="text-white" size={20} />
                  </a>
                  <a
                    href="https://github.com/varunmuchanapally"
                    className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-all duration-200 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="text-white" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Resume Download
          <div className="text-center mt-16">
            <div className="bg-gray-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Want to learn more?
              </h3>
              <p className="text-gray-400 mb-6">
                Download my resume to see my complete experience and
                qualifications.
              </p>
              <button className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                <Download size={20} />
                <a
                  href="/Varun_resume.pdf"
                  download="Varun_Resume.pdf"
                  className="text-white"
                >
                  Download Resume
                </a>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
