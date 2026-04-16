"use client";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { ShieldCheck, ShieldX, Search, Loader2, Mic2, Hash, FileCheck2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

// ── Types ─────────────────────────────────────────────────────────────────────

interface CertificateResult {
  numero_certificado: string;
  nome: string;
  empresa: string;
  tipo_locucao: string;
  hash_sha256: string;
  status: string;
  created_at: string;
}

// ── Sub-components ─────────────────────────────────────────────────────────────

function ValidCard({ data }: { data: CertificateResult }) {
  const { t, language } = useLanguage();
  
  const locale = language === "pt" ? "pt-BR" : language === "es" ? "es-ES" : "en-US";
  const date = new Date(data.created_at).toLocaleDateString(locale, {
    day: "2-digit", month: "long", year: "numeric",
  });

  return (
    <div className="relative border border-emerald-500/25 rounded-lg overflow-hidden bg-emerald-500/[0.03]">
      {/* top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />

      <div className="p-8 space-y-7">
        {/* header */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <ShieldCheck size={20} className="text-emerald-400" />
          </div>
          <div>
            <p className="text-[0.6rem] uppercase tracking-widest font-semibold text-emerald-400 mb-1">
              {t.verification.valid.label}
            </p>
            <p className="font-display font-bold text-white text-xl tracking-tight">
              {data.numero_certificado}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {t.verification.valid.issued.replace("{date}", date)}
            </p>
          </div>
        </div>

        {/* divider */}
        <div className="h-px bg-white/5" />

        {/* data grid */}
        <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
          <div>
            <dt className="text-[0.6rem] uppercase tracking-widest text-muted-foreground mb-1">{t.verification.valid.client}</dt>
            <dd className="font-semibold text-white text-sm">{data.nome}</dd>
          </div>
          {data.empresa && (
            <div>
              <dt className="text-[0.6rem] uppercase tracking-widest text-muted-foreground mb-1">{t.verification.valid.company}</dt>
              <dd className="font-semibold text-white text-sm">{data.empresa}</dd>
            </div>
          )}
          <div>
            <dt className="text-[0.6rem] uppercase tracking-widest text-muted-foreground mb-1">{t.verification.valid.type}</dt>
            <dd className="font-semibold text-white text-sm">{data.tipo_locucao}</dd>
          </div>
          <div>
            <dt className="text-[0.6rem] uppercase tracking-widest text-muted-foreground mb-1">{t.verification.valid.status}</dt>
            <dd className="font-semibold text-emerald-400 text-sm capitalize">{data.status.replace(/_/g, " ")}</dd>
          </div>
        </dl>

        {/* hash */}
        {data.hash_sha256 && (
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-md p-4">
            <p className="text-[0.6rem] uppercase tracking-widest text-muted-foreground flex items-center gap-1.5 mb-2">
              <Hash size={10} /> {t.verification.valid.hash}
            </p>
            <p className="font-mono text-[0.65rem] text-muted-foreground break-all leading-relaxed">
              {data.hash_sha256}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function InvalidCard() {
  const { t } = useLanguage();
  return (
    <div className="relative border border-red-500/20 rounded-lg overflow-hidden bg-red-500/[0.03]">
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
      <div className="p-10 flex flex-col items-center text-center gap-4">
        <div className="w-14 h-14 rounded-full border border-red-500/30 bg-red-500/10 flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.1)]">
          <ShieldX size={22} className="text-red-400" />
        </div>
        <div>
          <p className="font-display font-bold text-white text-lg mb-2">{t.verification.invalid.title}</p>
          <p className="text-sm text-muted-foreground max-w-sm">
            {t.verification.invalid.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
// ── Page ───────────────────────────────────────────────────────────────────────

export default function VerificarPage() {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CertificateResult[] | null>(null);
  const [searched, setSearched] = useState(false);

  const handleVerify = async () => {
    const q = query.trim().toUpperCase();
    if (!q) return;
    setLoading(true);
    setSearched(false);

    try {
      // Try by certificate number first
      const { data, error } = await supabase.rpc("verify_certificate", { cert_number: q });
      if (error) throw error;
      setResult((data as CertificateResult[]) || []);
    } catch {
      setResult([]);
    } finally {
      setLoading(false);
      setSearched(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleVerify();
  };

  return (
    <main className="min-h-screen bg-black flex flex-col">
      {/* ── Header ── */}
      <header className="border-b border-white/5 py-5">
        <div className="container mx-auto px-6">
          <Link href="/" className="font-display font-bold text-lg tracking-tight text-white group flex items-center gap-2">
            <Mic2 size={18} className="text-gold group-hover:scale-110 transition-transform" />
            <span>Sanzony<span className="text-gold">.</span>Voz</span>
          </Link>
        </div>
      </header>

      {/* ── Main content ── */}
      <div className="flex-1 flex items-start justify-center pt-16 pb-24">
        <div className="container-site w-full max-w-xl">

          {/* Title block */}
          <div className="mb-10 text-center">
            <div className="w-14 h-14 rounded-full border border-[#e0c27a]/20 bg-black flex items-center justify-center shadow-[0_0_30px_rgba(224,194,122,0.1)] mx-auto mb-6">
              <FileCheck2 size={20} className="text-[#e0c27a]" />
            </div>
            <span className="section-label block mb-4">{t.verification.label}</span>
            <h1 className="font-display font-bold text-4xl text-white tracking-tight leading-tight mb-4">
              {t.verification.title}{" "}
              <span className="text-gold">{t.verification.title_accent}</span>
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.verification.subtitle.replace("{example}", t.verification.placeholder)}
            </p>
          </div>

          {/* Input */}
          <div className="flex gap-3 mb-8">
            <div className="relative flex-1">
              <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              <input
                id="cert-input"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t.verification.placeholder}
                className="w-full pl-11 pr-4 py-3.5 bg-white/[0.03] border border-white/10 rounded-md text-sm font-mono text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#e0c27a]/40 focus:bg-white/[0.05] transition-all"
              />
            </div>
            <button
              id="verify-btn"
              onClick={handleVerify}
              disabled={loading || !query.trim()}
              className="px-6 py-3.5 bg-gradient-to-r from-[#7a5c2e] to-[#e0c27a] text-black text-sm font-bold rounded-md hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-2"
            >
              {loading ? <Loader2 size={15} className="animate-spin" /> : <ShieldCheck size={15} />}
              {t.verification.button}
            </button>
          </div>

          {/* Result */}
          {searched && result !== null && (
            result.length > 0
              ? <ValidCard data={result[0]} />
              : <InvalidCard />
          )}

          {/* Info strip */}
          {!searched && (
            <div className="flex items-center gap-3 border border-white/[0.06] rounded-md p-4 bg-white/[0.02]">
              <Mic2 size={16} className="text-[#e0c27a]/50 shrink-0" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t.verification.info}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 py-6 text-center">
        <p className="text-[0.6rem] text-muted-foreground uppercase tracking-widest">
          © {new Date().getFullYear()} Sanzony.Voz · {t.footer.rights}
        </p>
      </footer>
    </main>
  );
}
