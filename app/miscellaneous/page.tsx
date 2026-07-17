"use client";

import { BottomMenu } from "@/components/BottomMenu";
import Image from "next/image";
import { useState } from "react";

const doing = [
  {
    label: "reading",
    image: "/carl-sagan.jpg",
    alt: "",
  },
  {
    label: "listening",
    image: "/listening.jpg",
    alt: "",
  },
  {
    label: "watching",
    image: "/30-rock.jpg",
    alt: "",
  },
];

export default function Misc() {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentItem = doing[activeIndex];

  const handlePrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? doing.length - 1 : currentIndex - 1,
    );
  };

  const handleNext = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === doing.length - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <main className="relative min-h-dvh overflow-hidden font-quicksand text-lg">
      <section className="mx-auto w-full max-w-[650px] px-6 pt-24">
        <header className="mb-10">
          <h1 className="font-plinko text-[30px]">miscellaneous</h1>
        </header>
        <div className="flex flex-col items-center">
          <div className="mb-6 flex gap-2">
            <span>what i am currently</span>
            <div className="flex flex-col">
              <span>{currentItem.label}</span>
              <hr className="w-30 border-black" />
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <button
              type="button"
              onClick={handlePrevious}
              className="cursor-pointer"
            >
              ←
            </button>
            <div className="relative h-[450px] w-[320px] overflow-hidden">
              {doing.map((item, index) => (
                <Image
                  key={item.image}
                  src={item.image}
                  alt={item.alt}
                  fill
                  className={`object-cover transition-all ${
                    index === activeIndex
                      ? "opacity-100"
                      : "pointer-events-none absolute opacity-0"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={handleNext}
              className="cursor-pointer"
            >
              →
            </button>
          </div>
          <div className="mt-4 flex justify-center gap-2">
            {doing.map((item, index) => (
              <button
                key={item.label}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 cursor-pointer border border-black ${
                  index === activeIndex ? "bg-black" : "bg-transparent"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
      <BottomMenu />
    </main>
  );
}
