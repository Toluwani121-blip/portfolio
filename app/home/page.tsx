"use client"; // if you’re using hooks anywhere
import LiveClock from "./LiveClock";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-gray-100">

      {/* Navbar */}
      <nav className="sticky top-0 flex justify-between items-center px-6 py-4 bg-gray-800 shadow-lg">
        <h1 className="text-2xl font-bold">Toluwani Bamidelejeje</h1>
        <ul className="hidden md:flex space-x-6">
          <li><a href="home" className="hover:text-gray-400">Home</a></li>
          <li><a href="about" className="hover:text-gray-400">About</a></li>
          <li><a href="projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="flex flex-col md:flex-row items-center justify-center text-center py-32 px-6">
        {/* Left: Image */}
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src="/WhatsApp Image 2026-09-10 at 01.18.31.jpeg"
            alt="Toluwani portrait"
            className="rounded-xl shadow-2xl object-cover w-[450px] h-[550px] border-4 border-gray-300 transform hover:scale-105 transition"
          />
        </div>

        {/* Right: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-6xl font-extrabold tracking-wide uppercase">
            Frontend Developer & UI/UX Enthusiast
          </h1>
          <p className="text-lg mt-4 max-w-xl">
            Building performant frontend experiences with Next.js and design clarity.
          </p>
          <br /><br />
          <a
            href="#projects"
            className="px-6 py-3 bg-black text-white rounded-lg shadow hover:bg-gray-800"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* Profile Section */}
      <section className="bg-black text-gray-100 py-20 px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
          
      

          {/* Right: Text + Details */}
          <div className="md:w-2/3">
            <h2 className="text-3xl font-extrabold mb-4">Toluwani’s Portfolio</h2>
            <p className="text-lg mb-8">
              Specializing in Next.js and modern frontend frameworks. Blending engineering discipline with UI/UX design to craft intuitive, scalable products that engage users.
            </p>

            {/* Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 text-big">
              <div>
                <LiveClock /> {/* Dynamic time */}
              </div>
              <div>
                <p className="font-semibold">Current Role:</p>
                <p>Final Year Computer Science</p>
              </div>
              <div>
                <p className="font-semibold">Specialization:</p>
                <p>Web Developer & UI/UX Designer</p>
              </div>
            </div>

            {/* Resume Button */}
            <div className="mt-8">
              <a
                href="/resume.pdf" // place your resume in public/resume.pdf
                className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-200 transition"
              >
                View Full Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
<section id="skills" className="bg-gray-900 text-gray-100 py-20 px-6">
  <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
    
    {/* Next.js Frontend */}
    <div className="p-8 bg-gray-800 rounded-lg shadow hover:scale-105 transition">
      <h3 className="text-2xl font-semibold mb-4">Next.js Frontend</h3>
      <p className="text-lg">
        Building fast, scalable, and modern web applications using Next.js, and TailwindCSS.
      </p>
    </div>

    {/* Product Design / UI/UX */}
    <div className="p-8 bg-gray-800 rounded-lg shadow hover:scale-105 transition">
      <h3 className="text-2xl font-semibold mb-4">Product Design / UI/UX</h3>
      <p className="text-lg">
        Designing intuitive user interfaces and experiences that balance creativity with usability.
      </p>
    </div>

  </div>
</section>

{/* Contact Section */}
<section id="contact" className="bg-gray-800 text-white py-20 px-6">
  <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>

  <form className="max-w-2xl mx-auto space-y-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        placeholder="Your name"
      />
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        placeholder="you@example.com"
      />
    </div>

    <div>
      <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
      <textarea
        id="message"
        name="message"
        rows={5}
        className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        placeholder="Write your message..."
      ></textarea>
    </div>

    <button
      type="submit"
      className="w-full px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-500 transition"
    >
      Send Message
    </button>
  </form>

  <div className="flex justify-center space-x-8 mt-12 text-3xl">
    <a href="https://github.com/yourusername" target="_blank" className="hover:text-yellow-400">
      <FaGithub />
    </a>
    <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-yellow-400">
      <FaLinkedin />
    </a>
    <a href="https://twitter.com/yourusername" target="_blank" className="hover:text-yellow-400">
      <FaTwitter />
    </a>
  </div>
</section>

      <footer className="bg-gray-900 text-white py-6 mt-20 text-center">
        <p>&copy; {new Date().getFullYear()} Toluwani. All rights reserved.</p>
      </footer>
      <LiveClock/>
    </main>
  );
}
