import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Get to know more about Rafiq, a Web Developer & SEO Specialist based in Indonesia. I specialize in building accessible, performant, and visually striking applications.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
