import Link from "next/link";

const menuItems = [
  { label: "about me", href: "/about-me" },
  { label: "contact", href: "/contact" },
  { label: "work", href: "/work" },
  { label: "playlist", href: "/playlist" },
  { label: "misc", href: "/miscellaneous" },
  { label: "mama", href: "/mama" },
  { label: "leave a note", href: "/leave-a-note" },
];

export const BottomMenu = () => {
  return (
    <nav className="font-smooch-sans fixed flex justify-center bg-white bottom-0 w-full tracking-wider left-1/2 -translate-x-1/2">
      <ul className="flex items-center gap-1 whitespace-nowrap">
        <li>[</li>
        {menuItems.map(({ label, href }, index) => (
          <li key={href} className="flex items-center gap-1">
            <Link href={href}>{label}</Link>
            {index < menuItems.length - 1 && <span>|</span>}
          </li>
        ))}
        <li>]</li>
      </ul>
    </nav>
  );
};
