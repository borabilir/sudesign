import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import About1 from "@/Core/assets/about1.jpg";
import About2 from "@/Core/assets/about2.jpg";
import About3 from "@/Core/assets/about3.jpg";

const About: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.text}>
        <h2>Hakkında</h2>
        <p>
          Bizim için tasarım, insanın yaşam alışkanlıklarını ve mekânın
          kimliğini anlamakla başlar. Mimarlık, mobilya ve aksesuarları bütüncül
          bir yaklaşımla ele alıyor; her projeyi kullanıcıya özel, yenilikçi bir
          deneyime dönüştürüyoruz.
        </p>
      </div>

      <div className={styles.images}>
        <div className={styles.imageWrapper}>
          <Image src={About1} alt="" fill className={styles.about1} />
        </div>
        <div className={styles.imageWrapper}>
          <Image src={About2} alt="" fill className={styles.about2} />
        </div>
        <div className={styles.imageWrapper}>
          <Image src={About3} alt="" fill className={styles.about3} />
        </div>
      </div>
    </section>
  );
};

export default About;
