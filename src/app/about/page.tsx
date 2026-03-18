import Image from 'next/image';
import { aboutMeDescription, generalInfo, skillCategories } from '@/constants/profileConstants';

export default function AboutPage() {

  return (
    <div className="py-20">
      {/* Intro Section */}
      <section className="mb-16">
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          <div className="flex-shrink-0">
            <Image
              src={generalInfo.images.about_image.src}
              alt={generalInfo.images.about_image.alt}
              width={200}
              height={200}
              className="rounded-lg object-cover"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">About Me</h1>

            {aboutMeDescription.map((para, idx) => (
              <p
                key={idx}
                className="text-muted leading-relaxed mb-4"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">Skills & Technologies</h2>

        {Object.entries(skillCategories).map(([category, categorySkills]) => (
          <div key={category} className="mb-8">
            <h3 className="text-sm font-semibold text-accent mb-3 uppercase tracking-wide">
              {category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {categorySkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-surface text-sm text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
