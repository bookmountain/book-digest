import React from "react";

import FooterLogo from "@/components/icons/FooterLogo";

export default function Footer() {
  const columns = [
    {
      title: "Events",
      links: [
        { name: "Book Club", href: "#" },
        { name: "Unplug Project", href: "#" },
      ],
    },
    {
      title: "Get Involved",
      links: [
        { name: "Be a Host", href: "#" },
        { name: "Sign Up Forms", href: "#" },
      ],
    },
    {
      title: "About Us",
      links: [
        { name: "Our Story", href: "#" },
        {
          name: "Instagram",
          href: "https://www.instagram.com/bookdigest_tw/",
        },
        {
          name: "Podcast",
          href: "https://podcasts.apple.com/podcast/1801844059",
        },
      ],
    },
    {
      title: "Help and Support",
      links: [
        { name: "Contact Us", href: "#" },
        { name: "Terms and Conditions", href: "#" },
        { name: "Privacy Policy", href: "#" },
      ],
    },
  ];

  return (
    <footer className="w-full flex flex-col items-center justify-center mb-8">
      <div className="w-full flex items-center gap-4 py-6">
        <div className="w-full flex-1 h-[2px] bg-white" />
        <FooterLogo className="h-10 w-auto" />
        <div className="w-full flex-1 h-[2px] bg-white" />
      </div>
      <div className="w-full max-w-7xl px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
            <ul className="space-y-2">
              {column.links.map((link) => (
                <li key={link.name}>
                  <a
                    className="text-sm hover:underline text-gray-300"
                    href={link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
