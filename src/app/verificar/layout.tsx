import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verificar Certificado",
  description: "Valide a autenticidade de arquivos de áudio produzidos pelo Studio Sanzony.Voz usando tecnologia SHA-256.",
  alternates: {
    canonical: "/verificar",
  },
};

export default function VerificarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
