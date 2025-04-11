import React, { useState } from 'react';
import Chatbot from './components/Chatbot';
import './style.css'; // Make sure your CSS is imported

function App() {
  // For the side menu open/close state
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  // For the About section tabs (skills, experience, education)
  const [activeTab, setActiveTab] = useState('skills');

  // Handlers for side menu
  const openMenu = () => setSideMenuOpen(true);
  const closeMenu = () => setSideMenuOpen(false);

  // Handler for tabs in the About section
  const openTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* Header */}
      <header id="header" className="bg-white">
        <div className="container">
          <nav className="flex justify-between items-center p-4">
            <img src="images/logo.png" alt="Logo" className="logo" />
            <ul
              id="sidemenu"
              className={`fixed top-0 right-0 bg-white h-full w-56 transform transition-transform ${
                sideMenuOpen ? 'translate-x-0' : 'translate-x-full'
              } flex flex-col items-start p-4 space-y-4`}
            >
              <li><a href="#header" onClick={closeMenu}>Home</a></li>
              <li><a href="#about" onClick={closeMenu}>About</a></li>
              <li><a href="#services" onClick={closeMenu}>Services</a></li>
              <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
              <i className="fa-solid fa-xmark cursor-pointer" onClick={closeMenu}></i>
            </ul>
            <i className="fa-solid fa-bars cursor-pointer" onClick={openMenu}></i>
          </nav>
          <div className="header-text text-center p-8">
            <p className="text-lg">Software Developer</p>
            <h1 className="text-4xl font-bold">
              Hi, I'm <span className="text-blue-500">Sudhanshu Gautam</span> <br /> from IIT ROPAR
            </h1>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-12">
        <div className="container flex flex-col md:flex-row items-center">
          <div className="about-col-1 md:w-1/2 p-4">
            <img src="images/user.png" alt="User" className="w-full rounded"/>
          </div>
          <div className="about-col-2 md:w-1/2 p-4">
            <h1 className="sub-title text-3xl font-bold mb-4">About Me</h1>
            <p className="mb-4">
              I'm a passionate web developer with a focus on creating user-friendly interfaces and seamless experiences.
              I enjoy tackling challenges in both front-end and back-end development, constantly learning new technologies
              to improve my skills and stay ahead in the field.
            </p>
            <div className="tab-titles flex space-x-4 mb-4">
              <p
                className={`tab-links cursor-pointer ${activeTab === 'skills' && 'active-link'}`}
                onClick={() => openTab('skills')}
              >
                Skills
              </p>
              <p
                className={`tab-links cursor-pointer ${activeTab === 'experience' && 'active-link'}`}
                onClick={() => openTab('experience')}
              >
                Experience
              </p>
              <p
                className={`tab-links cursor-pointer ${activeTab === 'education' && 'active-link'}`}
                onClick={() => openTab('education')}
              >
                Education
              </p>
            </div>
            <div className="tab-contents">
              {activeTab === 'skills' && (
                <ul>
                  <li><span>Web Development:</span> HTML, CSS, JS</li>
                  <li><span>Full Stack:</span> Developer</li>
                  <li><span>UI/UX:</span> Designer</li>
                </ul>
              )}
              {activeTab === 'experience' && (
                <ul>
                  <li><span>Project Leadership:</span> Team Coordination</li>
                  <li><span>E-commerce Development:</span> Design Improvements</li>
                  <li><span>Database Management:</span> SQL/Postgres</li>
                </ul>
              )}
              {activeTab === 'education' && (
                <ul>
                  <li><span>IIT Ropar:</span> BTech</li>
                  <li><span>Computer Science:</span> Data Structures</li>
                  <li><span>Graph Theory:</span> Trees/Network Flow</li>
                </ul>
              )}
            </div>                   
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 bg-gray-50">
        <div className="container">
          <h1 className="sub-title text-3xl font-bold text-center mb-8">My Services</h1>
          <div className="services-list grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 text-center">
              <i className="fa-solid fa-code text-4xl mb-2"></i>
              <h2 className="text-2xl font-bold mb-2">Web Design</h2>
              <p className="mb-2">Web development, UI/UX design, responsive layouts, backend integration, seamless functionality.</p>
              <a href="#" className="text-blue-500">Learn more</a>
            </div>
            <div className="p-4 text-center">
              <i className="fa-solid fa-crop text-4xl mb-2"></i>
              <h2 className="text-2xl font-bold mb-2">UI/UX Design</h2>
              <p className="mb-2">Creative and functional designs, with attention to user experience and modern aesthetics.</p>
              <a href="#" className="text-blue-500">Learn more</a>
            </div>
            <div className="p-4 text-center">
              <i className="fa-brands fa-app-store text-4xl mb-2"></i>
              <h2 className="text-2xl font-bold mb-2">App Design</h2>
              <p className="mb-2">Designing mobile apps that are intuitive and engaging, with a focus on performance.</p>
              <a href="#" className="text-blue-500">Learn more</a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12">
        <div className="container">
          <h1 className="sub-title text-3xl font-bold text-center mb-8">My Work</h1>
          <div className="work-list grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="work relative">
              <img src="images/work-1.png" alt="Work 1" className="w-full rounded"/>
              <div className="layer absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <h3 className="text-white text-xl mb-2">Social Media App</h3>
                <p className="text-white mb-2">Connect with talented people around the world.</p>
                <a href="#" className="text-blue-300"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>
            </div>
            <div className="work relative">
              <img src="images/work-2.png" alt="Work 2" className="w-full rounded"/>
              <div className="layer absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <h3 className="text-white text-xl mb-2">Music App</h3>
                <p className="text-white mb-2">Experience the rhythm with a seamless music experience.</p>
                <a href="#" className="text-blue-300"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>
            </div>
            <div className="work relative">
              <img src="images/work-3.png" alt="Work 3" className="w-full rounded"/>
              <div className="layer absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <h3 className="text-white text-xl mb-2">Online Shopping App</h3>
                <p className="text-white mb-2">Shop with ease using our user-friendly interface.</p>
                <a href="#" className="text-blue-300"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="#" className="btn inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">See more</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-gray-100">
        <div className="container">
          <div className="flex flex-col md:flex-row">
            <div className="contact-left md:w-1/2 p-4">
              <h1 className="sub-title text-3xl font-bold mb-4">Contact Me</h1>
              <p className="mb-2"><i className="fa-solid fa-paper-plane"></i> contact@iitrpr.com</p>
              <p className="mb-2"><i className="fa-solid fa-square-phone"></i> 0123456789</p>
              <div className="social-icons flex space-x-4 my-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook text-2xl"></i></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter-square text-2xl"></i></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram text-2xl"></i></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin text-2xl"></i></a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github text-2xl"></i></a>
              </div>
              <a href="#" className="btn inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Download Cv</a>
            </div>
            <div className="contact-right md:w-1/2 p-4">
              <form className="flex flex-col space-y-4">
                <input type="text" name="Name" placeholder="Your Name" required className="border p-2 rounded"/>
                <input type="email" name="email" placeholder="Your email" required className="border p-2 rounded"/>
                <textarea name="Message" rows="6" placeholder="Your Message" className="border p-2 rounded"></textarea>
                <button type="submit" className="btn inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div className="copyright text-center py-4">
          <p>
            Copyright @ Sudhanshu. Made <i className="fa-solid fa-heart text-red-500"></i> with passion and precision.
          </p>
        </div>
      </section>

      {/* Chatbot Integration - You can position this as you like */}
      <Chatbot />
    </div>
  );
}

export default App;
