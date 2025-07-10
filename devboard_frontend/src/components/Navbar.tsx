"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Main navigation bar for DevBoard.
 * Links to home, profile, uploads. Includes login/logout/user menu placeholder.
 * Adapts responsively with minimalistic design.
 */
// PUBLIC_INTERFACE
export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-between py-4 mb-8 border-b border-neutral-200 dark:border-neutral-800">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-xl font-bold text-primary">
          DevBoard
        </Link>
        <div className="hidden sm:flex gap-4 ml-8">
          <NavLink href="/" active={pathname === "/"}>Home</NavLink>
          <NavLink href="/explore" active={pathname === "/explore"}>Projects</NavLink>
          <NavLink href="/upload" active={pathname === "/upload"}>Upload</NavLink>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {/* Placeholder for user auth state */}
        <button
          className="rounded-full bg-accent/90 text-white px-4 py-2 text-sm font-medium hover:bg-accent transition"
        >
          Sign In
        </button>
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
      className={`px-3 py-1 rounded hover:bg-primary/10 transition text-base font-medium ${active ? "text-primary" : ""}`}
    >
      {children}
    </Link>
  );
}
