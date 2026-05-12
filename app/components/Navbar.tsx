import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
      <div className="flex items-center">
        <span className="text-xl font-bold text-[#4F46E5] tracking-tight">WriteFlow</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <Link href="#features" className="hover:text-gray-900 transition-colors">Features</Link>
        <Link href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</Link>
        <Link href="#faq" className="hover:text-gray-900 transition-colors">FAQ</Link>
        <Link 
          href="#trial" 
          className="bg-[#6B46C1] text-white px-5 py-2 rounded-full font-medium hover:bg-[#553C9A] transition-colors shadow-sm"
        >
          Start Free Trial
        </Link>
      </div>
    </nav>
  );
}
