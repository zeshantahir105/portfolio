'use client'

import { Code2, Server, Database, Shield } from 'lucide-react'

interface SkillCategory {
  icon: React.ReactNode
  title: string
  skills: string[]
  color: string
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        'React.js, Next.js',
        'Tailwind CSS, Material UI',
        'State management (Redux, Context API)',
      ],
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backend',
      color: 'from-green-500 to-emerald-500',
      skills: [
        'Node.js, Express.js, NestJS',
        'REST APIs & GraphQL',
        'Authentication & Authorization',
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database & Cloud',
      color: 'from-purple-500 to-pink-500',
      skills: [
        'MongoDB, PostgreSQL, Firebase',
        'AWS, GCP',
        'CI/CD with GitHub Actions',
      ],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Best Practices',
      color: 'from-orange-500 to-red-500',
      skills: [
        'Clean Architecture',
        'Performance Optimization',
        'Scalable & Secure Systems',
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Building full-stack solutions with modern technologies and best practices
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>

                {/* Category Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>

                {/* Skills List */}
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-gray-600 flex items-start"
                    >
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mt-2 mr-3 flex-shrink-0`}></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technology Stack Badge */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap justify-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-lg">
              {[
                'React', 'Next.js', 'Node.js', 'NestJS', 'TypeScript',
                'MongoDB', 'PostgreSQL', 'GraphQL', 'AWS', 'Docker'
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm font-medium hover:scale-105 transition-transform"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

