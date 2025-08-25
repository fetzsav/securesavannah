// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faVideo,
  faMicrophone,
  faMoon,
  faArrowsUpDownLeftRight,
  faHome,
  faBrain,
  faTree,
  faEnvelope,
  faGlobe,
  faPhone,
  faMobileScreenButton,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

const HomePage: React.FC = () => {
  const router = useRouter();
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
              <button
                onClick={() => router.push('/packages')}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg whitespace-nowrap cursor-pointer transition-colors"
              >
                View Packages
              </button>
              <button
                onClick={() => router.push('/consultation')}
                className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold rounded-lg whitespace-nowrap cursor-pointer transition-colors"
              >
                Free Consultation
              </button>
            </div>
          </div>
          <div className="hidden lg:block"></div>
