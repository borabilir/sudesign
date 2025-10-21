"use client";
import React from "react";
import styles from "./styles.module.scss";
import Animator from "../Animator";

const Services: React.FC = () => {
  return (
    <section className={styles.container}>
      <Animator.div type="fadeRise">
        <h2>İÇ MİMARİ</h2>
        <p>
          Her mekânın karakterini ortaya çıkaran tasarımlar yapıyoruz. Detaylı
          planlama, 3D modelleme ve uygulama projeleriyle, estetik kadar
          işlevselliği de ön planda tutuyoruz.
        </p>
      </Animator.div>
      <Animator.div delay={0.2} type="fadeRise">
        <h2>MOBİLYA TASARIMI</h2>
        <p>
          Özel ölçü, malzeme ve işçilikle tasarladığımız mobilyalar; mekânlara
          özgünlük ve kimlik katıyor. Her parça, kullanıcıya özel düşünülmüş bir
          deneyim sunuyor.
        </p>
      </Animator.div>
      <Animator.div delay={0.4} type="fadeRise">
        <h2>AKSESUAR</h2>
        <p>
          Takı kutusu, kırlent, lambader gibi özenle tasarlanan aksesuarlarımız;
          mekânı tamamlayan, ruhunu güçlendiren detaylar olarak yer alıyor.
        </p>
      </Animator.div>
    </section>
  );
};

export default Services;
