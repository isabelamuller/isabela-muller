import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Isabela Müller",
  description: "Isabela Müller menu",
};

export default function Menu() {
  return (
    <main className="flex min-h-dvh items-center justify-center overflow-hidden">
      <div className="relative aspect-[7/4] max-w-[650px] w-full -translate-y-[70px]">
        <h1 className="absolute left-1/2 top-1/2 w-max -translate-x-1/2 -translate-y-1/2 text-center font-shirleydoe text-[40px] font-bold">
          isabela muller
        </h1>
        <Link
          href="/about-me"
          className="group absolute left-1/2 top-[2%] flex w-max -translate-x-1/2 flex-col items-center"
        >
          <Image src="/nautilus.gif" alt="About me" width={30} height={30} />
          <span className="group-hover:text-[#69b6ba]">about me</span>
        </Link>
        <a className="absolute left-[18%] top-[23%] flex w-max -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-center">
          <Image src="/phone.gif" alt="Contact" width={40} height={40} />
          <span>contact</span>
        </a>
        <a className="absolute left-[82%] top-[23%] flex w-max -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-center">
          <Image src="/computer.gif" alt="Work" width={30} height={30} />
          <span>work</span>
        </a>
        <Link
          href="/playlist"
          className="absolute left-[7%] top-[55%] flex w-max -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-center"
        >
          <Image src="/disc.gif" alt="Playlist" width={30} height={30} />
          <span>playlist</span>
        </Link>
        <Link
          href="/miscellaneous"
          className="group absolute left-[93%] top-[55%] flex w-max -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-center"
        >
          <Image src="/starfish.gif" alt="Misc" width={50} height={50} />
          <span className="group-hover:text-[#fea841]">misc</span>
        </Link>
        <a className="group absolute left-[25%] top-[88%] flex w-max -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-center">
          <Image src="/Daisy.jpg" alt="Mama" width={30} height={30} />
          <span className="group-hover:text-[#7f77bb]">cats</span>
        </a>
        <Link
          href="/leave-a-note"
          className="absolute left-[75%] top-[88%] flex w-max -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-center"
        >
          <Image src="/mail.gif" alt="Leave a note" width={30} height={30} />
          <span>leave a note</span>
        </Link>
      </div>
    </main>
  );
}
