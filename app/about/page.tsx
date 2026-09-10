export default function About() {
  return (
    
    <main className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-gray-100 px-8 py-20">
      
      {/* Page Title */}
      <h1 className="text-5xl font-extrabold text-center mb-12">About Me</h1>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-lg leading-relaxed">
          I’m Bamidelejeje Toluwani, a Product Engineer passionate about building scalable digital systems 
          and designing intuitive user experiences. My journey blends technical expertise in 
          <span className="font-semibold"> Next.js frontend development</span> with a strong 
          foundation in <span className="font-semibold">product design and UI/UX</span>.
        </p>
      </section>

      {/* Timeline / Background */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mb-16">
        <div className="p-8 bg-gray-800 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Academic Background</h2>
          <p>
            Currently a Final Year Computer Science student in Achievers university Owo, maintaining a good academic record 
            while applying knowledge to real-world projects. My focus is on systems architecture 
            and building robust applications.
          </p>
        </div>

        <div className="p-8 bg-gray-800 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Professional Focus</h2>
          <p>
            I specialize in bridging technical complexity with business growth. Whether it’s 
            designing high-conversion digital storefronts or engineering scalable backends, 
            I aim to deliver solutions that move the needle.
          </p>
        </div>
      </section>

      {/* Philosophy / Values */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">My Philosophy</h2>
        <p className="text-lg leading-relaxed">
          I believe engineering is not just about features — it’s about impact. Every line of code 
          should contribute to performance, usability, and long-term value. My goal is to combine 
          discipline with creativity to ship deliberate, high-performance applications.
        </p>
      </section>
    </main>
  );
}
