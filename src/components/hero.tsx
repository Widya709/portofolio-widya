import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero min-h-screen w-full overflow-hidden"
    >
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-container mx-auto flex w-full max-w-[1400px]">
        <div className="hero-content">
          <div className="hero-label-wrapper hero-reveal hero-delay-1">
            <span className="hero-label-line"></span>
            <p className="hero-label">WELCOME TO MY PORTFOLIO</p>
          </div>

          <h1 className="hero-title hero-reveal hero-delay-2">
            Hi, I&apos;m
            <br />
            <span>WIDYA AULIA.</span>
          </h1>

          <div className="hero-role hero-reveal hero-delay-3">
            <span></span>
            <h2>SOFTWARE ENGINEERING STUDENT</h2>
          </div>

          <p className="hero-description hero-reveal hero-delay-4">
            Saya membangun website dan aplikasi digital yang modern,
            responsif, interaktif, dan memiliki pengalaman pengguna yang baik.
          </p>

          <div className="hero-buttons hero-reveal hero-delay-5 flex flex-wrap">
            <Link
              href="/proyek"
              className="btn btn-primary transition-transform duration-300 hover:-translate-y-1"
            >
              Lihat Project <span>↗</span>
            </Link>

            <Link
              href="/kontak"
              className="btn btn-secondary transition-transform duration-300 hover:-translate-y-1"
            >
              Hubungi Saya <span>↗</span>
            </Link>
          </div>

          <div className="hero-scroll hero-reveal hero-delay-6">
            <span className="hero-scroll-line"></span>
            <span>SCROLL TO EXPLORE</span>
          </div>
        </div>

        <div className="hero-visual hero-reveal hero-delay-3">
          <div className="hero-image-shadow"></div>

          <div className="hero-image overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Foto profil Widya Aulia"
              width={480}
              height={580}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="hero-decoration hero-decoration-one"></div>
          <div className="hero-decoration hero-decoration-two"></div>

          <div className="hero-floating-card">
            <span className="floating-dot"></span>

            <div>
              <small>AVAILABLE FOR</small>
              <strong>NEW PROJECTS</strong>
            </div>
          </div>

          <div className="hero-number">01</div>
        </div>
      </div>
    </section>
  );
}