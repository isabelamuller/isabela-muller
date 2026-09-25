"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    title: "bookshelf",
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

const POPUP_STORAGE_KEY = "mobile-menu-popup-closed";

export default function Menu() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  useEffect(() => {
    const popupClosed = localStorage.getItem(POPUP_STORAGE_KEY);

    if (!popupClosed) {
      setIsPopUpOpen(true);
    }
  }, []);

  const closePopUp = () => {
    localStorage.setItem(POPUP_STORAGE_KEY, "true");
    setIsPopUpOpen(false);
  };

  return (
    <main className="bg-[#faf9f5] flex min-h-dvh items-center justify-center overflow-hidden px-5 md:px-0">
      {isPopUpOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 px-6 md:hidden">
          <div className="relative w-full max-w-[350px] border-2 border-t-white border-l-white border-r-[#777] border-b-[#777] bg-[#e5e2d9] p-5">
            <button
              type="button"
              onClick={closePopUp}
              className="absolute right-2 top-1 cursor-pointer text-lg leading-none"
              aria-label="Close"
            >
              ×
            </button>
            <span>WARNING!</span>
            <p className="pr-5 text-sm leading-relaxed">
              this website looks and behaves way better on desktop. so, if you
              happen to have a laptop nearby, grab it and access the website
              again! #mobileSUCKS
            </p>
          </div>
        </div>
      )}
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
