import { BottomMenu } from "@/components/BottomMenu";
import Image from "next/image";
import Link from "next/link";

const contacts = [
  {
    value: "isabelamuller1@hotmail.com",
    href: "mailto:isabelamuller1@hotmail.com",
    icon: "/mail2.gif",
    hover: "#ce3200",
  },
  {
    value: "@isabela-müllerrr",
    href: "https://www.linkedin.com/in/isabela-m%C3%BCllerrr/",
    icon: "/linkedin.png",
    hover: "#21bffe",
  },
  {
    value: "@isabelaxmuller",
    href: "https://www.instagram.com/isabelaxmuller",
    icon: "/insta.png",
    hover: "#6e463c",
  },
  {
    value: "@isabelaxmuller",
    href: "https://www.instagram.com/isabelaxmuller",
    icon: "/github.png",
    hover: "#000000",
  },
];

export default function Contact() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-[#faf9f5] font-quicksand">
      <section className="mx-auto w-full max-w-[650px] px-6 md:md:pt-24 pt-6">
        <header className="mb-12">
          <h1 className="font-plinko text-[30px]">contact me</h1>
        </header>
        <form
          action="https://formspree.io/f/meeyawrg"
          method="POST"
          className="flex flex-col gap-5 pb-8"
        >
          <label className="flex flex-col gap-1 text-sm">
            name
            <input
              type="text"
              name="name"
              required
              className="h-9 border-2 border-t-[#c8c4b9] border-l-[#c8c4b9] border-r-[#efede6] border-b-[#efede6] bg-[#f4f2eb] px-2 outline-none focus:bg-[#f8f6f0]"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            email
            <input
              type="email"
              name="email"
              required
              className="h-9 border-2 border-t-[#c8c4b9] border-l-[#c8c4b9] border-r-[#efede6] border-b-[#efede6] bg-[#f4f2eb] px-2 outline-none focus:bg-[#f8f6f0]"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            message
            <textarea
              name="message"
              required
              rows={6}
              className="resize-none border-2 border-t-[#c8c4b9] border-l-[#c8c4b9] border-r-[#efede6] border-b-[#efede6] bg-[#f4f2eb] p-2 outline-none focus:bg-[#f8f6f0]"
            />
          </label>

          <button
            type="submit"
            className="mt-1 w-fit cursor-pointer border-2 border-t-[#efede6] border-l-[#efede6] border-r-[#aaa69c] border-b-[#aaa69c] bg-[#e5e2d9] px-4 py-1 text-sm active:border-t-[#aaa69c] active:border-l-[#aaa69c] active:border-r-[#efede6] active:border-b-[#efede6] ml-auto"
          >
            send
          </button>
        </form>
        <div className="border-t border-black pt-5 md:grid md:grid-cols-4 flex justify-center items-center gap-7">
          {contacts.map((contact, index) => (
            <Link
              key={index}
              href={contact.href}
              target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              style={{ "--hover-color": contact.hover } as React.CSSProperties}
              className="group flex md:col-span-2 w-fit items-center gap-5"
            >
              <div className="flex md:h-[35px] md:w-[35px] w-[30px] h-[30px] shrink-0 items-center justify-center transition-transform duration-200 group-hover:-translate-y-1">
                <Image
                  src={contact.icon}
                  alt=""
                  width={35}
                  height={35}
                  className="h-auto w-auto object-contain"
                />
              </div>
              <span className="text-[15px] md:block hidden group-hover:text-[var(--hover-color)]">
                {contact.value}
              </span>
            </Link>
          ))}
        </div>
        <Link href="/menu" className="mt-6 inline-block text-sm underline">
          [ back ]
        </Link>
      </section>
      <Image
        className="absolute bottom-0 right-0 lg:block hidden"
        src="/auk2.png"
        alt=""
        width={330}
        height={100}
      />
      <BottomMenu />
    </main>
  );
}
