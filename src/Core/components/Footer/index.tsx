"use client";
import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Animator from "../Animator";

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <div>
        <Animator.div type="fadeRise">
          <p>Avrasya cad. In mari İstanbul</p>
          <p>info@sudesign.studio</p>
          <p>+90 (535) 608 68 80</p>
          <p>Copyright © 2025</p>
        </Animator.div>
      </div>
      <Animator.div type="fadeRise">
        <ul>
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
      </Animator.div>
    </footer>
  );
};

export default Footer;
