import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fazer Briefing",
  description: "Inicie seu projeto de locução elite. Preencha o briefing técnico para receber uma proposta personalizada.",
  alternates: {
    canonical: "/briefing",
  },
};

export default function BriefingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
