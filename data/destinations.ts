export interface LocalizedString {
  en: string;
  ar: string;
}

export interface Destination {
  id: string;
  name: LocalizedString;
  lat: number;
  lng: number;
  region: LocalizedString;
  categories: Category[];
  company: LocalizedString;
  avg_visit_duration_minutes: number;
  ticket_cost_omr: number;
  recommended_months: number[];
  crowd_level: number;
  featured?: boolean;
  image_url: string;
}

export type Category =
  | "culture"
  | "beach"
  | "nature"
  | "food"
  | "mountain"
  | "desert";

const IMAGE_URLS: Record<string, string> = {
  "Bait Al Zubair Museum": "https://picsum.photos/seed/bait-al-zubair/600/400",
  "Sultan Qaboos Grand Mosque": "https://picsum.photos/seed/sultan-mosque/600/400",
  // add more destinations here
};

function getImageUrl(nameEn: string): string {
  return (
    IMAGE_URLS[nameEn] ??
    `https://picsum.photos/seed/${encodeURIComponent(nameEn)}/600/400`
  );
}

export const destinations: Destination[] = [
  {
    "id": "dest_0001",
    "name": { "en": "Sultan Qaboos Grand Mosque", "ar": "جامع السلطان قابوس الأكبر" },
    "lat": 23.576233, "lng": 58.417098,
    "region": { "en": "Muscat", "ar": "مسقط" },
    "categories": ["culture"],
    "company": { "en": "Oman Tourism Development Company", "ar": "شركة تنمية السياحة العمانية" },
    "avg_visit_duration_minutes": 240, "ticket_cost_omr": 0.0,
    "recommended_months": [1, 5, 7, 9, 11], "crowd_level": 5,
    "image_url": getImageUrl("Sultan Qaboos Grand Mosque")
  },
  {
    "id": "dest_0002",
    "name": { "en": "Royal Opera House", "ar": "دار الأوبرا السلطانية" },
    "lat": 23.528458, "lng": 58.336988,
    "region": { "en": "Muscat", "ar": "مسقط" },
    "categories": ["culture"],
    "company": { "en": "Gulf Leisure Tourism", "ar": "سياحة الخليج الترفيهية" },
    "avg_visit_duration_minutes": 60, "ticket_cost_omr": 3.12,
    "recommended_months": [4, 5, 11], "crowd_level": 4,
    "image_url": getImageUrl("Royal Opera House")
  },
  {
    "id": "dest_0003",
    "name": { "en": "Muttrah Souq", "ar": "سوق مطرح" },
    "lat": 23.640224, "lng": 58.338077,
    "region": { "en": "Muscat", "ar": "مسقط" },
    "categories": ["culture", "food"],
    "company": { "en": "Gulf Leisure Tourism", "ar": "سياحة الخليج الترفيهية" },
    "avg_visit_duration_minutes": 45, "ticket_cost_omr": 0.0,
    "recommended_months": [2, 3, 9, 11, 12], "crowd_level": 3,
    "image_url": getImageUrl("Muttrah Souq")
  },
  {
    "id": "dest_0004",
    "name": { "en": "Bait Al Zubair Museum", "ar": "متحف بيت الزبير" },
    "lat": 23.519287, "lng": 58.395217,
    "region": { "en": "Muscat", "ar": "مسقط" },
    "categories": ["culture"],
    "company": { "en": "Salalah Tourism Board", "ar": "مجلس سياحة صلالة" },
    "avg_visit_duration_minutes": 360, "ticket_cost_omr": 2.17,
    "recommended_months": [2, 4, 12], "crowd_level": 4,
    "image_url": getImageUrl("Bait Al Zubair Museum")
  },
  {
    "id": "dest_0005",
    "name": { "en": "National Museum", "ar": "المتحف الوطني" },
    "lat": 23.558459, "lng": 58.360305,
    "region": { "en": "Muscat", "ar": "مسقط" },
    "categories": ["culture"],
    "company": { "en": "Desert Discovery Tours", "ar": "جولات اكتشاف الصحراء" },
    "avg_visit_duration_minutes": 30, "ticket_cost_omr": 0.0,
    "recommended_months": [3, 6, 7], "crowd_level": 1,
    "image_url": getImageUrl("National Museum"),
    "featured": true,
  },
  {
    "id": "dest_0006",
    "name": { "en": "Qurum Beach", "ar": "شاطئ القرم" },
    "lat": 23.57505, "lng": 58.334398,
    "region": { "en": "Muscat", "ar": "مسقط" },
    "categories": ["beach", "nature"],
    "company": { "en": "Wahiba Expeditions", "ar": "رحلات وهيبة الاستكشافية" },
    "avg_visit_duration_minutes": 180, "ticket_cost_omr": 0.0,
    "recommended_months": [3, 5, 6, 7, 10], "crowd_level": 2,
    "image_url": getImageUrl("Qurum Beach"),
    "featured": true,
  },
  {
    "id": "dest_0007",
    "name": { "en": "Al Bustan Beach", "ar": "شاطئ البستان" },
    "lat": 23.646311, "lng": 58.436683,
    "region": { "en": "Muscat", "ar": "مسقط" },
    "categories": ["beach"],
    "company": { "en": "Ministry of Heritage and Tourism", "ar": "وزارة التراث والسياحة" },
    "avg_visit_duration_minutes": 300, "ticket_cost_omr": 0.0,
    "recommended_months": [1, 2, 7, 8, 9, 10, 11], "crowd_level": 2,
    "image_url": getImageUrl("Al Bustan Beach")
  },
  {
    "id": "dest_0008",
    "name": { "en": "Yiti Beach", "ar": "شاطئ يتي" },
    "lat": 23.584669, "lng": 58.446164,
    "region": { "en": "Muscat", "ar": "مسقط" },
    "categories": ["beach", "nature"],
    "company": { "en": "Nizwa Tours & Travel", "ar": "جولات وسفر نزوى" },
    "avg_visit_duration_minutes": 360, "ticket_cost_omr": 0.0,
    "recommended_months": [1, 3, 6, 7, 8, 10, 11, 12], "crowd_level": 5,
    "image_url": getImageUrl("Yiti Beach")
  },
  {
    "id": "dest_0009",
    "name": { "en": "Bandar Al Khayran", "ar": "بندر الخيران" },
    "lat": 23.631369, "lng": 58.374802,
    "region": { "en": "Muscat", "ar": "مسقط" },
    "categories": ["beach", "nature"],
    "company": { "en": "Gulf Leisure Tourism", "ar": "سياحة الخليج الترفيهية" },
    "avg_visit_duration_minutes": 180, "ticket_cost_omr": 9.56,
    "recommended_months": [1, 2, 3, 4, 6, 8, 10, 12], "crowd_level": 1,
    "image_url": getImageUrl("Bandar Al Khayran")
  },
  {
    "id": "dest_0010",
    "name": { "en": "Muttrah Fish Market", "ar": "سوق السمك مطرح" },
    "lat": 23.475087, "lng": 58.455118,
    "region": { "en": "Muscat", "ar": "مسقط" },
    "categories": ["food", "culture"],
    "company": { "en": "Salalah Tourism Board", "ar": "مجلس سياحة صلالة" },
    "avg_visit_duration_minutes": 150, "ticket_cost_omr": 13.2,
    "recommended_months": [5, 8, 11], "crowd_level": 1,
    "image_url": getImageUrl("Muttrah Fish Market")
  },
  {
    "id": "dest_0011",
    "name": { "en": "Al Alam Palace", "ar": "قصر العلم" },
    "lat": 23.456335, "lng": 58.590171,
    "region": { "en": "Muscat", "ar": "مسقط" },
    "categories": ["culture"],
    "company": { "en": "Salalah Tourism Board", "ar": "مجلس سياحة صلالة" },
    "avg_visit_duration_minutes": 60, "ticket_cost_omr": 2.49,
    "recommended_months": [1, 4, 10], "crowd_level": 5,
    "image_url": getImageUrl("Al Alam Palace")
  },
  {
    "id": "dest_0012",
    "name": { "en": "Mutrah Corniche", "ar": "كورنيش مطرح" },
    "lat": 23.564242, "lng": 58.498799,
    "region": { "en": "Muscat", "ar": "مسقط" },
    "categories": ["beach", "nature"],
    "company": { "en": "Arabian Sands Tourism", "ar": "سياحة الرمال العربية" },
    "avg_visit_duration_minutes": 150, "ticket_cost_omr": 15.63,
    "recommended_months": [2, 7, 9], "crowd_level": 5,
    "image_url": getImageUrl("Mutrah Corniche")
  },
  {
    "id": "dest_0013",
    "name": { "en": "Wadi Shab", "ar": "وادي شاب" },
    "lat": 23.594499, "lng": 58.330325,
    "region": { "en": "Muscat", "ar": "مسقط" },
    "categories": ["nature", "mountain"],
    "company": { "en": "Ministry of Heritage and Tourism", "ar": "وزارة التراث والسياحة" },
    "avg_visit_duration_minutes": 300, "ticket_cost_omr": 10.52,
    "recommended_months": [1, 3, 8, 9, 10, 11, 12], "crowd_level": 5,
    "image_url": getImageUrl("Wadi Shab")
  },
  {
    "id": "dest_0014",
    "name": { "en": "Bimmah Sinkhole", "ar": "هوية نجم" },
    "lat": 23.632348, "lng": 58.402131,
    "region": { "en": "Muscat", "ar": "مسقط" },
    "categories": ["nature"],
    "company": { "en": "Gulf Leisure Tourism", "ar": "سياحة الخليج الترفيهية" },
    "avg_visit_duration_minutes": 360, "ticket_cost_omr": 1.74,
    "recommended_months": [6, 11, 12], "crowd_level": 5,
    "image_url": getImageUrl("Bimmah Sinkhole")
  },
  {
    "id": "dest_0015",
    "name": { "en": "Al Jalali Fort", "ar": "حصن الجلالي" },
    "lat": 23.548006, "lng": 58.421834,
    "region": { "en": "Muscat", "ar": "مسقط" },
    "categories": ["culture"],
    "company": { "en": "Oman Natural Reserves", "ar": "المحميات الطبيعية العمانية" },
    "avg_visit_duration_minutes": 60, "ticket_cost_omr": 14.85,
    "recommended_months": [3, 4, 8], "crowd_level": 1,
    "image_url": getImageUrl("Al Jalali Fort")
  },
  {
    "id": "dest_0016",
    "name": { "en": "Al Mirani Fort", "ar": "حصن الميراني" },
    "lat": 23.612837, "lng": 58.592667,
    "region": { "en": "Muscat", "ar": "مسقط" },
    "categories": ["culture"],
    "company": { "en": "Arabian Sands Tourism", "ar": "سياحة الرمال العربية" },
    "avg_visit_duration_minutes": 180, "ticket_cost_omr": 13.79,
    "recommended_months": [1, 5, 7, 8, 9, 11], "crowd_level": 1,
    "image_url": getImageUrl("Al Mirani Fort")
  },
  {
    "id": "dest_0017",
    "name": { "en": "Qurum Natural Park", "ar": "حديقة القرم الطبيعية" },
    "lat": 23.487901, "lng": 58.317663,
    "region": { "en": "Muscat", "ar": "مسقط" },
    "categories": ["nature"],
    "company": { "en": "Arabian Sands Tourism", "ar": "سياحة الرمال العربية" },
    "avg_visit_duration_minutes": 180, "ticket_cost_omr": 4.26,
    "recommended_months": [3, 4, 5, 6, 8, 9, 10, 11, 12], "crowd_level": 3,
    "image_url": getImageUrl("Qurum Natural Park")
  },
  {
    "id": "dest_0018",
    "name": { "en": "Oman Aquarium", "ar": "أكواريوم عمان" },
    "lat": 23.648439, "lng": 58.590961,
    "region": { "en": "Muscat", "ar": "مسقط" },
    "categories": ["nature", "culture"],
    "company": { "en": "Gulf Leisure Tourism", "ar": "سياحة الخليج الترفيهية" },
    "avg_visit_duration_minutes": 150, "ticket_cost_omr": 0.0,
    "recommended_months": [3, 4, 6, 7, 8, 9, 10, 11, 12], "crowd_level": 2,
    "image_url": getImageUrl("Oman Aquarium")
  },
  {
    "id": "dest_0019",
    "name": { "en": "Al Riyam Park", "ar": "حديقة الريام" },
    "lat": 23.619809, "lng": 58.402233,
    "region": { "en": "Muscat", "ar": "مسقط" },
    "categories": ["nature"],
    "company": { "en": "Wahiba Expeditions", "ar": "رحلات وهيبة الاستكشافية" },
    "avg_visit_duration_minutes": 240, "ticket_cost_omr": 1.18,
    "recommended_months": [2, 3, 4, 5, 7, 10, 11, 12], "crowd_level": 5,
    "image_url": getImageUrl("Al Riyam Park")
  },
  {
    "id": "dest_0020",
    "name": { "en": "Diwan Al Balat", "ar": "ديوان البلاط" },
    "lat": 23.619998, "lng": 58.43402,
    "region": { "en": "Muscat", "ar": "مسقط" },
    "categories": ["culture"],
    "company": { "en": "Ministry of Heritage and Tourism", "ar": "وزارة التراث والسياحة" },
    "avg_visit_duration_minutes": 120, "ticket_cost_omr": 12.36,
    "recommended_months": [3, 4, 8, 9, 10, 11, 12], "crowd_level": 5,
    "image_url": getImageUrl("Diwan Al Balat")
  },
  {
    "id": "dest_0021",
    "name": { "en": "Jebel Shams", "ar": "جبل شمس" },
    "lat": 23.153099, "lng": 57.804508,
    "region": { "en": "Dakhiliya", "ar": "الداخلية" },
    "categories": ["mountain", "nature"],
    "company": { "en": "Ministry of Heritage and Tourism", "ar": "وزارة التراث والسياحة" },
    "avg_visit_duration_minutes": 45, "ticket_cost_omr": 7.99,
    "recommended_months": [2, 3, 5, 6, 7, 9, 10, 11, 12], "crowd_level": 5,
    "image_url": getImageUrl("Jebel Shams")
  },
  {
    "id": "dest_0022",
    "name": { "en": "Jebel Akhdar", "ar": "الجبل الأخضر" },
    "lat": 22.740586, "lng": 57.478098,
    "region": { "en": "Dakhiliya", "ar": "الداخلية" },
    "categories": ["mountain", "nature"],
    "company": { "en": "Ministry of Heritage and Tourism", "ar": "وزارة التراث والسياحة" },
    "avg_visit_duration_minutes": 300, "ticket_cost_omr": 5.4,
    "recommended_months": [3, 5, 11, 12], "crowd_level": 3,
    "image_url": getImageUrl("Jebel Akhdar")
  },
  {
    "id": "dest_0023",
    "name": { "en": "Nizwa Fort", "ar": "حصن نزوى" },
    "lat": 22.738548, "lng": 57.522526,
    "region": { "en": "Dakhiliya", "ar": "الداخلية" },
    "categories": ["culture"],
    "company": { "en": "Gulf Leisure Tourism", "ar": "سياحة الخليج الترفيهية" },
    "avg_visit_duration_minutes": 90, "ticket_cost_omr": 0.0,
    "recommended_months": [1, 2, 4, 6, 7, 8, 10, 12], "crowd_level": 2,
    "image_url": getImageUrl("Nizwa Fort")
  },
  {
    "id": "dest_0024",
    "name": { "en": "Bahla Fort", "ar": "حصن بهلاء" },
    "lat": 22.828042, "lng": 57.210093,
    "region": { "en": "Dakhiliya", "ar": "الداخلية" },
    "categories": ["culture"],
    "company": { "en": "Muscat Adventures", "ar": "مغامرات مسقط" },
    "avg_visit_duration_minutes": 150, "ticket_cost_omr": 13.53,
    "recommended_months": [3, 4, 6, 10], "crowd_level": 2,
    "image_url": getImageUrl("Bahla Fort")
  },
  {
    "id": "dest_0025",
    "name": { "en": "Nizwa Souq", "ar": "سوق نزوى" },
    "lat": 22.955165, "lng": 57.334326,
    "region": { "en": "Dakhiliya", "ar": "الداخلية" },
    "categories": ["culture", "food"],
    "company": { "en": "Nizwa Tours & Travel", "ar": "جولات وسفر نزوى" },
    "avg_visit_duration_minutes": 60, "ticket_cost_omr": 10.48,
    "recommended_months": [4, 5, 10], "crowd_level": 3,
    "image_url": getImageUrl("Nizwa Souq")
  },
  {
    "id": "dest_0026",
    "name": { "en": "Wadi Ghul", "ar": "وادي غول" },
    "lat": 22.906538, "lng": 57.768224,
    "region": { "en": "Dakhiliya", "ar": "الداخلية" },
    "categories": ["mountain", "nature"],
    "company": { "en": "Mountain High Adventures", "ar": "مغامرات الجبال العالية" },
    "avg_visit_duration_minutes": 60, "ticket_cost_omr": 19.2,
    "recommended_months": [1, 2, 3, 6, 7, 9, 10], "crowd_level": 4,
    "image_url": getImageUrl("Wadi Ghul")
  },
  {
    "id": "dest_0027",
    "name": { "en": "Al Hoota Cave", "ar": "كهف الهوتة" },
    "lat": 22.928215, "lng": 57.800151,
    "region": { "en": "Dakhiliya", "ar": "الداخلية" },
    "categories": ["nature"],
    "company": { "en": "Wahiba Expeditions", "ar": "رحلات وهيبة الاستكشافية" },
    "avg_visit_duration_minutes": 240, "ticket_cost_omr": 12.69,
    "recommended_months": [2, 3, 4, 6, 7, 8, 10, 11, 12], "crowd_level": 2,
    "image_url": getImageUrl("Al Hoota Cave")
  },
  {
    "id": "dest_0028",
    "name": { "en": "Jebel Misht", "ar": "جبل مشط" },
    "lat": 22.804404, "lng": 57.464462,
    "region": { "en": "Dakhiliya", "ar": "الداخلية" },
    "categories": ["mountain"],
    "company": { "en": "Gulf Leisure Tourism", "ar": "سياحة الخليج الترفيهية" },
    "avg_visit_duration_minutes": 240, "ticket_cost_omr": 11.35,
    "recommended_months": [1, 2, 3, 5, 7, 8], "crowd_level": 3,
    "image_url": getImageUrl("Jebel Misht")
  },
  {
    "id": "dest_0029",
    "name": { "en": "Tanuf Ruins", "ar": "آثار تنوف" },
    "lat": 22.705582, "lng": 57.511948,
    "region": { "en": "Dakhiliya", "ar": "الداخلية" },
    "categories": ["culture", "nature"],
    "company": { "en": "Coastal Oman Tourism", "ar": "سياحة عمان الساحلية" },
    "avg_visit_duration_minutes": 45, "ticket_cost_omr": 0.0,
    "recommended_months": [1, 2, 3, 4, 11, 12], "crowd_level": 4,
    "image_url": getImageUrl("Tanuf Ruins")
  },
  {
    "id": "dest_0030",
    "name": { "en": "Birkat Al Mouz", "ar": "بركة الموز" },
    "lat": 22.894177, "lng": 57.750883,
    "region": { "en": "Dakhiliya", "ar": "الداخلية" },
    "categories": ["nature", "culture"],
    "company": { "en": "Desert Discovery Tours", "ar": "جولات اكتشاف الصحراء" },
    "avg_visit_duration_minutes": 240, "ticket_cost_omr": 0.0,
    "recommended_months": [2, 4, 6, 8, 9, 10, 12], "crowd_level": 3,
    "image_url": getImageUrl("Birkat Al Mouz")
  },
  {
    "id": "dest_0031",
    "name": { "en": "Jabreen Castle", "ar": "قلعة جبرين" },
    "lat": 22.869608, "lng": 57.541479,
    "region": { "en": "Dakhiliya", "ar": "الداخلية" },
    "categories": ["culture"],
    "company": { "en": "Wahiba Expeditions", "ar": "رحلات وهيبة الاستكشافية" },
    "avg_visit_duration_minutes": 120, "ticket_cost_omr": 11.1,
    "recommended_months": [1, 2, 4, 5, 6, 7, 8, 9, 12], "crowd_level": 1,
    "image_url": getImageUrl("Jabreen Castle")
  },
  {
    "id": "dest_0032",
    "name": { "en": "Misfat Al Abriyeen", "ar": "مسفاة العبريين" },
    "lat": 22.979805, "lng": 57.574073,
    "region": { "en": "Dakhiliya", "ar": "الداخلية" },
    "categories": ["culture", "nature"],
    "company": { "en": "Desert Discovery Tours", "ar": "جولات اكتشاف الصحراء" },
    "avg_visit_duration_minutes": 150, "ticket_cost_omr": 0.0,
    "recommended_months": [1, 3, 4, 7, 8, 9, 10], "crowd_level": 2,
    "image_url": getImageUrl("Misfat Al Abriyeen")
  },
  {
    "id": "dest_0033",
    "name": { "en": "Wadi Bani Habib", "ar": "وادي بني حبيب" },
    "lat": 22.850504, "lng": 57.938155,
    "region": { "en": "Dakhiliya", "ar": "الداخلية" },
    "categories": ["nature", "mountain"],
    "company": { "en": "Frankincense Trail Tours", "ar": "جولات درب اللبان" },
    "avg_visit_duration_minutes": 240, "ticket_cost_omr": 0.0,
    "recommended_months": [1, 5, 6, 8, 10, 12], "crowd_level": 3,
    "image_url": getImageUrl("Wadi Bani Habib")
  },
  {
    "id": "dest_0034",
    "name": { "en": "Al Hamra Old Village", "ar": "قرية الحمراء القديمة" },
    "lat": 23.252666, "lng": 57.998815,
    "region": { "en": "Dakhiliya", "ar": "الداخلية" },
    "categories": ["culture"],
    "company": { "en": "Ministry of Heritage and Tourism", "ar": "وزارة التراث والسياحة" },
    "avg_visit_duration_minutes": 45, "ticket_cost_omr": 1.9,
    "recommended_months": [1, 2, 5, 6, 7, 10, 11, 12], "crowd_level": 2,
    "image_url": getImageUrl("Al Hamra Old Village")
  },
  {
    "id": "dest_0035",
    "name": { "en": "Falaj Daris", "ar": "فلج دارس" },
    "lat": 22.84729, "lng": 57.341366,
    "region": { "en": "Dakhiliya", "ar": "الداخلية" },
    "categories": ["culture", "nature"],
    "company": { "en": "Batinah Coast Tourism", "ar": "سياحة ساحل الباطنة" },
    "avg_visit_duration_minutes": 120, "ticket_cost_omr": 7.6,
    "recommended_months": [4, 7, 9, 12], "crowd_level": 1,
    "image_url": getImageUrl("Falaj Daris")
  },
  {
    "id": "dest_0036",
    "name": { "en": "Majlis Al Jinn Cave", "ar": "مجلس الجن" },
    "lat": 22.907318, "lng": 57.729197,
    "region": { "en": "Dakhiliya", "ar": "الداخلية" },
    "categories": ["nature", "mountain"],
    "company": { "en": "Coastal Oman Tourism", "ar": "سياحة عمان الساحلية" },
    "avg_visit_duration_minutes": 300, "ticket_cost_omr": 0.0,
    "recommended_months": [2, 8, 9, 10, 12], "crowd_level": 5,
    "image_url": getImageUrl("Majlis Al Jinn Cave")
  },
  {
    "id": "dest_0037",
    "name": { "en": "Al Ayn Village", "ar": "قرية العين" },
    "lat": 23.221919, "lng": 57.255282,
    "region": { "en": "Dakhiliya", "ar": "الداخلية" },
    "categories": ["nature", "culture"],
    "company": { "en": "Salalah Tourism Board", "ar": "مجلس سياحة صلالة" },
    "avg_visit_duration_minutes": 300, "ticket_cost_omr": 18.91,
    "recommended_months": [2, 4, 6, 7, 8, 11], "crowd_level": 2,
    "image_url": getImageUrl("Al Ayn Village")
  },
  {
    "id": "dest_0038",
    "name": { "en": "Wahiba Sands", "ar": "رمال وهيبة" },
    "lat": 22.630349, "lng": 59.406359,
    "region": { "en": "Sharqiya", "ar": "الشرقية" },
    "categories": ["desert", "nature"],
    "company": { "en": "Batinah Coast Tourism", "ar": "سياحة ساحل الباطنة" },
    "avg_visit_duration_minutes": 30, "ticket_cost_omr": 0.0,
    "recommended_months": [3, 5, 7, 10], "crowd_level": 3,
    "image_url": getImageUrl("Wahiba Sands"),
    "featured": true,
  },
  {
    "id": "dest_0039",
    "name": { "en": "Sharqiyah Sands", "ar": "رمال الشرقية" },
    "lat": 22.317648, "lng": 58.563031,
    "region": { "en": "Sharqiya", "ar": "الشرقية" },
    "categories": ["desert"],
    "company": { "en": "Gulf Leisure Tourism", "ar": "سياحة الخليج الترفيهية" },
    "avg_visit_duration_minutes": 120, "ticket_cost_omr": 18.12,
    "recommended_months": [1, 8, 10], "crowd_level": 1,
    "image_url": getImageUrl("Sharqiyah Sands")
  },
  {
    "id": "dest_0040",
    "name": { "en": "Wadi Bani Khalid", "ar": "وادي بني خالد" },
    "lat": 22.188823, "lng": 58.521025,
    "region": { "en": "Sharqiya", "ar": "الشرقية" },
    "categories": ["nature", "beach"],
    "company": { "en": "Salalah Tourism Board", "ar": "مجلس سياحة صلالة" },
    "avg_visit_duration_minutes": 150, "ticket_cost_omr": 16.45,
    "recommended_months": [4, 6, 8, 9], "crowd_level": 5,
    "image_url": getImageUrl("Wadi Bani Khalid")
  },
  {
    "id": "dest_0041",
    "name": { "en": "Ras Al Jinz Turtle Reserve", "ar": "محمية السلاحف برأس الجنز" },
    "lat": 22.258445, "lng": 58.644854,
    "region": { "en": "Sharqiya", "ar": "الشرقية" },
    "categories": ["nature", "beach"],
    "company": { "en": "Desert Discovery Tours", "ar": "جولات اكتشاف الصحراء" },
    "avg_visit_duration_minutes": 90, "ticket_cost_omr": 12.8,
    "recommended_months": [1, 2, 5, 7, 8, 9, 11], "crowd_level": 1,
    "image_url": getImageUrl("Ras Al Jinz Turtle Reserve")
  },
  {
    "id": "dest_0042",
    "name": { "en": "Bidiyah Dunes", "ar": "كثبان بدية" },
    "lat": 22.665097, "lng": 59.438877,
    "region": { "en": "Sharqiya", "ar": "الشرقية" },
    "categories": ["desert"],
    "company": { "en": "Wahiba Expeditions", "ar": "رحلات وهيبة الاستكشافية" },
    "avg_visit_duration_minutes": 60, "ticket_cost_omr": 10.24,
    "recommended_months": [1, 6, 7, 10, 12], "crowd_level": 5,
    "image_url": getImageUrl("Bidiyah Dunes")
  },
  {
    "id": "dest_0043",
    "name": { "en": "Fins Beach", "ar": "شاطئ فنس" },
    "lat": 22.940758, "lng": 58.899915,
    "region": { "en": "Sharqiya", "ar": "الشرقية" },
    "categories": ["beach"],
    "company": { "en": "Frankincense Trail Tours", "ar": "جولات درب اللبان" },
    "avg_visit_duration_minutes": 480, "ticket_cost_omr": 0.0,
    "recommended_months": [1, 5, 6, 12], "crowd_level": 5,
    "image_url": getImageUrl("Fins Beach")
  },
  {
    "id": "dest_0044",
    "name": { "en": "Sur Maritime Museum", "ar": "متحف صور البحري" },
    "lat": 22.151819, "lng": 59.109338,
    "region": { "en": "Sharqiya", "ar": "الشرقية" },
    "categories": ["culture"],
    "company": { "en": "Wahiba Expeditions", "ar": "رحلات وهيبة الاستكشافية" },
    "avg_visit_duration_minutes": 120, "ticket_cost_omr": 0.0,
    "recommended_months": [2, 4, 5], "crowd_level": 3,
    "image_url": getImageUrl("Sur Maritime Museum")
  },
  {
    "id": "dest_0045",
    "name": { "en": "Wadi Tiwi", "ar": "وادي طيوي" },
    "lat": 22.232377, "lng": 59.056171,
    "region": { "en": "Sharqiya", "ar": "الشرقية" },
    "categories": ["nature", "mountain"],
    "company": { "en": "Oman Natural Reserves", "ar": "المحميات الطبيعية العمانية" },
    "avg_visit_duration_minutes": 150, "ticket_cost_omr": 17.17,
    "recommended_months": [4, 10, 11], "crowd_level": 4,
    "image_url": getImageUrl("Wadi Tiwi")
  },
  {
    "id": "dest_0046",
    "name": { "en": "Desert Camp Sharqiya", "ar": "مخيم صحراء الشرقية" },
    "lat": 22.122755, "lng": 59.14901,
    "region": { "en": "Sharqiya", "ar": "الشرقية" },
    "categories": ["desert", "culture"],
    "company": { "en": "Coastal Oman Tourism", "ar": "سياحة عمان الساحلية" },
    "avg_visit_duration_minutes": 300, "ticket_cost_omr": 7.76,
    "recommended_months": [2, 6, 7, 12], "crowd_level": 4,
    "image_url": getImageUrl("Desert Camp Sharqiya")
  },
  {
    "id": "dest_0047",
    "name": { "en": "Ras Al Hadd", "ar": "رأس الحد" },
    "lat": 22.560175, "lng": 58.707125,
    "region": { "en": "Sharqiya", "ar": "الشرقية" },
    "categories": ["beach", "nature"],
    "company": { "en": "Coastal Oman Tourism", "ar": "سياحة عمان الساحلية" },
    "avg_visit_duration_minutes": 45, "ticket_cost_omr": 9.46,
    "recommended_months": [1, 4, 6, 7, 9, 10], "crowd_level": 4,
    "image_url": getImageUrl("Ras Al Hadd")
  },
  {
    "id": "dest_0048",
    "name": { "en": "Al Ashkharah Beach", "ar": "شاطئ الأشخرة" },
    "lat": 22.466526, "lng": 58.94459,
    "region": { "en": "Sharqiya", "ar": "الشرقية" },
    "categories": ["beach"],
    "company": { "en": "Mountain High Adventures", "ar": "مغامرات الجبال العالية" },
    "avg_visit_duration_minutes": 360, "ticket_cost_omr": 8.21,
    "recommended_months": [4, 6, 7, 8], "crowd_level": 3,
    "image_url": getImageUrl("Al Ashkharah Beach")
  },
  {
    "id": "dest_0049",
    "name": { "en": "Sur Lighthouse", "ar": "منارة صور" },
    "lat": 22.869837, "lng": 58.844138,
    "region": { "en": "Sharqiya", "ar": "الشرقية" },
    "categories": ["culture"],
    "company": { "en": "Nizwa Tours & Travel", "ar": "جولات وسفر نزوى" },
    "avg_visit_duration_minutes": 30, "ticket_cost_omr": 10.59,
    "recommended_months": [1, 2, 3, 4, 5, 8, 9, 10, 11], "crowd_level": 3,
    "image_url": getImageUrl("Sur Lighthouse")
  },
  {
    "id": "dest_0050",
    "name": { "en": "Sunaysilah Fort", "ar": "حصن السنيسلة" },
    "lat": 22.008402, "lng": 59.046609,
    "region": { "en": "Sharqiya", "ar": "الشرقية" },
    "categories": ["culture"],
    "company": { "en": "Gulf Leisure Tourism", "ar": "سياحة الخليج الترفيهية" },
    "avg_visit_duration_minutes": 60, "ticket_cost_omr": 10.06,
    "recommended_months": [1, 5, 11], "crowd_level": 2,
    "image_url": getImageUrl("Sunaysilah Fort")
  },
  {
    "id": "dest_0051",
    "name": { "en": "Wadi Arbeieen", "ar": "وادي العربيين" },
    "lat": 22.988543, "lng": 59.250854,
    "region": { "en": "Sharqiya", "ar": "الشرقية" },
    "categories": ["nature", "mountain"],
    "company": { "en": "Muscat Adventures", "ar": "مغامرات مسقط" },
    "avg_visit_duration_minutes": 60, "ticket_cost_omr": 1.93,
    "recommended_months": [1, 4, 5, 6, 7, 11], "crowd_level": 5,
    "image_url": getImageUrl("Wadi Arbeieen"),
    "featured": true,
  },
  {
    "id": "dest_0052",
    "name": { "en": "Khaluf Beach", "ar": "شاطئ خلوف" },
    "lat": 22.429706, "lng": 59.317529,
    "region": { "en": "Sharqiya", "ar": "الشرقية" },
    "categories": ["beach", "nature"],
    "company": { "en": "Oman Tourism Development Company", "ar": "شركة تنمية السياحة العمانية" },
    "avg_visit_duration_minutes": 180, "ticket_cost_omr": 2.95,
    "recommended_months": [2, 3, 10], "crowd_level": 1,
    "image_url": getImageUrl("Khaluf Beach")
  },
  {
    "id": "dest_0053",
    "name": { "en": "Sinaw Souq", "ar": "سوق سناو" },
    "lat": 22.303608, "lng": 58.82594,
    "region": { "en": "Sharqiya", "ar": "الشرقية" },
    "categories": ["culture", "food"],
    "company": { "en": "Wahiba Expeditions", "ar": "رحلات وهيبة الاستكشافية" },
    "avg_visit_duration_minutes": 60, "ticket_cost_omr": 7.82,
    "recommended_months": [1, 2, 3, 5, 6, 7, 8], "crowd_level": 5,
    "image_url": getImageUrl("Sinaw Souq")
  },
  {
    "id": "dest_0054",
    "name": { "en": "Al Mughsail Beach", "ar": "شاطئ المغسيل" },
    "lat": 17.192178, "lng": 54.290123,
    "region": { "en": "Dhofar", "ar": "ظفار" },
    "categories": ["beach", "nature"],
    "company": { "en": "Oman Natural Reserves", "ar": "المحميات الطبيعية العمانية" },
    "avg_visit_duration_minutes": 60, "ticket_cost_omr": 0.0,
    "recommended_months": [3, 7, 8, 9, 10, 12], "crowd_level": 2,
    "image_url": getImageUrl("Al Mughsail Beach")
  },
  {
    "id": "dest_0055",
    "name": { "en": "Salalah Gardens", "ar": "حدائق صلالة" },
    "lat": 17.621619, "lng": 54.813623,
    "region": { "en": "Dhofar", "ar": "ظفار" },
    "categories": ["nature"],
    "company": { "en": "Coastal Oman Tourism", "ar": "سياحة عمان الساحلية" },
    "avg_visit_duration_minutes": 60, "ticket_cost_omr": 1.29,
    "recommended_months": [1, 2, 3, 5, 6, 8, 9, 12], "crowd_level": 2,
    "image_url": getImageUrl("Salalah Gardens")
  },
  {
    "id": "dest_0056",
    "name": { "en": "Taqah Fort", "ar": "حصن طاقة" },
    "lat": 17.727764, "lng": 55.289014,
    "region": { "en": "Dhofar", "ar": "ظفار" },
    "categories": ["culture"],
    "company": { "en": "Wahiba Expeditions", "ar": "رحلات وهيبة الاستكشافية" },
    "avg_visit_duration_minutes": 300, "ticket_cost_omr": 0.0,
    "recommended_months": [1, 4, 5, 7, 9, 10, 12], "crowd_level": 5,
    "image_url": getImageUrl("Taqah Fort")
  },
  {
    "id": "dest_0057",
    "name": { "en": "Wadi Darbat", "ar": "وادي دربات" },
    "lat": 17.470727, "lng": 54.352319,
    "region": { "en": "Dhofar", "ar": "ظفار" },
    "categories": ["nature"],
    "company": { "en": "Oman Tourism Development Company", "ar": "شركة تنمية السياحة العمانية" },
    "avg_visit_duration_minutes": 150, "ticket_cost_omr": 10.01,
    "recommended_months": [1, 5, 11], "crowd_level": 1,
    "image_url": getImageUrl("Wadi Darbat")
  },
  {
    "id": "dest_0058",
    "name": { "en": "Land of Frankincense", "ar": "أرض اللبان" },
    "lat": 17.909081, "lng": 53.813473,
    "region": { "en": "Dhofar", "ar": "ظفار" },
    "categories": ["culture", "nature"],
    "company": { "en": "Oman Tourism Development Company", "ar": "شركة تنمية السياحة العمانية" },
    "avg_visit_duration_minutes": 300, "ticket_cost_omr": 1.05,
    "recommended_months": [2, 7, 8, 10, 11], "crowd_level": 1,
    "image_url": getImageUrl("Land of Frankincense")
  },
  {
    "id": "dest_0059",
    "name": { "en": "Al Baleed Archaeological Park", "ar": "منتزه البليد الأثري" },
    "lat": 17.775632, "lng": 54.942103,
    "region": { "en": "Dhofar", "ar": "ظفار" },
    "categories": ["culture"],
    "company": { "en": "Oman Tourism Development Company", "ar": "شركة تنمية السياحة العمانية" },
    "avg_visit_duration_minutes": 90, "ticket_cost_omr": 0.0,
    "recommended_months": [6, 7, 9, 10], "crowd_level": 4,
    "image_url": getImageUrl("Al Baleed Archaeological Park")
  },
  {
    "id": "dest_0060",
    "name": { "en": "Blowholes", "ar": "المراوح" },
    "lat": 17.800353, "lng": 54.158646,
    "region": { "en": "Dhofar", "ar": "ظفار" },
    "categories": ["nature"],
    "company": { "en": "Nizwa Tours & Travel", "ar": "جولات وسفر نزوى" },
    "avg_visit_duration_minutes": 360, "ticket_cost_omr": 0.0,
    "recommended_months": [1, 2, 3, 4, 8, 9, 10, 12], "crowd_level": 1,
    "image_url": getImageUrl("Blowholes")
  },
  {
    "id": "dest_0061",
    "name": { "en": "Frankincense Souq", "ar": "سوق اللبان" },
    "lat": 17.45114, "lng": 54.09629,
    "region": { "en": "Dhofar", "ar": "ظفار" },
    "categories": ["food", "culture"],
    "company": { "en": "Muscat Adventures", "ar": "مغامرات مسقط" },
    "avg_visit_duration_minutes": 300, "ticket_cost_omr": 0.0,
    "recommended_months": [2, 4, 5, 6, 7, 8, 10, 11, 12], "crowd_level": 5,
    "image_url": getImageUrl("Frankincense Souq")
  },
  {
    "id": "dest_0062",
    "name": { "en": "Mirbat Beach", "ar": "شاطئ مرباط" },
    "lat": 17.410817, "lng": 54.376161,
    "region": { "en": "Dhofar", "ar": "ظفار" },
    "categories": ["beach"],
    "company": { "en": "Oman Natural Reserves", "ar": "المحميات الطبيعية العمانية" },
    "avg_visit_duration_minutes": 45, "ticket_cost_omr": 7.71,
    "recommended_months": [4, 5, 9, 10], "crowd_level": 4,
    "image_url": getImageUrl("Mirbat Beach")
  },
  {
    "id": "dest_0063",
    "name": { "en": "Ayn Razat", "ar": "عين رزات" },
    "lat": 17.592709, "lng": 55.08734,
    "region": { "en": "Dhofar", "ar": "ظفار" },
    "categories": ["nature"],
    "company": { "en": "Oman Heritage Sites", "ar": "مواقع التراث العماني" },
    "avg_visit_duration_minutes": 480, "ticket_cost_omr": 10.66,
    "recommended_months": [1, 2, 3, 6, 7, 10, 11], "crowd_level": 4,
    "image_url": getImageUrl("Ayn Razat")
  },
  {
    "id": "dest_0064",
    "name": { "en": "Ayn Athum", "ar": "عين أثم" },
    "lat": 17.449795, "lng": 54.697614,
    "region": { "en": "Dhofar", "ar": "ظفار" },
    "categories": ["nature"],
    "company": { "en": "Ministry of Heritage and Tourism", "ar": "وزارة التراث والسياحة" },
    "avg_visit_duration_minutes": 60, "ticket_cost_omr": 0.0,
    "recommended_months": [2, 3, 7, 10, 11], "crowd_level": 4,
    "image_url": getImageUrl("Ayn Athum")
  },
  {
    "id": "dest_0065",
    "name": { "en": "Ayn Sahlanot", "ar": "عين صحلنوت" },
    "lat": 17.117254, "lng": 53.932081,
    "region": { "en": "Dhofar", "ar": "ظفار" },
    "categories": ["nature"],
    "company": { "en": "Nizwa Tours & Travel", "ar": "جولات وسفر نزوى" },
    "avg_visit_duration_minutes": 360, "ticket_cost_omr": 1.22,
    "recommended_months": [1, 2, 6, 8, 11], "crowd_level": 3,
    "image_url": getImageUrl("Ayn Sahlanot")
  },
  {
    "id": "dest_0066",
    "name": { "en": "Fazayah Beach", "ar": "شاطئ فزايا" },
    "lat": 17.486853, "lng": 53.696877,
    "region": { "en": "Dhofar", "ar": "ظفار" },
    "categories": ["beach", "nature"],
    "company": { "en": "Gulf Leisure Tourism", "ar": "سياحة الخليج الترفيهية" },
    "avg_visit_duration_minutes": 360, "ticket_cost_omr": 3.74,
    "recommended_months": [2, 4, 5, 6, 8, 9], "crowd_level": 5,
    "image_url": getImageUrl("Fazayah Beach")
  },
  {
    "id": "dest_0067",
    "name": { "en": "Sumhuram Archaeological Site", "ar": "موقع سمهرم الأثري" },
    "lat": 17.333206, "lng": 54.728909,
    "region": { "en": "Dhofar", "ar": "ظفار" },
    "categories": ["culture"],
    "company": { "en": "Coastal Oman Tourism", "ar": "سياحة عمان الساحلية" },
    "avg_visit_duration_minutes": 45, "ticket_cost_omr": 0.0,
    "recommended_months": [2, 3, 5, 6, 8, 10, 11], "crowd_level": 3,
    "image_url": getImageUrl("Sumhuram Archaeological Site")
  },
  {
    "id": "dest_0068",
    "name": { "en": "Khor Rori", "ar": "خور روري" },
    "lat": 17.316586, "lng": 53.690042,
    "region": { "en": "Dhofar", "ar": "ظفار" },
    "categories": ["nature", "culture"],
    "company": { "en": "Oman Tourism Development Company", "ar": "شركة تنمية السياحة العمانية" },
    "avg_visit_duration_minutes": 120, "ticket_cost_omr": 18.69,
    "recommended_months": [1, 3, 6, 10, 11, 12], "crowd_level": 5,
    "image_url": getImageUrl("Khor Rori")
  },
  {
    "id": "dest_0069",
    "name": { "en": "Jebel Samhan", "ar": "جبل سمحان" },
    "lat": 17.972675, "lng": 53.743914,
    "region": { "en": "Dhofar", "ar": "ظفار" },
    "categories": ["mountain", "nature"],
    "company": { "en": "Ministry of Heritage and Tourism", "ar": "وزارة التراث والسياحة" },
    "avg_visit_duration_minutes": 240, "ticket_cost_omr": 5.77,
    "recommended_months": [2, 4, 6, 7, 8, 9, 11, 12], "crowd_level": 1,
    "image_url": getImageUrl("Jebel Samhan")
  },
  {
    "id": "dest_0070",
    "name": { "en": "Tawi Attair Sinkhole", "ar": "طوي أعطير" },
    "lat": 17.619375, "lng": 55.262539,
    "region": { "en": "Dhofar", "ar": "ظفار" },
    "categories": ["nature"],
    "company": { "en": "Wahiba Expeditions", "ar": "رحلات وهيبة الاستكشافية" },
    "avg_visit_duration_minutes": 45, "ticket_cost_omr": 0.0,
    "recommended_months": [2, 3, 12], "crowd_level": 5,
    "image_url": getImageUrl("Tawi Attair Sinkhole")
  },
  {
    "id": "dest_0071",
    "name": { "en": "Museum of Frankincense Land", "ar": "متحف أرض اللبان" },
    "lat": 16.944091, "lng": 55.239858,
    "region": { "en": "Dhofar", "ar": "ظفار" },
    "categories": ["culture"],
    "company": { "en": "Muscat Adventures", "ar": "مغامرات مسقط" },
    "avg_visit_duration_minutes": 60, "ticket_cost_omr": 12.53,
    "recommended_months": [2, 3, 4, 7, 8, 9, 10, 11, 12], "crowd_level": 2,
    "image_url": getImageUrl("Museum of Frankincense Land")
  },
  {
    "id": "dest_0072",
    "name": { "en": "Al Haffa Souq", "ar": "سوق الحفة" },
    "lat": 17.593909, "lng": 53.901314,
    "region": { "en": "Dhofar", "ar": "ظفار" },
    "categories": ["culture", "food"],
    "company": { "en": "Mountain High Adventures", "ar": "مغامرات الجبال العالية" },
    "avg_visit_duration_minutes": 90, "ticket_cost_omr": 14.09,
    "recommended_months": [1, 2, 4, 9], "crowd_level": 2,
    "image_url": getImageUrl("Al Haffa Souq")
  },
  {
    "id": "dest_0073",
    "name": { "en": "Nakhal Fort", "ar": "حصن نخل" },
    "lat": 23.715033, "lng": 57.015853,
    "region": { "en": "Batinah", "ar": "الباطنة" },
    "categories": ["culture"],
    "company": { "en": "Salalah Tourism Board", "ar": "مجلس سياحة صلالة" },
    "avg_visit_duration_minutes": 240, "ticket_cost_omr": 0.0,
    "recommended_months": [1, 6, 9, 10], "crowd_level": 5,
    "image_url": getImageUrl("Nakhal Fort")
  },
  {
    "id": "dest_0074",
    "name": { "en": "Rustaq Fort", "ar": "حصن الرستاق" },
    "lat": 23.622218, "lng": 57.288523,
    "region": { "en": "Batinah", "ar": "الباطنة" },
    "categories": ["culture"],
    "company": { "en": "Salalah Tourism Board", "ar": "مجلس سياحة صلالة" },
    "avg_visit_duration_minutes": 45, "ticket_cost_omr": 11.99,
    "recommended_months": [1, 2, 6, 11, 12], "crowd_level": 5,
    "image_url": getImageUrl("Rustaq Fort")
  },
  {
    "id": "dest_0075",
    "name": { "en": "Ain Al Kasfa", "ar": "عين الكسفة" },
    "lat": 23.976154, "lng": 56.622277,
    "region": { "en": "Batinah", "ar": "الباطنة" },
    "categories": ["nature"],
    "company": { "en": "Mountain High Adventures", "ar": "مغامرات الجبال العالية" },
    "avg_visit_duration_minutes": 300, "ticket_cost_omr": 0.0,
    "recommended_months": [1, 5, 7], "crowd_level": 5,
    "image_url": getImageUrl("Ain Al Kasfa")
  },
  {
    "id": "dest_0076",
    "name": { "en": "Wadi Bani Awf", "ar": "وادي بني عوف" },
    "lat": 23.871325, "lng": 57.901617,
    "region": { "en": "Batinah", "ar": "الباطنة" },
    "categories": ["mountain", "nature"],
    "company": { "en": "Batinah Coast Tourism", "ar": "سياحة ساحل الباطنة" },
    "avg_visit_duration_minutes": 240, "ticket_cost_omr": 13.64,
    "recommended_months": [1, 3, 4, 5, 6, 8, 11], "crowd_level": 5,
    "image_url": getImageUrl("Wadi Bani Awf")
  },
  {
    "id": "dest_0077",
    "name": { "en": "Snake Canyon", "ar": "وادي الثعبان" },
    "lat": 24.274265, "lng": 58.007329,
    "region": { "en": "Batinah", "ar": "الباطنة" },
    "categories": ["mountain", "nature"],
    "company": { "en": "Desert Discovery Tours", "ar": "جولات اكتشاف الصحراء" },
    "avg_visit_duration_minutes": 360, "ticket_cost_omr": 18.61,
    "recommended_months": [3, 4, 7, 11], "crowd_level": 1,
    "image_url": getImageUrl("Snake Canyon")
  },
  {
    "id": "dest_0078",
    "name": { "en": "Sohar Fort", "ar": "حصن صحار" },
    "lat": 24.120489, "lng": 57.070937,
    "region": { "en": "Batinah", "ar": "الباطنة" },
    "categories": ["culture"],
    "company": { "en": "Salalah Tourism Board", "ar": "مجلس سياحة صلالة" },
    "avg_visit_duration_minutes": 45, "ticket_cost_omr": 0.0,
    "recommended_months": [1, 2, 5, 6], "crowd_level": 3,
    "image_url": getImageUrl("Sohar Fort")
  },
  {
    "id": "dest_0079",
    "name": { "en": "Sohar Beach", "ar": "شاطئ صحار" },
    "lat": 23.86898, "lng": 56.591849,
    "region": { "en": "Batinah", "ar": "الباطنة" },
    "categories": ["beach"],
    "company": { "en": "Nizwa Tours & Travel", "ar": "جولات وسفر نزوى" },
    "avg_visit_duration_minutes": 120, "ticket_cost_omr": 3.06,
    "recommended_months": [3, 4, 5, 6, 7, 8, 11, 12], "crowd_level": 1,
    "image_url": getImageUrl("Sohar Beach")
  },
  {
    "id": "dest_0080",
    "name": { "en": "Al Sawadi Beach", "ar": "شاطئ السوادي" },
    "lat": 24.16111, "lng": 57.132576,
    "region": { "en": "Batinah", "ar": "الباطنة" },
    "categories": ["beach", "nature"],
    "company": { "en": "Oman Tourism Development Company", "ar": "شركة تنمية السياحة العمانية" },
    "avg_visit_duration_minutes": 360, "ticket_cost_omr": 0.0,
    "recommended_months": [1, 2, 3, 4, 10, 11, 12], "crowd_level": 5,
    "image_url": getImageUrl("Al Sawadi Beach")
  },
  {
    "id": "dest_0081",
    "name": { "en": "Barka Fish Market", "ar": "سوق السمك بركاء" },
    "lat": 24.279652, "lng": 57.632481,
    "region": { "en": "Batinah", "ar": "الباطنة" },
    "categories": ["food"],
    "company": { "en": "Coastal Oman Tourism", "ar": "سياحة عمان الساحلية" },
    "avg_visit_duration_minutes": 90, "ticket_cost_omr": 10.51,
    "recommended_months": [2, 6, 7, 9], "crowd_level": 2,
    "image_url": getImageUrl("Barka Fish Market")
  },
  {
    "id": "dest_0082",
    "name": { "en": "Al Thowara Hot Spring", "ar": "عين الثوارة" },
    "lat": 24.194377, "lng": 58.02917,
    "region": { "en": "Batinah", "ar": "الباطنة" },
    "categories": ["nature"],
    "company": { "en": "Desert Discovery Tours", "ar": "جولات اكتشاف الصحراء" },
    "avg_visit_duration_minutes": 150, "ticket_cost_omr": 0.0,
    "recommended_months": [6, 9, 10, 11, 12], "crowd_level": 1,
    "image_url": getImageUrl("Al Thowara Hot Spring")
  },
  {
    "id": "dest_0083",
    "name": { "en": "Hazm Fort", "ar": "حصن الحزم" },
    "lat": 24.008493, "lng": 57.524542,
    "region": { "en": "Batinah", "ar": "الباطنة" },
    "categories": ["culture"],
    "company": { "en": "Salalah Tourism Board", "ar": "مجلس سياحة صلالة" },
    "avg_visit_duration_minutes": 30, "ticket_cost_omr": 0.0,
    "recommended_months": [1, 2, 4, 5, 6, 7, 9, 10, 12], "crowd_level": 3,
    "image_url": getImageUrl("Hazm Fort")
  },
  {
    "id": "dest_0084",
    "name": { "en": "Ain Al Thowwarah", "ar": "عين الثوارة" },
    "lat": 24.27928, "lng": 56.960438,
    "region": { "en": "Batinah", "ar": "الباطنة" },
    "categories": ["nature"],
    "company": { "en": "Gulf Leisure Tourism", "ar": "سياحة الخليج الترفيهية" },
    "avg_visit_duration_minutes": 300, "ticket_cost_omr": 0.0,
    "recommended_months": [2, 6, 7, 8, 11, 12], "crowd_level": 2,
    "image_url": getImageUrl("Ain Al Thowwarah")
  },
  {
    "id": "dest_0085",
    "name": { "en": "Wadi Al Hoqain", "ar": "وادي الحوقين" },
    "lat": 24.226399, "lng": 57.160232,
    "region": { "en": "Batinah", "ar": "الباطنة" },
    "categories": ["nature", "mountain"],
    "company": { "en": "Nizwa Tours & Travel", "ar": "جولات وسفر نزوى" },
    "avg_visit_duration_minutes": 480, "ticket_cost_omr": 2.25,
    "recommended_months": [1, 3, 6, 7, 8, 10, 11, 12], "crowd_level": 1,
    "image_url": getImageUrl("Wadi Al Hoqain")
  },
  {
    "id": "dest_0086",
    "name": { "en": "Wadi Sahtan", "ar": "وادي السحتن" },
    "lat": 24.382322, "lng": 57.711068,
    "region": { "en": "Batinah", "ar": "الباطنة" },
    "categories": ["nature", "mountain"],
    "company": { "en": "Coastal Oman Tourism", "ar": "سياحة عمان الساحلية" },
    "avg_visit_duration_minutes": 240, "ticket_cost_omr": 0.0,
    "recommended_months": [1, 6, 7, 12], "crowd_level": 2,
    "image_url": getImageUrl("Wadi Sahtan")
  },
  {
    "id": "dest_0087",
    "name": { "en": "Bait Na'aman", "ar": "بيت نعمان" },
    "lat": 23.645825, "lng": 57.766798,
    "region": { "en": "Batinah", "ar": "الباطنة" },
    "categories": ["culture"],
    "company": { "en": "Gulf Leisure Tourism", "ar": "سياحة الخليج الترفيهية" },
    "avg_visit_duration_minutes": 300, "ticket_cost_omr": 0.0,
    "recommended_months": [1, 2, 4, 5, 6, 7, 9, 11, 12], "crowd_level": 4,
    "image_url": getImageUrl("Bait Na'aman")
  },
  {
    "id": "dest_0088",
    "name": { "en": "Sohar Corniche", "ar": "كورنيش صحار" },
    "lat": 23.663081, "lng": 56.685072,
    "region": { "en": "Batinah", "ar": "الباطنة" },
    "categories": ["beach", "nature"],
    "company": { "en": "Gulf Leisure Tourism", "ar": "سياحة الخليج الترفيهية" },
    "avg_visit_duration_minutes": 60, "ticket_cost_omr": 0.0,
    "recommended_months": [1, 4, 6, 7, 8, 9, 10, 11, 12], "crowd_level": 5,
    "image_url": getImageUrl("Sohar Corniche")
  },
  {
    "id": "dest_0089",
    "name": { "en": "Khaboura Beach", "ar": "شاطئ الخابورة" },
    "lat": 23.879279, "lng": 57.876444,
    "region": { "en": "Batinah", "ar": "الباطنة" },
    "categories": ["beach"],
    "company": { "en": "Arabian Sands Tourism", "ar": "سياحة الرمال العربية" },
    "avg_visit_duration_minutes": 180, "ticket_cost_omr": 4.84,
    "recommended_months": [2, 4, 7, 10, 11, 12], "crowd_level": 2,
    "image_url": getImageUrl("Khaboura Beach")
  },
  {
    "id": "dest_0090",
    "name": { "en": "Seeb Fish Market", "ar": "سوق السمك السيب" },
    "lat": 24.247989, "lng": 56.85606,
    "region": { "en": "Batinah", "ar": "الباطنة" },
    "categories": ["food"],
    "company": { "en": "Mountain High Adventures", "ar": "مغامرات الجبال العالية" },
    "avg_visit_duration_minutes": 60, "ticket_cost_omr": 2.65,
    "recommended_months": [2, 3, 4, 5, 6, 8, 9, 10], "crowd_level": 1,
    "image_url": getImageUrl("Seeb Fish Market")
  },
  {
    "id": "dest_0091",
    "name": { "en": "Ibri Fort", "ar": "حصن عبري" },
    "lat": 23.964085, "lng": 55.513399,
    "region": { "en": "Dhahira", "ar": "الظاهرة" },
    "categories": ["culture"],
    "company": { "en": "Nizwa Tours & Travel", "ar": "جولات وسفر نزوى" },
    "avg_visit_duration_minutes": 360, "ticket_cost_omr": 0.0,
    "recommended_months": [1, 4, 5, 7, 11], "crowd_level": 2,
    "image_url": getImageUrl("Ibri Fort")
  },
  {
    "id": "dest_0092",
    "name": { "en": "Bat Tombs", "ar": "مقابر بات" },
    "lat": 23.752565, "lng": 56.757713,
    "region": { "en": "Dhahira", "ar": "الظاهرة" },
    "categories": ["culture"],
    "company": { "en": "Muscat Adventures", "ar": "مغامرات مسقط" },
    "avg_visit_duration_minutes": 120, "ticket_cost_omr": 0.0,
    "recommended_months": [1, 3, 4, 5, 6, 8, 9, 10], "crowd_level": 2,
    "image_url": getImageUrl("Bat Tombs")
  },
  {
    "id": "dest_0093",
    "name": { "en": "Al Ayn Tombs", "ar": "مقابر العين" },
    "lat": 23.197821, "lng": 56.046368,
    "region": { "en": "Dhahira", "ar": "الظاهرة" },
    "categories": ["culture", "nature"],
    "company": { "en": "Wahiba Expeditions", "ar": "رحلات وهيبة الاستكشافية" },
    "avg_visit_duration_minutes": 30, "ticket_cost_omr": 11.67,
    "recommended_months": [4, 5, 6, 7, 8, 9, 10, 12], "crowd_level": 4,
    "image_url": getImageUrl("Al Ayn Tombs")
  },
  {
    "id": "dest_0094",
    "name": { "en": "Ibri Souq", "ar": "سوق عبري" },
    "lat": 23.305084, "lng": 56.067981,
    "region": { "en": "Dhahira", "ar": "الظاهرة" },
    "categories": ["food", "culture"],
    "company": { "en": "Batinah Coast Tourism", "ar": "سياحة ساحل الباطنة" },
    "avg_visit_duration_minutes": 180, "ticket_cost_omr": 0.0,
    "recommended_months": [1, 3, 6, 7, 8, 9, 10, 11], "crowd_level": 5,
    "image_url": getImageUrl("Ibri Souq")
  },
  {
    "id": "dest_0095",
    "name": { "en": "Jebel Kawr", "ar": "جبل كور" },
    "lat": 23.377643, "lng": 55.620988,
    "region": { "en": "Dhahira", "ar": "الظاهرة" },
    "categories": ["mountain"],
    "company": { "en": "Coastal Oman Tourism", "ar": "سياحة عمان الساحلية" },
    "avg_visit_duration_minutes": 180, "ticket_cost_omr": 0.0,
    "recommended_months": [2, 4, 5, 6, 7, 8, 9], "crowd_level": 2,
    "image_url": getImageUrl("Jebel Kawr")
  },
  {
    "id": "dest_0096",
    "name": { "en": "Wadi Al Ain", "ar": "وادي العين" },
    "lat": 23.282677, "lng": 55.948808,
    "region": { "en": "Dhahira", "ar": "الظاهرة" },
    "categories": ["nature"],
    "company": { "en": "Batinah Coast Tourism", "ar": "سياحة ساحل الباطنة" },
    "avg_visit_duration_minutes": 45, "ticket_cost_omr": 12.98,
    "recommended_months": [2, 3, 4, 6, 7, 11, 12], "crowd_level": 3,
    "image_url": getImageUrl("Wadi Al Ain")
  },
  {
    "id": "dest_0097",
    "name": { "en": "Dhahira Desert", "ar": "صحراء الظاهرة" },
    "lat": 23.721717, "lng": 55.531773,
    "region": { "en": "Dhahira", "ar": "الظاهرة" },
    "categories": ["desert"],
    "company": { "en": "Oman Natural Reserves", "ar": "المحميات الطبيعية العمانية" },
    "avg_visit_duration_minutes": 30, "ticket_cost_omr": 0.0,
    "recommended_months": [1, 2, 4, 6, 7, 8, 9, 10, 12], "crowd_level": 5,
    "image_url": getImageUrl("Dhahira Desert")
  },
  {
    "id": "dest_0098",
    "name": { "en": "Al Dhahirah Oasis", "ar": "واحة الظاهرة" },
    "lat": 23.068224, "lng": 55.564357,
    "region": { "en": "Dhahira", "ar": "الظاهرة" },
    "categories": ["nature"],
    "company": { "en": "Gulf Leisure Tourism", "ar": "سياحة الخليج الترفيهية" },
    "avg_visit_duration_minutes": 180, "ticket_cost_omr": 0.0,
    "recommended_months": [2, 3, 5, 8, 10, 11], "crowd_level": 4,
    "image_url": getImageUrl("Al Dhahirah Oasis")
  },
  {
    "id": "dest_0099",
    "name": { "en": "Adam Fort", "ar": "حصن آدم" },
    "lat": 23.370273, "lng": 55.988639,
    "region": { "en": "Dhahira", "ar": "الظاهرة" },
    "categories": ["culture"],
    "company": { "en": "Oman Heritage Sites", "ar": "مواقع التراث العماني" },
    "avg_visit_duration_minutes": 30, "ticket_cost_omr": 7.47,
    "recommended_months": [2, 7, 9], "crowd_level": 4,
    "image_url": getImageUrl("Adam Fort")
  },
  {
    "id": "dest_0100",
    "name": { "en": "Yanqul Fort", "ar": "حصن ينقل" },
    "lat": 23.0647, "lng": 55.576463,
    "region": { "en": "Dhahira", "ar": "الظاهرة" },
    "categories": ["culture"],
    "company": { "en": "Wahiba Expeditions", "ar": "رحلات وهيبة الاستكشافية" },
    "avg_visit_duration_minutes": 150, "ticket_cost_omr": 2.74,
    "recommended_months": [2, 4, 7, 8, 9, 10, 11, 12], "crowd_level": 2,
    "image_url": getImageUrl("Yanqul Fort")
  },
  {
    "id": "dest_0101",
    "name": { "en": "Wadi Hawasina", "ar": "وادي الحواسنة" },
    "lat": 23.724577, "lng": 56.386198,
    "region": { "en": "Dhahira", "ar": "الظاهرة" },
    "categories": ["nature", "mountain"],
    "company": { "en": "Arabian Sands Tourism", "ar": "سياحة الرمال العربية" },
    "avg_visit_duration_minutes": 150, "ticket_cost_omr": 0.0,
    "recommended_months": [1, 2, 5, 7, 8, 9, 11], "crowd_level": 1,
    "image_url": getImageUrl("Wadi Hawasina")
  },
  {
    "id": "dest_0102",
    "name": { "en": "Jebel Akhdar Dhahira", "ar": "الجبل الأخضر الظاهرة" },
    "lat": 23.200547, "lng": 56.389953,
    "region": { "en": "Dhahira", "ar": "الظاهرة" },
    "categories": ["mountain", "nature"],
    "company": { "en": "Oman Natural Reserves", "ar": "المحميات الطبيعية العمانية" },
    "avg_visit_duration_minutes": 480, "ticket_cost_omr": 0.0,
    "recommended_months": [1, 3, 6, 9, 10, 12], "crowd_level": 5,
    "image_url": getImageUrl("Jebel Akhdar Dhahira")
  },
  {
    "id": "dest_0103",
    "name": { "en": "Dank", "ar": "ضنك" },
    "lat": 23.018836, "lng": 56.157426,
    "region": { "en": "Dhahira", "ar": "الظاهرة" },
    "categories": ["culture", "nature"],
    "company": { "en": "Coastal Oman Tourism", "ar": "سياحة عمان الساحلية" },
    "avg_visit_duration_minutes": 150, "ticket_cost_omr": 0.0,
    "recommended_months": [2, 3, 4, 9, 10, 11, 12], "crowd_level": 4,
    "image_url": getImageUrl("Dank")
  },
  
];