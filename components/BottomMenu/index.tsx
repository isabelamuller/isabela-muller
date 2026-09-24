import Link from "next/link";

const menuItems = [
  { label: "home", href: "/menu" },
  { label: "about me", href: "/about-me" },
  { label: "contact", href: "/contact" },
  { label: "work", href: "/work" },
  { label: "books", href: "/books" },
  { label: "misc", href: "/miscellaneous" },
  { label: "cats", href: "/cats" },
  { label: "leave a note", href: "/leave-a-note" },
];

export const BottomMenu = () => {
  return (
    <nav className="fixed bottom-0 left-1/2 w-full -translate-x-1/2 bg-[#faf9f5] font-smooch-sans md:tracking-wider">
      <ul className="flex items-center justify-center gap-1 whitespace-nowrap">
        <li>[</li>
        {menuItems.map(({ label, href }, index) => (
          <li key={href} className="flex items-center gap-1">
            <Link
              href={href}
              className="underline-offset-2 decoration-[1px] hover:underline"
            >
              {label}
            </Link>
            {index < menuItems.length - 1 && <span>|</span>}
          </li>
        ))}
        <li>]</li>
      </ul>
    </nav>
  );
};
