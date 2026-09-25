import { BottomMenu } from "@/components/BottomMenu";
import Image from "next/image";

export default function Misc() {
  return (
    <main className="bg-[#faf9f5] relative min-h-dvh overflow-hidden font-quicksand">
      <Image
        src="/misc.jpg"
        alt=""
        height={500}
        width={500}
        className="h-auto w-screen"
      />
      <BottomMenu />
    </main>
  );
}
