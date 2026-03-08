"use client";
import { useTranslations } from "next-intl";
import { categoryItems } from "@/data";
import CategoryCard from "./CategoryCard";
const Category = () => {
  const t = useTranslations();
  return (
    <div className="wrapper py-16">
      <div className="flex flex-col items-center gap-10">
        {/* Text content */}
        <div className="text-center max-w-2xl mx-auto mb-6 flex flex-col items-center gap-4">
          <h2 className="text-4xl font-bold text-(--text-heading) leading-tight">
            {t("Category.title")}
          </h2>

          {/* Underline decoration */}
          <div className="flex items-center gap-1.5">
            <div className="w-8 h-1 bg-(--color-primary) rounded-full" />
            <div className="w-2 h-1 bg-(--color-primary) rounded-full opacity-50" />
            <div className="w-1 h-1 bg-(--color-primary) rounded-full opacity-25" />
          </div>

          <p className="text-(--color-text)/70 text-lg leading-relaxed">
            {t("Category.description")}
          </p>
        </div>

        {/* Category items */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {categoryItems.map((item) => (
            <CategoryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
