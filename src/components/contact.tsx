import type { ReactNode } from "react";

type IconProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
};

type ContactIcon = (props: IconProps) => ReactNode;

interface Contact {
  icon: ContactIcon;
  label: string;
  title: string;
  text: string;
  href: string;
}

function Icon({
  children,
  size = 24,
  strokeWidth = 2,
  className,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const Mail = (props: IconProps) => (
  <Icon {...props}>
    <rect
      width="20"
      height="16"
      x="2"
      y="4"
      rx="2"
    />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </Icon>
);

const Github = (props: IconProps) => (
  <Icon {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-1.5 6-6a4.6 4.6 0 0 0-1-3.5 4.2 4.2 0 0 0-.1-3.5s-1 0-3 1.5a10.4 10.4 0 0 0-8 0C5.9 1.5 5 1.5 5 1.5a4.2 4.2 0 0 0-.1 3.5 4.6 4.6 0 0 0-1 3.5c0 4.5 3 6 6 6a4.8 4.8 0 0 0-1 3.5v4" />
    <path d="M9 18c-4.5 2-5-2-7-2" />
  </Icon>
);

const ArrowUpRight = (props: IconProps) => (
  <Icon {...props}>
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </Icon>
);

const contacts: Contact[] = [
  {
    icon: Mail,
    label: "EMAIL",
    title: "widyaaulia709@gmail.com",
    text: "Untuk pertanyaan, project, atau kolaborasi.",
    href: "mailto:widyaaulia709@gmail.com",
  },
  {
    icon: Github,
    label: "GITHUB",
    title: "github.com/widya709",
    text: "Lihat project dan eksperimen yang saya kerjakan.",
    href: "https://github.com/widya709",
  },
];

export default function Contact() {
  return (
    <main
      id="contact"
      className="about-page contact-page"
    >
      <section className="about-hero">
        <div className="about-heading">
          <span className="about-eyebrow">
            04 / CONTACT
          </span>

          <h1>
            Let&apos;s stay
            <br />
            <em>connected.</em>
          </h1>
        </div>

        <div className="about-intro">
          <p>
            Punya project, ide, atau ingin berdiskusi
            tentang teknologi dan design? Saya terbuka
            untuk terhubung.
          </p>

          <p>
            Pilih salah satu platform di bawah ini
            dan mari mulai percakapan.
          </p>
        </div>
      </section>

      <section className="about-interests contact-section">
        <div className="about-section-title">
          <span className="about-eyebrow">
            GET IN TOUCH
          </span>

          <h2>
            Choose how you want to reach me.
          </h2>
        </div>

        <div className="interest-grid">
          {contacts.map((contact) => {
            const ContactIcon = contact.icon;
            const isExternal = contact.href.startsWith("http");

            return (
              <a
                key={contact.label}
                className="interest-card contact-card"
                href={contact.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
              >
                <div className="interest-icon">
                  <ContactIcon
                    size={22}
                    strokeWidth={1.7}
                  />
                </div>

                <div className="contact-card-content">
                  <span className="contact-label">
                    {contact.label}
                  </span>

                  <h3>
                    {contact.title}
                  </h3>

                  <p>
                    {contact.text}
                  </p>
                </div>

                <ArrowUpRight
                  className="interest-arrow"
                  size={20}
                />
              </a>
            );
          })}
        </div>
      </section>

      <section className="about-learning contact-learning">
        <div>
          <span className="about-eyebrow">
            AVAILABLE FOR
          </span>

          <h2>
            Creative projects & collaborations.
          </h2>
        </div>

        <div className="learning-list">
          <span>
            Web Development
          </span>

          <span>
            UI / UX Design
          </span>

          <span>
            Creative Projects
          </span>
        </div>
      </section>
    </main>
  );
}