// component css styles
import styles from "./Intro.module.css";

// next
import Image from "next/image";

// other libraries
import clsx from "clsx";

// assets
import introContentImg from "@/assets/intro-content-image.png";

export default function Intro() {
  return (
    <article className={styles["intro"]}>
      <header>
        <Image src={introContentImg} alt={"Intro Content Image"} className="w-full object-contain" />
      </header>
      <footer>
        <h4>Quality Craftmanship from build to delivery</h4>
        <h3>Discover the beauty of a handmade kitchen</h3>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget est sit amet sapien venenatis maximus vel in urna. Nam mauris arcu, feugiat in
          finibus vitae, sollicitudin id purus. Ut imperdiet, magna eu pharetra tincidunt, mauris purus ultrices.
        </p>
        <br />
        <button type="button">ABOUT US</button>
      </footer>
    </article>
  );
}
