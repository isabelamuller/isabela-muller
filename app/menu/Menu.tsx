"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { links, POPUP_STORAGE_KEY } from "./data";

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
