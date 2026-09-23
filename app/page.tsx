import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Isabela Müller",
  description: "Isabela Müller",
};

export default function Home() {
  return (
    <div className="bg-[#0f0f0f] h-dvh relative select-none text-white">
      <a href="/menu">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 flex gap-3 flex-col tracking-wider italic text-sm">
          <span>isabela müller</span>
          <Image
            src="/brain-transparent-2.png"
            width={200}
            height={200}
            alt=""
            className="hover:brightness-120"
          />
          <span className="text-end w-full">the digital me</span>
        </div>
      </a>
    </div>
  );
}
