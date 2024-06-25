"use client";

// component css styles
import styles from "./Testimonials.module.css";

// react
import { useState } from "react";

// next
import Link from "next/link";

// other libraries
import clsx from "clsx";

export default function Testimonials() {
  const [testimonialIds] = useState(["test1", "test2", "test3"]);
  const [currentTest, setCurrentTest] = useState(0);

  return (
    <article className={styles["testimonials"]}>
      <header>
        <Link
          href={`#${testimonialIds[Math.max(0, Math.min(currentTest - 1, 2))]}`}
          onClick={() => setCurrentTest((prev) => Math.max(0, Math.min(prev - 1, 2)))}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="459.645 264.644 70.711 70.711">
            <path
              d="m494.293 334.648-33.941-33.941a1 1 0 0 1 0-1.414l33.94-33.94a1 1 0 1 1 1.415 1.413L462.473 300l33.234 33.234a1 1 0 1 1-1.414 1.414Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </Link>
      </header>
      <section className="carousel w-full">
        <div id={testimonialIds[0]} className="carousel-item w-full">
          <div className="m-auto">
            <h4 className="m-auto">What Our Customers Say</h4>
            <h3 className="m-auto">From Frustration to Joy: How Created My Dream Kitchen</h3>
            <br />
            <p>
              My old kitchen was a constant source of frustration. Outdated cabinets, cramped layout, and malfunctioning appliances made cooking a chore. I knew
              it was time for a renovation, but I felt overwhelmed by the process. The finished product is beyond anything I could have imagined. My kitchen is
              now a beautiful, functional space that makes cooking a joy. The quality of the materials and craftsmanship is outstanding. They transformed my
              kitchen and my cooking experience!
            </p>
            <br />
            <p>John Miller, Seattle</p>
            <br />
            <button type="button">FREQUENTLY ASKED QUESTIONS</button>
          </div>
        </div>
        <div id={testimonialIds[1]} className="carousel-item w-full">
          <div className="m-auto">
            <h4 className="m-auto">What Our Customers Say</h4>
            <h3 className="m-auto">Over 35 years experience designing handmade kitchens</h3>
            <br />
            <p>
              Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all
              of my emails and delivery of the kitchen was as planned.
            </p>
            <br />
            <p>Jane, Dundee</p>
            <br />
            <button type="button">FREQUENTLY ASKED QUESTIONS</button>
          </div>
        </div>
        <div id={testimonialIds[2]} className="carousel-item w-full">
          <div className="m-auto">
            <h4 className="m-auto">What Our Customers Say</h4>
            <h3 className="m-auto">Modern Marvel: My Kitchen Transformation</h3>
            <br />
            <p>
              My old kitchen felt stuck in the past. Dark cabinets, cramped countertops, and a lack of storage made it a struggle to cook and entertain. I
              dreamt of a modern kitchen that was both stylish and functional, but I was not sure where to begin. The designer, Michael, understood my vision
              perfectly. He presented innovative ideas that maximized space and incorporated cutting-edge features, all while staying within my budget.
            </p>
            <br />
            <p>Emily Garcia, San Francisco</p>
            <br />
            <button type="button">FREQUENTLY ASKED QUESTIONS</button>
          </div>
        </div>
      </section>
      <footer>
        <Link
          href={`#${testimonialIds[Math.max(0, Math.min(currentTest + 1, 2))]}`}
          onClick={() => setCurrentTest((prev) => Math.max(0, Math.min(prev + 1, 2)))}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="1469.644 264.644 70.711 70.711">
            <path
              d="m1505.707 334.648 33.941-33.941a1 1 0 0 0 0-1.414l-33.94-33.94a1 1 0 1 0-1.415 1.413L1537.527 300l-33.234 33.234a1 1 0 1 0 1.414 1.414Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </Link>
      </footer>
    </article>
  );
}
