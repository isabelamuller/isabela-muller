"use client";

import { BottomMenu } from "@/components/BottomMenu";
import Image from "next/image";

export default function Books() {
  return (
    <main className="relative min-h-dvh overflow-hidden font-quicksand text-base">
      <section className="mx-auto flex h-[calc(100dvh-120px)] max-h-[720px] w-full max-w-[650px] flex-col px-6 pt-24">
        <header className="mb-8">
          <div className="flex items-center gap-3">
            <h1 className="font-plinko text-[30px]">books</h1>
          </div>
        </header>
        <div className="flex items-end gap-1">
          <Image
            src="/the-myth.png"
            width={100}
            height={100}
            alt="The Myth of Sisyphus"
            className="h-[500px] w-auto"
          />
          <Image
            src="/o-terceiro-tira.png"
            width={100}
            height={100}
            alt="O Terceiro Tira"
            className="h-[450px] w-auto"
          />
          <Image
            src="/the-shining.jpeg"
            width={100}
            height={100}
            alt="The Shining"
            className="h-[450px] w-auto"
          />
          <Image
            src="/pale-blue-dot.jpeg"
            width={100}
            height={100}
            alt="Pale Blue Dot"
            className="h-[510px] w-auto"
          />
        </div>
      </section>
      <BottomMenu />
    </main>
  );
}
