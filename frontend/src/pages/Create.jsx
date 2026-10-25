import React, { useState } from 'react';

const Create = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Technology');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend demonstration only
    setMessage('Your post is ready! Connect your backend to publish it.');
  };

  return (
    <section className="min-h-screen bg-slate-50 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-8">
          <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
            BLOGVERSE EDITOR
          </span>
           
          <h1 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
            Create a New Post
          </h1>

          <p className="mt-3 leading-7 text-slate-500">
            Share your ideas, tell your story, and inspire your readers.
          </p>
        </div>

        {/* Create Post Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="mb-6">
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Post Title
            </label>

            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter an engaging title..."
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="category"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Category
            </label>

            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
            >
              <option>Technology</option>
              <option>Programming</option>
              <option>Education</option>
              <option>Lifestyle</option>
              <option>Travel</option>
              <option>Other</option>
            </select>
          </div>

          <div className="mb-6">
            <label
              htmlFor="content"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Post Content
            </label>

            <textarea
              id="content"
              rows="10"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Start writing your blog post here..."
              required
              className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 leading-7 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-400">
              {content.length} characters
            </p>

            <button
              type="submit"
              className="rounded-lg bg-teal-600 px-7 py-3 font-semibold text-white transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Publish Post →
            </button>
          </div>

          {message && (
            <p
              role="status"
              className="mt-5 rounded-lg bg-teal-50 p-4 text-sm text-teal-800"
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Create;
