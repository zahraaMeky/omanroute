import { LucideIcon, MapPin, Navigation, Star } from "lucide-react";
export interface StatisticItem {
    id:number;
    icon: LucideIcon;
}
export const statisticItems: StatisticItem[] = [
    {
        id: 1,
        icon: MapPin,
    },
    {
        id: 2,
        icon: Navigation,
    },
    {
        id: 3,
        icon: Star,
    }
]