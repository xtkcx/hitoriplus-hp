"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    pathname === href
  ? "font-semibold text-emerald-600"
  : "text-gray-500 hover:text-emerald-600 transition";


  return (
    <nav className="flex gap-6 text-sm">
      <Link href="/about" className={linkClass("/about")}>
        About
      </Link>
      <Link href="/media" className={linkClass("/media")}>
        Media
      </Link>
      <Link href="/contact" className={linkClass("/contact")}>
        Contact
      </Link>
    </nav>
  );
}
