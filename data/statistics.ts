import { LucideIcon, MapPin, Navigation, Star } from "lucide-react";
export interface StatisticItem {
    id:number;
    key:string;
    icon: LucideIcon;
}
export const statisticItems: StatisticItem[] = [
    {
        id: 1,
        key: "destinations",
        icon: MapPin,
    },
    {
        id: 2,
        key: "routes",
        icon: Navigation,
    },
    {
        id: 3,
        key: "rating",
        icon: Star,
    }
]