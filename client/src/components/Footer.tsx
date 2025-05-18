import { Link } from "wouter";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-blue-400 flex items-center justify-center mr-2">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-white font-bold text-xl">FirmoGraph</span>
            </div>
            <p className="text-slate-300 mb-4">
              Comprehensive firmographic data platform for sales and marketing professionals. 
              Access detailed company intelligence to power your business strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-white" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-white" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-white" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-white" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link href="/search" className="text-slate-300 hover:text-white">Features</Link></li>
              <li><Link href="#" className="text-slate-300 hover:text-white">Pricing</Link></li>
              <li><Link href="#" className="text-slate-300 hover:text-white">API</Link></li>
              <li><Link href="#" className="text-slate-300 hover:text-white">Integrations</Link></li>
              <li><Link href="#" className="text-slate-300 hover:text-white">Data Coverage</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-slate-300 hover:text-white">Documentation</Link></li>
              <li><Link href="#" className="text-slate-300 hover:text-white">Blog</Link></li>
              <li><Link href="#" className="text-slate-300 hover:text-white">Guides</Link></li>
              <li><Link href="/visualizations" className="text-slate-300 hover:text-white">Case Studies</Link></li>
              <li><Link href="#" className="text-slate-300 hover:text-white">Webinars</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-slate-300 hover:text-white">About Us</Link></li>
              <li><Link href="#" className="text-slate-300 hover:text-white">Careers</Link></li>
              <li><Link href="#" className="text-slate-300 hover:text-white">Press</Link></li>
              <li><Link href="#" className="text-slate-300 hover:text-white">Contact</Link></li>
              <li><Link href="#" className="text-slate-300 hover:text-white">Partners</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} FirmoGraph. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="text-slate-400 hover:text-white">Privacy Policy</Link>
            <Link href="#" className="text-slate-400 hover:text-white">Terms of Service</Link>
            <Link href="#" className="text-slate-400 hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
