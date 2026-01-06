'use client'

import { useState } from 'react'
import { ExternalLink, X, ZoomIn } from 'lucide-react'
import Image from 'next/image'

interface Project {
  title: string
  subtitle: string
  description: string
  tech: string[]
  contributions: string[]
  link: string
  gradient: string
  image: string
  expandable?: boolean
}

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null)

  const projects: Project[] = [
    {
      title: 'NutriDIY',
      subtitle: 'Nutrition & Diet Planning Platform',
      description: 'NutriDIY is a comprehensive nutrition and diet planning platform that helps users create personalized meal plans, track nutritional intake, and achieve their health goals with data-driven insights.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'GitHub Actions', 'CI/CD', 'AWS S3'],
      contributions: [
        'Full-stack MERN development',
        'CI/CD pipeline setup',
        'Cloud storage integration',
        'Analytics dashboard',
      ],
      link: 'https://nutridiy.com/',
      gradient: 'from-lime-500 to-green-500',
      image: '/projects/nutridiy.png',
      expandable: false,
    },
    {
      title: 'Lua Group',
      subtitle: 'Corporate Website',
      description: 'A professional corporate web platform focusing on branding, services, and performance.',
      tech: ['Next.js', 'Node.js', 'Express.js', 'PostgreSQL', 'AWS', 'S3'],
      contributions: [
        'Modern, responsive design',
        'PostgreSQL database design',
        'AWS deployment',
      ],
      link: 'http://luagroup.com',
      gradient: 'from-green-500 to-emerald-500',
      image: '/projects/luagroup.png',
    },
    {
      title: 'JomSmart',
      subtitle: 'eCommerce Platform',
      description: 'JomSmart is an eCommerce platform designed for smart product browsing, cart management, and order processing.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'GitHub Actions', 'CI/CD', 'AWS S3'],
      contributions: [
        'End-to-end MERN development',
        'CI/CD pipeline automation',
        'S3 bucket integration',
      ],
      link: 'http://www.jomsmart.com',
      gradient: 'from-purple-500 to-pink-500',
      image: '/projects/jomsmart.png',
    },
    {
      title: 'Barena',
      subtitle: 'Real Estate / Property Platform',
      description: 'Barena is a property-focused web solution with listings, filtering, and admin management.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'GitHub Actions', 'CI/CD', 'AWS S3'],
      contributions: [
        'Property listing system',
        'Advanced filtering',
        'CI/CD pipeline setup',
      ],
      link: 'https://barena.altitudeprojects.net/',
      gradient: 'from-orange-500 to-red-500',
      image: '/projects/barena.png',
      expandable: false,
    },
    {
      title: 'MARi',
      subtitle: 'Learning Management System (LMS)',
      description: 'MARi is a full-scale Learning Management System built to manage courses, users, progress tracking, and analytics. I used GraphQL to fetch only required data via well-designed schemas, improving performance and reducing over-fetching.',
      tech: ['React', 'Node.js', 'NestJS', 'TypeScript', 'GraphQL', 'Firebase', 'GCP', 'Cloud Scheduler', 'FCM'],
      contributions: [
        'Designed GraphQL schemas & resolvers',
        'Firebase & GCP integration',
        'Push notifications with FCM',
      ],
      link: 'http://mari.com',
      gradient: 'from-blue-500 to-cyan-500',
      image: '/projects/mari.png',
    },
    {
      title: 'MishMash',
      subtitle: 'Custom Web Platform',
      description: 'A custom web solution designed to meet unique business requirements with a traditional tech stack.',
      tech: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
      contributions: [
        'Custom PHP development',
        'Responsive UI design',
        'Database integration',
      ],
      link: '#',
      gradient: 'from-indigo-500 to-purple-500',
      image: '/projects/mishmash.png',
    },
    {
      title: 'Ayeron',
      subtitle: 'Business Application',
      description: 'Ayeron is a business-focused web application designed for performance and reliability using traditional web technologies.',
      tech: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
      contributions: [
        'Full-stack PHP development',
        'Custom business logic',
        'Database design',
      ],
      link: '#',
      gradient: 'from-pink-500 to-rose-500',
      image: '/projects/ayeron.png',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-world solutions I've built for eCommerce, LMS, SaaS, and Enterprise clients
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
              >
                {/* Project Image */}
                <div 
                  className={`relative h-48 overflow-hidden ${project.expandable !== false ? 'cursor-pointer' : ''}`}
                  onClick={() => project.expandable !== false && setSelectedImage({ src: project.image, title: project.title })}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}></div>
                  <Image
                    src={project.image}
                    alt={`${project.title} Dashboard`}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent`}></div>
                  <div className="absolute bottom-4 left-6">
                    <span className={`px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium`}>
                      {project.subtitle}
                    </span>
                  </div>
                  {/* Zoom Icon - Only show for expandable projects */}
                  {project.expandable !== false && (
                    <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  {/* Title & Subtitle */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Contributions */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Contributions</h4>
                    <ul className="space-y-2">
                      {project.contributions.map((contribution, contribIndex) => (
                        <li
                          key={contribIndex}
                          className="text-gray-600 flex items-start text-sm"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} mt-2 mr-3 flex-shrink-0`}></span>
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Link - Pushed to bottom */}
                  <div className="mt-auto pt-2">
                    {project.link !== '#' ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-medium hover:shadow-lg transition-all transform hover:scale-105`}
                      >
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-6 py-3 bg-gray-300 text-gray-500 rounded-lg font-medium cursor-not-allowed">
                        Private Project
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Image Title */}
          <div className="absolute top-4 left-4 text-white text-lg font-semibold">
            {selectedImage.title}
          </div>

          {/* Full Image */}
          <div 
            className="relative w-full max-w-6xl max-h-[90vh] aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 1536px) 100vw, 1536px"
            />
          </div>

          {/* Click anywhere to close hint */}
          <div className="absolute bottom-4 text-white/60 text-sm">
            Click anywhere to close
          </div>
        </div>
      )}
    </section>
  )
}

