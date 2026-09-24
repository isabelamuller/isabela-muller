import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Isabela Müller",
  description: "Isabela Müller menu",
};

export default function Menu() {
  return (
    <main className="bg-[#faf9f5] flex min-h-dvh items-center justify-center overflow-hidden">
      <div className="relative aspect-[7/4] max-w-[650px] w-full -translate-y-[70px]">
        <h1 className="absolute left-1/2 top-1/2 w-max -translate-x-1/2 -translate-y-1/2 text-center font-shirleydoe text-[40px] font-bold">
          isabela muller
        </h1>
        <Link
          href="/about-me"
          className="group absolute left-1/2 top-[2%] flex w-max -translate-x-1/2 flex-col items-center"
        >
          <Image src="/Daisy.jpg" alt="About me" width={30} height={30} />
          <span className="group-hover:text-[#6b60ad]">about me</span>
        </Link>
        <a className="absolute left-[18%] top-[23%] flex w-max -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-center">
          <Image src="/phone.gif" alt="Contact" width={40} height={40} />
          <span>contact</span>
        </a>
        <a className="group absolute left-[82%] top-[23%] flex w-max -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-center">
          <Image src="/computer-1.png" alt="Work" width={40} height={40} />
          <span className="group-hover:text-[#9b9b6d]">work</span>
        </a>
        <Link
          href="/books"
          className="group absolute left-[7%] top-[55%] flex w-max -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-center"
        >
          <Image src="/books.gif" alt="Books" width={25} height={25} />
          <span className="group-hover:text-[#bc742c]">books</span>
        </Link>
        <Link
          href="/miscellaneous"
          className="group absolute left-[93%] top-[55%] flex w-max -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-center"
        >
          <Image src="/starfish.gif" alt="Misc" width={50} height={50} />
          <span className="group-hover:text-[#fea841]">misc</span>
        </Link>
        <Link
          href="/cats"
          className="group absolute left-[25%] top-[88%] flex w-max -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-center"
        >
          <Image src="/kickingback.gif" alt="Cats" width={55} height={60} />
          <span className="group-hover:text-[#39749c]">cats</span>
        </Link>
        <Link
          href="/leave-a-note"
          className="group absolute left-[75%] top-[88%] flex w-max -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-center"
        >
          <Image src="/mail.gif" alt="Leave a note" width={30} height={30} />
          <span className="group-hover:text-[#9b372f]">leave a note</span>
        </Link>
      </div>
    </main>
  );
}
