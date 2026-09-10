export default function Welcome() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500  text-white text-center">
      <h1 className="text-6xl font-extrabold mb-4 animate-bounce">Glad you're here!</h1>
      <p className="text-lg mb-6">I’m Toluwani, and this is my creative space. Have a nice view of it.</p>
      <a
        href="/home"
        className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow hover:scale-105 hover:bg-pink-100 transition"
      >
        Enter Portfolio
      </a>
    </main>
  )
}
