"use client";

import { BottomMenu } from "@/components/BottomMenu";
import Image from "next/image";
import Link from "next/link";

export default function Cats() {
  return (
    <main className="min-h-dvh bg-[#faf9f5] font-quicksand">
      <section className="mx-auto w-full max-w-[650px] px-6 pt-24 flex flex-col gap-10">
        <header className="mb-12">
          <h1 className="font-plinko text-[30px]">work</h1>
        </header>
        <div className="flex relative justify-center">
          <h2>sorry, this page is still under construction! :D</h2>
          <Image
            className="absolute bottom-[-3px] right-10"
            src="/cat1.gif"
            alt=""
            width={100}
            height={100}
          />
        </div>
        {/* <Image src="/guy.png" alt="" width={100} height={100} /> */}
        <Link href="/menu" className="mt-6 inline-block text-sm underline">
          [ back ]
        </Link>
      </section>
      <BottomMenu />
    </main>
  );
}
