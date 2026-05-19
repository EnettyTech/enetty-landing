import type { Metadata } from "next";
import { homePageFaviconMetadata } from "@/lib/home-metadata";

export const metadata: Metadata = {
  title: "Liên hệ - Enetty",
  description: "Liên hệ với đội ngũ Enetty. Chúng tôi sẽ phản hồi sớm nhất có thể.",
  ...homePageFaviconMetadata,
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
