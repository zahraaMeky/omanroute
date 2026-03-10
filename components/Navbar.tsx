"use client";

import { useTranslations, useMessages, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Globe, MapPin, Route } from "lucide-react";


const Navbar = () => {
  const nav = useTranslations("NavbarLinks");
  const logo = useTranslations("Logo");
  const PlanTrip = useTranslations("PlanTrip");
  const messages = useMessages();
  const pathname = usePathname(); 
  const locale = useLocale();

  const links = Object.keys(messages.NavbarLinks as Record<string, string>);
const newLocale = locale === "ar" ? "en" : "ar";
const newLocaleLabel = locale === "ar" ? "En" : "Ar";

  return (
    <header className="w-full fixed z-50 bg-(--bg-primary) shadow-sm pb-0 ">
        <div className="wrapper navbar-height py-4 flex justify-between items-center">
           <div className="flex gap-0.5 items-center">
                <svg className="w-9 h-9 text-(--color-secondary)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 17l4-8 4 4 4-6 4 10"/>
                    <circle cx="7" cy="9" r="1" fill="currentColor" stroke="none"/>
                </svg>
                <h1 className="text-xl font-semibold text-(--color-heading)">{logo("logo")}</h1>
            </div>
            <nav className="w-fit">
                <ul className="flex gap-7.5 items-center">
                    {links.map((link) => (
                        <li key={link}>
                            <Link className="text-(--color-nav-link)/70 hover:text-(--color-nav-link-hover) transition-all duration-200" href={`/${link}`}>
                                {nav(link)}
                            </Link>
                        </li>
                    ))}
                </ul> 
            </nav>
            <div className="flex gap-7.5 items-center">  
                <Link href="/plan-trip" className="flex gap-1.5 items-center px-5 py-2 rounded-full bg-gradient-to-r from-[#2A9D8F] to-[#1A6B4A] text-white font-semibold text-sm hover:opacity-90 hover:shadow-lg hover:shadow-[#1A6B4A]/40 transition-all duration-200">
                    <MapPin className="w-4 h-4" />
                    {PlanTrip("planTrip")}
                </Link>
            
                <Link className="flex gap-1.5 items-center px-3 py-1.5 rounded-lg border border-(--color-secondary) text-(--color-nav-link)/80 hover:bg-(--color-secondary)/5 hover:text-(--color-nav-link) transition-all duration-200 text-sm" href={pathname} locale={newLocale}>
                    <span>{newLocaleLabel}</span>
                    <Globe className="w-4 h-4"/>
                </Link> 
            </div>
        </div>
    </header>
  )
}

export default Navbar