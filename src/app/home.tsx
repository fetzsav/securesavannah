// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
const App: React.FC = () => {
const [selectedPackage, setSelectedPackage] = useState<string>('');
return (
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
{/* Hero Section */}
<div
    className="relative h-screen flex items-center justify-center overflow-hidden"
    style={{
    backgroundImage: `url('/images/splash2.jpg')`, // <-- Updated
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
    }}
>
    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-transparent"></div>
    {/* Header Navigation */}
    <div className="absolute top-0 left-0 right-0 z-20 p-8">
    <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
        <img
            src="/images/logo.png" // <-- Updated
            alt="SecureSavannah Logo"
            className="h-20 w-auto"
        />
        </div>
        <div className="flex space-x-4">
        <span className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
            Secure
        </span>
        <span className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
            Professional
        </span>
        <span className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
            Reliable
        </span>
        </div>
    </div>
    </div>
    {/* Hero Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-2 gap-16 items-center">
    <div className="text-white">
        <h1 className="text-6xl font-bold mb-8 leading-tight">
        Advanced Security Camera Solutions
        </h1>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
        Protect what matters most with our cutting-edge surveillance technology. Professional installation, local storage, and 24/7 monitoring capabilities for complete peace of mind.
        </p>
        <div className="flex space-x-6">
        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold !rounded-button whitespace-nowrap cursor-pointer transition-colors">
            View Packages
        </button>
        <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold !rounded-button whitespace-nowrap cursor-pointer transition-colors">
            Free Consultation
        </button>
        </div>
    </div>
    <div className="relative">
        <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
        <img
            src="/images/turret_cam.jpg" // <-- Updated
            alt="Security Camera"
            className="w-full h-full object-cover object-top"
        />
        </div>
    </div>
    </div>
</div>
{/* Features Section */}
<div className="py-20 bg-slate-800">
    <div className="max-w-7xl mx-auto px-8">
    <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Premium Camera Features</h2>
        <p className="text-xl text-blue-200">Industry-leading technology for maximum security coverage</p>
    </div>
    <div className="grid grid-cols-2 gap-8">
        {/* HD Feature */}
        <div className="flex items-start space-x-6 p-8 bg-slate-700/50 rounded-2xl backdrop-blur-sm h-full">
        <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <i className="fas fa-video text-white text-2xl"></i>
        </div>
        <div>
            <h3 className="text-2xl font-bold text-white mb-4">4K Ultra HD Resolution</h3>
            <p className="text-blue-200 leading-relaxed">
            Crystal clear 4K image quality delivers exceptional detail recognition. Our cameras capture footage at 3840x2160 resolution, ensuring you never miss critical details in your security monitoring.
            </p>
        </div>
        </div>
        {/* Audio Feature */}
        <div className="flex items-start space-x-6 p-8 bg-slate-700/50 rounded-2xl backdrop-blur-sm h-full">
        <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <i className="fas fa-microphone text-white text-2xl"></i>
        </div>
        <div>
            <h3 className="text-2xl font-bold text-white mb-4">Two-Way Audio Communication</h3>
            <p className="text-blue-200 leading-relaxed">
            Built-in microphone and speaker system enables real-time communication. Monitor and interact with visitors or deter intruders with clear audio transmission capabilities.
            </p>
        </div>
        </div>
        {/* Night Vision Feature */}
        <div className="flex items-start space-x-6 p-8 bg-slate-700/50 rounded-2xl backdrop-blur-sm h-full">
        <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <i className="fas fa-moon text-white text-2xl"></i>
        </div>
        <div>
            <h3 className="text-2xl font-bold text-white mb-4">Advanced Night Vision</h3>
            <p className="text-blue-200 leading-relaxed">
            Superior infrared technology provides clear visibility up to 100 feet in complete darkness. Full-color night vision available on select models for enhanced detail recognition.
            </p>
        </div>
        </div>
        {/* PTZ Feature */}
        <div className="flex items-start space-x-6 p-8 bg-slate-700/50 rounded-2xl backdrop-blur-sm h-full">
        <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <i className="fas fa-arrows-alt text-white text-2xl"></i>
        </div>
        <div>
            <h3 className="text-2xl font-bold text-white mb-4">PTZ Control System</h3>
            <p className="text-blue-200 leading-relaxed">
            Remote pan, tilt, and zoom functionality with 360-degree rotation. Control your cameras from anywhere using our mobile app for comprehensive area coverage and tracking.
            </p>
        </div>
        </div>
    </div>
    </div>
</div>
{/* Packages Section */}
<div className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
    <div className="max-w-7xl mx-auto px-8">
    <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Professional Installation Packages</h2>
        <p className="text-xl text-blue-200">Complete security solutions tailored to your needs</p>
    </div>
    <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Package 1 */}
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
        <div className="relative mb-6">
            <div className="absolute -top-4 right-0 bg-green-500 text-white text-sm px-3 py-1 rounded-full">Save 15%</div>
            <h3 className="text-2xl font-bold text-white">Essential Package</h3>
            <div className="mt-2">
            <span className="text-lg text-gray-400 line-through">$779</span>
            <div className="text-3xl font-bold text-blue-400">$662</div>
            </div>
        </div>
        <ul className="space-y-4 mb-16">
            <li className="flex items-center text-blue-200">
            <i className="fas fa-check text-blue-400 mr-3"></i>
            Professional doorbell camera installation
            </li>
            <li className="flex items-center text-blue-200">
            <i className="fas fa-check text-blue-400 mr-3"></i>
            Single garage monitoring camera
            </li>
            <li className="flex items-center text-blue-200">
            <i className="fas fa-check text-blue-400 mr-3"></i>
            AI-powered motion detection alerts
            </li>
            <li className="flex items-center text-blue-200">
            <i className="fas fa-check text-blue-400 mr-3"></i>
            1TB local recording storage system
            </li>
        </ul>
        <button
            onClick={() => setSelectedPackage('essential')}
            className={`w-full py-4 font-semibold !rounded-button whitespace-nowrap cursor-pointer transition-colors ${
            selectedPackage === 'essential'
                ? 'bg-blue-600 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
        >
            Get Started
        </button>
        </div>
        {/* Package 2 */}
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-500">
        <div className="relative mb-6">
            <div className="absolute -top-4 right-0 bg-green-500 text-white text-sm px-3 py-1 rounded-full">Save 15%</div>
            <h3 className="text-2xl font-bold text-white">Professional Package</h3>
            <div className="mt-2">
            <span className="text-lg text-gray-400 line-through">$1,559</span>
            <div className="text-3xl font-bold text-blue-400">$1,325</div>
            </div>
        </div>
        <ul className="space-y-4 mb-12">
            <li className="flex items-center text-blue-200">
            <i className="fas fa-check text-blue-400 mr-3"></i>
            Everything from Essential Package
            </li>
            <li className="flex items-center text-blue-200">
            <i className="fas fa-check text-blue-400 mr-3"></i>
            4 additional 4K security cameras
            </li>
            <li className="flex items-center text-blue-200">
            <i className="fas fa-check text-blue-400 mr-3"></i>
            Advanced NVR with AI object recognition
            </li>
            <li className="flex items-center text-blue-200">
            <i className="fas fa-check text-blue-400 mr-3"></i>
            2TB expanded recording storage capacity
            </li>
        </ul>
        <button
            onClick={() => setSelectedPackage('professional')}
            className={`w-full py-4 font-semibold !rounded-button whitespace-nowrap cursor-pointer transition-colors ${
            selectedPackage === 'professional'
                ? 'bg-blue-600 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
        >
            Get Started
        </button>
        </div>
        {/* Custom Installation Package */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 backdrop-blur-sm rounded-2xl p-8 border border-blue-400">
        <div className="mb-6">
            <h3 className="text-2xl font-bold text-white">Custom Installation</h3>
            <p className="text-blue-100 mt-2">Tailored security solutions for unique requirements</p>
        </div>
        <ul className="space-y-4 mb-10">
            <li className="flex items-center text-blue-50">
            <i className="fas fa-check text-white mr-3"></i>
            Customized camera placement
            </li>
            <li className="flex items-center text-blue-50">
            <i className="fas fa-check text-white mr-3"></i>
            Flexible storage options
            </li>
            <li className="flex items-center text-blue-50">
            <i className="fas fa-check text-white mr-3"></i>
            Specialized equipment selection
            </li>
            <li className="flex items-center text-blue-50">
            <i className="fas fa-check text-white mr-3"></i>
            Expert consultation included
            </li>
        </ul>
        <button
            onClick={() => setSelectedPackage('custom')}
            className="w-full py-4 bg-white text-blue-600 font-semibold !rounded-button whitespace-nowrap cursor-pointer hover:bg-blue-50 transition-colors"
        >
            Schedule Consultation
        </button>
        </div>
    </div>
    <div className="text-center mt-12">
        <p className="text-blue-200 text-lg">
        All packages include local recording storage - no cloud subscription required.
        <span className="font-semibold text-white"> You own your data... because that's true security.</span>
        </p>
        <p className="text-blue-200 mt-4">
        Limited time offer: Save 15% on Essential and Professional packages
        </p>
    </div>
    </div>
</div>
{/* System Options Section */}
<div className="py-20 bg-slate-800">
    <div className="max-w-7xl mx-auto px-8">
    <div className="grid grid-cols-2 gap-16 items-center">
        <div>
        <h2 className="text-4xl font-bold text-white mb-8">Understanding Your Security System Options</h2>
        <div className="space-y-6">
            <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-home text-white"></i>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-white">Indoor Monitoring</h3>
                <p className="text-blue-200">Comprehensive interior surveillance coverage</p>
            </div>
            </div>
            <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-brain text-white"></i>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-white">AI Object Detection</h3>
                <p className="text-blue-200">Smart recognition and automated alerts</p>
            </div>
            </div>
            <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-tree text-white"></i>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-white">Outdoor Protection</h3>
                <p className="text-blue-200">Weather-resistant perimeter security</p>
            </div>
            </div>
        </div>
        </div>
        <div className="relative">
        <div className="w-full h-96 rounded-2xl overflow-hidden">
            <img
            src="/images/splash1.jpg" // <-- Updated
            alt="Security System Setup"
            className="w-full h-full object-cover object-top"
            />
        </div>
        </div>
    </div>
    </div>
</div>
{/* Contact Section */}
<div className="py-20 bg-gradient-to-br from-blue-900 to-slate-900">
    <div className="max-w-4xl mx-auto px-8 text-center">
    <h2 className="text-4xl font-bold text-white mb-8">Ready to Secure Your Property?</h2>
    <div className="grid grid-cols-3 gap-8 mb-12">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-envelope text-white text-xl"></i>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
        <p className="text-blue-200">info@securesavannah.com</p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-globe text-white text-xl"></i>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Visit Website</h3>
        <p className="text-blue-200">www.securesavannah.com</p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-phone text-white text-xl"></i>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Call Today</h3>
        <p className="text-blue-200">(912) 310-7665</p>
        </div>
    </div>
    <div className="bg-blue-600 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-white mb-4">FREE SECURITY CONSULTATION</h3>
        <p className="text-blue-100 text-lg mb-6">
        Schedule your complimentary security assessment and receive a customized protection plan for your property.
        </p>
        <button className="px-8 py-4 bg-white text-blue-600 font-semibold !rounded-button whitespace-nowrap cursor-pointer hover:bg-blue-50 transition-colors">
        Schedule Free Consultation
        </button>
    </div>
    </div>
</div>
</div>
);
};
export default App;