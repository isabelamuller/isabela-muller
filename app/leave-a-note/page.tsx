"use client";

import { BottomMenu } from "@/components/BottomMenu";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

const MAX_LENGTH = 500;

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export default function LeaveANote() {
  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<SubmissionStatus>("idle");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!note.trim()) {
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/meeyawrg", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim() || "anonymous",
          message: note.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setNote("");
      setName("");
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <main className="relative min-h-dvh overflow-hidden font-quicksand text-base">
      <section className="mx-auto w-full max-w-[650px] px-6 pt-24">
        <header className="mb-3">
          <h1 className="font-plinko text-[30px]">leave a note</h1>
          <p className="text-sm leading-relaxed opacity-60">
            how about writing me something anonymously (or not)? feel free to
            say whatever you&apos;d like.
          </p>
        </header>
        <form onSubmit={handleSubmit} className="py-5">
          <label
            htmlFor="note"
            className="mb-2 block text-[11px] tracking-wider opacity-50"
          >
            your message
          </label>
          <textarea
            id="note"
            name="message"
            value={note}
            onChange={(event) => {
              setNote(event.target.value);
              if (status === "success" || status === "error") {
                setStatus("idle");
              }
            }}
            placeholder="this is where you type"
            maxLength={MAX_LENGTH}
            rows={8}
            required
            className="w-full resize-none border border-black/50 bg-transparent p-3 text-sm leading-relaxed outline-none placeholder:opacity-30 focus:border-black"
          />
          <div className="mt-2 flex items-center justify-between">
            <span className="text-[10px] opacity-35">
              {note.length}/{MAX_LENGTH}
            </span>
            <button
              type="submit"
              disabled={!note.trim() || status === "submitting"}
              className="cursor-pointer border border-black px-4 py-1.5 text-xs lowercase hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-black"
            >
              {status === "submitting" ? "sending..." : "send note"}
            </button>
          </div>
          <div aria-live="polite" className="mt-3 min-h-5 text-xs">
            {status === "success" && <p>your note was sent. thank you :)</p>}
            {status === "error" && (
              <p className="text-red-700">
                something went wrong. please try again.
              </p>
            )}
          </div>
        </form>
        <Link href="/menu" className="mt-6 inline-block text-sm underline">
          [ back ]
        </Link>
        <Image
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
          src="/ratmail.gif"
          alt=""
          width={230}
          height={100}
        />
      </section>
      <BottomMenu />
    </main>
  );
}
