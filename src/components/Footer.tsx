// component css styles
import styles from "./Footer.module.css";

// next
import Image from "next/image";

// assets
import footerBackg from "@/assets/footer.png";
import mhkLogo from "@/assets/mhk-logo.svg";
import followIcon01 from "@/assets/footer-follow-icon-01.svg";
import followIcon02 from "@/assets/footer-follow-icon-02.svg";
import followIcon03 from "@/assets/footer-follow-icon-03.svg";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <Image src={footerBackg} alt={"Footer"} className="h-full object-cover" />
      <article>
        <header>
          <hr />
          <Image src={mhkLogo} height={32} alt={"MHK"} />
          <hr />
        </header>
        <section>
          <div>
            <h5>About</h5>
            <ul>
              <li className="link-hover link">SHOP</li>
              <li className="link-hover link">PLAN MY KITCHEN</li>
              <li className="link-hover link">ABOUT US</li>
              <li className="link-hover link">GALLERY</li>
            </ul>
          </div>
          <div>
            <h5>Service</h5>
            <ul>
              <li className="link-hover link">FAQ</li>
              <li className="link-hover link">CONTACT</li>
              <li className="link-hover link">HOW TO BUY</li>
              <li className="link-hover link">DOWNLOADS</li>
            </ul>
          </div>
          <div>
            <h5>Info</h5>
            <ul>
              <li className="link-hover link">DELIVERY</li>
              <li className="link-hover link">TERMS</li>
              <li className="link-hover link">PRIVACY</li>
            </ul>
          </div>
          <div>
            <h5>Follow</h5>
            <ul className="flex flex-wrap items-center gap-4">
              <li>
                <Image src={followIcon01} height={24} alt={"Follow"} />
              </li>
              <li>
                <Image src={followIcon02} height={24} alt={"Follow"} />
              </li>
              <li>
                <Image src={followIcon03} height={24} alt={"Follow"} />
              </li>
            </ul>
          </div>
        </section>
        <footer>
          <p className="m-auto">Copyright Online MTC Home Kitchens 2018 - All rights reserved. Responsive website design, Development & Hosting by mtc.</p>
        </footer>
      </article>
    </footer>
  );
}
