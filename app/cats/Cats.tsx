"use client";

import { BottomMenu } from "@/components/BottomMenu";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { catPhotos, INITIAL_REPEAT_COUNT, REPEATS_PER_LOAD } from "./data";

export default function Cats() {
  const [repeatCount, setRepeatCount] = useState(INITIAL_REPEAT_COUNT);
  const loadMoreTriggerRef = useRef<HTMLDivElement>(null);
  const isAddingMoreRef = useRef(false);

  const repeatedPhotos = useMemo(
    () =>
      Array.from({ length: repeatCount }, (_, repeatIndex) => {
        const shiftedPhotos = catPhotos.map(
          (_, photoIndex) =>
            catPhotos[(photoIndex + repeatIndex) % catPhotos.length],
        );
        const photosForRepeat =
          repeatIndex % 2 === 0 ? shiftedPhotos : [...shiftedPhotos].reverse();

        return photosForRepeat.map((photo, photoIndex) => ({
          ...photo,
          repeatIndex,
          photoIndex,
        }));
      }).flat(),
    [repeatCount],
  );

  useEffect(() => {
    const trigger = loadMoreTriggerRef.current;

    if (!trigger) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || isAddingMoreRef.current) {
          return;
        }

        isAddingMoreRef.current = true;
        setRepeatCount((count) => count + REPEATS_PER_LOAD);

        requestAnimationFrame(() => {
          isAddingMoreRef.current = false;
        });
      },
      { rootMargin: "1200px 0px", threshold: 0 },
    );

    observer.observe(trigger);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-dvh bg-[#faf9f5] pb-24 font-quicksand">
      <section className="mx-auto w-full max-w-[1500px] px-4 pb-10 pt-6 md:px-8 md:pt-20">
        <header className="mb-8">
          <h1 className="font-plinko text-[30px]">my cats</h1>
        </header>
        <div className="columns-3 gap-2 md:gap-4 lg:columns-5">
          {repeatedPhotos.map((photo, index) => (
            <figure
              key={`${photo.src}-${photo.repeatIndex}-${photo.photoIndex}`}
              className="mb-2 break-inside-avoid md:mb-4"
            >
              <Image
                src={photo.src}
                alt=""
                width={4032}
                height={3024}
                sizes="(max-width: 767px) 33vw, (max-width: 1279px) 25vw, 20vw"
                loading={index < 6 ? "eager" : "lazy"}
                className="block h-auto w-full select-none"
                draggable={false}
              />
            </figure>
          ))}
        </div>
        <div
          ref={loadMoreTriggerRef}
          aria-hidden="true"
          className="h-px w-full"
        />
      </section>
      <BottomMenu />
    </main>
  );
}
