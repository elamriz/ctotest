import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Électricien Bruxelles Pro",
    short_name: "Électricien BXL",
    description: "Électricien professionnel à Bruxelles - Installation, rénovation, dépannage 24/7",
    start_url: "/",
    display: "standalone",
    background_color: "#0F172A",
    theme_color: "#7C3AED",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
