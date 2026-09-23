import { BottomMenu } from "@/components/BottomMenu";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="bg-[##faf9f5] relative min-h-dvh overflow-hidden font-quicksand">
      <section className="mx-auto w-full max-w-[650px] px-6 pt-24">
        <header className="mb-10">
          <h1 className="font-plinko text-[30px]">contact me</h1>
        </header>
        <div className="flex flex-col">
          <h1>oi</h1>
        </div>
      </section>
      <Image
        className="absolute bottom-5 left-1/2 -translate-x-1/2"
        src="/crowd.gif"
        alt=""
        width={330}
        height={100}
      />
      <BottomMenu />
    </main>
  );
}
