'use client'

import { CheckCircle2, Award, MessageSquare, Clock, Users, TrendingUp, Zap } from 'lucide-react'

export default function WhyWorkWithMe() {
  const reasons = [
    {
      icon: <Award className="w-6 h-6" />,
      text: '4+ years of real-world experience',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      text: 'Clean, scalable, production-ready code',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      text: 'Strong communication & ownership',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: 'On-time delivery & long-term support',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: 'Experience mentoring junior developers',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      text: 'Focus on performance & scalability',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: 'AI-powered workflow with Cursor & Copilot',
      gradient: 'from-yellow-500 to-amber-500',
    },
  ]

  return (
    <section id="why-work" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Work With Me?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Delivering quality solutions with professionalism and expertise
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/10"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {reason.icon}
                </div>
                <p className="text-lg font-medium text-gray-100">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-2">
                4+
              </div>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-2">
                20+
              </div>
              <p className="text-gray-300">Major Projects</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text mb-2">
                100%
              </div>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

