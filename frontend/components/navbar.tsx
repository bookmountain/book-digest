"use client";

import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import Logo from "@/components/icons/Logo";
import useIsSmallScreen from "@/hooks/isUseSmallScreen";

type NavItem = {
  label: string;
  href: string;
};

export default function Navbar() {
  const isSmallScreen = useIsSmallScreen();
  const pathName = usePathname();

  const renderNavItems = (navItems: NavItem[]) => {
    return navItems.map((item) => (
      <NavbarItem key={item.href}>
        <NextLink
          className={clsx(
            "text-2xl font-bold",
            item.href === pathName ? "text-secondary" : "text-foreground",
          )}
          href={item.href}
        >
          {item.label}
        </NextLink>
      </NavbarItem>
    ));
  };

  return (
    <HeroUINavbar
      className="bg-background"
      height={"10rem"}
      maxWidth="xl"
      position="sticky"
    >
      {!isSmallScreen && (
        <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
          <ul className="flex lg:gap-24 md:gap-16 sm:gap-8 justify-center items-center ml-2">
            {renderNavItems(siteConfig.navItems.slice(0, 2))}
            <NavbarLogo />
            {renderNavItems(siteConfig.navItems.slice(2))}
          </ul>
        </NavbarContent>
      )}

      {isSmallScreen && (
        <NavbarContent className="basis-1 pl-4 gap-24" justify="start">
          <NavbarLogo />
          <NavbarMenuToggle />
        </NavbarContent>
      )}
      <NavbarMenu className="bg-background">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="text-foreground" href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
}

const NavbarLogo = () => {
  return (
    <NavbarBrand as="li" className="gap-3 max-w-fit">
      <NextLink className="flex justify-start items-center gap-1" href="/">
        <Logo height={80} />
      </NextLink>
    </NavbarBrand>
  );
};
