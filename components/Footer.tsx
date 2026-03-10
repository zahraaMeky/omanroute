"use client"
import { useTranslations, useMessages } from "next-intl";
import { Link } from "@/i18n/navigation";
import { InputButtonGroup } from "./InputButtonGroup";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const t = useTranslations("Footer");
  const nav = useTranslations("NavbarLinks");
  const messages = useMessages();

  const links = Object.keys(messages.NavbarLinks as Record<string, string>);

  return (
    <footer className='wrapper bg-(--color-heading) py-16'>
      <div className="grid md:grid-cols-3 gap-10 items-start justify-between">

        {/* text content */}
        <div className='flex flex-col gap-2 max-w-xs'>
          <h3 className='text-2xl font-bold text-(--color-primary)'>{t("title")}</h3>
          <p className='text-white/70 text-sm leading-relaxed'>{t("description")}</p>
        </div>

        {/* links */}
        <div className='flex flex-col gap-3'>
          <h3 className='text-base font-semibold text-(--color-primary)'>{t("titleLinks")}</h3>
          <ul className='flex flex-col gap-2'>
            {links.map((link) => (
              <li key={link}>
                <Link
                  className='text-white/70 hover:text-(--color-secondary) transition-colors duration-200 text-sm'
                  href={`/${link}`}
                >
                  {nav(link)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* newsletter & social media */}
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <h3 className='text-base font-semibold text-(--color-primary)'>{t("titleNewsletter")}</h3>
            <InputButtonGroup />
          </div>
          <div className='flex items-center gap-3'>
            <Link href="https://facebook.com" target="_blank" className='text-white/70 hover:text-(--color-secondary) transition-colors duration-200'>
              <Facebook size={20} />
            </Link>
            <Link href="https://instagram.com" target="_blank" className='text-white/70 hover:text-(--color-secondary) transition-colors duration-200'>
              <Instagram size={20} />
            </Link>
            <Link href="https://twitter.com" target="_blank" className='text-white/70 hover:text-(--color-secondary) transition-colors duration-200'>
              <Twitter size={20} />
            </Link>
          </div>
        </div>

      </div>

      {/* copyright */}
      <div className='mt-12 pt-6 border-t border-white/10 text-center text-xs text-white/40'>
        © {new Date().getFullYear()} {t("title")}. {t("copyright")}
      </div>
    </footer>
  );
};

export default Footer;