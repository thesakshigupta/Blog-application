import { useState } from "react";
import { BookOpen, Search, Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Create Post", href: "/create" },
];

const categories = ["Technology", "Lifestyle", "Design", "Travel", "Culture"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    window.location.href = `/search?q=${encodeURIComponent(
      searchQuery.trim(),
    )}`;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Navbar */}
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="/"
            className="flex shrink-0 items-center gap-2"
            aria-label="The Daily homepage"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-white">
              <BookOpen size={22} />
            </span>

            <span className="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
              the daily<span className="text-neutral-400">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-600 transition hover:text-black"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Toggle */}
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Toggle search"
              className="rounded-full p-2.5 text-neutral-600 transition hover:bg-neutral-100 hover:text-black"
            >
              {searchOpen ? <X size={20} /> : <Search size={20} />}
            </button>

            {/* Subscribe */}
            <a
              href="/subscribe"
              className="hidden items-center gap-1.5 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-700 sm:inline-flex"
            >
              Subscribe
              <ArrowUpRight size={16} />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="rounded-full p-2.5 text-neutral-700 transition hover:bg-neutral-100 lg:hidden"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Expandable Search */}
        {searchOpen && (
          <form
            onSubmit={handleSearch}
            className="border-t border-neutral-100 py-4"
          >
            <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 focus-within:border-neutral-400">
              <Search size={19} className="text-neutral-400" />

              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, topics, and stories..."
                aria-label="Search articles"
                className="w-full bg-transparent text-sm text-neutral-900 outline-none placeholder:text-neutral-400"
                autoFocus
              />

              <button
                type="submit"
                className="text-sm font-semibold text-neutral-900 hover:text-neutral-500"
              >
                Search
              </button>
            </div>
          </form>
        )}

        {/* Category Bar */}
        <div className="hidden items-center justify-between border-t border-neutral-100 py-3 md:flex">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400">
            Explore topics
          </span>

          <nav className="flex items-center gap-7">
            {categories.map((category) => (
              <a
                key={category}
                href={`/category/${category.toLowerCase()}`}
                className="text-sm text-neutral-500 transition hover:text-neutral-900"
              >
                {category}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-neutral-200 py-4 lg:hidden">
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 hover:text-black"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="mt-3 border-t border-neutral-100 pt-4">
              <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Explore topics
              </p>

              <div className="flex flex-wrap gap-2 px-3">
                {categories.map((category) => (
                  <a
                    key={category}
                    href={`/category/${category.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-full border border-neutral-200 px-3 py-2 text-sm text-neutral-600 transition hover:border-neutral-400 hover:text-black"
                  >
                    {category}
                  </a>
                ))}
              </div>

              <a
                href="/subscribe"
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700 sm:hidden"
              >
                Subscribe
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
