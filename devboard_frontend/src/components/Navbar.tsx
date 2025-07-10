"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

/**
 * Main navigation bar for DevBoard.
 * Links to home, profile, uploads. Includes login/logout/user menu placeholder.
 * Minimalistic, modern and fully responsive.
 */
// PUBLIC_INTERFACE
export default function Navbar() {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-30 bg-[var(--background)] border-b border-[var(--border)] px-0 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4 md:px-0 gap-4">
        <div className="flex items-center min-w-0 gap-2">
          <Link href="/" className="font-extrabold text-2xl tracking-wide text-primary flex items-center">
            <svg viewBox="0 0 32 32" width={28} height={28} className="mr-2 text-accent"><circle cx="16" cy="16" r="16" fill="currentColor" /></svg>
            DevBoard
          </Link>
          <button className="ml-4 md:hidden text-primary rounded focus:outline-none p-1"
            aria-label="Open menu"
            onClick={() => setNavOpen((show) => !show)}>
            <svg width="28" height="28" fill="none"><rect width="22" height="3" y="5" x="3" rx="1.5" fill="currentColor"/><rect width="22" height="3" y="13" x="3" rx="1.5" fill="currentColor"/><rect width="22" height="3" y="21" x="3" rx="1.5" fill="currentColor"/></svg>
          </button>
          <div
            className={`${
              navOpen ? "flex" : "hidden"
            } absolute top-[60px] left-0 w-full bg-white border-b border-[var(--border)] px-4 pt-2 pb-3 flex-col gap-2 md:static md:flex md:flex-row md:items-center md:gap-7 md:pt-0 md:pb-0 md:w-auto md:bg-transparent md:border-0 z-50 transition-all`}
          >
            <NavLink href="/" active={pathname === "/"}>Home</NavLink>
            <NavLink href="/explore" active={pathname === "/explore"}>Projects</NavLink>
            <NavLink href="/upload" active={pathname === "/upload"}>Upload</NavLink>
          </div>
        </div>
        <div className="flex items-center gap-2 min-w-0">
          {/* Placeholder for user auth state */}
          <button
            className="rounded-full bg-accent/90 shadow text-white px-4 py-2 text-sm font-semibold hover:bg-accent transition focus:ring-2 focus:ring-accent focus:outline-none"
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`px-3 py-1 rounded transition text-base font-bold 
        ${active ? "bg-primary/10 text-primary" : "text-[var(--foreground)] hover:bg-[var(--muted-bg)]"}
        hover:text-primary`}
      tabIndex={0}
    >
      {children}
    </Link>
  );
}
