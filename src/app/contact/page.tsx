import Link from 'next/link';
import { generalInfo, socialMediaLinks } from '@/constants/profileConstants';

export default function ContactPage() {
  const { contact_info } = generalInfo;

  return (
    <div className="py-20">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-center">Get in Touch</h1>

        <p className="text-center text-muted mb-10 leading-relaxed">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
        </p>

        {/* Contact Info */}
        <div className="space-y-6 mb-12">
          <div className="text-center">
            <p className="text-sm text-muted mb-2">Email</p>
            <Link
              href={`mailto:${contact_info.email}`}
              className="text-lg font-medium text-accent hover:text-accent-secondary transition-colors break-all"
            >
              {contact_info.email}
            </Link>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted mb-2">Location</p>
            <p className="text-lg font-medium text-foreground">{contact_info.location}</p>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted mb-2">Timezone</p>
            <p className="text-lg font-medium text-foreground">Eastern Time (EST/EDT)</p>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <p className="text-sm text-muted mb-4 text-center">Connect on social media</p>
          <div className="flex gap-3 justify-center flex-wrap">
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
        </div>
      </div>
    </div>
  );
}
