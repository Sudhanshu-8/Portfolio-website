import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

export default function Work() {
  return (
    <section id="portfolio" className="max-w-6xl mx-auto px-4 text-left py-10">
      <h2 className="text-4xl font-extrabold text-white mb-10">My Work</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Mobile clickable card */}
        <a
          href="https://github.com/Sudhanshu-8/bookStoreApp"
          target="_blank"
          rel="noopener noreferrer"
          className="block md:hidden"
        >
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <h3 className="text-white font-semibold text-lg mb-2">Bookstore App</h3>
            <img src="/public/work-1.png" alt="Bookstore App" className="w-full h-full object-cover" />
          </div>
        </a>

        {/* Desktop hover card */}
        <div className="hidden md:block relative group overflow-hidden rounded-lg shadow-lg">
          <img src="/public/work-1.png" alt="Bookstore App" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition duration-500">
            <h3 className="text-xl font-bold text-white mb-2">Bookstore App</h3>
            <p className="text-sm text-gray-300 mb-4 px-2">
              A full-stack bookstore application built with React and Node.js
            </p>
            <a
              href="https://github.com/Sudhanshu-8/bookStoreApp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 text-xl hover:text-white transition"
            >
              <FaArrowUpRightFromSquare />
            </a>
          </div>
        </div>

        {/* Project 2 - Weather App */}
        <a
          href="https://weather-app-plum-kappa.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block md:hidden"
        >
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <h3 className="text-white font-semibold text-lg mb-2">Weather App</h3>
            <img src="/public/work-2.png" alt="Weather App" className="w-full h-full object-cover" />
          </div>
        </a>

        <div className="hidden md:block relative group overflow-hidden rounded-lg shadow-lg">
          <img src="/public/work-2.png" alt="Weather App" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition duration-500">
            <h3 className="text-xl font-bold text-white mb-2">Weather App</h3>
            <p className="text-sm text-gray-300 mb-4 px-2">
              Live weather app built using APIs and deployed on Vercel
            </p>
            <a
              href="https://weather-app-plum-kappa.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 text-xl hover:text-white transition"
            >
              <FaArrowUpRightFromSquare />
            </a>
          </div>
        </div>

        {/* Project 3 - TodoList App */}
        <a
          href="https://github.com/Sudhanshu-8/ToDoListApp"
          target="_blank"
          rel="noopener noreferrer"
          className="block md:hidden"
        >
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <h3 className="text-white font-semibold text-lg mb-2">Todolist App</h3>
            <img src="/public/work-3.png" alt="Todolist App" className="w-full h-full object-cover" />
          </div>
        </a>

        <div className="hidden md:block relative group overflow-hidden rounded-lg shadow-lg">
          <img src="/public/work-3.png" alt="Todolist App" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition duration-500">
            <h3 className="text-xl font-bold text-white mb-2">Todolist App</h3>
            <p className="text-sm text-gray-300 mb-4 px-2">
              A simple and elegant to-do list manager built with clean UI
            </p>
            <a
              href="https://github.com/Sudhanshu-8/ToDoListApp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 text-xl hover:text-white transition"
            >
              <FaArrowUpRightFromSquare />
            </a>
          </div>
        </div>
      </div>

      {/* Non-clickable see more text */}
      <div className="text-center mt-8">
        <span className="text-red-500 text-sm font-semibold">See more</span>
      </div>
    </section>
  );
}
