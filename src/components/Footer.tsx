import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Saada. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-brand transition-colors">
            <Github size={20} />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-brand transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-brand transition-colors">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
