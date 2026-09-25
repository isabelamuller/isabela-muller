import { BackButton } from "@/components/Back";
import { BottomMenu } from "@/components/BottomMenu";
import Image from "next/image";

export default function Misc() {
  return (
    <main className="bg-[#faf9f5] relative min-h-dvh overflow-hidden font-quicksand">
      <section className="mx-auto flex min-h-dvh w-full max-w-[700px] flex-col px-6 pb-20 pt-6 md:h-[calc(100dvh-120px)] md:max-h-[720px] md:pt-20">
        <h1 className="font-plinko text-[30px]">miscellaneous</h1>
        <div className="items-center flex flex-col mt-10">
          <h2>still under construction, come back later</h2>
          <div className="mt-10 flex w-full items-center justify-between">
            <Image
              src="/man.gif"
              alt=""
              width={120}
              height={120}
              className="h-[140px] w-auto object-contain"
            />

            <Image
              src="/tv.gif"
              alt=""
              width={120}
              height={120}
              className="h-[140px] w-auto object-contain"
            />
          </div>
        </div>
        <BackButton />
      </section>
      <BottomMenu />
    </main>
  );
}
