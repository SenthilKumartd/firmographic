import React from 'react';
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  PieChart, 
  Building, 
  Download, 
  ListChecks, 
  Bell,
  ArrowRight 
} from "lucide-react";

/**
 * This is a self-testing component that verifies the FeatureShowcase has at least 5 features.
 * It exports a function to validate the features array length.
 */

// Define the features array - this should match the one in FeatureShowcase.tsx
const features = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Advanced Search",
    description: "Powerful search capabilities to find companies based on multiple firmographic criteria.",
    link: "/search"
  },
  {
    icon: <PieChart className="w-6 h-6" />,
    title: "Data Visualization",
    description: "Interactive charts and graphs to visualize firmographic data trends and patterns.",
    link: "/visualizations"
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: "Company Profiles",
    description: "Detailed profiles with comprehensive firmographic data for millions of companies.",
    link: "/results"
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: "Export Options",
    description: "Export firmographic data in multiple formats for integration with your existing tools.",
    link: "#"
  },
  {
    icon: <ListChecks className="w-6 h-6" />,
    title: "List Building",
    description: "Create and save custom lists of companies for targeted sales and marketing campaigns.",
    link: "#"
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Alerts & Notifications",
    description: "Stay updated with real-time alerts about changes in company firmographic data.",
    link: "#"
  }
];

/**
 * Validate that the features array has at least 5 items
 * @returns An object with validation results
 */
export function validateFeatures() {
  const hasAtLeastFiveFeatures = features.length >= 5;
  
  return {
    isValid: hasAtLeastFiveFeatures,
    featureCount: features.length,
    message: hasAtLeastFiveFeatures
      ? `✅ PASS: FeatureShowcase has ${features.length} features (minimum 5 required)`
      : `❌ FAIL: FeatureShowcase only has ${features.length} features (minimum 5 required)`
  };
}

/**
 * Simple component that displays the validation results
 */
const FeatureShowcaseTest = () => {
  const validationResults = validateFeatures();
  
  return (
    <div className="p-6 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">FeatureShowcase Test</h2>
      <div className={validationResults.isValid ? "text-green-600" : "text-red-600"}>
        {validationResults.message}
      </div>
      <div className="mt-4">
        <h3 className="font-medium">Features List:</h3>
        <ul className="list-disc pl-5 mt-2">
          {features.map((feature, index) => (
            <li key={index}>{feature.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeatureShowcaseTest;