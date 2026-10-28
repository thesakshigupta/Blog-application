import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  PenTool,
  Clock,
  ArrowLeft,
  AlertCircle,
  CheckCircle2,
  Loader2,
  FileText,
  Lock,
} from 'lucide-react';
import { useBlog } from '../hooks/use.blog';

export default function Create() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isLoggedIn = useSelector((s) => s.StoreState.isLoggedIn);
  const user = useSelector((s) => s.StoreState.user);
  const { handleCreateBlog } = useBlog();
  const navigate = useNavigate();

  // Reading time estimate (approx 200 words per minute)
  const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;
  const estimatedReadMinutes = Math.max(1, Math.ceil(wordCount / 200));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage({ type: '', text: '' });

    if (!isLoggedIn) {
      setStatusMessage({
        type: 'error',
        text: 'Please sign in to publish an article.',
      });
      return;
    }

    if (!title.trim() || !content.trim()) {
      setStatusMessage({
        type: 'error',
        text: 'Both title and content are required.',
      });
      return;
    }

    setIsSubmitting(true);
    const res = await handleCreateBlog({
      heading: title.trim(),
      content: content.trim(),
    });
    setIsSubmitting(false);

    if (res?.success) {
      setStatusMessage({
        type: 'success',
        text: 'Your article has been published successfully! Redirecting...',
      });
      setTimeout(() => {
        navigate('/');
      }, 1200);
    } else {
      setStatusMessage({
        type: 'error',
        text: res?.error || 'Failed to publish post. Please try again.',
      });
    }
  };

  return (
    <section className="min-h-[calc(100vh-80px)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-600 transition hover:text-stone-900"
          >
            <ArrowLeft size={14} />
            <span>Back to Journal</span>
          </Link>

          <div className="flex items-center gap-3 text-xs text-stone-500 font-mono">
            <span>{wordCount} words</span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={12} />
              {estimatedReadMinutes} min read
            </span>
          </div>
        </div>

        {/* Auth Warning if logged out */}
        {!isLoggedIn && (
          <div className="mb-6 flex items-center justify-between rounded-lg border border-amber-200 bg-amber-50/80 p-4 text-sm text-amber-900">
            <div className="flex items-center gap-2.5">
              <Lock size={18} className="shrink-0 text-amber-700" />
              <span>You must be signed in to publish essays and articles.</span>
            </div>
            <Link
              to="/signin"
              className="rounded-md bg-stone-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-stone-800"
            >
              Sign In
            </Link>
          </div>
        )}

        {/* Editor Form Card */}
        <div className="rounded-xl border border-[#e7e4dc] bg-white p-6 shadow-xs sm:p-10">
          <div className="mb-8 border-b border-[#ece8de] pb-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#b45309]">
              <PenTool size={14} />
              <span>Author Dispatch</span>
            </div>
            <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Write a New Article
            </h1>
            <p className="mt-2 text-sm text-stone-600">
              Draft your thoughts, essays, or technical insights with clarity and focus.
            </p>
          </div>

          {/* Feedback status alerts */}
          {statusMessage.text && (
            <div
              className={`mb-6 flex items-start gap-2.5 rounded-lg border p-3.5 text-sm ${
                statusMessage.type === 'success'
                  ? 'border-emerald-200 bg-emerald-50/90 text-emerald-900'
                  : 'border-red-200 bg-red-50/90 text-red-900'
              }`}
            >
              {statusMessage.type === 'success' ? (
                <CheckCircle2 size={18} className="shrink-0 text-emerald-600 mt-0.5" />
              ) : (
                <AlertCircle size={18} className="shrink-0 text-red-600 mt-0.5" />
              )}
              <span>{statusMessage.text}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Field */}
            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-xs font-semibold uppercase tracking-wider text-stone-700"
              >
                Article Headline
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Give your piece a compelling, clear title..."
                required
                className="w-full rounded-md border border-[#d6d1c4] bg-[#faf8f5]/40 px-4 py-3 font-serif text-xl font-bold text-stone-900 outline-none transition placeholder:font-sans placeholder:text-base placeholder:font-normal placeholder:text-stone-400 focus:border-stone-800 focus:bg-white focus:ring-1 focus:ring-stone-800"
              />
            </div>

            {/* Content Field */}
            <div>
              <label
                htmlFor="content"
                className="mb-2 block text-xs font-semibold uppercase tracking-wider text-stone-700"
              >
                Article Body
              </label>
              <textarea
                id="content"
                rows={12}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your story, technical insight, or reflection here..."
                required
                className="w-full resize-y rounded-md border border-[#d6d1c4] bg-[#faf8f5]/40 px-4 py-3.5 font-editorial text-base leading-relaxed text-stone-900 outline-none transition placeholder:font-sans placeholder:text-sm placeholder:text-stone-400 focus:border-stone-800 focus:bg-white focus:ring-1 focus:ring-stone-800"
              />
            </div>

            {/* Author Byline & Publish Button */}
            <div className="flex flex-col gap-4 border-t border-[#ece8de] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-xs text-stone-500">
                <FileText size={15} />
                <span>
                  Author byline:{' '}
                  <strong className="font-semibold text-stone-800">
                    {user?.username || 'Guest Writer'}
                  </strong>
                </span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !isLoggedIn}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 shadow-xs transition hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-800 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Publishing...</span>
                  </>
                ) : (
                  <span>Publish Article</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
