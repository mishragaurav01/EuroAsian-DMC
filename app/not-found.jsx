import Link from 'next/link';
import Layout from '@/components/layout/Layout';

/**
 * 404 Not Found page.
 * Server Component with Layout wrapper.
 */
export default function NotFound() {
    return (
        <Layout>
            <section className="min-h-[60vh] flex items-center justify-center">
                <div className="container text-center">
                    <h1 className="text-6xl md:text-8xl font-bold text-slate-900 mb-4">404</h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-slate-600 max-w-md mx-auto mb-8">
                        Sorry, the page you're looking for doesn't exist or has been moved.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                        Back to Home
                    </Link>
                </div>
            </section>
        </Layout>
    );
}
