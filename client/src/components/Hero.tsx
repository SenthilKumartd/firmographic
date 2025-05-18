import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-blue-400 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Unlock the Power of Business Intelligence
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Comprehensive firmographic data to fuel your sales and marketing
              strategies.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="default"
                className="bg-white hover:bg-slate-100 text-primary"
              >
                Request Demo
              </Button>
              <Button
                variant="outline"
                className="border border-white text-blue-500 hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <svg
              className="w-full rounded-lg shadow-xl"
              viewBox="0 0 1200 800"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="1200" height="800" fill="#f8fafc" rx="8" />

              {/* Header */}
              <rect width="1200" height="60" fill="#f1f5f9" />
              <circle cx="30" cy="30" r="10" fill="#cbd5e1" />
              <circle cx="60" cy="30" r="10" fill="#cbd5e1" />
              <circle cx="90" cy="30" r="10" fill="#cbd5e1" />

              {/* Sidebar */}
              <rect x="0" y="60" width="220" height="740" fill="#f1f5f9" />

              {/* Main content area with graph mockups */}
              <rect
                x="240"
                y="80"
                width="940"
                height="200"
                rx="4"
                fill="#ffffff"
                stroke="#e2e8f0"
              />
              <path
                d="M260,200 L360,150 L460,180 L560,120 L660,140 L760,100 L860,160 L960,130 L1060,170 L1160,110"
                stroke="#3b82f6"
                strokeWidth="3"
                fill="none"
              />
              <circle cx="260" cy="200" r="5" fill="#3b82f6" />
              <circle cx="360" cy="150" r="5" fill="#3b82f6" />
              <circle cx="460" cy="180" r="5" fill="#3b82f6" />
              <circle cx="560" cy="120" r="5" fill="#3b82f6" />
              <circle cx="660" cy="140" r="5" fill="#3b82f6" />
              <circle cx="760" cy="100" r="5" fill="#3b82f6" />
              <circle cx="860" cy="160" r="5" fill="#3b82f6" />
              <circle cx="960" cy="130" r="5" fill="#3b82f6" />
              <circle cx="1060" cy="170" r="5" fill="#3b82f6" />
              <circle cx="1160" cy="110" r="5" fill="#3b82f6" />

              {/* Cards */}
              <rect
                x="240"
                y="300"
                width="300"
                height="180"
                rx="4"
                fill="#ffffff"
                stroke="#e2e8f0"
              />
              <rect
                x="560"
                y="300"
                width="300"
                height="180"
                rx="4"
                fill="#ffffff"
                stroke="#e2e8f0"
              />
              <rect
                x="880"
                y="300"
                width="300"
                height="180"
                rx="4"
                fill="#ffffff"
                stroke="#e2e8f0"
              />

              {/* Pie chart mockup */}
              <circle cx="390" cy="390" r="60" fill="#f1f5f9" />
              <path
                d="M390,390 L390,330 A60,60 0 0,1 441.96,420 z"
                fill="#3b82f6"
              />
              <path
                d="M390,390 L441.96,420 A60,60 0 0,1 339.55,438.3 z"
                fill="#93c5fd"
              />
              <path
                d="M390,390 L339.55,438.3 A60,60 0 0,1 330,390 z"
                fill="#dbeafe"
              />
              <path
                d="M390,390 L330,390 A60,60 0 0,1 390,330 z"
                fill="#bfdbfe"
              />

              {/* Bar chart mockup */}
              <rect
                x="590"
                y="350"
                width="30"
                height="100"
                fill="#3b82f6"
                rx="2"
              />
              <rect
                x="630"
                y="370"
                width="30"
                height="80"
                fill="#3b82f6"
                rx="2"
              />
              <rect
                x="670"
                y="330"
                width="30"
                height="120"
                fill="#3b82f6"
                rx="2"
              />
              <rect
                x="710"
                y="380"
                width="30"
                height="70"
                fill="#3b82f6"
                rx="2"
              />
              <rect
                x="750"
                y="350"
                width="30"
                height="100"
                fill="#3b82f6"
                rx="2"
              />
              <rect
                x="790"
                y="400"
                width="30"
                height="50"
                fill="#3b82f6"
                rx="2"
              />

              {/* Table mockup */}
              <rect x="900" y="330" width="260" height="30" fill="#f8fafc" />
              <rect x="900" y="360" width="260" height="30" fill="#ffffff" />
              <rect x="900" y="390" width="260" height="30" fill="#f8fafc" />
              <rect x="900" y="420" width="260" height="30" fill="#ffffff" />

              {/* Data table */}
              <rect
                x="240"
                y="500"
                width="940"
                height="220"
                rx="4"
                fill="#ffffff"
                stroke="#e2e8f0"
              />
              <rect
                x="240"
                y="500"
                width="940"
                height="40"
                rx="4"
                fill="#f8fafc"
              />
              <rect x="240" y="540" width="940" height="1" fill="#e2e8f0" />
              <rect x="240" y="580" width="940" height="1" fill="#e2e8f0" />
              <rect x="240" y="620" width="940" height="1" fill="#e2e8f0" />
              <rect x="240" y="660" width="940" height="1" fill="#e2e8f0" />
              <rect x="240" y="700" width="940" height="1" fill="#e2e8f0" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
