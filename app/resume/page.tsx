import React from 'react';

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg" style={{fontFamily: 'Times New Roman, serif', padding: '0.5in', minHeight: '11in', maxHeight: '11in'}}>
        {/* Header */}
        <div className="border-b-2 border-black pb-1 mb-2">
          <h1 className="text-2xl font-bold mb-0.5">SHAMUS MURPHY</h1>
          <p className="text-xs">Shamus.Murphy@uvm.edu | LinkedIn | GitHub | Red Bank, NJ</p>
        </div>

        {/* Education */}
        <div className="mb-2">
          <h2 className="text-sm font-bold border-b border-black pb-0.5 mb-1">EDUCATION</h2>
          <div className="mb-1">
            <div className="flex justify-between items-start">
              <span className="font-bold text-xs">University of Vermont — B.S. in Mathematics</span>
              <span className="text-xs italic">Expected Graduation: May 2027</span>
            </div>
            <p className="text-xs">Minor in Computer Science</p>
            <p className="text-xs">
              <span className="font-semibold">Relevant Coursework:</span> Data Structures & Algorithms, Computability & Complexity, Data Privacy, Differential Equations
            </p>
          </div>
        </div>

        {/* Research Experience */}
        <div className="mb-2">
          <h2 className="text-sm font-bold border-b border-black pb-0.5 mb-1">RESEARCH EXPERIENCE</h2>
          <div className="mb-1">
            <div className="flex justify-between items-start">
              <span className="font-bold text-xs">Undergraduate Research Assistant — University of Vermont</span>
              <span className="text-xs italic">Spring 2026</span>
            </div>
            <ul className="list-disc ml-4 text-xs mt-0.5 space-y-0.5">
              <li>Conducting research on implementations of differential privacy in data protection systems</li>
              <li>Exploring privacy-preserving mechanisms and their applications in secure data analysis</li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-2">
          <h2 className="text-sm font-bold border-b border-black pb-0.5 mb-1">SKILLS</h2>
          <div className="text-xs space-y-0.5">
            <p><span className="font-semibold">Languages:</span> Python, R, C++, Java, MySQL</p>
            <p><span className="font-semibold">Concepts:</span> Algorithms & Complexity, Computability Theory, Data Privacy, Differential Privacy, Numerical Methods / Applied Math, Machine Learning Foundations</p>
            <p><span className="font-semibold">Tools/Frameworks:</span> Git, GitHub, Linux/CLI, Flask, React, OpenGL, Unreal Engine, MySQL, PyTorch/TensorFlow</p>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-2">
          <h2 className="text-sm font-bold border-b border-black pb-0.5 mb-1">PROJECTS</h2>
          
          <div className="mb-1">
            <div className="flex justify-between items-start">
              <span className="font-bold text-xs">Medical Data Neural Network with Differential Privacy</span>
              <span className="text-xs italic">2025–Present</span>
            </div>
            <ul className="list-disc ml-4 text-xs mt-0.5 space-y-0.5">
              <li>Developing a neural network to predict test results on synthetic medical datasets</li>
              <li>Implementing differential privacy mechanisms to ensure patient data protection</li>
            </ul>
          </div>

          <div className="mb-1">
            <div className="flex justify-between items-start">
              <span className="font-bold text-xs">Shape Sprint</span>
              <span className="text-xs italic">2025</span>
            </div>
            <ul className="list-disc ml-4 text-xs mt-0.5 space-y-0.5">
              <li>Developed a rhythm-based game inspired by Geometry Dash using C++ and OpenGL</li>
              <li>Implemented collision detection and gravity physics to enhance gameplay mechanics</li>
            </ul>
          </div>

          <div className="mb-1">
            <div className="flex justify-between items-start">
              <span className="font-bold text-xs">RC Car Controller</span>
              <span className="text-xs italic">2024</span>
            </div>
            <ul className="list-disc ml-4 text-xs mt-0.5 space-y-0.5">
              <li>Built an RC car using Arduino and Raspberry Pi with integrated camera and motor controls</li>
              <li>Created a Flask-based web interface for remote driving and live video streaming</li>
            </ul>
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-1">
          <h2 className="text-sm font-bold border-b border-black pb-0.5 mb-1">WORK EXPERIENCE</h2>
          
          <div className="mb-1">
            <div className="flex justify-between items-start">
              <span className="font-bold text-xs">Bar Back — Rooneys Oceanfront Restaurant, Long Branch, NJ</span>
              <span className="text-xs italic">Summer 2024–2025</span>
            </div>
            <ul className="list-disc ml-4 text-xs mt-0.5">
              <li>Worked efficiently under pressure in a 300+ seat restaurant, strengthening multitasking and communication skills</li>
            </ul>
          </div>

          <div className="mb-1">
            <div className="flex justify-between items-start">
              <span className="font-bold text-xs">Property Maintenance — Navesink Property Services, Shrewsbury, NJ</span>
              <span className="text-xs italic">2021–2025</span>
            </div>
            <ul className="list-disc ml-4 text-xs mt-0.5">
              <li>Independently managed pool service routes, building problem-solving and client relationship skills</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}