import Link from 'next/link';

export default function ProfessionalPackage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Professional Package</h1>
      <p className="text-blue-200 mb-8 text-center">Includes everything in Essential plus four 4K cameras and advanced NVR with AI object recognition.</p>
      <div className="text-center">
        <Link href="/consultation" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold">Schedule Consultation</Link>
      </div>
      <div className="mt-12 text-center">
        <Link href="/packages" className="text-blue-400 hover:underline">Back to Packages</Link>
      </div>
    </div>
  );
}
