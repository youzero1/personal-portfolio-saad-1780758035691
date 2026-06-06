import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <User className="text-brand" size={28} />
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          I'm a frontend developer with 4+ years of experience building responsive, accessible, and
          delightful web applications. I love turning complex problems into simple, beautiful
          interfaces.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          My stack revolves around <span className="font-semibold text-brand">React</span>,{' '}
          <span className="font-semibold text-brand">TypeScript</span>, and modern CSS tooling. I care
          deeply about performance, clean code, and developer experience.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          When I'm not coding, you'll find me hiking, sketching UI concepts, or exploring new
          coffee shops.
        </p>
      </div>
    </section>
  );
}
