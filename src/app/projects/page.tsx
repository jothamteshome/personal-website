import Link from 'next/link';
import { projectItems } from '@/constants/profileConstants';

export default function ProjectsPage() {
  return (
    <div className="py-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Projects</h1>

      <div className="space-y-10">
        {projectItems.map((project, idx) => (
          <div key={idx} className="border-b border-surface pb-10 last:border-b-0 last:pb-0">
            <div className="flex items-baseline gap-3 mb-2">
              <h2 className="text-xl font-bold text-foreground">{project.name}</h2>
              {project.in_progress && (
                <span className="text-xs text-accent border border-accent/40 px-2 py-0.5 rounded-full">
                  In Progress
                </span>
              )}
              <span className="text-sm text-muted ml-auto">{project.year}</span>
            </div>

            {/* Description */}
            <p className="text-muted leading-relaxed mb-4">{project.description}</p>

            {/* Technologies */}
            <p className="text-sm text-muted mb-5">
              <span className="text-foreground font-medium">Stack:</span>{' '}
              {project.technologies.join(' · ')}
            </p>

            {/* Links */}
            <div className="flex gap-4">
              <Link
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline underline-offset-2 transition-colors"
              >
                GitHub →
              </Link>

              {project.links.live_demo && (
                <Link
                  href={project.links.live_demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:underline underline-offset-2 transition-colors"
                >
                  Live Demo →
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
