import { Github, LinkedinIcon, Mail } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='py-20 px-4 bg-gray-900/50'>
        <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl md:text-5xl font-bold p-3 mb-8 bg-gradient-to-r fromp-blue-400 to-purple-400 bg-clip-text text-transparent'>
                Let's Work Together
            </h2>
            <p className='text-xl text-gray-300 mb-12'>
                Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>
            <div className='flex flex-col sm:flex-row gap-16 justify-cneter mb-12'>
                <a href="mailto:thiranjayaravindu@gmail.com" className='flex items-center gap-3 px-8 py-3 border border-gray-600 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105'>
                    <Mail size={20}/>
                    thiranjayaravindu@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/ravindu-thiranjaya-a57a39365/" className='flex items-center gap-3 px-8 py-3 border border-gray-600 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105'>
                    <LinkedinIcon size={20}/>
                    LinkedIn
                </a>
                <a href="https://github.com/ravindu422" className='flex items-center gap-3 px-8 py-3 border border-gray-600 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105'>
                    <Github size={20} />
                      GitHub
                </a>
            </div>
        </div>
    </section>
  )
}

export default Contact