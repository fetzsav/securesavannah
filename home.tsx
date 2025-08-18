"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
} from "@fortawesome/free-solid-svg-icons";

const HomePage: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Hero Section */}
      <div
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/splash1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-transparent"></div>

        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-20 p-8">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <Image src="/images/logo.png" alt="Logo" width={200} height={80} />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24 lg:py-0">
          <div className="text-white text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Advanced Security Camera Solutions
            </h1>
            <div className="flex space-x-4 mb-4 justify-center lg:justify-start">
              {["Secure", "Professional", "Reliable"].map((text) => (
                <span
                  key={text}
                  className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium"
                >
                  {text}
                </span>
              ))}
            </div>
            <p className="text-lg lg:text-xl text-blue-100 mb-8 leading-relaxed">
              Protect what matters most with our cutting-edge surveillance
              technology. Professional installation, local storage, and 24/7
              monitoring capabilities for complete peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg whitespace-nowrap transition-colors">
                View Packages
              </button>
              <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold rounded-lg whitespace-nowrap transition-colors">
                Free Consultation
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
              <Image
                src="/images/turret_cam.jpg"
                alt="Security Camera"
                className="object-cover object-top"
                fill
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">Premium Camera Features</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                icon: faVideo,
                title: "4K Ultra HD Resolution",
                description:
                  "Crystal clear 4K image quality delivers exceptional detail recognition. Our cameras capture footage at 3840x2160 resolution.",
              },
              {
                icon: faMicrophone,
                title: "Two-Way Audio Communication",
                description:
                  "Built-in microphone and speaker system enables real-time communication. Interact with visitors or deter intruders.",
              },
              {
                icon: faMoon,
                title: "Advanced Night Vision",
                description:
                  "Superior infrared technology provides clear visibility up to 100 feet in complete darkness. Full-color night vision available.",
              },
              {
                icon: faArrowsUpDownLeftRight,
                title: "PTZ Control System",
                description:
                  "Remote pan, tilt, and zoom with 360° rotation. Control cameras from anywhere using our mobile app.",
              },
            ].map(({ icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-6 p-8 bg-slate-700/50 rounded-2xl backdrop-blur-sm"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={icon} className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                  <p className="text-blue-200">{description}</p>
                </div>
              </div>
            ))}
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

    {/* PARENT: Ensure vertical stacking */}
    <div className="flex flex-col space-y-8">
      {/* Essential Package */}
      <div className="flex flex-col bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
        {/* ... your content */}
      </div>

      {/* Professional Package */}
      <div className="flex flex-col bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-500">
        {/* ... your content */}
      </div>

      {/* Custom Installation */}
      <div className="flex flex-col bg-gradient-to-br from-blue-600 to-blue-800 backdrop-blur-sm rounded-2xl p-8 border border-blue-400">
        {/* ... your content */}
      </div>
    </div>

    {/* Footer Note */}
    <div className="text-center mt-12">
      {/* ... */}
    </div>
  </div>
</div>


      {/* System Options */}
      <div className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Understanding Your Security System Options
              </h2>
              <div className="space-y-6">
                {[
                  { icon: faHome, title: "Indoor Monitoring", text: "Comprehensive interior surveillance coverage" },
                  { icon: faBrain, title: "AI Object Detection", text: "Smart recognition and automated alerts" },
                  { icon: faTree, title: "Outdoor Protection", text: "Weather-resistant perimeter security" },
                ].map(({ icon, title, text }, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={icon} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{title}</h3>
                      <p className="text-blue-200">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative w-full h-96 rounded-2xl overflow-hidden">
              <Image
                src="/images/splash2.jpg"
                alt="Security Setup"
                className="object-cover object-top"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
