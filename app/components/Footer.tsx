import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <span className="text-xl font-bold text-[#4F46E5] tracking-tight mb-2 md:mb-0">WriteFlow</span>
          <span className="text-sm text-gray-500">
            © 2024 WriteFlow AI. All rights reserved.
          </span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          <Link href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-gray-900 transition-colors">Contact Support</Link>
          <Link href="#" className="hover:text-gray-900 transition-colors">Twitter</Link>
          <Link href="#" className="hover:text-gray-900 transition-colors">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}
