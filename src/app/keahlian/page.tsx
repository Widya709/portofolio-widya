import Navbar from "../../components/navbar";
import Skills from "../../components/skills";
import ThemeCustomizer from "../../components/themecustomizer";
import Footer from "../../components/footer";


export default function KeahlianPage() {
  return (
    <>
      <Navbar />
      <ThemeCustomizer />

      <main className="inner-page">
        <Skills />
      </main>

      <Footer />
    </>
  );
}