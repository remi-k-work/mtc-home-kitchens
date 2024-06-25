// component css styles
import styles from "./Header.module.css";

// next
import Link from "next/link";
import Image from "next/image";

// other libraries
import clsx from "clsx";
import { Bars4Icon, ShoppingCartIcon } from "@heroicons/react/24/solid";

// assets
import mhkLogo from "@/assets/mhk-logo.svg";

export default function Header() {
  return (
    <section className={styles["header"]}>
      <div className={styles["header__social"]}>
        <Link href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202z"
            />
          </svg>
        </Link>
        <Link href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
            />
          </svg>
        </Link>
        <Link href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor">
              <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" />
              <path d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m1.008-5.5h-.01" />
            </g>
          </svg>
        </Link>
      </div>
      <nav>
        <Link href="/" className="hidden lg:block">
          SHOP
        </Link>
        <Link href="/" className="hidden lg:block">
          PLAN MY KITCHEN
        </Link>
        <Image src={mhkLogo} height={32} alt={"MHK"} />
        <Link href="/" className="hidden lg:block">
          ABOUT US
        </Link>
        <Link href="/" className="hidden lg:block">
          GALLERY
        </Link>
      </nav>
      <div className="hidden lg:block">
        <div className={clsx(styles["header__my-order"], "btn btn-ghost")}>
          MY ORDER
          <ShoppingCartIcon width={20} height={20} />
        </div>
      </div>
      <div className="lg:hidden">
        <NavMenu />
      </div>
    </section>
  );
}

function NavMenu() {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className={clsx(styles["header__nav-menu"], "btn btn-ghost")}>
        <Bars4Icon width={24} height={24} />
      </div>
      <ul tabIndex={0} className="menu dropdown-content z-10 w-52 rounded-box bg-base-100 p-2 shadow">
        <li>
          <Link href="/">SHOP</Link>
        </li>
        <li>
          <Link href="/">PLAN MY KITCHEN</Link>
        </li>
        <li>
          <Link href="/">ABOUT US</Link>
        </li>
        <li>
          <Link href="/">GALLERY</Link>
        </li>
        <li>
          <div className={clsx(styles["header__my-order"], "btn btn-ghost")}>
            MY ORDER
            <ShoppingCartIcon width={20} height={20} />
          </div>
        </li>
      </ul>
    </div>
  );
}
