import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="mb-12 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-lg">
        <a
          href="mailto:2022csb1130@iitrpr.ac.in"
          className="group flex items-center gap-2 text-blue-400 hover:text-white transition"
        >
          <FaEnvelope className="group-hover:text-white transition" />
          <span className="group-hover:text-white transition">Email</span>
        </a>
        <a
          href="https://github.com/Sudhanshu-8"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-blue-400 hover:text-white transition"
        >
          <FaGithub className="group-hover:text-white transition" />
          <span className="group-hover:text-white transition">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/sudhanshu-gautam8/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-blue-400 hover:text-white transition"
        >
          <FaLinkedin className="group-hover:text-white transition" />
          <span className="group-hover:text-white transition">LinkedIn</span>
        </a>
      </div>
    </section>
  );
}
