'use client'

import { MapPin, Linkedin, FolderOpen, FileText } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-8 animate-fade-in">
            {/* Title with gradient */}
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
              <span className="block text-2xl md:text-3xl font-normal mb-3 mt-8 text-blue-300 ">
                Senior Full Stack Web Developer
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                MERN+
              </span>
            </h1>

            {/* Introduction */}
            <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <p>
                I'm <span className="text-white font-semibold">Muhammad Zeshan Tahir</span>, a Senior Full Stack Developer with{' '}
                <span className="text-blue-400 font-semibold">4 years of experience</span> building scalable, production-ready web applications.
              </p>
              <p>
                I specialize in{' '}
                <span className="text-blue-400 font-semibold">React, Next.js, Node.js, NestJS, MongoDB, PostgreSQL, REST APIs, and GraphQL</span>,
                delivering clean, maintainable, and high-performance solutions from idea to deployment.
              </p>
              <p>
                I've worked on real-world products across{' '}
                <span className="text-purple-400 font-semibold">eCommerce, LMS, SaaS, Analytics, and Enterprise</span> platforms,
                focusing on performance, security, and user experience.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center items-center gap-6 pt-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Islamabad, Pakistan</span>
              </div>
              <a 
                href="https://www.linkedin.com/in/muhammad-zeshan-tahir-638423179/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all transform hover:scale-105 font-medium"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a 
                href="https://drive.google.com/drive/u/0/folders/1rVK8wrsdExz48sofqZyFO6Ejty__9phD" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all transform hover:scale-105 font-medium"
              >
                <FolderOpen className="w-5 h-5" />
                My Projects
              </a>
              <a 
                href="https://drive.google.com/file/d/19Sb8X_DUqs_1jF3CrzFwujJlTUPN6sQ-/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-all transform hover:scale-105 font-medium"
              >
                <FileText className="w-5 h-5" />
                Resume
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="pt-16 animate-bounce">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

