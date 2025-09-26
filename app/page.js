import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-gray-700">
        <h1 className="text-3xl font-bold tracking-wide">Cypher Courses</h1>
        <nav className="space-x-6">
          <a href="#courses" className="hover:text-teal-400 transition">Courses</a>
          <a href="#about" className="hover:text-teal-400 transition">About</a>
          <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">Build Your Business Without Burning Out</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
          Cypher Courses empowers young entrepreneurs with practical business & finance skills, uniquely integrated with well-being strategies for sustainable success.
        </p>
        <div className="flex justify-center gap-6">
          <a href="https://wa.me/252624241927?text=Hi,%20I%20want%20to%20enroll%20in%20Cypher%20Courses" target="_blank" rel="noopener noreferrer" className="bg-teal-500 hover:bg-teal-400 text-black font-semibold px-6 py-3 rounded-2xl shadow-lg transition">Message on WhatsApp</a>
          <a href="#" className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg transition">Join Discord (Coming Soon)</a>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="px-6 md:px-16 py-20">
        <h3 className="text-3xl font-bold mb-10 text-center">Our Courses</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:scale-105 transition">
            <h4 className="text-xl font-semibold mb-2">Startup Foundations</h4>
            <p className="text-gray-300 mb-4">Learn how to turn your ideas into a profitable business with step-by-step strategies.</p>
            <span className="block text-teal-400 font-bold mb-2">Monthly: €44.99</span>
            <span className="block text-teal-400 font-bold mb-4">Annual: €109.99</span>
            <a href="https://wa.me/252624241927?text=Hi,%20I%20want%20to%20enroll%20in%20Startup%20Foundations" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">Buy Now →</a>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:scale-105 transition">
            <h4 className="text-xl font-semibold mb-2">Finance Made Simple</h4>
            <p className="text-gray-300 mb-4">Master budgeting, investing, and scaling without the overwhelm.</p>
            <span className="block text-teal-400 font-bold mb-2">Monthly: €44.99</span>
            <span className="block text-teal-400 font-bold mb-4">Annual: €109.99</span>
            <a href="https://wa.me/252624241927?text=Hi,%20I%20want%20to%20enroll%20in%20Finance%20Made%20Simple" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">Buy Now →</a>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:scale-105 transition">
            <h4 className="text-xl font-semibold mb-2">Well-being for Entrepreneurs</h4>
            <p className="text-gray-300 mb-4">Build habits and strategies to protect your mental health while growing your empire.</p>
            <span className="block text-teal-400 font-bold mb-2">Monthly: €44.99</span>
            <span className="block text-teal-400 font-bold mb-4">Annual: €109.99</span>
            <a href="https://wa.me/252624241927?text=Hi,%20I%20want%20to%20enroll%20in%20Well-being%20for%20Entrepreneurs" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">Buy Now →</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 md:px-16 py-20 bg-gray-950">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Why Cypher?</h3>
          <p className="text-gray-300 text-lg">Most entrepreneurship platforms teach hustle only. Cypher blends business mastery with well-being so you can achieve sustainable success without burnout.</p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="text-center py-10 border-t border-gray-700">
        <p className="text-gray-400">© {new Date().getFullYear()} Cypher Courses. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="https://wa.me/252624241927" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">WhatsApp</a>
          <a href="#" className="text-teal-400 hover:underline">Instagram</a>
        </div>
      </footer>
    </div>
  );
}
