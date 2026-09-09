import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-container">
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
            <h2>FULL STACK WEB DEVELOPER</h2>
          </div>

          <p className="hero-description hero-reveal hero-delay-4">
            Saya membangun website dan aplikasi digital yang modern,
            responsif, interaktif, dan memiliki pengalaman pengguna yang baik.
          </p>

          <div className="hero-buttons hero-reveal hero-delay-5">
            <Link href="/proyek" className="btn btn-primary">
              Lihat Project <span>↗</span>
            </Link>

            <Link href="/kontak" className="btn btn-secondary">
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

          <div className="hero-image">
            <Image
              src="/profile.jpg.jpg"
              alt="Foto profil Widya Aulia"
              width={480}
              height={580}
              priority
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