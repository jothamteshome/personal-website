import Image from 'next/image';
import { experienceItems, educationItems } from '@/constants/profileConstants';

export default function ExperiencePage() {
  return (
    <div className="py-20">
      {/* Work Experience */}
      <section className="mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Experience</h1>

        <div className="space-y-8">
          {experienceItems.map((exp, idx) => (
            <div key={idx} className="border-l-2 border-accent pl-6">
              <div className="flex items-start gap-4 mb-3">
                <div className="flex-shrink-0 relative w-12 h-12">
                  <Image
                    src={exp.logo}
                    alt={exp.employer}
                    fill
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-sm text-muted">{exp.employer}</p>
                </div>
              </div>

              <p className="text-sm text-accent mb-3">
                {exp.start_date} — {exp.end_date}
              </p>

              <ul className="space-y-2">
                {exp.tasks_completed.map((task, taskIdx) => (
                  <li key={taskIdx} className="text-muted text-sm leading-relaxed flex gap-2">
                    <span className="text-accent flex-shrink-0">•</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">Education</h2>

        <div className="space-y-8">
          {educationItems.map((edu, idx) => (
            <div key={idx} className="border-l-2 border-accent pl-6">
              <div className="flex items-start gap-4 mb-3">
                <div className="flex-shrink-0 relative w-12 h-12">
                  <Image
                    src={edu.logo}
                    alt={edu.institution}
                    fill
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground">{edu.degree_aquired}</h3>
                  <p className="text-sm text-muted">{edu.institution}</p>
                </div>
              </div>

              <p className="text-sm text-accent mb-3">
                {edu.start_date} — {edu.end_date}
                <span className="text-muted ml-3">GPA: {edu.gpa}</span>
              </p>

              <p className="text-xs text-muted uppercase tracking-wide mb-2">Relevant Coursework</p>
              <div className="flex flex-wrap gap-1">
                {edu.coursework.map((course) => (
                  <span key={course} className="text-xs px-2 py-1 rounded bg-surface text-foreground">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
