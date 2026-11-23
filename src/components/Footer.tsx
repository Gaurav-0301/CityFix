import Link from 'next/link';
import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 backdrop-blur-md py-12 px-6 md:px-16 text-slate-600 text-sm mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold">
            R
          </div>
          <span className="font-semibold text-slate-900 text-base">ResQsync / CityFix</span>
          <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-medium">Smart Mobility</span>
        </div>
        <p className="text-xs text-slate-500 text-center md:text-left">
          &copy; {new Date().getFullYear()} ResQsync &amp; CityFix Initiative. Saving lives with hybrid edge-cloud traffic intelligence.
        </p>
        <div className="flex items-center space-x-6 text-xs text-slate-500">
          <Link href="/about" className="hover:text-slate-900 transition-colors">About</Link>
          <Link href="/technology" className="hover:text-slate-900 transition-colors">Technology</Link>
          <a href="https://github.com/Gaurav-0301/CityFix" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors flex items-center gap-1">
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
