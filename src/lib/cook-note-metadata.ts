import type { Metadata } from "next";

export const cookNoteIcons: NonNullable<Metadata["icons"]> = {
  icon: [
    {
      url: "/cook-note/favicon/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      url: "/cook-note/favicon/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
  ],
  apple: "/cook-note/favicon/apple-touch-icon.png",
};

export const cookNoteFaviconMetadata: Pick<Metadata, "icons" | "manifest"> = {
  icons: cookNoteIcons,
  manifest: "/cook-note/favicon/site.webmanifest",
};

export const COOK_NOTE_LOGO = "/cook-note/logo.png";
