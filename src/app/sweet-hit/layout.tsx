import type { Metadata } from "next";
import { sweetHitFaviconMetadata } from "@/lib/sweet-hit-metadata";

export const metadata: Metadata = {
  title: "Phi tiêu ngọt ngào - Game phóng nến vào bánh gato",
  description:
    "Game casual vui nhộn: ngắm, phóng nến vào bánh gato xoay. Giao diện ngọt ngào, dễ chơi khó bỏ!",
  ...sweetHitFaviconMetadata,
};

export default function SweetHitLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
