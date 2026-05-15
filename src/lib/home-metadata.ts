import type { Metadata } from "next";

export const homePageIcons: NonNullable<Metadata["icons"]> = {
  icon: [
    {
      url: "/favicon/favicon.ico",
      sizes: "any",
    },
    {
      url: "/favicon/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      url: "/favicon/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
  ],
  apple: "/favicon/apple-touch-icon.png",
};

export const homePageFaviconMetadata: Pick<Metadata, "icons" | "manifest"> = {
  icons: homePageIcons,
  manifest: "/favicon/site.webmanifest",
};
