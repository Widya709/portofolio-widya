import Navbar from "../../components/navbar";
import Projects from "../../components/projects";
import ThemeCustomizer from "../../components/themecustomizer";
import Footer from "../../components/footer";

function Tentang() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-heading">
          <span>01</span>
          <h2>About Me</h2>
        </div>

        <div className="about-layout">
          <div className="about-side">
            <span>01</span>
            <p>GET TO KNOW ME</p>
          </div>

          <div className="about-content">
            <h3>
              I&apos;m Widya Aulia, a Software Engineering student
              interested in web development and UI/UX.
            </h3>

            <p>
              Saya adalah siswa kelas XI RPL di SMKN 1 Pasuruan.
              Saya tertarik dengan teknologi dan senang membuat
              website yang modern, responsif, dan mudah digunakan.
            </p>

            <p>
              Saat ini saya sedang memperdalam Next.js, JavaScript,
              dan teknologi web lainnya untuk meningkatkan kemampuan
              saya dalam membuat aplikasi digital.
            </p>

            <div className="about-info">
              <div>
                <span>EDUCATION</span>
                <strong>XI RPL</strong>
                <small>SMKN 1 Pasuruan</small>
              </div>

              <div>
                <span>INTEREST</span>
                <strong>WEB DEVELOPMENT</strong>
                <small>UI/UX Design</small>
              </div>

              <div>
                <span>HOBBY</span>
                <strong>WATCHING MOVIES</strong>
                <small>My free time</small>
              </div>

              <div>
                <span>GOAL</span>
                <strong>LAWYER</strong>
                <small>Future career</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function TentangPage() {
  return (
    <>
      <Navbar />
      <ThemeCustomizer />

      <main className="inner-page">
        <Tentang />
      </main>

      <Footer />
    </>
  );
}