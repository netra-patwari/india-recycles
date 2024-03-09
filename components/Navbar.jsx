"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/img/logo/logo-type=defaultlogo.png";
import CTA from "./CTA";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z"
              />
            </svg>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link href="/" onClick={openNav}>
                HOME
              </Link>
            </li>

            <li>
              <Link href="/donate" onClick={openNav}>
                DONATE
              </Link>
            </li>

            <li>
              <Link href="/about" onClick={openNav}>
                ABOUT US
              </Link>
            </li>

            <li>
              <Link href="/contact" onClick={openNav}>
                CONTACT US
              </Link>
            </li>

            <li>
              <Link href="/droplocation" onClick={openNav}>
                DROP LOCATIONS
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
            <Link href="/">
              <Image
                src={Logo}
                width={100}
                height={67}
                alt="Logo"
                loading="lazy"
                placeholder = 'empty'
              />
            </Link>
          </div>

          <ul className="navbar__links">
            <li>
              <Link className="f" href="/donate">
                DONATE
              </Link>
            </li>

            <li>
              {" "}
              <Link className="" href="/about">
                ABOUT US
              </Link>
            </li>

            <li>
              {" "}
              <Link className="" href="/contact">
                CONTACT US
              </Link>
            </li>

            <li>
              {" "}
              <CTA title={'DROP LOCATIONS'}></CTA>
            </li>
          </ul>
          
          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4 18q-.425 0-.712-.288T3 17q0-.425.288-.712T4 16h16q.425 0 .713.288T21 17q0 .425-.288.713T20 18H4Zm0-5q-.425 0-.712-.288T3 12q0-.425.288-.712T4 11h16q.425 0 .713.288T21 12q0 .425-.288.713T20 13H4Zm0-5q-.425 0-.712-.288T3 7q0-.425.288-.712T4 6h16q.425 0 .713.288T21 7q0 .425-.288.713T20 8H4Z"
              />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
