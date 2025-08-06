export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Book Digest",
  description:
    "Book Digest is a platform for book lovers to share and discover book reviews.",
  navItems: [
    {
      label: "Books",
      href: "/books",
    },
    {
      label: "Events",
      href: "/events",
    },
    {
      label: "About us",
      href: "/about",
    },
    {
      label: "Join us",
      href: "/join",
    },
  ],
};
