"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Logo from "@/Core/assets/logo.png";
import Link from "next/link";
import { CloseIcon, MenuIcon } from "../Icons";
import useDevice from "@/Core/hooks/useDevice";

const Header: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const [hidden, setHidden] = useState(false);
  const device = useDevice();
  const [openNav, setOpenNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (device.isDesktop) {
      setOpenNav(true);
      document.body.style.overflow = "auto";
    } else {
      setOpenNav(false);
      document.body.style.overflow = "auto";
    }
  }, [device.isDesktop]);

  useEffect(() => {
    if (!device.isDesktop) {
      document.body.style.overflow = openNav ? "hidden" : "auto";
    }
  }, [openNav, device.isDesktop]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setHidden(currentScroll > lastScrollY && currentScroll > 600);
      setLastScrollY(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavLinkClick = () => {
    if (!device.isDesktop) setOpenNav(false);
  };

  return (
    <header
      className={`${styles.container} ${
        hidden ? styles.hidden : ""
      }`}
    >
      <Link href="/" className={styles.logo}>
        <Image src={Logo} fill alt="Logo" priority />
      </Link>

      <div>
        <button
          onClick={() => setOpenNav((prev) => !prev)}
          className={styles.menuButton}
          aria-expanded={openNav}
          aria-controls="primary-navigation"
        >
          {openNav ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Backdrop sadece mobilde ve menü açıkken */}
        {!device.isDesktop && (
          <div onClick={() => setOpenNav(false)} aria-hidden="true" />
        )}

        <nav
          id="primary-navigation"
          ref={navRef}
          className={`${styles.navigation} ${
            openNav ? styles.navOpen : styles.navClosed
          }`}
        >
          <ul onClick={handleNavLinkClick}>
            <li>
              <Link href="/">ANASAYFA</Link>
            </li>
            <li>
              <Link href="/about">HAKKIMIZDA</Link>
            </li>
            <li>
              <Link href="/projects">PROJELERİMİZ</Link>
            </li>
            {/* <li>
              <Link href="/urunler">ÜRÜNLER</Link>
            </li> */}
            <li>
              <Link href="/contact">İLETİŞİM</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
