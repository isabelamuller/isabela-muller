import Link from "next/link";
import { menuItems } from "./data";

export const BottomMenu = () => {
  return (
    <nav className="fixed bottom-5 left-1/2 w-full -translate-x-1/2 bg-[#faf9f5] font-smooch-sans text-[16px] md:bottom-0 md:tracking-wider max-[391px]:text-[12px]">
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
