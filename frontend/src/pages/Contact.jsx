import React from 'react'

const Contact = () => {
  return (
    <section className="min-h-screen bg-slate-50 px-5 py-16 md:px-12 lg:px-20">

      {/* Header */}
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-3 text-sm font-bold tracking-[3px] text-teal-600">
          GET IN TOUCH
        </p>

        <h1 className="mb-4 text-3xl font-bold text-slate-900 md:text-5xl">
          Contact Me
        </h1>

        <p className="mx-auto max-w-xl leading-7 text-slate-500">
          Have a project in mind? Let's work together
          to bring your ideas to life.
        </p>  
      </div>

      {/* Contact Content */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-14">

        {/* Contact Information */}
        <div className="pt-2">
          <h2 className="mb-4 text-2xl font-bold text-slate-900 md:text-3xl">
            Let's Talk
          </h2>

          <p className="max-w-md leading-7 text-slate-600">
            I am open to new projects, collaborations,
            and exciting opportunities.
          </p>

          <div className="mt-8 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-xl text-teal-700">
              ✉
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Email
              </h3>
              <p className="mt-1 break-all text-slate-500">
                hello@devsakshi.in
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-xl text-teal-700">
              📍
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Location
              </h3>
              <p className="mt-1 text-slate-500">
                India
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/50 sm:p-8"
          onSubmit={(e) => {
            e.preventDefault()
            alert('Thank you for contacting me!')
          }}
        >
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            Send a Message
          </h2>

          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Your Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Your Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Your Message
            </label>

            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message..."
              required
              className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-teal-600 px-6 py-3.5 font-semibold text-white transition duration-300 hover:bg-teal-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message →
          </button>
        </form>

      </div>
    </section>
  )
}

export default Contact
