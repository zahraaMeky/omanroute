"use client";

import { useTranslations, useMessages } from "next-intl";
import { Link } from "@/i18n/navigation";


const Navbar = () => {
  const t = useTranslations("NavbarLinks");
  const messages = useMessages();
  const links = Object.keys(messages.NavbarLinks as Record<string, string>);


  return (
    <header>
        <nav>
            <ul>
                {links.map((link) => (
                    <li key={link}>
                        <Link href={`/${link}`}>
                            {t(link)}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Navbar