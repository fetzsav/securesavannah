import Link from 'next/link';

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Free Consultation</h1>
      <p className="text-blue-200 mb-8 text-center">Schedule your complimentary security assessment and receive a customized protection plan.</p>
      <div className="text-center space-x-4">
        <a href="mailto:info@securesavannah.com" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold inline-block">Email Us</a>
        <Link href="/" className="px-8 py-3 border border-blue-400 text-blue-400 rounded-lg font-semibold inline-block hover:bg-blue-400 hover:text-slate-900">Back to Home</Link>
      </div>
    </div>
  );
}
