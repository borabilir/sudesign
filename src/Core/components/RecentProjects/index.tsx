"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import HeroImg from "@/Core/assets/hero.jpg";
import { Projects } from "@/Core/constants/projects";

type P = (typeof Projects)[number];

function chunk<T>(arr: T[], size: number): T[][] {
  const res: T[][] = [];
  for (let i = 0; i < arr.length; i += size) res.push(arr.slice(i, i + size));
  return res;
}

const ProjectCard: React.FC<{ p: P }> = ({ p }) => (
  <Link
    href={`/projects/${p.slug}`}
    className={styles.card}
    aria-label={`${p.name} sayfasına git`}
  >
    <Image
      src={(p.images?.[0] as any) || HeroImg}
      alt={p.name}
      width={800}
      height={600}
      className={styles.cardImage}
    />
    <div className={styles.overlayText}>{p.name}</div>
  </Link>
);

const RecentProjects: React.FC = () => {
  // en yeniler en solda olacak şekilde: [-1, -2, -3, -4]
  const recent = Projects.slice(-4).reverse();
  const rows = chunk(recent, 2); // 2’şer kartlık satırlar

  return (
    <section className={styles.container}>
      <h1>Son Projeler</h1>

      {rows.map((row, rIdx) => (
        <div key={rIdx} className={styles.frame}>
          {row.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      ))}
    </section>
  );
};

export default RecentProjects;
