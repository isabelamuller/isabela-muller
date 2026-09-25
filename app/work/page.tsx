"use client";

import { BackButton } from "@/components/Back";
import { BottomMenu } from "@/components/BottomMenu";
import Image from "next/image";

export default function Cats() {
  return (
    <main className="min-h-dvh bg-[#faf9f5] font-quicksand">
      <section className="mx-auto w-full max-w-[650px] px-6 md:pt-20 pt-6 flex flex-col gap-10">
        <header className="mb-12">
          <h1 className="font-plinko text-[30px]">work</h1>
        </header>
        <h2>sorry, this page is still under construction! :D</h2>
        <Image src="/guy.png" alt="" width={100} height={100} />
        <BackButton />
      </section>
      <BottomMenu />
    </main>
  );
}
