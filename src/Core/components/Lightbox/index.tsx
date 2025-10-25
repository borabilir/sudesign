"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image, { StaticImageData } from "next/image";
import styles from "./lightbox.module.scss";
import ChevronLeftIcon from "../Icons/chevronLeft";
import ChevronRightIcon from "../Icons/chevronRight";
import { CloseIcon } from "../Icons";

type Img = string | StaticImageData;

interface Props {
  images: Img[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: Props) {
  const startX = useRef<number | null>(null);

  // ESC / ← →
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  // Basit swipe
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current == null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (dx > 40) onPrev();
    if (dx < -40) onNext();
    startX.current = null;
  };

  const isVideo = (src: Img) => {
    if (typeof src === 'string') {
      return src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.mov');
    }
    return false;
  };

  const img = images[index];

  return createPortal(
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* içerik alanına tıklayınca kapanmasın */}
      <div
        className={styles.stage}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button
          className={`${styles.iconBtn} ${styles.close}`}
          aria-label="Kapat"
          onClick={onClose}
        >
          <CloseIcon />
        </button>

        <button
          className={`${styles.iconBtn} ${styles.prev}`}
          aria-label="Önceki"
          onClick={onPrev}
        >
          <ChevronLeftIcon />
        </button>
        <div className={styles.imageWrap}>
          {isVideo(img) ? (
            <video
              src={typeof img === 'string' ? img : ''}
              className={styles.image}
              controls
              autoPlay
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          ) : (
            <Image
              src={img}
              alt={`image ${index + 1}`}
              fill
              className={styles.image}
              sizes="100vw"
              priority
            />
          )}
        </div>
        <button
          className={`${styles.iconBtn} ${styles.next}`}
          aria-label="Sonraki"
          onClick={onNext}
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>,
    document.body
  );
}
