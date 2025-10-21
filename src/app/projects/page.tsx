"use client";
import React from "react";
import Image from "next/image";
import Animator from "@/Core/components/Animator";
import { Projects } from "@/Core/constants/projects";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

const ProjectsPage: React.FC = () => {
  const router = useRouter();

  const handleClick = (slug: string) => {
    router.push(`/projects/${slug}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Animator.h2 type="fadeDrop">PROJELERİMİZ</Animator.h2>
        <Animator.div className={styles.gallery}>
          {Projects.map((p, i) => (
            <div
              key={i}
              className={styles.imageWrapper}
              onClick={() => handleClick(p.slug)}
              role="button"
              aria-label={`${p.name} detay`}
            >
              <Image
                src={p.images[0]}
                alt={`${p.name} ${i + 1}`}
                fill
                className={styles.image}
                sizes="(max-width:1024px) 100vw, 25vw"
              />

              {/* overlay */}
              <div className={styles.overlay}>
                <span className={styles.title}>{p.name}</span>
              </div>
            </div>
          ))}
        </Animator.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
