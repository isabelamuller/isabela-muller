"use client";

import { BottomMenu } from "@/components/BottomMenu";
import Link from "next/link";
import { useState } from "react";

const MAX_LENGTH = 500;

export default function LeaveANote() {
  const [note, setNote] = useState("");

  return (
    <main className="relative min-h-dvh overflow-hidden font-arial text-base">
      <section className="mx-auto w-full max-w-[650px] px-6 pt-24">
        <header className="mb-3">
          <h1 className="font-plinko text-[30px]">leave a note</h1>
          <p className="text-sm leading-relaxed opacity-60">
            how about writing me something anonymously (or not)? feel free to
            say whatever you&apos;d like.
          </p>
        </header>
        <form className="py-5">
          <label
            htmlFor="note"
            className="mb-2 block text-[11px] tracking-wider opacity-50"
          >
            your message
          </label>
          <textarea
            id="note"
            name="note"
            value={note}
            onChange={(event) => setNote(event.target.value)}
            placeholder="this is where you type"
            maxLength={MAX_LENGTH}
            rows={8}
            className="w-full resize-none border border-black/50 bg-transparent p-3 text-sm leading-relaxed outline-none placeholder:opacity-30 focus:border-black"
          />
          <div className="mt-2 flex items-center justify-between">
            <span className="text-[10px] opacity-35">
              {note.length}/{MAX_LENGTH}
            </span>
            <button
              type="submit"
              disabled={!note.trim()}
              className="cursor-pointer border border-black px-4 py-1.5 text-xs lowercase hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-black"
            >
              send note
            </button>
          </div>
        </form>
        <Link href="/menu" className="mt-10 inline-block text-sm underline">
          [ back ]
        </Link>
      </section>
      <BottomMenu />
    </main>
  );
}
