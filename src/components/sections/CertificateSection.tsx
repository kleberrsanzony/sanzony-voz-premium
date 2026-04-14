"use client";
import { ShieldCheck, Hash, QrCode, FileCheck2, Lock, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/stagger";
import Link from "next/link";

const features = [
  { icon: Hash,        title: "Hash SHA-256 único",             desc: "Impressão digital criptográfica exclusiva gerada a partir do arquivo de áudio." },
  { icon: ShieldCheck, title: "Número sequencial rastreável",   desc: "Código no formato SVZ-ANO-MES-XXX para localização e auditoria rápida." },
  { icon: QrCode,      title: "QR Code de verificação",         desc: "Leitura instantânea em qualquer dispositivo com câmera." },
  { icon: FileCheck2,  title: "Documento com validade legal",   desc: "Registro com data e autoria comprovável para proteção contratual." },
  { icon: Lock,        title: "Proteção contra uso indevido",   desc: "Rastreamos cópias não autorizadas e garantimos a integridade da entrega." },
];

export default function CertificateSection() {
  return (
    <section id="certificado" className="relative overflow-hidden bg-black">
      <div className="section-spacing">
        <div className="container-site relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ── Left: copy ── */}
            <div className="flex flex-col items-start">
              <Reveal>
                <div className="w-12 h-12 rounded-full border border-[#e0c27a]/20 bg-black flex items-center justify-center shadow-[0_0_30px_rgba(224,194,122,0.1)] mb-5">
                  <ShieldCheck size={18} className="text-[#e0c27a]" />
                </div>
                <span className="section-label block mb-6">Diferencial</span>
                <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight mb-6">
                  Áudio Certificado{" "}
                  <span className="text-gold">Digitalmente.</span>
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-10 max-w-lg">
                  Cada locução produzida pelo Studio Sanzony.Voz recebe um certificado
                  digital de autenticidade com tecnologia SHA&mdash;256, garantindo a
                  integridade e a originalidade do áudio.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <Link
                  href="/verificar"
                  className="group inline-flex items-center gap-2.5 text-[0.7rem] uppercase tracking-widest font-semibold text-[#e0c27a] hover:text-white transition-colors"
                >
                  Verificar um certificado
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>

            {/* ── Right: feature list ── */}
            <StaggerGroup className="flex flex-col gap-0" staggerDelay={0.08}>
              {features.map((f, i) => (
                <StaggerItem key={i}>
                  <div className="group flex items-start gap-5 py-6 border-b border-white/5 last:border-0 hover:border-[#e0c27a]/15 transition-colors">
                    {/* icon */}
                    <div className="w-9 h-9 shrink-0 rounded bg-white/[0.03] border border-white/[0.07] flex items-center justify-center text-[#e0c27a] group-hover:border-[#e0c27a]/30 group-hover:bg-[#e0c27a]/5 transition-all">
                      <f.icon size={15} />
                    </div>
                    {/* text */}
                    <div>
                      <p className="font-display font-semibold text-sm text-white tracking-wide mb-1">
                        {f.title}
                      </p>
                      <p className="text-[0.7rem] text-muted-foreground leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>

          </div>
        </div>
      </div>
    </section>
  );
}
