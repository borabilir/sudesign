"use client";
import { useState } from "react";
import styles from "./styles.module.scss";
import Animator from "@/Core/components/Animator";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, subject, message } = formData;

    // mailto linkini encode et
    const mailto = `mailto:info@sudesign.studio?subject=${encodeURIComponent(
      subject || "İletişim Formu"
    )}&body=${encodeURIComponent(
      `İsim: ${firstName} ${lastName}
E-posta: ${email}
Telefon: ${phone || "-"}
---------------------------
${message}`
    )}`;

    window.location.href = mailto;
  };

  return (
    <section className={styles.page}>
      <Animator.h1 type="fadeDrop" className={styles.title}>İLETİŞİM</Animator.h1>
       <div className={styles.top}>
        <Animator.div type="fadeDrop" delay={0.2} className={styles.info}>
          <p>
            Avrasya cad. In mari İstanbul
            <br />
            Beylikdüzü - İstanbul
            <br />
            <a href="tel:+905356086880">
              +90 (535) 608 68 80
            </a>
          </p>

          <a className={styles.mail} href="mailto:info@sudesign.studio">
            info@sudesign.studio
          </a>
        </Animator.div>

        <div className={styles.map}>
          <iframe
            title="In Mari Sitesi"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?hl=tr&output=embed&q=In%20Mari%20Sitesi%2040.977095,28.6669159"
            allowFullScreen
          />
        </div>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label>İsim *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.field}>
            <label>Soyisim *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label>E-posta adresi *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.field}>
            <label>Telefon No</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field} style={{ flexBasis: "100%" }}>
            <label>Konu</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field} style={{ flexBasis: "100%" }}>
            <label>Mesaj</label>
            <textarea
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.actions}>
          <button type="submit" className={styles.submit}>
            Gönder
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;