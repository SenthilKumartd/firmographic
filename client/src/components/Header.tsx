import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Platform", href: "/search" },
    { label: "Solutions", href: "/visualizations" },
    { label: "Pricing", href: "#" },
    { label: "Resources", href: "#" },
  ];

  return (
    <header 
      className={`bg-white sticky top-0 z-50 ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-blue-400 flex items-center justify-center mr-2">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-secondary font-bold text-xl">FirmoGraph</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-slate-700 hover:text-primary font-medium ${
                  location === item.href ? "text-primary" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link href="#" className="hidden md:inline-block text-slate-700 hover:text-primary font-medium">
              Login
            </Link>
            <Button>Get Started</Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-6 mt-6">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.label}>
                      <Link
                        href={item.href}
                        className={`text-lg ${
                          location === item.href
                            ? "text-primary font-medium"
                            : "text-slate-700"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Link href="#" className="text-lg text-slate-700">
                      Login
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button className="w-full">Get Started</Button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
