import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const CTASection = () => {
  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business Intelligence?</h2>
          <p className="text-lg md:text-xl mb-8 text-slate-300">
            Access comprehensive firmographic data to power your sales and marketing strategies. Get started today.
          </p>
          
          <svg
            className="w-full h-auto rounded-xl mb-8 shadow-lg"
            viewBox="0 0 1200 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="1200" height="500" fill="#1a365d" rx="8" />
            
            {/* Modern building mockup */}
            <rect x="200" y="100" width="200" height="300" fill="#2d4a74" />
            <rect x="220" y="120" width="30" height="60" fill="#3a70b5" />
            <rect x="270" y="120" width="30" height="60" fill="#3a70b5" />
            <rect x="320" y="120" width="30" height="60" fill="#3a70b5" />
            <rect x="350" y="120" width="30" height="60" fill="#3a70b5" />
            
            <rect x="220" y="200" width="30" height="60" fill="#3a70b5" />
            <rect x="270" y="200" width="30" height="60" fill="#3a70b5" />
            <rect x="320" y="200" width="30" height="60" fill="#3a70b5" />
            <rect x="350" y="200" width="30" height="60" fill="#3a70b5" />
            
            <rect x="220" y="280" width="30" height="60" fill="#3a70b5" />
            <rect x="270" y="280" width="30" height="60" fill="#3a70b5" />
            <rect x="320" y="280" width="30" height="60" fill="#3a70b5" />
            <rect x="350" y="280" width="30" height="60" fill="#3a70b5" />
            
            {/* Large building */}
            <rect x="500" y="50" width="300" height="350" fill="#2d4a74" />
            <rect x="550" y="80" width="200" height="290" fill="#1c335a" />
            <rect x="570" y="100" width="40" height="40" fill="#3a70b5" />
            <rect x="630" y="100" width="40" height="40" fill="#3a70b5" />
            <rect x="690" y="100" width="40" height="40" fill="#3a70b5" />
            
            <rect x="570" y="160" width="40" height="40" fill="#3a70b5" />
            <rect x="630" y="160" width="40" height="40" fill="#3a70b5" />
            <rect x="690" y="160" width="40" height="40" fill="#3a70b5" />
            
            <rect x="570" y="220" width="40" height="40" fill="#3a70b5" />
            <rect x="630" y="220" width="40" height="40" fill="#3a70b5" />
            <rect x="690" y="220" width="40" height="40" fill="#3a70b5" />
            
            <rect x="570" y="280" width="40" height="40" fill="#3a70b5" />
            <rect x="630" y="280" width="40" height="40" fill="#3a70b5" />
            <rect x="690" y="280" width="40" height="40" fill="#3a70b5" />
            
            {/* Skyscraper */}
            <rect x="850" y="150" width="150" height="250" fill="#2d4a74" />
            <rect x="870" y="180" width="110" height="200" fill="#1c335a" />
            <rect x="890" y="200" width="20" height="20" fill="#3a70b5" />
            <rect x="930" y="200" width="20" height="20" fill="#3a70b5" />
            
            <rect x="890" y="240" width="20" height="20" fill="#3a70b5" />
            <rect x="930" y="240" width="20" height="20" fill="#3a70b5" />
            
            <rect x="890" y="280" width="20" height="20" fill="#3a70b5" />
            <rect x="930" y="280" width="20" height="20" fill="#3a70b5" />
            
            <rect x="890" y="320" width="20" height="20" fill="#3a70b5" />
            <rect x="930" y="320" width="20" height="20" fill="#3a70b5" />
            
            {/* Ground */}
            <rect x="0" y="400" width="1200" height="100" fill="#1c335a" />
          </svg>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="default" size="lg">Start Your Free Trial</Button>
            <Button variant="outline" size="lg" className="bg-white hover:bg-slate-100 text-primary">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
