"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Globe, MapPin, Menu, X } from "lucide-react";

const navLinks: { key: string; href: string }[] = [
  { key: "home", href: "/" },
  { key: "categories", href: "/categories" },
  { key: "destinations", href: "/destinations" },
];

const Navbar = () => {
  const nav = useTranslations("NavbarLinks");
  const logo = useTranslations("Logo");
  const PlanTrip = useTranslations("PlanTrip");
  const pathname = usePathname();
  const locale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const newLocale = locale === "ar" ? "en" : "ar";
  const newLocaleLabel = locale === "ar" ? "En" : "Ar";

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const languageButton = (
    <Link
      href={pathname}
      locale={newLocale}
      className="flex gap-1.5 items-center px-3 py-1.5 rounded-lg border border-(--color-secondary) text-(--color-nav-link)/80 hover:bg-(--color-secondary)/5 hover:text-(--color-nav-link) transition-all duration-200 text-sm shrink-0"
    >
      <span>{newLocaleLabel}</span>
      <Globe className="w-4 h-4" />
    </Link>
  );

  return (
    <header className="w-full fixed z-50 bg-(--bg-primary) shadow-sm pb-0">
      <div className="wrapper navbar-height py-4 flex justify-between items-center gap-4">
        {/* Logo - always visible */}
        <Link href="/" className="flex gap-0.5 items-center shrink-0 min-w-0">
          <svg
            className="w-8 h-8 sm:w-9 sm:h-9 text-(--color-secondary) shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 17l4-8 4 4 4-6 4 10" />
            <circle cx="7" cy="9" r="1" fill="currentColor" stroke="none" />
          </svg>
          <h1 className="text-base sm:text-xl font-semibold text-(--color-heading) truncate">
            {logo("logo")}
          </h1>
        </Link>

        {/* Desktop nav - hidden on small/medium */}
        <nav className="hidden lg:block w-fit">
          <ul className="flex gap-6 xl:gap-7.5 items-center">
            {navLinks.map(({ key, href }) => (
              <li key={key}>
                <Link
                  href={href}
                  className="text-(--color-nav-link)/70 hover:text-(--color-nav-link-hover) transition-all duration-200"
                >
                  {nav(key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side: language (always) + Plan Trip + hamburger on mobile */}
        <div className="flex gap-3 sm:gap-4 lg:gap-7.5 items-center shrink-0">
          {/* Language button - visible on all devices */}
          {languageButton}

          {/* Plan Trip - desktop only */}
          <Link
            href="/plan-trip"
            className="hidden lg:flex gap-1.5 items-center px-5 py-2 rounded-full bg-gradient-to-r from-[#2A9D8F] to-[#1A6B4A] text-white font-semibold text-sm hover:opacity-90 hover:shadow-lg hover:shadow-[#1A6B4A]/40 transition-all duration-200"
          >
            <MapPin className="w-4 h-4" />
            {PlanTrip("planTrip")}
          </Link>

          {/* Mobile menu toggle - visible only on small/medium */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded-lg text-(--color-nav-link)/80 hover:bg-(--color-secondary)/5 hover:text-(--color-nav-link) transition-all duration-200"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-black/20 transition-opacity duration-200 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden fixed top-[var(--navbar-height,4rem)] inset-x-0 z-40 bg-(--bg-primary) shadow-lg border-t border-(--color-secondary)/10 transition-all duration-200 ease-out ${
          locale === "ar" ? "right-0" : "left-0"
        } ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-2 invisible"
        }`}
      >
        <nav className="wrapper py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ key, href }) => (
              <li key={key}>
                <Link
                  href={href}
                  onClick={closeMobileMenu}
                  className="block py-3 px-2 text-(--color-nav-link)/70 hover:text-(--color-nav-link-hover) hover:bg-(--color-secondary)/5 rounded-lg transition-all duration-200 text-base"
                >
                  {nav(key)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-2 pb-2">
            <Link
              href="/plan-trip"
              onClick={closeMobileMenu}
              className="flex gap-1.5 items-center justify-center w-full py-3 px-4 rounded-full bg-gradient-to-r from-[#2A9D8F] to-[#1A6B4A] text-white font-semibold text-sm hover:opacity-90 transition-all duration-200"
            >
              <MapPin className="w-4 h-4" />
              {PlanTrip("planTrip")}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;