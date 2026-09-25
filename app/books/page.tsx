"use client";

import { BottomMenu } from "@/components/BottomMenu";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { books } from "./data";

const stars = [1, 2, 3, 4, 5];

export default function Books() {
  const [hoveredBook, setHoveredBook] = useState<number | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (index: number) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }

    setHoveredBook(index);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setHoveredBook(null);
    }, 100);
  };

  return (
    <main className="relative min-h-dvh overflow-hidden bg-[#faf9f5] font-quicksand text-base">
      <section className="mx-auto flex h-[calc(100dvh-120px)] max-h-[720px] w-full max-w-[650px] flex-col px-6 md:pt-24 pt-10">
        <header className="mb-8">
          <div className="flex items-center gap-3">
            <h1 className="font-plinko text-[30px]">bookshelf</h1>
          </div>
        </header>
        <div className="relative left-1/2 w-screen -translate-x-1/2 px-2">
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
                    style={{ height: `${book.height}px` }}
                  />
                  {isHovered && (
                    <div
                      className="absolute left-full top-1/2 z-10 flex h-full w-[270px] -translate-y-1/2 flex-col bg-[#fcfaf2] p-6"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-[11px] uppercase tracking-[0.15em]">
                          {book.year}
                        </span>
                      </div>
                      <div className="mt-5">
                        <h2 className="font-quicksand text-[28px] leading-[0.95]">
                          {book.title}
                        </h2>
                        <p className="my-2 text-sm">{book.author}</p>
                      </div>
                      {book.review && (
                        <p className="border-t border-black pt-2 text-sm leading-relaxed">
                          {book.review}
                        </p>
                      )}
                      {book.stars !== undefined && (
                        <div className="mt-auto flex items-center gap-0 pt-5">
                          {stars.map((star) => {
                            const isFull = book.stars >= star;
                            const isHalf = book.stars === star - 0.5;

                            if (isFull) {
                              return (
                                <Image
                                  key={star}
                                  src="/star-full.png"
                                  alt=""
                                  width={25}
                                  height={25}
                                  className="h-[25px] w-[25px] shrink-0 object-contain"
                                />
                              );
                            }

                            if (isHalf) {
                              return (
                                <div
                                  key={star}
                                  className="relative h-[25px] w-[25px] shrink-0"
                                >
                                  <Image
                                    src="/star-full.png"
                                    alt=""
                                    width={25}
                                    height={25}
                                    className="absolute inset-0 h-[25px] w-[25px] object-contain opacity-20"
                                  />
                                  <div className="absolute inset-0 h-[25px] w-[25px] overflow-hidden">
                                    <Image
                                      src="/star-full.png"
                                      alt=""
                                      width={25}
                                      height={25}
                                      className="h-[25px] w-[25px] object-contain"
                                      style={{
                                        clipPath: "inset(0 50% 0 0)",
                                      }}
                                    />
                                  </div>
                                </div>
                              );
                            }
                            return (
                              <Image
                                key={star}
                                src="/star-full.png"
                                alt=""
                                width={25}
                                height={25}
                                className="h-[25px] w-[25px] shrink-0 object-contain opacity-40"
                              />
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <Link href="/menu" className="mt-10 inline-block text-sm underline">
          [ back ]
        </Link>
      </section>
      <BottomMenu />
    </main>
  );
}
