"use client";
import React from "react";
import Image from "next/image";
import AboutImage from "@/Core/assets/aboutpage.jpeg";
import styles from "./styles.module.scss";
import Animator from "@/Core/components/Animator";

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={AboutImage}
          alt="Su Design Studio"
          priority
          className={styles.imgResponsive}
        />
      </div>
      <div className={styles.content}>
        <Animator.h2 type="fadeDrop">HAKKIMIZDA</Animator.h2>
        <Animator.p type="fadeDrop" delay={0.2}>
          Su Design Studio Furniture, İstanbul merkezli bir tasarım stüdyosudur.
          İç mimari, özel mobilya ve aksesuar tasarımı alanlarında çalışır.
          Stüdyomuzun felsefesi, her mekânın kendine özgü kimliğini ortaya
          çıkarmak ve insan ihtiyaçlarına odaklanmaktır. Disiplinlerarası ve
          bütüncül bir yaklaşımla, konseptten uygulamaya kadar yenilikçi ve
          özgün çözümler üretiyoruz.
        </Animator.p>
        <br/>
        <Animator.p type="fadeDrop" delay={0.4}>
          Minimalist bir tasarım dilini benimseyen stüdyomuz, doğal malzemeler,
          dengeli oranlar ve zamansız detaylarla mekânlara kimlik kazandırır.
          Her projede estetik, işlevsellik ve özgünlük dengesi ön plandadır.
        </Animator.p>
      </div>
    </div>
  );
};

export default About;
