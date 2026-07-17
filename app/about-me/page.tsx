import { BottomMenu } from "@/components/BottomMenu";
import Image from "next/image";

export default function AboutMe() {
  return (
    <main className="font-arial flex min-h-dvh items-center justify-center overflow-hidden">
      <h1 className="font-plinko absolute top-10 text-[30px]">about me</h1>
      <div className="mx-auto aspect-[7/4] max-w-[680px] w-full flex flex-row justify-center items-center gap-4">
        <a className="absolute top-40 left-115" href="/menu">
          back
        </a>
        <Image
          className="h-fit"
          src="/me.jpeg"
          alt="Me myself and I"
          width={140}
          height={140}
        />
        <div className="flex flex-col">
          <span>
            <span className="font-bold">Name:</span> Isabela Müller
          </span>
          <span>
            <span className="font-bold">Birth date:</span> 2001
          </span>
          <span>
            <span className="font-bold">Birthplace:</span> Novo Hamburgo, Rio
            Grande do Sul, Brazil
          </span>
          <span>
            <span className="font-bold">Goals:</span> own a big house and have
            tons of animals;
          </span>
          <span>
            <span className="font-bold">Turn-ons:</span> dsfdsf
          </span>
          <span>
            <span className="font-bold">Turn-offs:</span> dfdsf
          </span>
          <span>Favorite Books: Pale Blue Dot by Carl Sagan;</span>
          <span>Favorite Movies:</span>
          <span>Favorite Quotation:</span>
        </div>
      </div>
      <BottomMenu />
    </main>
  );
}
