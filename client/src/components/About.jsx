import { Code, User } from 'lucide-react'
import React from 'react'

const About = () => {
  return (
    <section id='about' className='py-20 px-4'>
        <div className='max-w-6xl mx-auto'>
            <h2 className='text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                About Me
            </h2>
            <div className='grid md:grid-cols-2 gap-20 items-center px-10'>
                <div className='space-y-6'>
                    <p className='text-lg tetx-gray-300 leading-relaxed'>
                        I'm a passionate and detail-oriented IT undergraduate with a specialization in full-stack web and mobile development.
                        I’ve turned my academic foundation into practical experience through building real-world applications that blend strong UI/UX principles, modern frameworks, and AI technologies.
                    </p>
                    <p className='text-lg tetx-gray-300 leading-relaxed'>
                        I enjoy solving problems, learning new tools, and building software that makes life easier. My current focus is on developing scalable and smart solutions that integrate AI.
                    </p>
                    <div className='flex flex-wrap gap-3 mt-8'>
                        {['React', 'Node.js', 'Java', 'Kotlin'].map((tech) => (
                            <span key={tech} className='px-4 py-2 bg-gray-800 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors'>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <div className='relative'>
                    <div className='w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full backdrop-blur-sm border border-gray-700 flex items-center justify-center'>
                    <div className='text-center'>
                        <User size={52} className='text-white'/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About