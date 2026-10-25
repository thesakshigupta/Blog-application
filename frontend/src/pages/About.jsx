import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen bg-slate-50 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-10">
          <span className="inline-block rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
            ABOUT US
          </span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            About BlogVerse
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Welcome to <strong className="font-semibold text-teal-700">BlogVerse</strong>
            {' '}— a modern blogging platform built with a decoupled architecture.
            Here, you can write blogs, interact with other readers through likes
            and comments, and follow your favorite authors.
          </p>
        </div>

        <div className="mb-10 border-t border-slate-200" />

        {/* Core Features */}
        <div className="mb-10">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">
            🚀 Core Features
          </h2>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                🔐 Authentication
              </h3>
              <p className="leading-7 text-slate-600">
                Secure signup and login system for user accounts.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                📝 Blog Management
              </h3>
              <p className="leading-7 text-slate-600">
                Create, edit, and publish blog posts seamlessly.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                💬 Reader Interactions
              </h3>
              <p className="leading-7 text-slate-600">
                Share your thoughts through likes and comments.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                🤝 Follow System
              </h3>
              <p className="leading-7 text-slate-600">
                Connect with creators and discover their latest posts.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10 border-t border-slate-200" />

        {/* Tech Stack */}
        <div>
          <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl">
            💻 Tech Stack &amp; Architecture
          </h2>

          <p className="mb-6 leading-7 text-slate-600">
            BlogVerse follows a clean separation of concerns to keep the
            application modular, maintainable, and scalable.
          </p>

          <div className="space-y-4">
            <div className="rounded-lg border-l-4 border-teal-500 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900">
                Frontend
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                React.js, Custom Hooks, and a modular service layer
                (<code className="rounded bg-slate-100 px-1.5 py-1 text-sm text-teal-700">api.js</code>).
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-indigo-500 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900">
                Backend
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Node.js, Express.js, and RESTful APIs.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-amber-500 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900">
                Database
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                MongoDB for storing application data.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="mt-12 rounded-2xl bg-teal-700 px-6 py-8 text-center text-white sm:px-10">
          <h2 className="text-2xl font-bold">
            Your Stories. Your Voice. Your BlogVerse.
          </h2>
          <p className="mt-3 leading-7 text-teal-50">
            A place to share ideas, express creativity, and connect with readers.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
