import { ChevronDown } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <section id='home' className='relative min-h-screen flex items-center justify-center px-4'>
        <div className='text-center max-w-4xl mx-auto'>
            <div className='animate-fade-in'>
                <h1 className='text-5xl md:text-7xl font-bold pb-4 mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse'>
                    Ravindu Thiranjaya
                </h1>
                <p className='text-xl md:text-2xl text-gray-200 mb-8 animate-slide-up'>
                    Full Stack Developer & UI/UX Designer
                </p>
                <p className='tex-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-slide-up'>
                    Creating digital experiences that blend cutting-edge technology with stunning design.
                    Passionate about building applications that make a difference.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center animate-slide-up'>
                    <button className='px-8 py-3 bg-gradient-to-r from0blue-500 to-purple-500 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105'>
                    View My Work
                    </button>
                    <button className='px-8 py-3 border border-gray-600 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105'>
                        Download CV
                    </button>
                </div>
            </div>
        </div>

        <div className='absolute bottom-20 left-1/2 transform -tramslate-x-1/2 animate-bounce'>
        <ChevronDown size={32} className='tex-gray-400'/>
        </div>
    </section>
  );
};

export default Hero;