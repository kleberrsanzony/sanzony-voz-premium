import { ReactNode } from "react";
import { LogOut, LayoutDashboard, Settings } from "lucide-react";
import Link from "next/link";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      {/* Top Header / Nav */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
             <Link href="/admin" className="text-xl font-bold text-white">
              Sanzony Voz <span className="text-neutral-500 font-normal">Admin</span>
             </Link>
             <nav className="hidden md:flex gap-4">
                <Link href="/admin" className="text-sm text-neutral-400 hover:text-white flex items-center gap-2 transition-colors">
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </Link>
             </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-sm text-neutral-400 hover:text-white flex items-center gap-2 transition-colors">
              <Settings className="w-4 h-4" />
              Configurações
            </button>
            <button className="text-sm text-red-500 hover:text-red-400 flex items-center gap-2 transition-colors">
              <LogOut className="w-4 h-4" />
              Sair
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
