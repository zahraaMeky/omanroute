"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { CategoryItem } from "@/data";

interface CategoryCardProps {
  item: CategoryItem;
}

const CategoryCard = ({ item }: CategoryCardProps) => {
  const t = useTranslations();
  const Icon = item.icon;
  const router = useRouter();

  const handleClick = () => {
    router.push(`/destinations?category=${item.key}`)
  }

  return (
    <div onClick={handleClick} className="flex flex-col items-center gap-3 cursor-pointer group">
      <div
        className="relative h-24 w-24 md:h-28 md:w-28 overflow-hidden rounded-full
                transition-all duration-300 ease-in-out
                group-hover:scale-105 group-hover:shadow-[0_0_20px_4px_var(--color-primary)]"
      >
        <img
          src={item.image}
          alt={t(`Category.items.${item.key}`)}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
        </div>
      </div>

      <h3
        className="text-sm font-semibold text-(--text-heading) text-center
                transition-colors duration-300 group-hover:text-(--color-primary)"
      >
        {t(`Category.items.${item.key}`)}
      </h3>
    </div>
  );
};

export default CategoryCard;