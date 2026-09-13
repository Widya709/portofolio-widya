import Link from "next/link";
import ThemeCustomizer from "../components/themecustomizer";
import Footer from "../components/footer";

export default function NotFound() {
  return (
    <>
      <ThemeCustomizer />

      <main className="not-found-page">
        <div className="not-found-glow"></div>

        <div className="not-found-content">
          <div className="not-found-number">
            <span>4</span>
            <div className="not-found-circle">
              <div className="not-found-dot"></div>
            </div>
            <span>4</span>
          </div>

          <div className="not-found-line"></div>

          <p className="not-found-label">PAGE NOT FOUND</p>

          <h1>Karya Proyek Tidak Ditemukan</h1>

          <p className="not-found-description">
            Halaman yang kamu cari tidak tersedia atau proyek tersebut tidak
            terdaftar di portfolio.
          </p>

          <Link href="/proyek" className="not-found-button">
            <span>Kembali ke Projects</span>
            <span className="not-found-arrow">↗</span>
          </Link>
        </div>
      </main>

      <footer>{null}</footer>

      <style>{`
        .not-found-page {
          position: relative;
          min-height: calc(100vh - 160px);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: var(--background);
          color: var(--foreground);
          padding: 120px 24px;
        }

        .not-found-glow {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: rgba(120, 210, 255, 0.12);
          filter: blur(80px);
          animation: notFoundGlow 5s ease-in-out infinite;
        }

        .not-found-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 760px;
          text-align: center;
          animation: notFoundContent 0.9s ease forwards;
        }

        .not-found-number {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 30px;
          font-size: clamp(100px, 18vw, 190px);
          font-weight: 800;
          line-height: 0.8;
          letter-spacing: -0.08em;
        }

        .not-found-number > span {
          animation: notFoundNumber 0.8s ease forwards;
        }

        .not-found-number > span:first-child {
          animation-delay: 0.1s;
        }

        .not-found-number > span:last-child {
          animation-delay: 0.3s;
        }

        .not-found-circle {
          position: relative;
          width: clamp(85px, 13vw, 145px);
          height: clamp(85px, 13vw, 145px);
          border: 2px solid rgba(130, 210, 255, 0.8);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: notFoundCircle 4s linear infinite;
        }

        .not-found-circle::before {
          content: "";
          position: absolute;
          inset: 12px;
          border: 1px solid rgba(130, 210, 255, 0.35);
          border-radius: 50%;
        }

        .not-found-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #8edcff;
          box-shadow: 0 0 25px rgba(142, 220, 255, 0.9);
          animation: notFoundDot 1.8s ease-in-out infinite;
        }

        .not-found-line {
          width: 70px;
          height: 1px;
          margin: 0 auto 24px;
          background: rgba(142, 220, 255, 0.7);
          animation: notFoundLine 1s ease forwards;
        }

        .not-found-label {
          margin: 0 0 14px;
          color: #8edcff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          animation: notFoundFade 0.8s ease 0.4s both;
        }

        .not-found-content h1 {
          margin: 0;
          font-size: clamp(30px, 5vw, 52px);
          line-height: 1.1;
          letter-spacing: -0.04em;
          animation: notFoundFade 0.8s ease 0.5s both;
        }

        .not-found-description {
          max-width: 540px;
          margin: 20px auto 0;
          font-size: 15px;
          line-height: 1.8;
          opacity: 0.65;
          animation: notFoundFade 0.8s ease 0.6s both;
        }

        .not-found-button {
          display: inline-flex;
          align-items: center;
          gap: 18px;
          margin-top: 34px;
          padding: 14px 18px 14px 22px;
          border: 1px solid rgba(142, 220, 255, 0.6);
          border-radius: 999px;
          color: var(--foreground);
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          transition:
            transform 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease;
          animation: notFoundFade 0.8s ease 0.7s both;
        }

        .not-found-button:hover {
          transform: translateY(-4px);
          background: rgba(142, 220, 255, 0.12);
          border-color: #8edcff;
        }

        .not-found-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #8edcff;
          color: #0b1720;
          font-size: 17px;
          transition: transform 0.3s ease;
        }

        .not-found-button:hover .not-found-arrow {
          transform: rotate(45deg);
        }

        @keyframes notFoundContent {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes notFoundNumber {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes notFoundCircle {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes notFoundDot {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
        }

        @keyframes notFoundGlow {
          0%,
          100% {
            transform: scale(0.9);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.15);
            opacity: 1;
          }
        }

        @keyframes notFoundLine {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 70px;
            opacity: 1;
          }
        }

        @keyframes notFoundFade {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 600px) {
          .not-found-page {
            min-height: calc(100vh - 120px);
            padding: 80px 20px;
          }

          .not-found-number {
            gap: 6px;
          }

          .not-found-description {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}