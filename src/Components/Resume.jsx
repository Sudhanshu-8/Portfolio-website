export default function Resume() {
  return (
    <section className="mb-12 text-center">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <p className="text-lg text-gray-300">Here you can download my resume:</p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition duration-300"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
