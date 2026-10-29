import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, CheckCircle2, Feather, Heart } from "lucide-react";

const footerNavigation = {
  Dispatches: [
    { name: "All Stories", href: "/" },
    { name: "Write an Article", href: "/create" },
    { name: "Editorial Mission", href: "/about" },
    { name: "Letters & Inquiries", href: "/contact" },
  ],
  Account: [
    { name: "Sign In", href: "/signin" },
    { name: "Create Account", href: "/signup" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  }

  return (
    <footer className="border-t border-[#e7e4dc] bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-12">
          {/* Masthead & Mission */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-stone-800 text-stone-100">
                <BookOpen size={17} />
              </span>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                The Daily
              </span>
            </Link>

            <p className="mt-4 max-w-sm font-editorial text-base leading-relaxed text-stone-400">
              An independent literary and technical journal dedicated to software craftsmanship,
              architecture notes, and thoughtful essays.
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-stone-500">
              <span>EST. 2026</span>
              <span>•</span>
              <span>DEV SAKSHI PRESS</span>
            </div>
          </div>

          {/* Navigation Links */}
          {Object.entries(footerNavigation).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
                {category}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-stone-400 transition hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Dispatch Digest Subscription */}
        <div className="mt-12 rounded-xl border border-stone-800 bg-stone-950/60 p-6 sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-serif text-xl font-bold text-white">
                The Weekend Dispatch
              </h3>
              <p className="mt-1 max-w-md text-xs leading-relaxed text-stone-400">
                Receive our hand-curated editorial digests delivered quietly to your inbox every Sunday.
              </p>
            </div>

            {subscribed ? (
              <div className="flex items-center gap-2 rounded-lg border border-emerald-900 bg-emerald-950/40 px-4 py-2 text-xs text-emerald-400">
                <CheckCircle2 size={16} />
                <span>You are subscribed to the Sunday dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex max-w-md gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="reader@example.com"
                  required
                  className="w-full min-w-0 rounded-md border border-stone-700 bg-stone-900 px-3.5 py-2 text-xs text-white placeholder-stone-500 outline-none focus:border-stone-400"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-md bg-white px-4 py-2 text-xs font-semibold text-stone-900 transition hover:bg-stone-200"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Colophon Sub-footer */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-stone-800 pt-6 text-xs text-stone-500 sm:flex-row">
          <p>© {new Date().getFullYear()} The Daily. Independent journal &amp; writing press.</p>
          <p className="flex items-center gap-1.5">
            Crafted for thoughtful reading &amp; writing.
          </p>
        </div>
      </div>
    </footer>
  );
}
