import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="font-serif text-6xl md:text-8xl mb-4">404</h1>
      <p className="text-xl text-white/60 mb-8">Page not found</p>
      <Link
        href="/"
        className="text-lg text-white hover:text-white/70 transition-colors link-underline"
      >
        Go back home
      </Link>
    </div>
  )
}
