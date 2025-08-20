import Link from 'next/link';

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Installation Packages</h1>
      <p className="mb-8 text-center text-blue-200">Choose the security solution that fits your needs.</p>
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        <Link href="/packages/essential" className="block p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition">
          <h2 className="text-2xl font-semibold mb-2">Essential Package</h2>
          <p>Professional doorbell camera installation and single garage monitoring.</p>
        </Link>
        <Link href="/packages/professional" className="block p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition">
          <h2 className="text-2xl font-semibold mb-2">Professional Package</h2>
          <p>Everything in Essential plus four additional 4K cameras and advanced NVR.</p>
        </Link>
      </div>
      <div className="mt-12 text-center">
        <Link href="/" className="text-blue-400 hover:underline">Back to Home</Link>
      </div>
    </div>
  );
}
