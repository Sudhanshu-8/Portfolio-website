import { useState } from 'react';

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState('skills');

  const tabClass = (tab) =>
    `cursor-pointer text-lg font-medium px-4 py-2 rounded-md transition ${
      activeTab === tab
        ? 'text-red-400 border-b-2 border-red-400'
        : 'text-gray-400 hover:text-white'
    }`;

  return (
    <section className="mb-16 px-4 md:px-8" id="about">
      <h2 className="text-5xl font-extrabold text-white mb-4 mt-10 text-center md:text-left pl-0 md:pl-[570px]">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-start gap-10 max-w-7xl mx-auto">
        {/* Left: Image */}
        <div className="relative md:-ml-8 lg:-ml-10">
          <div className="w-[380px] h-[380px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden shadow-2xl">
            <img
              src="/user.png"
              alt="Sudhanshu Gautam"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Text and Tabs */}
        <div className="text-center md:text-left w-full max-w-2xl">
          <p className="text-lg text-gray-400 leading-relaxed mb-4">
            I’m a passionate web and app developer and a 3rd-year B.Tech student at IIT Ropar.
            I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
          </p>

          {/* Tab Titles */}
          <div className="flex justify-center md:justify-start gap-6 mb-4">
            <p className={tabClass('skills')} onClick={() => setActiveTab('skills')}>
              Skills
            </p>
            <p className={tabClass('experience')} onClick={() => setActiveTab('experience')}>
              Experience
            </p>
            <p className={tabClass('education')} onClick={() => setActiveTab('education')}>
              Education
            </p>
          </div>

          {/* Tab Content */}
          <div className="text-gray-300 text-base leading-relaxed">
            {activeTab === 'skills' && (
              <ul className="list-disc list-inside space-y-1">
                <li>Frontend: HTML, CSS, JavaScript, React, Tailwind CSS</li>
                <li>Backend: Node.js, Express</li>
                <li>DevOps: Git, GitHub, Netlify</li>
                <li>Others: Python, C/C++, Flutter, Firebase</li>
              </ul>
            )}
            {activeTab === 'experience' && (
              <ul className="list-disc list-inside space-y-1">
                <li>ISMP Mentor, IIT Ropar (2024–2025)</li>
                <li>Member, Coding Club IIT Ropar</li>
                <li>Developed multiple full-stack & Flutter apps</li>
              </ul>
            )}
            {activeTab === 'education' && (
              <ul className="list-disc list-inside space-y-1">
                <li>B.Tech in Computer Science, IIT Ropar (2022–2026)</li>
                <li>Senior Secondary: CBSE, 78% (2021)</li>
                <li>Secondary: CBSE, 83.8% (2019)</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
