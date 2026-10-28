import { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="border-b border-[#e7e4dc] pb-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e7e4dc] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-stone-700 shadow-2xs">
            <MessageSquare size={13} className="text-[#b45309]" />
            <span>Letters to the Editor &amp; Inquiries</span>
          </div>

          <h1 className="mt-4 font-serif text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
            Get in Touch
          </h1>

          <p className="mt-3 font-editorial text-xl text-stone-600">
            Send an editorial inquiry, project proposal, or feedback regarding our publications.
          </p>
        </div>

        {/* Content Layout */}
        <div className="mt-10 grid gap-10 lg:grid-cols-5">
          {/* Contact Details */}
          <div className="space-y-6 lg:col-span-2">
            <div>
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                Editorial Office
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                We review reader letters, publishing pitches, and software collaborations.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#ece8de]">
              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#e7e4dc] bg-white text-[#b45309]">
                  <Mail size={16} />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Direct Correspondence
                  </h3>
                  <a
                    href="mailto:editorial@thedaily.press"
                    className="mt-1 block text-sm font-medium text-stone-900 hover:text-[#b45309]"
                  >
                    editorial@thedaily.press
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#e7e4dc] bg-white text-[#b45309]">
                  <MapPin size={16} />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Location
                  </h3>
                  <p className="mt-1 text-sm font-medium text-stone-900">
                    Bengaluru / Remote
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-[#e7e4dc] bg-white p-6 shadow-xs sm:p-8">
              {submitted ? (
                <div className="py-8 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="mt-4 font-serif text-2xl font-bold text-stone-900">
                    Letter Received
                  </h3>
                  <p className="mx-auto mt-2 max-w-sm text-sm text-stone-600">
                    Thank you for your dispatch. Our editors will review your inquiry and follow
                    up shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-6 rounded-md border border-[#e7e4dc] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-800 hover:bg-stone-50"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-serif text-xl font-bold text-stone-900 mb-4">
                    Send a Message
                  </h3>

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-stone-700"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, name: e.target.value }))
                      }
                      className="w-full rounded-md border border-[#d6d1c4] bg-[#faf8f5]/40 px-3.5 py-2.5 text-sm text-stone-900 outline-none transition focus:border-stone-800 focus:bg-white focus:ring-1 focus:ring-stone-800"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-stone-700"
                    >
                      Your Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, email: e.target.value }))
                      }
                      className="w-full rounded-md border border-[#d6d1c4] bg-[#faf8f5]/40 px-3.5 py-2.5 text-sm text-stone-900 outline-none transition focus:border-stone-800 focus:bg-white focus:ring-1 focus:ring-stone-800"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-stone-700"
                    >
                      Message or Inquiry
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Share your thoughts or proposal..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, message: e.target.value }))
                      }
                      className="w-full resize-y rounded-md border border-[#d6d1c4] bg-[#faf8f5]/40 px-3.5 py-2.5 text-sm text-stone-900 outline-none transition focus:border-stone-800 focus:bg-white focus:ring-1 focus:ring-stone-800"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-stone-900 py-3 text-sm font-medium text-stone-50 shadow-xs transition hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-800 focus:ring-offset-2"
                  >
                    <span>Dispatch Letter</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
