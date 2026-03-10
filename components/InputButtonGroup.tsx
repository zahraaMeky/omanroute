import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTranslations } from "next-intl";

export function InputButtonGroup() {
      const t = useTranslations("Footer");

  return (
    <div>
      <div className="flex gap-2">
        <Input id="input-button-group" type="email" placeholder={t("newsletterPlaceholder")} />
        <Button variant="outline">{t("newsletterButton")}</Button>
      </div>
    </div>
  )
}
