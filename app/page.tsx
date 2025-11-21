'use client'

import Image from 'next/image'
import { Github, Linkedin, Mail } from 'lucide-react'
import { ThemeSwitcher } from '../components/lightdark'
import { useEffect } from 'react'

export default function Portfolio() {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
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
          <div className="relative px-4 py-5 sm:px-6 -mt-16">
            <div className="relative h-32 w-32 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
              <Image
                src="/images/profilePic.jpg"
                alt="Profile picture"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h1 className="mt-4 text-3xl font-bold text-center text-gray-900 dark:text-white">Shamus Murphy</h1>
            <p className="mt-2 max-w-2xl text-center text-xl text-gray-500 dark:text-gray-400 mx-auto">
              University of Vermont
            </p>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">About Me</h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              I'm currently studying Math and Computer Science at UVM. In my free time, I love to ski, read, and play the piano. My main interest is in Cybersecurity.
            </p>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Skills</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {['Python', 'C++', 'SQL', 'Unreal Engine', 'Git', 'CLI'].map((skill) => (
                <span key={skill} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Projects</h2>
            <ul className="mt-2 divide-y divide-gray-200 dark:divide-gray-700">
              {[
                { name: 'DP Neural Network', description: 'Created a neural network trained with DP-SGD on synthetic medical data' },
                { name: 'Shape Sprint', description: 'Built a game using C++ that implements collision detection and physics' },
                { name: 'RC Car', description: 'Built with a Raspberry Pi and Arduino using Python and C++' }
              ].map((project, index) => (
                <li key={index} className="py-3">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">{project.name}</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{project.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Contact</h2>
            <div className="mt-2 flex justify-center space-x-6">
              <a href="https://github.com/shamusmurphy" target="_blank" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/shamus-murphy-0496032a8/" target="_blank" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlQHXkHZHvkXRqnBfqgDWwHcthrWpCmNJjwxRqdsDmxRbdjPdTzMjWGbLdPLPZpLJwGfqV" target="_blank" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}