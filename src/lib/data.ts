import { Project, Skill, NavItem } from '@/types';

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce App',
    description: 'A full-featured shopping cart built with React and a REST API backend. Supports auth, product search, and checkout flow.',
    tags: ['React', 'TypeScript', 'Node.js'],
    link: '#',
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    description: 'Real-time weather dashboard consuming OpenWeatherMap API. Features animated icons and 7-day forecasts.',
    tags: ['React', 'API', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: 3,
    title: 'Task Manager',
    description: 'Drag-and-drop kanban board for managing tasks with priority labels, due dates, and local persistence.',
    tags: ['React', 'DnD', 'LocalStorage'],
    link: '#',
  },
  {
    id: 4,
    title: 'Portfolio Site',
    description: 'This very portfolio — built with React, Vite, and Tailwind CSS. Clean, responsive, and accessible.',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    link: '#',
  },
];

export const skills: Skill[] = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 80 },
  { name: 'Node.js', level: 70 },
  { name: 'CSS / Tailwind', level: 85 },
  { name: 'REST APIs', level: 75 },
  { name: 'Git & GitHub', level: 80 },
];
