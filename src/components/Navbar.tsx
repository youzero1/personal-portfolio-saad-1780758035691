import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/lib/data';
import { NavItem } from '@/types';
import clsx from 'clsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-brand tracking-tight">
          Jane Doe
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item: NavItem) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-brand transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-600 hover:text-brand"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={clsx(
          'md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100',
          open ? 'max-h-60' : 'max-h-0'
        )}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {navItems.map((item: NavItem) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-gray-600 hover:text-brand transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
