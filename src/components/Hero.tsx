import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-amber-50 text-center px-6"
    >
      <div className="w-24 h-24 rounded-full bg-brand flex items-center justify-center text-white text-4xl font-bold mb-6 shadow-lg">
        S
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
        Hi, I'm <span className="text-brand">Saad</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-500 max-w-xl mb-8">
        Frontend Developer &amp; UI Enthusiast crafting clean, performant web experiences.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="#projects"
          className="px-6 py-3 bg-brand text-white rounded-full font-semibold hover:bg-brand-dark transition-colors shadow-md"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border-2 border-brand text-brand rounded-full font-semibold hover:bg-indigo-50 transition-colors"
        >
          Get in Touch
        </a>
      </div>
      <a
        href="#about"
        className="mt-16 text-gray-400 hover:text-brand transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
}
