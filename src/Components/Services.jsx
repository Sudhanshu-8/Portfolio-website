import { FaCode, FaCrop, FaAppStore } from 'react-icons/fa';

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-4 text-left py-10">
      <h2 className="text-4xl font-extrabold text-white mb-8">My Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Web Design */}
        <div className="bg-[#262626] p-6 text-sm font-light rounded-xl transition duration-500 hover:bg-[#ff004f] hover:-translate-y-2 shadow-md group">
          <FaCode className="text-4xl text-white mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white">Web Design</h3>
          <p className="text-gray-300 group-hover:text-white mb-2">
            Creating responsive websites with clean code and smooth UI using HTML, CSS, and React.
          </p>
          <span className="text-white text-xs mt-2 inline-block opacity-50">Learn more</span>
        </div>

        {/* UI/UX Design */}
        <div className="bg-[#262626] p-6 text-sm font-light rounded-xl transition duration-500 hover:bg-[#ff004f] hover:-translate-y-2 shadow-md group">
          <FaCrop className="text-4xl text-white mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white">UI/UX Design</h3>
          <p className="text-gray-300 group-hover:text-white mb-2">
            Designing intuitive user experiences with a focus on usability and visual appeal.
          </p>
          <span className="text-white text-xs mt-2 inline-block opacity-50">Learn more</span>
        </div>

        {/* App Design */}
        <div className="bg-[#262626] p-6 text-sm font-light rounded-xl transition duration-500 hover:bg-[#ff004f] hover:-translate-y-2 shadow-md group">
          <FaAppStore className="text-4xl text-white mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white">App Design</h3>
          <p className="text-gray-300 group-hover:text-white mb-2">
            Developing cross-platform mobile apps using Flutter with beautiful UI and robust logic.
          </p>
          <span className="text-white text-xs mt-2 inline-block opacity-50">Learn more</span>
        </div>
      </div>
    </section>
  );
}
