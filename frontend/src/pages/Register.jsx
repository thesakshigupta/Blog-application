import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { BookOpen, User, Mail, Lock, ArrowRight, AlertCircle, Loader2 } from 'lucide-react';
import { useUser } from '../hooks/use.user';

export default function Register() {
  const { handleSignup } = useUser();
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const password = watch('password');

  const onSubmit = async (data) => {
    setServerError('');
    const result = await handleSignup({
      username: data.username.trim(),
      email: data.email.trim(),
      password: data.password,
    });

    if (!result?.success) {
      setServerError(result?.error || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-xl border border-[#e7e4dc] bg-white p-8 shadow-xs sm:p-10">
        {/* Masthead Icon & Brand */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-stone-900 text-stone-50 shadow-xs">
            <BookOpen size={22} strokeWidth={2} />
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-stone-900">
            Create an Account
          </h1>

          <p className="mt-2 text-sm text-stone-600">
            Join The Daily community to publish, read, and converse.
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
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="mb-1.5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-stone-700"
            >
              <span>Username</span>
            </label>

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-stone-400">
                <User size={16} />
              </div>
              <input
                id="username"
                type="text"
                autoComplete="username"
                placeholder="e.g. sakshi_writer"
                {...register('username', {
                  required: 'Username is required',
                  minLength: {
                    value: 3,
                    message: 'Username must be at least 3 characters',
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9_]+$/,
                    message: 'Only letters, numbers, and underscores allowed',
                  },
                })}
                className={`w-full rounded-md border bg-[#faf8f5]/50 py-2.5 pl-9 pr-3.5 text-sm text-stone-900 outline-none transition focus:bg-white focus:ring-1 ${
                  errors.username
                    ? 'border-red-400 focus:border-red-500 focus:ring-red-500'
                    : 'border-[#d6d1c4] focus:border-stone-800 focus:ring-stone-800'
                }`}
              />
            </div>

            {errors.username && (
              <p className="mt-1 text-xs text-red-600">{errors.username.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-stone-700"
            >
              <span>Email Address</span>
            </label>

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-stone-400">
                <Mail size={16} />
              </div>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="name@example.com"
                {...register('email', {
                  required: 'Email address is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email address',
                  },
                })}
                className={`w-full rounded-md border bg-[#faf8f5]/50 py-2.5 pl-9 pr-3.5 text-sm text-stone-900 outline-none transition focus:bg-white focus:ring-1 ${
                  errors.email
                    ? 'border-red-400 focus:border-red-500 focus:ring-red-500'
                    : 'border-[#d6d1c4] focus:border-stone-800 focus:ring-stone-800'
                }`}
              />
            </div>

            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-1.5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-stone-700"
            >
              <span>Password</span>
              <span className="text-[11px] font-normal lowercase tracking-normal text-stone-500">
                min 6 characters
              </span>
            </label>

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-stone-400">
                <Lock size={16} />
              </div>
              <input
                id="password"
                type="password"
                autoComplete="new-password"
                placeholder="Create a strong password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
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

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-1.5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-stone-700"
            >
              <span>Confirm Password</span>
            </label>

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-stone-400">
                <Lock size={16} />
              </div>
              <input
                id="confirmPassword"
                type="password"
                autoComplete="new-password"
                placeholder="Re-enter your password"
                {...register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: (val) => val === password || 'Passwords do not match',
                })}
                className={`w-full rounded-md border bg-[#faf8f5]/50 py-2.5 pl-9 pr-3.5 text-sm text-stone-900 outline-none transition focus:bg-white focus:ring-1 ${
                  errors.confirmPassword
                    ? 'border-red-400 focus:border-red-500 focus:ring-red-500'
                    : 'border-[#d6d1c4] focus:border-stone-800 focus:ring-stone-800'
                }`}
              />
            </div>

            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-red-600">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-stone-900 py-3 text-sm font-medium text-stone-50 shadow-xs transition hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-800 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Registering account...</span>
              </>
            ) : (
              <>
                <span>Complete Registration</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        {/* Footer Navigation */}
        <p className="mt-8 border-t border-[#ece8de] pt-5 text-center text-xs text-stone-600">
          Already a subscriber or writer?{' '}
          <Link
            to="/signin"
            className="font-semibold text-stone-900 underline underline-offset-4 hover:text-[#b45309]"
          >
            Sign in to your account
          </Link>
        </p>
      </div>
    </div>
  );
}
