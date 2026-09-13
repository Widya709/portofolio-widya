import Skills from "../../components/skills";
import ThemeCustomizer from "../../components/themecustomizer";
import Footer from "../../components/footer";

export default function KeahlianPage() {
  return (
    <>
      <ThemeCustomizer />

      <main className="inner-page">
        <Skills />
      </main>

      <footer />
    </>
  );
}