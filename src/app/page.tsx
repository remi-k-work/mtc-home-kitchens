// component css styles
import styles from "./page.module.css";

// components
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import Intro from "@/components/Intro";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <article className={styles["page"]}>
      <header>
        <Slider />
        <Header />
      </header>
      <main>
        <Intro />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </article>
  );
}
