// component css styles
import styles from "./Gallery.module.css";

// next
import Image from "next/image";

// other libraries
import clsx from "clsx";

// assets
import galleryImg01 from "@/assets/cust-gallery-img-01.png";
import galleryImg02 from "@/assets/cust-gallery-img-02.png";
import galleryImg03 from "@/assets/cust-gallery-img-03.png";
import galleryImg04 from "@/assets/cust-gallery-img-04.png";

export default function Gallery() {
  return (
    <article className={styles["gallery"]}>
      <header>
        <h3>Customer Gallery</h3>
        <br />
      </header>
      <section>
        <Image src={galleryImg01} alt={"Image 01"} className="w-full object-contain" />
        <Image src={galleryImg02} alt={"Image 02"} className="w-full object-contain" />
        <Image src={galleryImg03} alt={"Image 03"} className="w-full object-contain" />
        <Image src={galleryImg04} alt={"Image 04"} className="w-full object-contain" />
      </section>
      <footer>
        <br />
        <button type="button">VIEW MORE</button>
      </footer>
    </article>
  );
}
