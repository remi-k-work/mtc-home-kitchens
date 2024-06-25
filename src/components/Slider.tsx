"use client";

// component css styles
import styles from "./Slider.module.css";

// react
import { useState } from "react";

// next
import Link from "next/link";
import Image from "next/image";

// other libraries
import clsx from "clsx";

// assets
import sliderImg01 from "@/assets/slider-img-01.png";
import sliderImg02 from "@/assets/slider-img-02.png";
import sliderImg03 from "@/assets/slider-img-03.png";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <article className={styles["slider"]}>
      <header className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <section className={styles["slider__slide"]}>
            <Image src={sliderImg01} alt={"Slide 01"} className="w-full object-contain" priority />
            <footer>
              <h2>Design and order your new kitchen online today</h2>
              <h1>Bespoke & made to measure handmade kitchen design</h1>
              <br />
              <button type="button">ORDER NOW</button>
            </footer>
          </section>
        </div>
        <div id="item2" className="carousel-item w-full">
          <section className={styles["slider__slide"]}>
            <Image src={sliderImg02} alt={"Slide 02"} className="w-full object-contain" />
            <footer>
              <h2>Quality Craftmanship from build to delivery</h2>
              <h1>Discover the beauty of a handmade kitchen</h1>
              <br />
              <button type="button">ORDER NOW</button>
            </footer>
          </section>
        </div>
        <div id="item3" className="carousel-item w-full">
          <section className={styles["slider__slide"]}>
            <Image src={sliderImg03} alt={"Slide 03"} className="w-full object-contain" />
            <footer>
              <h2>What Our Customers Say</h2>
              <h1>Over 35 years experience designing handmade kitchens</h1>
              <br />
              <button type="button">ORDER NOW</button>
            </footer>
          </section>
        </div>
      </header>
      <footer className="flex w-full justify-center gap-3 py-6">
        <Link href="#item1" className={clsx(currentSlide === 0 && styles["active"])} onClick={() => setCurrentSlide(0)} />
        <Link href="#item2" className={clsx(currentSlide === 1 && styles["active"])} onClick={() => setCurrentSlide(1)} />
        <Link href="#item3" className={clsx(currentSlide === 2 && styles["active"])} onClick={() => setCurrentSlide(2)} />
      </footer>
    </article>
  );
}
