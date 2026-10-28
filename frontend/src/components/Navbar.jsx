import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  BookOpen,
  PenSquare,
  Search,
  Menu,
  X,
  LogOut,
  User as UserIcon,
  Sparkles,
} from "lucide-react";
import { useUser } from "../hooks/use.user";

const navLinks = [
  { name: "Journal", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const user = useSelector((s) => s.StoreState.user);
  const isLoggedIn = useSelector((s) => s.StoreState.isLoggedIn);
  const { handleLogout } = useUser();
  const navigate = useNavigate();

  const currentDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
    setSearchOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#e7e4dc] bg-[#faf8f5]/95 backdrop-blur-md">
      {/* Editorial Topline Banner */}
      <div className="border-b border-[#ece8de] bg-[#f5f1e8] py-1 text-center text-[11px] font-medium tracking-wider uppercase text-stone-600 sm:block hidden">
        <span>The Daily Press</span>
        <span className="mx-2 text-stone-400">•</span>
        <span>Independent Voices &amp; Dispatches</span>
        <span className="mx-2 text-stone-400">•</span>
        <span>{currentDate}</span>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Masthead / Brand */}
          <Link
            to="/"
            className="flex shrink-0 items-baseline gap-2.5 group"
            aria-label="The Daily Homepage"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-stone-900 text-stone-100 transition-colors group-hover:bg-[#b45309]">
              <BookOpen size={18} strokeWidth={2} />
            </span>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-stone-900 group-hover:text-stone-800">
                The Daily
              </span>
              <span className="text-[10px] uppercase tracking-widest text-stone-500 font-medium -mt-1 hidden sm:block">
                Thoughtful Writing
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-stone-900 ${
                    isActive
                      ? "text-stone-950 font-semibold underline underline-offset-8 decoration-stone-400"
                      : "text-stone-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-3">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Toggle search"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-[#e7e4dc] bg-white text-stone-600 transition hover:border-stone-400 hover:text-stone-950"
            >
              {searchOpen ? <X size={16} /> : <Search size={16} />}
            </button>

            {/* Auth States */}
            {isLoggedIn ? (
              <div className="flex items-center gap-2 sm:gap-3">
                <Link
                  to="/create"
                  className="inline-flex items-center gap-2 rounded-md bg-[#b45309] px-3.5 py-2 text-xs sm:text-sm font-medium text-white shadow-xs transition hover:bg-[#92400e]"
                >
                  <PenSquare size={15} />
                  <span>Write</span>
                </Link>

                <div className="hidden sm:flex items-center gap-2 rounded-md border border-[#e7e4dc] bg-white px-3 py-1.5 text-xs font-medium text-stone-800">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-stone-200 text-[10px] font-bold text-stone-700 uppercase">
                    {user?.username?.charAt(0) || "U"}
                  </div>
                  <span className="max-w-[100px] truncate">{user?.username}</span>
                </div>

                <button
                  type="button"
                  onClick={handleLogout}
                  title="Sign out"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-[#e7e4dc] bg-white text-stone-600 transition hover:border-red-300 hover:bg-red-50 hover:text-red-700"
                >
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 sm:gap-3">
                <Link
                  to="/signin"
                  className="px-3 py-2 text-xs sm:text-sm font-medium text-stone-700 hover:text-stone-950 transition"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-1.5 rounded-md bg-stone-900 px-3.5 py-2 text-xs sm:text-sm font-medium text-stone-50 shadow-xs transition hover:bg-stone-800"
                >
                  <span>Start Reading</span>
                </Link>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-[#e7e4dc] bg-white text-stone-700 md:hidden"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Search Expansion Bar */}
        {searchOpen && (
          <form
            onSubmit={handleSearchSubmit}
            className="border-t border-[#e7e4dc] py-3 animate-in fade-in duration-150"
          >
            <div className="flex items-center gap-3 rounded-md border border-[#d6d1c4] bg-white px-3.5 py-2.5 focus-within:border-stone-800 focus-within:ring-1 focus-within:ring-stone-800">
              <Search size={16} className="text-stone-400" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search essays, author dispatches, stories..."
                className="w-full bg-transparent text-sm text-stone-900 outline-none placeholder:text-stone-400"
                autoFocus
              />
              <button
                type="submit"
                className="rounded bg-stone-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-stone-800 hover:bg-stone-200"
              >
                Search
              </button>
            </div>
          </form>
        )}

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="border-t border-[#e7e4dc] py-4 md:hidden animate-in fade-in duration-200">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100 hover:text-stone-900"
                >
                  {link.name}
                </Link>
              ))}

              {isLoggedIn ? (
                <>
                  <Link
                    to="/create"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 rounded-md bg-[#b45309] px-3 py-2 text-sm font-medium text-white"
                  >
                    <PenSquare size={16} />
                    <span>Write an Article</span>
                  </Link>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      handleLogout();
                    }}
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-left text-sm font-medium text-red-700 hover:bg-red-50"
                  >
                    <LogOut size={16} />
                    <span>Sign Out ({user?.username})</span>
                  </button>
                </>
              ) : (
                <div className="pt-2 flex flex-col gap-2 border-t border-[#ece8de]">
                  <Link
                    to="/signin"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-md border border-[#e7e4dc] px-3 py-2 text-center text-sm font-medium text-stone-800"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-md bg-stone-900 px-3 py-2 text-center text-sm font-medium text-white"
                  >
                    Create Account
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
