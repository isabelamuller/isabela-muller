import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Isabela Müller",
  description: "Isabela Müller menu",
};

const links = [
  {
    title: "about me",
    href: "/about-me",
    color: "#6b60ad",
    image: "/daisy.png",
    width: 30,
    height: 30,
    position: "left-1/2 top-[9%]",
  },
  {
    title: "contact",
    href: "/contact",
    color: "#9b9697",
    image: "/phone.gif",
    width: 40,
    height: 40,
    position: "left-[18%] top-[23%]",
  },
  {
    title: "work",
    href: "/work",
    color: "#9b9b6d",
    image: "/computer-1.png",
    width: 40,
    height: 40,
    position: "left-[82%] top-[23%]",
  },
  {
    title: "books",
    href: "/books",
    color: "#bc742c",
    image: "/books.gif",
    width: 25,
    height: 25,
    position: "left-[7%] top-[55%]",
  },
  {
    title: "misc",
    href: "/miscellaneous",
    color: "#fea841",
    image: "/starfish.gif",
    width: 50,
    height: 50,
    position: "left-[93%] top-[55%]",
  },
  {
    title: "cats",
    href: "/cats",
    color: "#39749c",
    image: "/kickingback.gif",
    width: 50,
    height: 50,
    position: "left-[25%] top-[88%]",
  },
  {
    title: "leave a note",
    href: "/leave-a-note",
    color: "#9b372f",
    image: "/mail.gif",
    width: 25,
    height: 25,
    position: "left-[75%] top-[88%]",
  },
];

export default function Menu() {
  return (
    <main className="bg-[#faf9f5] flex min-h-dvh items-center justify-center overflow-hidden">
      <div className="relative aspect-[7/4] max-w-[650px] w-full -translate-y-[70px]">
        <h1 className="absolute left-1/2 top-1/2 w-max -translate-x-1/2 -translate-y-1/2 text-center font-shirleydoe md:text-[40px] text-[28px] font-bold">
          isabela muller
        </h1>
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className={`group absolute ${link.position} flex w-max -translate-x-1/2 -translate-y-1/2 flex-col items-center`}
          >
            <Image
              src={link.image}
              alt={link.title}
              width={link.width}
              height={link.height}
            />
            <span
              style={{ "--hover-color": link.color } as React.CSSProperties}
              className="group-hover:text-[var(--hover-color)] md:text-[16px] text-[12px]"
            >
              {link.title}
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
