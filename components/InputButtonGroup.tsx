import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTranslations } from "next-intl"

export function InputButtonGroup() {
  const t = useTranslations("Footer")

  return (
    <div className="w-full min-w-0">
      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <Input
          id="input-button-group"
          type="email"
          placeholder={t("newsletterPlaceholder")}
          className="min-w-0 flex-1 w-full"
        />
        <Button variant="outline" className="shrink-0 w-full sm:w-auto">
          {t("newsletterButton")}
        </Button>
      </div>
    </div>
  )
}
