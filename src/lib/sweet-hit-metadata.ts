import type { Metadata } from "next";

export const sweetHitIcons: NonNullable<Metadata["icons"]> = {
  icon: [
    {
      url: "/sweet-hit/favicon.ico",
      sizes: "any",
    },
    {
      url: "/sweet-hit/favicon/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      url: "/sweet-hit/favicon/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
  ],
  apple: "/sweet-hit/favicon/apple-touch-icon.png",
};

export const sweetHitFaviconMetadata: Pick<Metadata, "icons" | "manifest"> = {
  icons: sweetHitIcons,
  manifest: "/sweet-hit/favicon/site.webmanifest",
};

export const SWEET_HIT_LOGO = "/sweet-hit/logo.png";
