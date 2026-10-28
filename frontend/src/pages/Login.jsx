import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { BookOpen, User, Lock, ArrowRight, AlertCircle, Loader2 } from 'lucide-react';
import { useUser } from '../hooks/use.user';

export default function Login() {
  const { handleLogin } = useUser();
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    setServerError('');
    const identifier = data.identifier.trim();
    const isEmail = identifier.includes('@');

    const result = await handleLogin({
      email: isEmail ? identifier : undefined,
      username: !isEmail ? identifier : undefined,
      password: data.password,
    });

    if (!result?.success) {
      setServerError(result?.error || 'Invalid username/email or password');
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-xl border border-[#e7e4dc] bg-white p-8 shadow-xs sm:p-10">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-stone-900 text-stone-50 shadow-xs">
            <BookOpen size={22} strokeWidth={2} />
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-stone-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-stone-600">
            Sign in to access your journal, drafts, and reading list.
          </p>
        </div>

        {/* Server Error Alert */}
        {serverError && (
          <div
            role="alert"
            className="mb-6 flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50/80 p-3.5 text-sm text-red-800"
          >
            <AlertCircle size={18} className="shrink-0 text-red-600 mt-0.5" />
            <span>{serverError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Username or Email */}
          <div>
            <label
              htmlFor="identifier"
              className="mb-1.5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-stone-700"
            >
              <span>Username or Email</span>
            </label>

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-stone-400">
                <User size={16} />
              </div>
              <input
                id="identifier"
                type="text"
                autoComplete="username"
                placeholder="Enter username or email"
                {...register('identifier', {
                  required: 'Username or email is required',
                })}
                className={`w-full rounded-md border bg-[#faf8f5]/50 py-2.5 pl-9 pr-3.5 text-sm text-stone-900 outline-none transition focus:bg-white focus:ring-1 ${
                  errors.identifier
                    ? 'border-red-400 focus:border-red-500 focus:ring-red-500'
                    : 'border-[#d6d1c4] focus:border-stone-800 focus:ring-stone-800'
                }`}
              />
            </div>

            {errors.identifier && (
              <p className="mt-1 text-xs text-red-600">{errors.identifier.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-xs font-semibold uppercase tracking-wider text-stone-700"
              >
                Password
              </label>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-stone-400">
                <Lock size={16} />
              </div>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                {...register('password', {
                  required: 'Password is required',
                })}
                className={`w-full rounded-md border bg-[#faf8f5]/50 py-2.5 pl-9 pr-3.5 text-sm text-stone-900 outline-none transition focus:bg-white focus:ring-1 ${
                  errors.password
                    ? 'border-red-400 focus:border-red-500 focus:ring-red-500'
                    : 'border-[#d6d1c4] focus:border-stone-800 focus:ring-stone-800'
                }`}
              />
            </div>

            {errors.password && (
              <p className="mt-1 text-xs text-red-600">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-stone-900 py-3 text-sm font-medium text-stone-50 shadow-xs transition hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-800 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Signing in...</span>
              </>
            ) : (
              <>
                <span>Sign In to Journal</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        {/* Footer Navigation */}
        <p className="mt-8 border-t border-[#ece8de] pt-5 text-center text-xs text-stone-600">
          New to The Daily?{' '}
          <Link
            to="/signup"
            className="font-semibold text-stone-900 underline underline-offset-4 hover:text-[#b45309]"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
