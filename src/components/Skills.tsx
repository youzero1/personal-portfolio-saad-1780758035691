import { Zap } from 'lucide-react';
import { skills } from '@/lib/data';
import { Skill } from '@/types';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <Zap className="text-brand" size={28} />
          <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
        </div>
        <div className="flex flex-col gap-6">
          {skills.map((skill: Skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-semibold text-gray-700">{skill.name}</span>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-brand h-2.5 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
