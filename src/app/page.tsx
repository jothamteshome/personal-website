import Image from 'next/image';
import Link from 'next/link';
import { generalInfo, socialMediaLinks } from '@/constants/profileConstants';

export default function HomePage() {
  const { contact_info, images } = generalInfo;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20">
      {/* Profile Image */}
      <div className="mb-8">
        <Image
          src={images.home_image.src}
          alt={images.home_image.alt}
          width={120}
          height={120}
          className="rounded-lg object-cover"
          priority
        />
      </div>

      {/* Name */}
      <h1 className="text-4xl sm:text-5xl font-bold text-foreground text-center mb-2">
        {contact_info.name}
      </h1>

      {/* Title */}
      <p className="text-lg sm:text-xl text-accent text-center mb-6">
        Software Engineer & ML Enthusiast
      </p>

      {/* Bio */}
      <p className="text-center text-muted max-w-lg mb-12 leading-relaxed">
        Building scalable systems at the intersection of software engineering, AI, and cloud infrastructure.
      </p>

      {/* Social Links */}
      <div className="flex gap-4 flex-wrap justify-center mb-12">
        {socialMediaLinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md bg-surface hover:bg-surface-secondary text-foreground transition-colors text-sm font-medium"
            title={link.title}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* CTA */}
      <p className="text-center text-sm text-muted">
        Explore my{' '}
        <Link href="/projects" className="text-accent hover:text-accent-secondary transition-colors font-medium">
          projects
        </Link>
        ,{' '}
        <Link href="/about" className="text-accent hover:text-accent-secondary transition-colors font-medium">
          skills
        </Link>
        , and{' '}
        <Link href="/blog" className="text-accent hover:text-accent-secondary transition-colors font-medium">
          blog
        </Link>
        .
      </p>
    </div>
  );
}
