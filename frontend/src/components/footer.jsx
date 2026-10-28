import { ArrowRight, BookOpen, Camera, GitBranch, Heart, Mail, X } from "lucide-react";
import { useState } from "react";

const footerLinks = {
  Explore: [
    { name: "Home", href: "/" },
    { name: "Articles", href: "/articles" },
    { name: "Create Post", href: "/create" },
    { name: "About us", href: "/about" },
  ],
  Topics: [
    { name: "Technology", href: "/category/technology" },
    { name: "Lifestyle", href: "/category/lifestyle" },
    { name: "Design", href: "/category/design" },
    { name: "Travel", href: "/category/travel" },
  ],
  Support: [
    { name: "Contact", href: "/contact" },
    { name: "Privacy policy", href: "/privacy" },
    { name: "Terms of service", href: "/terms" },
    { name: "Write for us", href: "/write" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubscribe(e) {
    e.preventDefault();

    if (!email.trim()) return;

    // Connect your newsletter API here.
    setMessage("Thanks! Connect your newsletter service to subscribe.");
  }

  return (
    <footer className="bg-neutral-950 text-neutral-300">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-8 sm:pt-16 lg:px-10">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="/"
              className="inline-flex items-center gap-2"
              aria-label="The Daily homepage"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-neutral-950">
                <BookOpen size={23} />
              </span>

              <span className="text-2xl font-bold tracking-tight text-white">
                the Daily<span className="text-neutral-500"></span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-400">
              Ideas, stories, and perspectives for curious minds. Discover
              something new every day.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="rounded-xl border border-neutral-800 p-3 transition hover:border-neutral-600 hover:bg-neutral-900 hover:text-white"
              >
                <Camera size={19} />
              </a>

              <a
                href="https://github.com"
                aria-label="GitHub"
                className="rounded-xl border border-neutral-800 p-3 transition hover:border-neutral-600 hover:bg-neutral-900 hover:text-white"
              >
                <GitBranch size={19} />
              </a>

              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="rounded-xl border border-neutral-800 p-3 transition hover:border-neutral-600 hover:bg-neutral-900 hover:text-white"
              >
                <X size={19} />
              </a>

              <a
                href="/contact"
                aria-label="Contact us"
                className="rounded-xl border border-neutral-800 p-3 transition hover:border-neutral-600 hover:bg-neutral-900 hover:text-white"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>

          {/* Footer Link Groups */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-5 text-sm font-semibold text-white">{title}</h3>

              <ul className="space-y-3.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-400 transition hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-14 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 sm:mt-16 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                Stay in the loop.
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-neutral-400">
                Get our best stories, fresh ideas, and latest articles delivered
                to your inbox.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="w-full lg:max-w-md">
              <div className="flex gap-2 rounded-xl border border-neutral-700 bg-neutral-950 p-1.5 focus-within:border-neutral-500">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setMessage("");
                  }}
                  placeholder="Enter your email"
                  aria-label="Email address"
                  required
                  className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-neutral-500"
                />

                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
                >
                  Subscribe
                  <ArrowRight size={16} />
                </button>
              </div>

              {message && (
                <p role="status" className="mt-3 text-sm text-neutral-300">
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-neutral-800 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-neutral-500">
            © {new Date().getFullYear()} The Daily. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-neutral-500">
            Made with
            <Heart size={15} className="fill-rose-500 text-rose-500" />
            for curious minds.
          </p>
        </div>
      </div>
    </footer>
  );
}
