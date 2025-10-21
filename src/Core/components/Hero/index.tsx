"use client";
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import HeroImg from "@/Core/assets/hero.jpg";
import Animator from "../Animator";

const Hero: React.FC = () => {
  return (
    <section className={styles.container}>
      <Image src={HeroImg} alt="" priority className={styles.heroImage} />
      <div className={styles.heroText}>
        <Animator.p type="fadeIn">
          Su Design Studio, iç mimari, özel mobilya ve aksesuar tasarımı
          alanlarında çalışan yaratıcı bir ekiptir. Tutku ve detay odaklı
          yaklaşımımızla, yaşam alanlarını mimari çizimden uygulamaya kadar
          hayata geçiriyor; aynı zamanda özgün mobilya ve aksesuar
          koleksiyonlarımızla mekanlara kimlik katıyoruz.
        </Animator.p>
      </div>
      <div className={styles.heroFooter}>
        <span>Aşağı Kaydır</span>
        <span>info@sudesign.studio</span>
      </div>
    </section>
  );
};

export default Hero;
