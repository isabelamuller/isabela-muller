"use client";

import { BottomMenu } from "@/components/BottomMenu";
import Image from "next/image";

export default function Cats() {
  return (
    <main className="min-h-dvh bg-[#faf9f5] font-quicksand">
      <section className="mx-auto w-full max-w-[650px] px-6 md:pt-20 pt-6">
        <header className="mb-10">
          <h1 className="font-plinko text-[30px]">my cats</h1>
        </header>
        <div className="relative">
          <img
            src="/zecanico6.jpeg"
            alt="Nico e Zeca"
            className="h-auto w-full"
          />
          <button
            type="button"
            className="group absolute left-[0%] top-[40%] h-[45%] w-[25%] cursor-pointer"
          >
            <span className="pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2 whitespace-nowrap font-shrileydoe text-xl opacity-0 transition-all ease-out group-hover:ml-5 group-hover:opacity-100">
              Zeca
            </span>
          </button>
          <button
            type="button"
            className="group absolute left-[35%] top-[30%] h-[30%] w-[50%] cursor-pointer"
          >
            <span className="pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap font-shrileydoe text-xl opacity-0 transition-all ease-out group-hover:mt-5 group-hover:opacity-100">
              Nico
            </span>
          </button>
        </div>
      </section>
      <Image
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        src="/acatcanpurr.jpg"
        alt=""
        width={330}
        height={100}
      />
      <BottomMenu />
    </main>
  );
}
