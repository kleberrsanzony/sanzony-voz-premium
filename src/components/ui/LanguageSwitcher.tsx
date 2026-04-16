"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Globe, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "es", label: "Español", flag: "🇪🇸" },
] as const;

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const current = languages.find((l) => l.code === language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors focus:outline-none group">
        <Globe size={14} className="text-gold group-hover:rotate-12 transition-transform" />
        <span className="text-[0.65rem] font-bold uppercase tracking-widest text-white/80">
          {current.code}
        </span>
        <ChevronDown size={10} className="text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background-surface border-white/5 shadow-2xl">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`flex items-center justify-between gap-4 cursor-pointer text-[0.7rem] uppercase tracking-widest font-bold py-2 ${
              language === lang.code ? "text-gold bg-white/5" : "text-muted-foreground hover:text-white"
            }`}
          >
            <span>{lang.label}</span>
            <span className="opacity-60">{lang.flag}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
