'use client'

import { Heart, Linkedin, Mail, MapPin, MessageCircle, FileText } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            {/* About Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Muhammad Zeshan Tahir
              </h3>
              <p className="text-gray-400 mb-4">
                Full Stack Developer specializing in MERN stack and modern web technologies.
              </p>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Islamabad, Pakistan</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                    Skills & Expertise
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                    Featured Projects
                  </a>
                </li>
                <li>
                  <a href="#why-work" className="text-gray-400 hover:text-white transition-colors">
                    Why Work With Me
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="space-y-3">
                <a
                  href="mailto:zeshantahir105@gmail.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>zeshantahir105@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-zeshan-tahir-638423179/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-blue-400" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href="https://wa.me/923025250333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-green-400" />
                  <span>+92 302 5250333</span>
                </a>
                <a
                  href="https://drive.google.com/file/d/19Sb8X_DUqs_1jF3CrzFwujJlTUPN6sQ-/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <FileText className="w-5 h-5 text-purple-400" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {currentYear} Muhammad Zeshan Tahir. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm flex items-center gap-1">
                Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> using Next.js & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

