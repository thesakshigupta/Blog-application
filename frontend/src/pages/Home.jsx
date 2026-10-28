import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  BookOpen,
  PenSquare,
  Clock,
  Calendar,
  Heart,
  Trash2,
  User,
  ArrowRight,
  Sparkles,
  AlertCircle,
  Loader2,
  Tag,
  Share2,
} from 'lucide-react';
import { useBlog } from '../hooks/use.blog';
import { useLike } from '../hooks/use.like';

export default function Home() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [selectedTag, setSelectedTag] = useState('All');
  const [loading, setLoading] = useState(true);
  const [actionError, setActionError] = useState('');
  const [expandedBlogId, setExpandedBlogId] = useState(null);
  const [likedBlogs, setLikedBlogs] = useState({});

  const { handleGetAllBlogs, handleDeleteBlog } = useBlog();
  const { handleLike } = useLike();
  const blogs = useSelector((s) => s.StoreState.blogs) || [];
  const currentUser = useSelector((s) => s.StoreState.user);
  const isLoggedIn = useSelector((s) => s.StoreState.isLoggedIn);

  useEffect(() => {
    async function loadBlogs() {
      setLoading(true);
      await handleGetAllBlogs();
      setLoading(false);
    }
    loadBlogs();
  }, []);

  const onLikeClick = async (blogId) => {
    if (!isLoggedIn) {
      setActionError('Please sign in to applaud or like stories.');
      setTimeout(() => setActionError(''), 3000);
      return;
    }
    setLikedBlogs((prev) => ({
      ...prev,
      [blogId]: !prev[blogId],
    }));
    await handleLike(blogId);
  };

  const onDeleteClick = async (blogId) => {
    if (window.confirm('Are you sure you want to retract and delete this article?')) {
      const res = await handleDeleteBlog(blogId);
      if (!res?.success) {
        setActionError(res?.error || 'Failed to delete blog.');
        setTimeout(() => setActionError(''), 3000);
      }
    }
  };

  // Filter blogs by search and category tags
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      !searchQuery ||
      blog.heading?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.content?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.userId?.username?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSearch;
  });

  const featuredBlog = filteredBlogs.length > 0 ? filteredBlogs[0] : null;
  const recentBlogs = filteredBlogs.length > 1 ? filteredBlogs.slice(1) : [];

  const estimateReadTime = (text = '') => {
    const words = text.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 180));
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Recent';
    try {
      return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }).format(new Date(dateString));
    } catch {
      return 'Recent';
    }
  };

  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Editorial Hero Masthead Header */}
        <section className="border-b border-[#e7e4dc] pb-10 pt-4 text-center sm:text-left">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e7e4dc] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-stone-700 shadow-2xs">
                <Sparkles size={13} className="text-[#b45309]" />
                <span>Curated Articles &amp; Technical Insights</span>
              </div>
              <h1 className="mt-4 font-serif text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
                Essays, ideas &amp; dispatches.
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-stone-600 sm:text-lg">
                An open journal for engineers, creators, and thinkers to share knowledge,
                craft stories, and reflect on technology and craft.
              </p>
            </div>

            <div className="flex shrink-0 items-center justify-center sm:justify-end gap-3">
              <Link
                to="/create"
                className="inline-flex items-center gap-2 rounded-md bg-stone-900 px-5 py-3 text-sm font-medium text-stone-50 shadow-xs transition hover:bg-stone-800"
              >
                <PenSquare size={16} />
                <span>Write an Article</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Global Feedback Banner */}
        {actionError && (
          <div
            role="alert"
            className="my-4 flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900"
          >
            <AlertCircle size={16} className="text-amber-700" />
            <span>{actionError}</span>
          </div>
        )}

        {/* Active Search Indicator */}
        {searchQuery && (
          <div className="my-6 flex items-center justify-between rounded-lg border border-[#e7e4dc] bg-white px-4 py-2.5 text-sm text-stone-700">
            <span>
              Showing search results for: <strong>&ldquo;{searchQuery}&rdquo;</strong>
            </span>
            <Link
              to="/"
              className="text-xs font-semibold text-[#b45309] hover:underline"
            >
              Clear filter
            </Link>
          </div>
        )}

        {/* Content Section */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 text-stone-500">
            <Loader2 size={32} className="animate-spin text-[#b45309]" />
            <p className="mt-4 font-serif text-lg text-stone-700">Loading publications...</p>
          </div>
        ) : filteredBlogs.length === 0 ? (
          /* Empty State */
          <div className="my-12 rounded-2xl border border-dashed border-[#d6d1c4] bg-white/70 p-12 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-stone-100 text-stone-600">
              <BookOpen size={28} />
            </div>
            <h3 className="mt-5 font-serif text-2xl font-bold text-stone-900">
              {searchQuery ? 'No matching stories found' : 'The journal is quiet today'}
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-stone-600">
              {searchQuery
                ? 'Try searching with different keywords or view all articles.'
                : 'The printing press is ready. Share your reflections, coding guide, or creative story with the community.'}
            </p>
            <div className="mt-6 flex justify-center gap-3">
              {searchQuery ? (
                <Link
                  to="/"
                  className="rounded-md border border-[#e7e4dc] bg-white px-4 py-2 text-sm font-medium text-stone-800 hover:bg-stone-50"
                >
                  View All Stories
                </Link>
              ) : (
                <Link
                  to="/create"
                  className="inline-flex items-center gap-2 rounded-md bg-stone-900 px-5 py-2.5 text-sm font-medium text-white shadow-xs hover:bg-stone-800"
                >
                  <PenSquare size={16} />
                  <span>Write the First Article</span>
                </Link>
              )}
            </div>
          </div>
        ) : (
          <div className="py-10 space-y-12">
            {/* Featured Lead Story (Lead Editorial) */}
            {featuredBlog && !searchQuery && (
              <article className="rounded-xl border border-[#e7e4dc] bg-white p-6 shadow-xs sm:p-10 transition hover:border-[#d6d1c4]">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[#b45309]">
                  <Tag size={13} />
                  <span>Featured Dispatch</span>
                </div>

                <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
                  {featuredBlog.heading}
                </h2>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-stone-500 font-medium border-b border-[#ece8de] pb-5">
                  <div className="flex items-center gap-2 text-stone-800">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-stone-200 text-[10px] font-bold text-stone-700 uppercase">
                      {featuredBlog.userId?.username?.charAt(0) || 'A'}
                    </div>
                    <span>{featuredBlog.userId?.username || 'Staff Author'}</span>
                  </div>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    {formatDate(featuredBlog.createdAt)}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} />
                    {estimateReadTime(featuredBlog.content)} min read
                  </span>
                </div>

                <div className="mt-6">
                  <p
                    className={`font-editorial text-lg leading-relaxed text-stone-700 ${
                      expandedBlogId === featuredBlog._id ? '' : 'line-clamp-4'
                    }`}
                  >
                    {featuredBlog.content}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#ece8de] pt-5">
                  <button
                    onClick={() =>
                      setExpandedBlogId(
                        expandedBlogId === featuredBlog._id ? null : featuredBlog._id
                      )
                    }
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-900 hover:text-[#b45309]"
                  >
                    <span>{expandedBlogId === featuredBlog._id ? 'Collapse article' : 'Read full piece'}</span>
                    <ArrowRight size={15} />
                  </button>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => onLikeClick(featuredBlog._id)}
                      className={`inline-flex items-center gap-1.5 text-xs font-medium transition ${
                        likedBlogs[featuredBlog._id]
                          ? 'text-rose-600'
                          : 'text-stone-500 hover:text-rose-600'
                      }`}
                    >
                      <Heart
                        size={16}
                        className={likedBlogs[featuredBlog._id] ? 'fill-rose-500' : ''}
                      />
                      <span>Applaud</span>
                    </button>

                    {currentUser &&
                      (currentUser._id === featuredBlog.userId?._id ||
                        currentUser.id === featuredBlog.userId?._id ||
                        currentUser.username === featuredBlog.userId?.username) && (
                        <button
                          onClick={() => onDeleteClick(featuredBlog._id)}
                          title="Delete article"
                          className="text-stone-400 hover:text-red-600 transition"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                  </div>
                </div>
              </article>
            )}

            {/* Recent Stories Grid */}
            {recentBlogs.length > 0 && (
              <div>
                <div className="mb-6 flex items-baseline justify-between border-b border-[#e7e4dc] pb-3">
                  <h3 className="font-serif text-2xl font-bold text-stone-900">
                    Latest Dispatches
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-stone-500">
                    {recentBlogs.length} {recentBlogs.length === 1 ? 'article' : 'articles'}
                  </span>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {recentBlogs.map((blog) => {
                    const isExpanded = expandedBlogId === blog._id;
                    const isOwner =
                      currentUser &&
                      (currentUser._id === blog.userId?._id ||
                        currentUser.id === blog.userId?._id ||
                        currentUser.username === blog.userId?.username);

                    return (
                      <article
                        key={blog._id}
                        className="flex flex-col justify-between rounded-xl border border-[#e7e4dc] bg-white p-6 shadow-xs transition hover:border-stone-400"
                      >
                        <div>
                          {/* Metadata */}
                          <div className="flex items-center justify-between text-xs text-stone-500">
                            <div className="flex items-center gap-2">
                              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-stone-100 text-[10px] font-bold text-stone-700 uppercase">
                                {blog.userId?.username?.charAt(0) || 'U'}
                              </div>
                              <span className="font-medium text-stone-800">
                                {blog.userId?.username || 'Writer'}
                              </span>
                            </div>

                            <div className="flex items-center gap-2">
                              <span>{formatDate(blog.createdAt)}</span>
                              <span>•</span>
                              <span>{estimateReadTime(blog.content)}m read</span>
                            </div>
                          </div>

                          {/* Title */}
                          <h4 className="mt-3 font-serif text-2xl font-bold leading-snug text-stone-900 hover:text-stone-700">
                            {blog.heading}
                          </h4>

                          {/* Content Preview */}
                          <p
                            className={`mt-3 font-editorial text-base leading-relaxed text-stone-600 ${
                              isExpanded ? '' : 'line-clamp-3'
                            }`}
                          >
                            {blog.content}
                          </p>
                        </div>

                        {/* Bottom Actions */}
                        <div className="mt-6 flex items-center justify-between border-t border-[#ece8de] pt-4 text-xs">
                          <button
                            onClick={() => setExpandedBlogId(isExpanded ? null : blog._id)}
                            className="font-semibold text-stone-900 hover:text-[#b45309] inline-flex items-center gap-1"
                          >
                            <span>{isExpanded ? 'Show less' : 'Read story'}</span>
                            <ArrowRight size={13} />
                          </button>

                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => onLikeClick(blog._id)}
                              className={`inline-flex items-center gap-1 text-xs transition ${
                                likedBlogs[blog._id]
                                  ? 'text-rose-600'
                                  : 'text-stone-500 hover:text-rose-600'
                              }`}
                            >
                              <Heart
                                size={15}
                                className={likedBlogs[blog._id] ? 'fill-rose-500' : ''}
                              />
                            </button>

                            {isOwner && (
                              <button
                                onClick={() => onDeleteClick(blog._id)}
                                title="Delete article"
                                className="text-stone-400 hover:text-red-600 transition"
                              >
                                <Trash2 size={15} />
                              </button>
                            )}
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
