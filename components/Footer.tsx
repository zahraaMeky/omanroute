"use client"
import { useTranslations, useMessages } from "next-intl"
import { Link } from "@/i18n/navigation"
import { InputButtonGroup } from "./InputButtonGroup"
import { Facebook, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  const t = useTranslations("Footer")
  const nav = useTranslations("NavbarLinks")
  const messages = useMessages()

  const links = Object.keys(messages.NavbarLinks as Record<string, string>)

  return (
    <footer className="wrapper bg-(--color-heading) py-10 sm:py-12 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 items-start">
        {/* text content */}
        <div className="flex flex-col gap-2 max-w-xs min-w-0">
          <h3 className="text-xl sm:text-2xl font-bold text-(--color-primary)">
            {t("title")}
          </h3>
          <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* links */}
        <div className="flex flex-col gap-3 min-w-0">
          <h3 className="text-sm sm:text-base font-semibold text-(--color-primary)">
            {t("titleLinks")}
          </h3>
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link}>
                <Link
                  className="text-white/70 hover:text-(--color-secondary) transition-colors duration-200 text-xs sm:text-sm"
                  href={link === "home" ? "/" : `/${link}`}
                >
                  {nav(link)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* newsletter & social media */}
        <div className="flex flex-col gap-4 min-w-0 sm:col-span-2 md:col-span-1">
          <div className="flex flex-col gap-2 max-w-sm">
            <h3 className="text-sm sm:text-base font-semibold text-(--color-primary)">
              {t("titleNewsletter")}
            </h3>
            <InputButtonGroup />
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-(--color-secondary) transition-colors duration-200 p-1"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-(--color-secondary) transition-colors duration-200 p-1"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-(--color-secondary) transition-colors duration-200 p-1"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="mt-8 pt-4 sm:mt-10 sm:pt-5 md:mt-12 md:pt-6 border-t border-white/10 text-center text-xs text-white/40 px-2">
        © {new Date().getFullYear()} {t("title")}. {t("copyright")}
      </div>
    </footer>
  )
}

export default Footer