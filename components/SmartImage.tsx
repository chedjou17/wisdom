"use client";

import { useState } from "react";

export function SmartImage({
  src,
  fallback = "/images/log.png",
  alt,
  className = "",
  loading = "lazy",
  width,
  height
}: {
  src: string;
  fallback?: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  width?: number;
  height?: number;
}) {
  const fallbackList = Array.from(new Set([src, fallback, "/images/log.png", "/images/logo-real.png"]));
  const [index, setIndex] = useState(0);
  const currentSrc = fallbackList[index] ?? fallback;

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      width={width}
      height={height}
      onError={() => {
        setIndex((value) => Math.min(value + 1, fallbackList.length - 1));
      }}
    />
  );
}
