"use client";

import { useEffect, useState } from "react";

const images = [
  "/daisy.png",
  "/phone.gif",
  "/computer-1.png",
  "/books.gif",
  "/starfish.gif",
  "/kickingback.gif",
  "/mail.gif",
];

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImages = Promise.all(
      images.map(
        (src) =>
          new Promise<void>((resolve) => {
            const image = new Image();

            image.onload = () => resolve();
            image.onerror = () => resolve();

            image.src = src;
          }),
      ),
    );

    const loadFonts = document.fonts?.ready ?? Promise.resolve();

    Promise.all([loadImages, loadFonts]).then(() => {
      setIsLoading(false);
    });
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#faf9f5]">
      <span className="font-quicksand text-sm">loading...</span>
    </div>
  );
}
