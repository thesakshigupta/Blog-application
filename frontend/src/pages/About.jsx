import {
  BookOpen,
  Feather,
  ShieldCheck,
  MessageSquare,
  Users,
  Layers,
  Database,
  Cpu,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Authenticated Journalism',
    description:
      'Robust JWT-based security and password hashing ensure authentic author credentials and protected dispatches.',
  },
  {
    icon: Feather,
    title: 'Focused Writing Space',
    description:
      'Distraction-free publishing canvas designed for essays, engineering notes, and thoughtful commentary.',
  },
  {
    icon: MessageSquare,
    title: 'Thoughtful Discourse',
    description:
      'Meaningful appreciation and discussion tools connecting readers directly with writers.',
  },
  {
    icon: Users,
    title: 'Independent Community',
    description:
      'A decentralized publication platform valuing depth, craft, and intellectual curiosity above algorithmic noise.',
  },
];

export default function About() {
  return (
    <section className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="border-b border-[#e7e4dc] pb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e7e4dc] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-stone-700 shadow-2xs">
            <BookOpen size={13} className="text-[#b45309]" />
            <span>Colophon &amp; Mission</span>
          </div>

          <h1 className="mt-4 font-serif text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
            About The Daily
          </h1>

          <p className="mt-4 font-editorial text-xl leading-relaxed text-stone-700">
            The Daily is an independent platform for essays, engineering deep dives, and
            cultural reflections. We believe in high typography standards, long-form depth,
            and respect for the reader&rsquo;s attention.
          </p>
        </div>

        {/* Platform Pillars */}
        <div className="py-12">
          <h2 className="font-serif text-2xl font-bold text-stone-900 sm:text-3xl">
            Core Principles
          </h2>
          <p className="mt-2 text-sm text-stone-600">
            How we approach our editorial architecture and community.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#e7e4dc] bg-white p-6 shadow-xs transition hover:border-stone-400"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#faf8f5] text-[#b45309] border border-[#ece8de]">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-bold text-stone-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="border-t border-[#e7e4dc] py-12">
          <h2 className="font-serif text-2xl font-bold text-stone-900 sm:text-3xl">
            Technical Architecture
          </h2>
          <p className="mt-2 text-sm text-stone-600">
            Built with modern standards and clean architectural separation of concerns.
          </p>

          <div className="mt-6 space-y-4">
            <div className="rounded-lg border border-[#e7e4dc] bg-white p-5">
              <div className="flex items-center gap-2.5">
                <Cpu size={18} className="text-[#b45309]" />
                <h3 className="font-semibold text-stone-900 text-sm">Client-Side Architecture</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                React 19, Redux Toolkit state synchronization, Lucide vector icons, and an
                editorial theme designed around typographic hierarchy.
              </p>
            </div>

            <div className="rounded-lg border border-[#e7e4dc] bg-white p-5">
              <div className="flex items-center gap-2.5">
                <Layers size={18} className="text-[#b45309]" />
                <h3 className="font-semibold text-stone-900 text-sm">Backend API &amp; Security</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Node.js &amp; Express 5 REST API, HTTP-only secure cookie JWT sessions, Zod request
                validation, and bcryptjs credential encryption.
              </p>
            </div>

            <div className="rounded-lg border border-[#e7e4dc] bg-white p-5">
              <div className="flex items-center gap-2.5">
                <Database size={18} className="text-[#b45309]" />
                <h3 className="font-semibold text-stone-900 text-sm">Data Persistence</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                MongoDB Atlas database with Mongoose schemas for Users, Blogs, Follow relationships,
                and Reader Interactions.
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="rounded-xl border border-[#e7e4dc] bg-[#f5f1e8] p-8 text-center sm:p-10">
          <h3 className="font-serif text-2xl font-bold text-stone-900">
            Have an essay or guide to share?
          </h3>
          <p className="mx-auto mt-2 max-w-lg text-sm text-stone-600">
            Join other contributors and write about software design, architecture, or industry
            insights.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              to="/create"
              className="inline-flex items-center gap-2 rounded-md bg-stone-900 px-5 py-2.5 text-sm font-medium text-stone-50 shadow-xs hover:bg-stone-800"
            >
              <Feather size={16} />
              <span>Publish Your First Piece</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
