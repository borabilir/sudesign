"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import styles from "./styles.module.scss";
import { Projects } from "@/Core/constants/projects";
import { useCallback, useState } from "react";
import Lightbox from "@/Core/components/Lightbox";
import React from "react";
import Animator from "@/Core/components/Animator";

interface Props {
  params: Promise<{ slug: string }>;
}

export default function ProjectDetails({ params }: Props) {
  const { slug } = React.use(params);
  const project = Projects.find((p) => p.slug === slug);

  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const onPrev = useCallback(
    () =>
      setIdx((i) => (i - 1 + (project?.images.length || 0)) % (project?.images.length || 1)),
    [project?.images.length]
  );
  const onNext = useCallback(
    () => setIdx((i) => (i + 1) % (project?.images.length || 1)),
    [project?.images.length]
  );

  if (!project) return notFound();

  const onThumbClick = (i: number) => {
    setIdx(i);
    setOpen(true);
  };
  const onClose = () => setOpen(false);

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <Animator.p type="fadeDrop" className={styles.year}>{project.year}</Animator.p>
        <Animator.h1 type="fadeRise" className={styles.title}>{project.name}</Animator.h1>

        <div className={styles.info}>
          <Animator.p type="fadeDrop">
            <strong>HİZMET</strong> {project.service}
          </Animator.p>
          <Animator.p type="fadeDrop">
            <strong>PROJE TİPİ</strong> {project.type}
          </Animator.p>
          <Animator.p type="fadeDrop">
            <strong>Lokasyon</strong> {project.location}
          </Animator.p>
        </div>
      </div>

      <Animator.div className={styles.gallery}>
        {project.images.map((img, i) => (
          <div
            key={i}
            className={styles.imageWrapper}
            onClick={() => onThumbClick(i)}
            role="button"
            aria-label="Büyüt"
          >
            <Image
              src={img}
              alt={`${project.name} ${i + 1}`}
              fill
              className={styles.image}
              sizes="(max-width:1024px) 100vw, 25vw"
            />
          </div>
        ))}
      </Animator.div>

      {open && (
        <Lightbox
          images={project.images}
          index={idx}
          onClose={onClose}
          onPrev={onPrev}
          onNext={onNext}
        />
      )}
    </section>
  );
}
