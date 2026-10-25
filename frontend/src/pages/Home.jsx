import React from 'react';

const categories = [
  { icon: '💻', title: 'Technology', desc: 'Explore the latest tech ideas.' },
  { icon: '🧑‍💻', title: 'Programming', desc: 'Learn and share coding knowledge.' },
  { icon: '📚', title: 'Education', desc: 'Discover ideas that help you grow.' },
];

export default function Home() {
  return (
    <section className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-14">
          <p className="font-semibold text-teal-600">BLOGVERSE COMMUNITY</p>

          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            Discover ideas.
            <br />
            <span className="text-teal-600">Share your knowledge.</span>
          </h1>

          <p className="mt-5 max-w-2xl leading-8 text-slate-600">
            Your space to publish articles, exchange ideas, and
            connect with readers who share your interests.
          </p>

          <a href="/create"
            className="mt-7 inline-block rounded-lg bg-teal-600 px-6 py-3 font-semibold text-white hover:bg-teal-700">
            + Write a Blog
          </a>
        </div>

        <h2 className="mb-6 mt-12 text-2xl font-bold text-slate-900">
          Explore Categories
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => (
            <div key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <span className="text-4xl">{item.icon}</span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
