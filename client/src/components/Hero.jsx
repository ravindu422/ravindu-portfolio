import { ChevronDown } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const [currentRole, setCurrentRole] = useState(0);

    const roles = [
        'Full Stack Developer',
        'UI/UX Designer'
    ];

    useEffect(() => {
        let timeout;
        const currentText = roles[currentRole];

        if (typedText.length < currentText.length) {
            timeout = setTimeout(() => {
                setTypedText(currentText.substring(0, typedText.length + 1));
            }, 100);
        } else {
            timeout = setTimeout(() => {
                setTypedText('');
                setCurrentRole((prev) => (prev + 1) % roles.length);
            }, 2000);
        }

        return () => clearTimeout(timeout);
    }, [typedText, currentRole]);


    return (
        <section id='home' className='relative min-h-screen flex items-center justify-center px-4'>
            <div className='text-center max-w-4xl mx-auto'>
                <div className='animate-fade-in'>
                    <h1 className='text-5xl md:text-7xl font-bold pb-4 mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse'>
                        Ravindu Thiranjaya
                    </h1>
                    <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
                        <span className="typewriter">{typedText}</span>
                        <span className="cursor">|</span>
                    </div>
                    <p className='text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-slide-up'>
                        Creating digital experiences that blend cutting-edge technology with stunning design.
                        Passionate about building applications that make a difference.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center hero-buttons">
                        <button className="group px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
                            <span className="relative z-10">View My Work</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                        <button className="group px-8 py-3 border border-gray-600 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
                            <span className="relative z-10">Download CV</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </div>
                </div>
            </div>

            <div className='absolute bottom-20 left-1/2 transform -tramslate-x-1/2 animate-bounce'>
                <ChevronDown size={32} className='tex-gray-400' />
            </div>
        </section>
    );
};

export default Hero;