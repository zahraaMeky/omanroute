"use client";
import { useTranslations } from "next-intl";
import { categoryItems } from "@/data";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const t = useTranslations();
  return (
    <div id="categories" className="wrapper py-10 sm:py-12 md:py-16">
      <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
        {/* Text content */}
        <div className="text-center max-w-2xl mx-auto mb-2 sm:mb-6 flex flex-col items-center gap-3 sm:gap-4 px-2 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-(--text-heading) leading-tight">
            {t("Category.title")}
          </h2>

          {/* Underline decoration */}
          <div className="flex items-center gap-1.5">
            <div className="w-8 h-1 bg-(--color-primary) rounded-full" />
            <div className="w-2 h-1 bg-(--color-primary) rounded-full opacity-50" />
            <div className="w-1 h-1 bg-(--color-primary) rounded-full opacity-25" />
          </div>

          <p className="text-(--color-text)/70 text-base sm:text-lg leading-relaxed">
            {t("Category.description")}
          </p>
        </div>

        {/* Category items - 2 cols on mobile/tablet, 4 on md+; constrained width from lg */}
        <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-6 sm:gap-8 md:gap-8 w-full lg:max-w-4xl lg:mx-auto">
          {categoryItems.map((item) => (
            <CategoryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
