import Image from 'next/image';
import Link from 'next/link';
import { projectItems, projectBadgeDetails } from '@/constants/profileConstants';

export default function ProjectsPage() {
  return (
    <div className="py-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Projects</h1>

      <div className="space-y-8">
        {projectItems.map((project, idx) => (
          <div
            key={idx}
            className="border border-surface rounded-lg overflow-hidden hover:border-accent/50 transition-colors"
          >
            {/* Project Image */}
            <div className="relative w-full h-48 sm:h-64 bg-surface">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Project Info */}
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">{project.name}</h2>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.badges.map((badge) => {
                  const badgeDetail = projectBadgeDetails[badge];
                  return (
                    <span
                      key={badge}
                      className="text-xs px-2 py-1 rounded-full bg-surface text-muted"
                      title={badgeDetail?.title}
                    >
                      {badge}
                    </span>
                  );
                })}
              </div>

              {/* Description */}
              <p className="text-muted leading-relaxed mb-4">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded bg-surface-secondary text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <Link
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded-md bg-accent text-background hover:bg-accent-secondary transition-colors text-sm font-medium"
                >
                  View on GitHub
                </Link>

                {project.links.live_demo && (
                  <Link
                    href={project.links.live_demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 rounded-md border border-accent text-accent hover:bg-surface transition-colors text-sm font-medium"
                  >
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
