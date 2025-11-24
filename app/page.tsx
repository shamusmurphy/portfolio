'use client'

import Image from 'next/image'
import { Github, Linkedin, Mail, FileText} from 'lucide-react'
import { ThemeSwitcher } from '../components/lightdark'
import { useEffect } from 'react'

export default function Portfolio() {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          
          {/* Header / Background Image */}
          <div className="relative h-48">
            <Image
              src="/images/background.jpg"
              alt="Profile background"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-4 right-4">
              <ThemeSwitcher />
            </div>
          </div>
          
          {/* Profile Info */}
          <div className="relative px-4 py-5 sm:px-6 -mt-16 text-center sm:text-left">
            <div className="relative h-32 w-32 mx-auto sm:mx-0 rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
              <Image
                src="/images/profilePic.jpg"
                alt="Profile picture"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="sm:flex sm:justify-between sm:items-end mt-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Shamus Murphy</h1>
                <p className="mt-1 text-xl text-gray-500 dark:text-gray-400">
                  University of Vermont
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-500">
                  B.S. Mathematics • Minor in Computer Science
                </p>
              </div>
              
              {/* New Resume Button Section */}
              <div className="mt-4 sm:mt-0">
                <a 
                  href="/resume"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  {/* */}
<FileText className="mr-2 h-4 w-4" />
                  View Full Resume
                </a>
              </div>
            </div>
          </div>

          {/* About Me */}
          <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">About Me</h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              I am currently studying Math and Computer Science at UVM. In my free time, I love to ski, read, and play the piano. My main interest is in Cybersecurity and Data Privacy.
            </p>
          </div>

          {/* Skills Section - Split into Categories */}
          <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Programming Languages */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'R', 'C++', 'MySQL'].map((skill) => (
                    <span key={skill} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Concepts */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Concepts</h3>
                <div className="flex flex-wrap gap-2">
                  {['Data Privacy', 'Data Science', 'Machine Learning'].map((skill) => (
                    <span key={skill} className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools/Frameworks */}
              <div className="md:col-span-2">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Tools & Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {['PyTorch', 'Opacus', 'Git', 'Linux/CLI', 'OpenGL'].map((skill) => (
                    <span key={skill} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Current Research Section */}
          <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6 bg-blue-50 dark:bg-gray-800/50">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white flex items-center">
              Research
              <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">Active</span>
            </h2>
            <div className="mt-3">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">Differential Privacy</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Next semester I will be working on a research project involving differential privacy with a professor at UVM.
              </p>
            </div>
          </div>

          {/* Projects */}
          <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Projects</h2>
            <ul className="mt-2 divide-y divide-gray-200 dark:divide-gray-700">
              {[
                { 
                  name: 'DP-Medical', 
                  description: 'Implemented differentially private gradient descent on a neural network predicting test results from synthetic medical data.',
                  tags: ['Python', 'Pytorch', 'Opacus']
                },
                { 
                  name: 'RC Car Controller', 
                  description: 'Built a remote-controlled car using Arduino and Raspberry Pi. Created a Flask-based web interface for live video streaming and motor control.',
                  tags: ['Python', 'Flask', 'IoT', 'Hardware']
                },
                { 
                  name: 'Shape Sprint', 
                  description: 'A rhythm-based game inspired by Geometry Dash developed using C++ and OpenGL. Implemented custom physics for gravity and collision detection.',
                  tags: ['C++', 'OpenGL', 'Game Dev']
                },
              ].map((project, index) => (
                <li key={index} className="py-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">{project.name}</h3>
                  </div>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{project.description}</p>
                  <div className="mt-2 flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs text-gray-500 border border-gray-200 dark:border-gray-600 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Contact</h2>
            <div className="mt-4 flex justify-center space-x-8">
              <a href="https://github.com/shamusmurphy" target="_blank" className="flex flex-col items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                <Github className="h-6 w-6 mb-1" />
                <span className="text-xs">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/shamus-murphy-0496032a8/" target="_blank" className="flex flex-col items-center text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6 mb-1" />
                <span className="text-xs">LinkedIn</span>
              </a>
              <a href="mailto:Shamus.Murphy@uvm.edu" className="flex flex-col items-center text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                <Mail className="h-6 w-6 mb-1" />
                <span className="text-xs">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}