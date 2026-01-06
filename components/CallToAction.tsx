'use client'

import { Mail, FolderOpen, Linkedin, ArrowRight, FileText, MessageCircle } from 'lucide-react'

export default function CallToAction() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Box */}
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl text-white text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative z-10">
              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Let's Build Something Impactful Together
              </h2>
              
              {/* Description */}
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Whether you need a scalable backend, a modern frontend, or a complete full-stack solution — I'm ready to help.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href="mailto:zeshantahir105@gmail.com"
                  className="group flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
                >
                  <Mail className="w-5 h-5" />
                  Contact Me Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a
                  href="https://drive.google.com/drive/u/0/folders/1rVK8wrsdExz48sofqZyFO6Ejty__9phD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 bg-purple-700 hover:bg-purple-800 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
                >
                  <FolderOpen className="w-5 h-5" />
                  View My Projects
                </a>
              </div>

              {/* Additional Links */}
              <div className="flex flex-wrap justify-center gap-6 pt-6 border-t border-white/20">
                <a
                  href="https://www.linkedin.com/in/muhammad-zeshan-tahir-638423179/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://drive.google.com/file/d/19Sb8X_DUqs_1jF3CrzFwujJlTUPN6sQ-/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  <span>Resume</span>
                </a>
                <a
                  href="https://wa.me/923025250333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <a href="mailto:zeshantahir105@gmail.com" className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
              <p className="text-gray-600 text-sm">zeshantahir105@gmail.com</p>
            </a>
            <a href="https://www.linkedin.com/in/muhammad-zeshan-tahir-638423179/" target="_blank" rel="noopener noreferrer" className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <Linkedin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">LinkedIn</h3>
              <p className="text-gray-600 text-sm">Connect professionally</p>
            </a>
            <a href="https://wa.me/923025250333" target="_blank" rel="noopener noreferrer" className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <MessageCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
              <p className="text-gray-600 text-sm">+92 302 5250333</p>
            </a>
            <a href="https://drive.google.com/file/d/19Sb8X_DUqs_1jF3CrzFwujJlTUPN6sQ-/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <FileText className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Resume</h3>
              <p className="text-gray-600 text-sm">Download my CV</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

