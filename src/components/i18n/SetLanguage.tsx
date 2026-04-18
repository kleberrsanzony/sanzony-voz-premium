"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function SetLanguage({ lang }: { lang: 'pt' | 'en' | 'es' }) {
  const { setLanguage } = useLanguage();

  useEffect(() => {
    setLanguage(lang);
  }, [lang, setLanguage]);

  return null;
}
