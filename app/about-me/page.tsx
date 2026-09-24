import { BottomMenu } from "@/components/BottomMenu";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "about me",
  description: "Isabela Müller about me",
};

const information = [
  ["name", "Isabela Müller"],
  ["born", "2001, Novo Hamburgo, Brazil"],
  ["occupation", "senior front-end developer"],
  ["goals", "live a happy fulfilling life"],
  ["likes", "books, radio, strange films, cats, all things vintage"],
  ["dislikes", "pizza, taking out the trash, gen AI, blah blah blah"],
];

export default function AboutMe() {
  return (
    <main className="min-h-dvh overflow-hidden font-quicksand bg-[#faf9f5]">
      <section className="mx-auto w-full max-w-[650px] p-6 mt-20 relative">
        <header className="mb-10 flex items-center">
          <h1 className="font-plinko text-[30px]">about me</h1>
        </header>
        <figure className="mb-8 flex">
          <Image
            src="/me-blue.png"
            alt="Isabela Müller"
            width={100}
            height={100}
          />
          <Image
            src="/me-red.png"
            alt="Isabela Müller"
            width={100}
            height={100}
          />
          <Image
            src="/me-green.png"
            alt="Isabela Müller"
            width={100}
            height={100}
          />
        </figure>
        <dl className="grid grid-cols-2 gap-x-10 gap-y-4 text-sm">
          {information.map(([label, value]) => (
            <div key={label}>
              <dt className="text-[11px] opacity-50">{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <Link href="/menu" className="mt-10 inline-block text-sm underline">
          [ back ]
        </Link>
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
