"use client";

import { useTranslations, useMessages, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Globe, Route } from "lucide-react";


const Navbar = () => {
  const nav = useTranslations("NavbarLinks");
  const logo = useTranslations("Logo");
  const PlanTrip = useTranslations("PlanTrip");
  const messages = useMessages();
  const pathname = usePathname(); 
  const locale = useLocale();

  const links = Object.keys(messages.NavbarLinks as Record<string, string>);
const newLocale = locale === "ar" ? "en" : "ar";
const newLocaleLabel = locale === "ar" ? "English" : "العربية";

  return (
    <header className="w-full fixed z-50 bg-(--bg-primary) border-b border-[#1C1C1E]/10">
        <div className="wrapper navbar-height py-4 flex justify-between items-center">
           <div className="flex gap-0.5 items-center">
                <svg className="w-8 h-8 text-[#C8A96E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 17l4-8 4 4 4-6 4 10"/>
                    <circle cx="7" cy="9" r="1" fill="currentColor" stroke="none"/>
                </svg>
                <h1 className="text-xl font-semibold text-[#1C1C1E]">{logo("logo")}</h1>
            </div>
            <nav className="w-fit">
                <ul className="flex gap-7.5 items-center">
                    {links.map((link) => (
                        <li key={link}>
                            <Link className="text-[#1C1C1E]/60" href={`/${link}`}>
                                {nav(link)}
                            </Link>
                        </li>
                    ))}
                </ul> 
            </nav>
            <div className="flex gap-7.5 items-center">  
                <Link href="/plan-trip">
                    {PlanTrip("planTrip")}
                </Link>
            
                <Link className="flex gap-1 items-center" href={pathname} locale={newLocale}>
                    <span>{newLocaleLabel}</span>
                    <Globe />
                </Link> 
            </div>
        </div>
    </header>
  )
}

export default Navbar