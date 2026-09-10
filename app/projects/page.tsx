function Navbar() {
  return (
    <nav className="mb-12 flex justify-center gap-6" aria-label="Main navigation">
      <a href="/" className="hover:text-yellow-400">Home</a>
      <a href="/projects" className="text-yellow-400 hover:underline">Projects</a>
    </nav>
  );
}

export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-gray-100 px-8 py-20">
      <Navbar />

      {/* Page Title */}
      <h1 className="text-5xl font-extrabold text-center mb-12">My Projects</h1>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Project Card 1 */}
        <div className="p-6 bg-gray-800 rounded-lg shadow hover:scale-105 transition">
          <h2 className="text-2xl font-bold mb-4">Portfolio Website</h2>
          <p className="text-lg mb-4">
            A responsive portfolio built with Next.js and TailwindCSS, showcasing my skills and projects.
          </p>
          <a
            href="https://github.com/yourusername/portfolio"
            target="_blank"
            className="text-yellow-400 hover:underline"
          >
            View Code →
          </a>
        </div>

        {/* Project Card 2 */}
        <div className="p-6 bg-gray-800 rounded-lg shadow hover:scale-105 transition">
          <h2 className="text-2xl font-bold mb-4">UI/UX Design System</h2>
          <p className="text-lg mb-4">
            A design system for consistent UI components, improving usability and developer speed.
          </p>
          <a
            href="https://www.figma.com/file/yourdesignsystem"
            target="_blank"
            className="text-yellow-400 hover:underline"
          >
            View Design →
          </a>
        </div>

        {/* Project Card 3 */}
        <div className="p-6 bg-gray-800 rounded-lg shadow hover:scale-105 transition">
          <h2 className="text-2xl font-bold mb-4">E‑Commerce Platform</h2>
          <p className="text-lg mb-4">
            A scalable e‑commerce app with Next.js frontend and Node.js backend, optimized for performance.
          </p>
          <a
            href="https://github.com/yourusername/ecommerce"
            target="_blank"
            className="text-yellow-400 hover:underline"
          >
            View Code →
          </a>
        </div>

      </section>
    </main>
  );
}
