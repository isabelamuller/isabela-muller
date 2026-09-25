"use client";

import { BackButton } from "@/components/Back";
import { BottomMenu } from "@/components/BottomMenu";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { experiences, freelance } from "./data";

type Tab = "work" | "freelance";

export default function Work() {
  const [activeTab, setActiveTab] = useState<Tab>("work");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selected = experiences[selectedIndex];

  return (
    <main className="min-h-dvh overflow-hidden bg-[#faf9f5] font-quicksand">
      <section className="mx-auto flex w-full max-w-[850px] flex-col px-6 pb-20 pt-6 md:pt-20">
        <header className="mb-6">
          <h1 className="font-plinko text-[30px]">work</h1>
        </header>
        <div className="md:mb-8 mb-4 flex gap-6">
          <button
            type="button"
            onClick={() => setActiveTab("work")}
            className={`cursor-pointer text-sm ${
              activeTab === "work" ? "underline" : "opacity-40"
            }`}
          >
            formal work
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("freelance")}
            className={`cursor-pointer text-sm ${
              activeTab === "freelance" ? "underline" : "opacity-40"
            }`}
          >
            freelance
          </button>
        </div>
        {activeTab === "work" && (
          <>
            <div className="relative">
              <div className="overflow-x-auto md:pb-5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="relative flex min-w-max items-start justify-between">
                  <div className="absolute left-0 right-0 top-[6px] h-px bg-black" />
                  {experiences.map((experience, index) => {
                    const isSelected = selectedIndex === index;
                    return (
                      <button
                        key={`${experience.company}-${experience.title}`}
                        type="button"
                        onClick={() => setSelectedIndex(index)}
                        className="group relative flex w-[180px] cursor-pointer flex-col items-start"
                      >
                        <div
                          className={`relative z-10 mb-6 h-3 w-3 rounded-full border border-black transition-colors ${
                            isSelected
                              ? "bg-black"
                              : "bg-[#faf9f5] group-hover:bg-black"
                          }`}
                        />
                        <span
                          className={`text-[10px] uppercase transition-opacity ${
                            isSelected
                              ? "opacity-100"
                              : "opacity-50 group-hover:opacity-100"
                          }`}
                        >
                          {experience.period}
                        </span>
                        <div className="flex h-8 items-center gap-1">
                          <span
                            className={`text-sm leading-tight transition-opacity ${
                              isSelected
                                ? "opacity-100"
                                : "opacity-50 group-hover:opacity-100"
                            }`}
                          >
                            {experience.company}
                          </span>
                        </div>
                        <span
                          className={`text-[12px] transition-opacity ${
                            isSelected
                              ? "opacity-100"
                              : "opacity-50 group-hover:opacity-100"
                          }`}
                        >
                          {experience.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <article className="items-center grid grid-cols-1 md:gap-6 md:pt-3 md:grid-cols-[220px_1fr]">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={selected.image}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="flex items-start justify-between md:gap-5">
                  <div>
                    <span className="text-[10px] uppercase">
                      {selected.period}
                    </span>
                    <h2 className="mt-2 md:text-[25px] text-[18px] leading-none">
                      {selected.title}
                    </h2>
                    <span className="text-sm opacity-70">
                      {selected.company}
                    </span>
                  </div>
                  {selected.clientLogo && (
                    <Image
                      src={selected.clientLogo}
                      alt=""
                      width={100}
                      height={35}
                      className="md:h-8 h-4 w-auto max-w-[100px] object-contain"
                    />
                  )}
                </div>
                <p className="text-justify md:mt-3 mt-1 md:text-sm text-[12px] leading-relaxed">
                  {selected.description}
                </p>
                {selected.tech && (
                  <div className="mt-3 border-t border-black/20 pt-3">
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] uppercase tracking-[0.08em] opacity-60">
                      {selected.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          </>
        )}
        {activeTab === "freelance" && (
          <div className="flex flex-col gap-12">
            {freelance.map((project) => (
              <article className="bg-[#0301f4] text-white p-4">
                <div className="md:mb-6 mb-3 flex items-end justify-between">
                  <span className="text-xs uppercase tracking-[0.1em]">
                    {project.period}
                  </span>
                </div>
                <div className="flex md:flex-row flex-col-reverse gap-4 md:gap-10">
                  <div>
                    <Image
                      src={project.logo}
                      alt=""
                      width={160}
                      height={50}
                      className="mb-5 h-auto max-h-[50px] w-auto max-w-[160px] object-contain object-left"
                    />
                    <p className="text-justify text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-block text-sm hover:underline"
                    >
                      visit website
                    </Link>
                  </div>
                  <div className="relative w-full overflow-hidden md:aspect-[4/3]">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      disablePictureInPicture
                      preload="auto"
                      className="mx-auto h-full w-[55%] object-contain mix-blend-screen md:w-full"
                    >
                      <source src={project.video} type="video/webm" />
                      <source
                        src={project.videoFallback}
                        type='video/quicktime; codecs="hvc1"'
                      />
                    </video>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
        <BackButton />
      </section>
      <BottomMenu />
    </main>
  );
}
