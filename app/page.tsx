import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#d50b0a] h-dvh relative select-none text-white">
      <a href="/menu">
        <div className="absolute top-30 left-1/2 -translate-x-1/2 flex flex-col tracking-wider italic text-sm">
          <span>isabela müller</span>
          <div className="flex gap-3">
            <div className="border-[#000000] border-2">
              <Image
                src="/duck-1.png"
                width={85}
                height={85}
                alt=""
                className="grayscale contrast-125"
              />
            </div>
            <div className="border-[#000000] border-2">
              <Image
                src="/duck-2.jpeg"
                width={85}
                height={85}
                alt=""
                className="grayscale contrast-125"
              />
            </div>
            <div className="border-[#000000] border-2">
              <Image
                src="/duck-3.png"
                width={85}
                height={85}
                alt=""
                className="grayscale contrast-125"
              />
            </div>
          </div>
          <span className="text-end w-full">the digital me</span>
        </div>
      </a>
    </div>
  );
}
