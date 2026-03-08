import { LucideIcon, Mountain, Sun, Waves,Landmark } from "lucide-react";
export interface CategoryItem {
    id:number;
    key:string;
    icon: LucideIcon;
    image: string;
}
export const categoryItems: CategoryItem[] = [
    {
        id: 1,
        key: "mountain",
        icon: Mountain,
        image: "/images/cat-mountain.jpg",
    },
   
    {
        id: 2,
        key: "desert",
        icon: Sun,
        image: "/images/cat-desert.jpg",
    },
     {
        id: 3,
        key: "beach",   
        icon: Waves,
        image: "/images/cat-beach.jpg",     
    },
    {
        id: 4,
        key: "culture",
        icon: Landmark,
        image: "/images/cat-culture.jpg",    
    },
]