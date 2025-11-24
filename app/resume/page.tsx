import React from 'react';

export default function Resume() {
  return (
    // Outer container: Gray background for the browser view
    <div className="min-h-screen bg-gray-100 flex justify-center py-8">
      
      {/* Resume Sheet: White, Black text, Fixed Dimensions (US Letter) */}
      <div 
        className="bg-white text-black shadow-2xl" 
        style={{
          width: '8.5in', 
          minHeight: '11in', 
          padding: '0.75in',
          fontFamily: '"Times New Roman", Times, serif'
        }}
      >
        
        {/* Header */}
        <div className="border-b-2 border-black pb-4 mb-6 text-center">
          <h1 className="text-4xl font-bold tracking-wider uppercase mb-2">Shamus Murphy</h1>
          <p className="text-sm font-medium">
            <a href="mailto:Shamus.Murphy@uvm.edu" className="hover:underline">Shamus.Murphy@uvm.edu</a>
            <span className="mx-2">•</span>
            <a href="https://www.linkedin.com/in/shamus-murphy-0496032a8/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
            <span className="mx-2">•</span>
            <a href="https://github.com/shamusmurphy" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
            <span className="mx-2">•</span>
            <a href="https://shamusmurphy.xyz" target="_blank" rel="noopener noreferrer" className="hover:underline">Portfolio</a>
            <span className="mx-2">•</span>
            Shrewsbury, NJ
          </p>
        </div>

        {/* Education */}
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-black pb-1 mb-3">Education</h2>
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <span className="font-bold text-base">University of Vermont — B.S. in Mathematics</span>
              <span className="text-sm font-medium italic">Expected May 2027</span>
            </div>
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-sm">Minor in Computer Science</span>
            </div>
            <p className="text-sm leading-relaxed">
              <span className="font-bold">Relevant Coursework:</span> Data Structures & Algorithms, Computability & Complexity, Data Privacy, Differential Equations
            </p>
          </div>
        </div>

        {/* Research Experience */}
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-black pb-1 mb-3">Research Experience</h2>
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <span className="font-bold text-base">Undergraduate Research Assistant — University of Vermont</span>
              <span className="text-sm font-medium italic">Spring 2026</span>
            </div>
            <ul className="list-disc ml-5 text-sm space-y-1.5 leading-relaxed">
              <li>Conducting research on implementations of differential privacy in data protection systems.</li>
              <li>Exploring privacy-preserving mechanisms and their applications in secure data analysis.</li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-black pb-1 mb-3">Skills</h2>
          <div className="text-sm space-y-2 leading-relaxed">
            <p><span className="font-bold">Languages:</span> Python, R, C++, Java, MySQL</p>
            <p><span className="font-bold">Concepts:</span> Algorithms & Complexity, Computability Theory, Data Privacy, Differential Privacy, Numerical Methods, Applied Math, Machine Learning Foundations</p>
            <p><span className="font-bold">Tools/Frameworks:</span> Git, GitHub, Linux/CLI, Flask, React, OpenGL, Unreal Engine, PyTorch/TensorFlow</p>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-black pb-1 mb-3">Projects</h2>
          
          <div className="mb-4">
            <div className="flex justify-between items-baseline mb-1">
              <span className="font-bold text-base">Medical Data Neural Network with Differential Privacy</span>
              <span className="text-sm font-medium italic">2025–Present</span>
            </div>
            <ul className="list-disc ml-5 text-sm space-y-1 leading-relaxed">
              <li>Developing a neural network to predict test results on synthetic medical datasets.</li>
              <li>Implementing differential privacy mechanisms to ensure patient data protection.</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-baseline mb-1">
              <span className="font-bold text-base">Shape Sprint</span>
              <span className="text-sm font-medium italic">2025</span>
            </div>
            <ul className="list-disc ml-5 text-sm space-y-1 leading-relaxed">
              <li>Developed a rhythm-based game inspired by Geometry Dash using C++ and OpenGL.</li>
              <li>Implemented collision detection and gravity physics to enhance gameplay mechanics.</li>
            </ul>
          </div>

          <div className="mb-2">
            <div className="flex justify-between items-baseline mb-1">
              <span className="font-bold text-base">RC Car Controller</span>
              <span className="text-sm font-medium italic">2024</span>
            </div>
            <ul className="list-disc ml-5 text-sm space-y-1 leading-relaxed">
              <li>Built an RC car using Arduino and Raspberry Pi with integrated camera and motor controls.</li>
              <li>Created a Flask-based web interface for remote driving and live video streaming.</li>
            </ul>
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-0">
          <h2 className="text-lg font-bold uppercase border-b border-black pb-1 mb-3">Work Experience</h2>
          
          <div className="mb-4">
            <div className="flex justify-between items-baseline mb-1">
              <span className="font-bold text-base">Bar Back — Rooney&apos;s Oceanfront Restaurant</span>
              <span className="text-sm font-medium italic">Summer 2024–2025</span>
            </div>
            <ul className="list-disc ml-5 text-sm leading-relaxed">
              <li>Worked efficiently under pressure in a 300+ seat restaurant, strengthening multitasking and communication skills.</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-1">
              <span className="font-bold text-base">Property Maintenance — Navesink Property Services</span>
              <span className="text-sm font-medium italic">2021–2025</span>
            </div>
            <ul className="list-disc ml-5 text-sm leading-relaxed">
              <li>Independently managed pool service routes, building problem-solving and client relationship skills.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}