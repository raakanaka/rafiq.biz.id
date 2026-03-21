import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore the web development, SEO, and application projects I've crafted for clients and personal endeavors.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
