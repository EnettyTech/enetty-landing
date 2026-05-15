import type { Metadata } from "next";
import { cookNoteFaviconMetadata } from "@/lib/cook-note-metadata";

export const metadata: Metadata = {
  title: "Sổ tay nấu ăn - Lưu công thức, nấu ngon mỗi ngày",
  description:
    "Ứng dụng sổ tay nấu ăn giúp bạn lưu công thức, lên thực đơn và nấu ăn dễ dàng hơn.",
  ...cookNoteFaviconMetadata,
};

export default function CookNoteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
