"use client";

import { BottomMenu } from "@/components/BottomMenu";
import Image from "next/image";
import { useRef, useState } from "react";
import { books } from "./data";
import { BackButton } from "@/components/Back";
import { BookRating } from "@/components/BookRating";
import { useTickSound } from "@/utils/useSound";

export default function Books() {
  const [hoveredBook, setHoveredBook] = useState<number | null>(null);
  const [selectedBook, setSelectedBook] = useState<number | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const playTick = useTickSound();

  const handleMouseEnter = (index: number) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }

    setHoveredBook(index);
    playTick();
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setHoveredBook(null);
    }, 100);
  };

  const handleMobileBookClick = (index: number) => {
    setSelectedBook((current) => (current === index ? null : index));
    playTick();
  };

  const selected = selectedBook !== null ? books[selectedBook] : null;

  return (
    <main className="relative min-h-dvh overflow-hidden bg-[#faf9f5] font-quicksand text-base">
      <section className="mx-auto flex min-h-dvh w-full max-w-[700px] flex-col px-6 pb-20 pt-6 md:h-[calc(100dvh-120px)] md:max-h-[720px] md:pt-20">
        <header className="mb-8">
          <h1 className="font-plinko text-[30px]">bookshelf</h1>
          <span>
            all of the books I've read in 2026 so far! hover/click to see more
            info and my reviews.
          </span>
        </header>
        <div className="md:hidden">
          <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max items-end gap-2">
              {books.map((book, index) => {
                const isSelected = selectedBook === index;
                return (
                  <button
                    key={book.title}
                    type="button"
                    onClick={() => handleMobileBookClick(index)}
                    className={`flex shrink-0 cursor-pointer items-end transition-opacity duration-200 ${
                      selectedBook !== null && !isSelected ? "opacity-40" : ""
                    }`}
                  >
                    <Image
                      src={book.image}
                      width={100}
                      height={100}
                      alt={book.title}
                      className="h-[230px] w-auto object-contain"
                    />
                  </button>
                );
              })}
            </div>
          </div>
          {selected && (
            <div className="pt-5">
              <div className="flex items-start justify-between gap-4">
                <span className="text-[11px] uppercase tracking-[0.15em]">
                  {selected.year}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedBook(null)}
                  className="cursor-pointer text-sm"
                >
                  ×
                </button>
              </div>
              <div className="mt-3">
                <h2 className="text-[20px] leading-[0.95]">{selected.title}</h2>
                <p className="mt-2 text-sm">{selected.author}</p>

                {selected.stars !== undefined && (
                  <BookRating rating={selected.stars} />
                )}
              </div>
              {selected.review && (
                <p className="mt-5 border-t border-black pt-3 text-sm leading-relaxed">
                  {selected.review}
                </p>
              )}
            </div>
          )}
        </div>
        <div className="relative left-1/2 hidden w-full -translate-x-1/2 px-2 md:block">
          <div className="flex w-max items-end gap-1">
            {books.map((book, index) => {
              const isHovered = hoveredBook === index;
              const isAfterHovered =
                hoveredBook !== null && index > hoveredBook;
              return (
                <div
                  key={book.title}
                  className="relative shrink-0 transition-transform duration-300 ease-out"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    transform: isAfterHovered
                      ? "translateX(290px)"
                      : "translateX(0)",
                  }}
                >
                  <Image
                    src={book.image}
                    width={100}
                    height={100}
                    alt={book.title}
                    className="w-auto"
                    style={{
                      height: `clamp(280px, calc(100dvh - 300px), ${book.height}px)`,
                    }}
                  />
                  {isHovered && (
                    <div
                      className="absolute left-full top-1/2 z-10 flex h-full w-[270px] -translate-y-1/2 flex-col overflow-hidden bg-[#fcfaf2] p-4"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="shrink-0">
                        <div className="flex items-start justify-between gap-4">
                          <span className="text-[11px] uppercase tracking-[0.15em]">
                            {book.year}
                          </span>
                        </div>
                        <div className="mt-2">
                          <h2 className="font-quicksand text-[20px] leading-[0.95]">
                            {book.title}
                          </h2>
                          <p className="my-2 text-sm">{book.author}</p>
                        </div>
                      </div>
                      {book.review && (
                        <div className="min-h-0 flex-1 overflow-y-auto">
                          <p className="text-sm leading-relaxed">
                            {book.review}
                          </p>
                        </div>
                      )}
                      {book.stars !== undefined && (
                        <div className="shrink-0">
                          <BookRating rating={book.stars} />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <BackButton />
      </section>
      <BottomMenu />
    </main>
  );
}
