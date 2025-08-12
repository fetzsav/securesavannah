// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faVideo,
  faMicrophone,
  faMoon,
  faArrowsUpDownLeftRight,
  faCheck,
  faHome,
  faBrain,
  faTree,
  faEnvelope,
  faGlobe,
  faPhone,
  faMobileScreenButton,
} from '@fortawesome/free-solid-svg-icons';

const HomePage: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('');

  const handlePackageSelect = (pkg: string) => {
    setSelectedPackage(pkg);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <div
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('/images/savannah-home-dusk.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-transparent"></div>

        {/* Header Navigation */}
        <div className="absolute top-0 left-0 right-0 z-20 p-4 sm:p-8">
        <div className="flex flex-wrap justify-center lg:justify-between items-center max-w-7xl mx-auto">
            <div className="flex items-center space-x-4">
            <Image
                src="/images/logo.png"
                alt="SecureSavannah Logo"
                width={300}
                height={120}
                className="w-56 sm:w-64 md:w-72 lg:w-[300px] h-auto"
            />
            </div>
        </div>
        </div>

        {/* Hero Content */}
            <div className="relative z-10 max-w-7xl w-full mx-auto px-8 pt-24 sm:pt-40 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Advanced Security Camera Solutions
            </h1>

            <div className="flex flex-wrap gap-4 mb-6 justify-center lg:justify-start">
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

            <p className="text-lg lg:text-xl text-blue-100 mb-8 leading-relaxed">
              Protect what matters most with our cutting-edge surveillance technology. Professional installation, local
              storage, and 24/7 monitoring capabilities for complete peace of mind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg whitespace-nowrap cursor-pointer transition-colors">
                View Packages
              </button>
              <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold rounded-lg whitespace-nowrap cursor-pointer transition-colors">
                Free Consultation
              </button>
            </div>
          </div>
          {/* The second column is now empty, allowing the background image to show through */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Premium Camera Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-700/50 rounded-2xl p-8 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 mb-4">
                <FontAwesomeIcon icon={faVideo} className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">4K Ultra HD Resolution</h3>
                <p className="text-blue-200 leading-relaxed">
                  Crystal clear 4K image quality delivers exceptional detail recognition. Our cameras capture footage at
                  3840x2160 resolution, ensuring you never miss critical details in your security monitoring.
                </p>
              </div>
            </div>
            <div className="bg-slate-700/50 rounded-2xl p-8 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 mb-4">
                <FontAwesomeIcon icon={faMicrophone} className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">Two-Way Audio Communication</h3>
                <p className="text-blue-200 leading-relaxed">
                  Built-in microphone and speaker system enables real-time communication. Monitor and interact with
                  visitors or deter intruders with clear audio transmission capabilities.
                </p>
              </div>
            </div>
            <div className="bg-slate-700/50 rounded-2xl p-8 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 mb-4">
                <FontAwesomeIcon icon={faMoon} className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">Advanced Night Vision</h3>
                <p className="text-blue-200 leading-relaxed">
                  Superior infrared technology provides clear visibility up to 100 feet in complete darkness.
                  Full-color night vision available on select models for enhanced detail recognition.
                </p>
              </div>
            </div>
            <div className="bg-slate-700/50 rounded-2xl p-8 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 mb-4">
                <FontAwesomeIcon icon={faArrowsUpDownLeftRight} className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">PTZ Control System</h3>
                <p className="text-blue-200 leading-relaxed">
                  Remote pan, tilt, and zoom functionality with 360-degree rotation. Control your cameras from
                  anywhere using our mobile app for comprehensive area coverage and tracking.
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Package 1 */}
            {/* --- CLASSES ADDED HERE for responsive alignment --- */}
            <div
              className={`flex flex-col items-center text-center lg:items-stretch lg:text-left bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 ${selectedPackage === 'Essential' ? 'ring-2 ring-blue-400' : ''}`}
            >
              <div className="relative mb-6 w-full">
                <div className="absolute -top-4 -right-4 bg-green-500 text-white text-sm px-3 py-1 rounded-full">
                  Save 15%
                </div>
                <h3 className="text-2xl font-bold text-white">Essential Package</h3>
                <div className="mt-2">
                  <span className="text-lg text-gray-400 line-through">$779</span>
                  <div className="text-3xl font-bold text-blue-400">$662</div>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center text-blue-200">
                  <FontAwesomeIcon icon={faCheck} className="text-blue-400 mr-3" />
                  Professional doorbell camera installation
                </li>
                <li className="flex items-center text-blue-200">
                  <FontAwesomeIcon icon={faCheck} className="text-blue-400 mr-3" />
                  Single garage monitoring camera
                </li>
                <li className="flex items-center text-blue-200">
                  <FontAwesomeIcon icon={faCheck} className="text-blue-400 mr-3" />
                  AI-powered motion detection alerts
                </li>
                <li className="flex items-center text-blue-200">
                  <FontAwesomeIcon icon={faCheck} className="text-blue-400 mr-3" />
                  1TB local recording storage system
                </li>
              </ul>
              <button
                onClick={() => handlePackageSelect('Essential')}
                className="w-full py-4 font-semibold rounded-lg whitespace-nowrap cursor-pointer transition-colors bg-blue-600 hover:bg-blue-700 text-white"
              >
                Get Started
              </button>
            </div>

            {/* Package 2 */}
            {/* --- CLASSES ADDED HERE for responsive alignment --- */}
            <div
              className={`flex flex-col items-center text-center lg:items-stretch lg:text-left bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-blue-500 shadow-lg shadow-blue-500/20 ${selectedPackage === 'Professional' ? 'ring-2 ring-blue-400' : ''}`}
            >
              <div className="relative mb-6 w-full">
                <div className="absolute -top-4 -right-4 bg-green-500 text-white text-sm px-3 py-1 rounded-full">
                  Save 15%
                </div>
                <h3 className="text-2xl font-bold text-white">Professional Package</h3>
                <div className="mt-2">
                  <span className="text-lg text-gray-400 line-through">$1,559</span>
                  <div className="text-3xl font-bold text-blue-400">$1,325</div>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center text-blue-200">
                  <FontAwesomeIcon icon={faCheck} className="text-blue-400 mr-3" />
                  Everything from Essential Package
                </li>
                <li className="flex items-center text-blue-200">
                  <FontAwesomeIcon icon={faCheck} className="text-blue-400 mr-3" />4 additional 4K security cameras
                </li>
                <li className="flex items-center text-blue-200">
                  <FontAwesomeIcon icon={faCheck} className="text-blue-400 mr-3" />
                  Advanced NVR with AI object recognition
                </li>
                <li className="flex items-center text-blue-200">
                  <FontAwesomeIcon icon={faCheck} className="text-blue-400 mr-3" />
                  2TB expanded recording storage capacity
                </li>
              </ul>
              <button
                onClick={() => handlePackageSelect('Professional')}
                className="w-full py-4 font-semibold rounded-lg whitespace-nowrap cursor-pointer transition-colors bg-blue-600 hover:bg-blue-700 text-white"
              >
                Get Started
              </button>
            </div>

            {/* Package 3 */}
            {/* --- CLASSES ADDED HERE for responsive alignment --- */}
            <div
              className={`flex flex-col items-center text-center lg:items-stretch lg:text-left bg-gradient-to-br from-blue-600 to-blue-800 backdrop-blur-sm rounded-2xl p-8 border border-blue-400 ${selectedPackage === 'Custom' ? 'ring-2 ring-blue-400' : ''}`}
            >
              <div className="mb-6 w-full">
                <h3 className="text-2xl font-bold text-white">Custom Installation</h3>
                <p className="text-blue-100 mt-2">Tailored security solutions for unique requirements</p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center text-blue-50">
                  <FontAwesomeIcon icon={faCheck} className="text-white mr-3" />
                  Customized camera placement
                </li>
                <li className="flex items-center text-blue-50">
                  <FontAwesomeIcon icon={faCheck} className="text-white mr-3" />
                  Flexible storage options
                </li>
                <li className="flex items-center text-blue-50">
                  <FontAwesomeIcon icon={faCheck} className="text-white mr-3" />
                  Specialized equipment selection
                </li>
                <li className="flex items-center text-blue-50">
                  <FontAwesomeIcon icon={faCheck} className="text-white mr-3" />
                  Expert consultation included
                </li>
              </ul>
              <button
                onClick={() => handlePackageSelect('Custom')}
                className="w-full py-4 bg-white text-blue-600 font-semibold rounded-lg whitespace-nowrap cursor-pointer hover:bg-blue-50 transition-colors"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
          {selectedPackage && (
            <div className="text-center mt-8">
              <p className="text-white font-semibold">Selected package: {selectedPackage}</p>
            </div>
          )}
          <div className="text-center mt-12">
            <p className="text-blue-200 text-lg">
              All packages include local recording storage - no cloud subscription required.
              <span className="font-semibold text-white"> You own your data... because that&apos;s true security.</span>
            </p>
            <p className="text-blue-200 mt-4">
              Limited time offer: Save 15% on Essential and Professional packages. Offer ends August 31st, 2025.
            </p>
          </div>
        </div>
      </div>

      {/* System Options Section */}
      <div className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                Understanding Your Security System Options
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faHome} className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Indoor Monitoring</h3>
                    <p className="text-blue-200">
                      Comprehensive interior surveillance coverage to keep an eye on what matters most inside.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faBrain} className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">AI Object Detection</h3>
                    <p className="text-blue-200">
                      Smart recognition to reduce false alerts and provide meaningful notifications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faTree} className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Outdoor Protection</h3>
                    <p className="text-blue-200">
                      Weather-resistant cameras designed to secure your property&apos;s perimeter.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faMobileScreenButton} className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Remote Mobile Access</h3>
                    <p className="text-blue-200">
                      Monitor live feeds and control your system from anywhere with our intuitive mobile app.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/splash2.jpg"
                alt="Security monitoring station with multiple screens"
                className="object-cover object-top"
                fill
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-gradient-to-br from-blue-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Secure Your Property?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faEnvelope} className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-blue-200">info@securesavannah.com</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faGlobe} className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Website</h3>
              <p className="text-blue-200">www.securesavannah.com</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faPhone} className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Today</h3>
              <p className="text-blue-200">(912) 310-7650</p>
            </div>
          </div>
            <div className="bg-blue-600 rounded-2xl p-6 text-center sm:p-8"> {/* <-- PADDING & TEXT ALIGNMENT */}
                <h3 className="text-xl font-bold text-white mb-4 sm:text-2xl"> {/* <-- FONT SIZE */}
                    FREE SECURITY CONSULTATION
                </h3>
                <p className="text-base text-blue-100 mb-6 sm:text-lg"> {/* <-- FONT SIZE */}
                    Schedule your complimentary security assessment and receive a customized protection plan for your property.
                </p>
                <button className="w-full sm:w-auto px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg cursor-pointer hover:bg-blue-50 transition-colors"> {/* <-- RESPONSIVE WIDTH */}
                    Schedule Free Consultation
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;