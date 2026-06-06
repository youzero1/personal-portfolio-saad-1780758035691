import { Briefcase, ExternalLink } from 'lucide-react';
import { projects } from '@/lib/data';
import { Project } from '@/types';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <Briefcase className="text-brand" size={28} />
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project: Project) => (
            <div
              key={project.id}
              className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-indigo-50 text-brand px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
              >
                View Project <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
