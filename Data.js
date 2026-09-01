/* ============================================================
   data.js — CarHub Marketplace DEMO DATA
   This file simulates a backend/database.
   Later, replace CARS/DEALERS with real API calls (fetch()),
   keep the same field names so the rest of the app still works.
   ============================================================ */

/* ---------- Currency (base = EUR) ---------- */
/* DEMO RATES ONLY — not live exchange rates. */
const CURRENCY_RATES = {
  EUR: 1,
  USD: 1.08,
  GBP: 0.85,
  DZD: 146.5
};
const CURRENCY_SYMBOLS = {
  EUR: "€",
  USD: "$",
  GBP: "£",
  DZD: "DZD"
};

/* ---------- Languages ---------- */
const TRANSLATIONS = {
  en: {
    dir: "ltr",
    nav_home: "Home",
    nav_cars: "Cars",
    nav_sell: "Sell Your Car",
    nav_dealers: "Dealers",
    nav_brands: "Brands",
    nav_countries: "Countries",
    nav_import: "Import / Export",
    nav_favorites: "Favorites",
    nav_messages: "Messages",
    nav_login: "Login",
    nav_register: "Register",
    hero_title: "Find Your Dream Car Anywhere in the World.",
    hero_desc: "Discover, compare and buy vehicles from trusted sellers around the world.",
    btn_search_cars: "Search Cars",
    btn_sell_car: "Sell Your Car",
    btn_advanced_search: "Advanced Search",
    search_brand: "Brand",
    search_model: "Model",
    search_country: "Country",
    search_city: "City",
    search_min_price: "Min Price",
    search_max_price: "Max Price",
    search_year: "Year",
    search_fuel: "Fuel",
    search_transmission: "Transmission",
    search_body: "Body Type",
    categories_title: "Browse Categories",
    featured_title: "Featured Cars",
    brands_title: "Popular Brands",
    countries_title: "Browse by Country",
    how_title: "How CarHub Works",
    how_1: "Find",
    how_2: "Connect",
    how_3: "Buy",
    sell_title: "Turn Your Car Into an Opportunity.",
    import_title: "Buy Cars Internationally",
    btn_calculate_import: "Calculate Import Cost",
    view_details: "View Details"
  },
  fr: {
    dir: "ltr",
    nav_home: "Accueil",
    nav_cars: "Voitures",
    nav_sell: "Vendre ma voiture",
    nav_dealers: "Concessionnaires",
    nav_brands: "Marques",
    nav_countries: "Pays",
    nav_import: "Import / Export",
    nav_favorites: "Favoris",
    nav_messages: "Messages",
    nav_login: "Connexion",
    nav_register: "S'inscrire",
    hero_title: "Trouvez la voiture de vos rêves partout dans le monde.",
    hero_desc: "Découvrez, comparez et achetez des véhicules auprès de vendeurs de confiance.",
    btn_search_cars: "Rechercher",
    btn_sell_car: "Vendre ma voiture",
    btn_advanced_search: "Recherche avancée",
    search_brand: "Marque",
    search_model: "Modèle",
    search_country: "Pays",
    search_city: "Ville",
    search_min_price: "Prix min",
    search_max_price: "Prix max",
    search_year: "Année",
    search_fuel: "Carburant",
    search_transmission: "Transmission",
    search_body: "Carrosserie",
    categories_title: "Parcourir les catégories",
    featured_title: "Véhicules en vedette",
    brands_title: "Marques populaires",
    countries_title: "Parcourir par pays",
    how_title: "Comment fonctionne CarHub",
    how_1: "Chercher",
    how_2: "Contacter",
    how_3: "Acheter",
    sell_title: "Transformez votre voiture en opportunité.",
    import_title: "Acheter à l'international",
    btn_calculate_import: "Calculer le coût d'import",
    view_details: "Voir les détails"
  },
  ar: {
    dir: "rtl",
    nav_home: "الرئيسية",
    nav_cars: "السيارات",
    nav_sell: "بيع سيارتك",
    nav_dealers: "التجار",
    nav_brands: "الماركات",
    nav_countries: "الدول",
    nav_import: "استيراد / تصدير",
    nav_favorites: "المفضلة",
    nav_messages: "الرسائل",
    nav_login: "تسجيل الدخول",
    nav_register: "إنشاء حساب",
    hero_title: "اعثر على سيارة أحلامك في أي مكان في العالم.",
    hero_desc: "اكتشف وقارن واشترِ السيارات من بائعين موثوقين حول العالم.",
    btn_search_cars: "بحث عن سيارات",
    btn_sell_car: "بيع سيارتك",
    btn_advanced_search: "بحث متقدم",
    search_brand: "الماركة",
    search_model: "الموديل",
    search_country: "الدولة",
    search_city: "المدينة",
    search_min_price: "أقل سعر",
    search_max_price: "أعلى سعر",
    search_year: "سنة الصنع",
    search_fuel: "نوع الوقود",
    search_transmission: "ناقل الحركة",
    search_body: "نوع الهيكل",
    categories_title: "تصفح الفئات",
    featured_title: "سيارات مميزة",
    brands_title: "الماركات الأكثر طلبًا",
    countries_title: "تصفح حسب الدولة",
    how_title: "كيف يعمل CarHub",
    how_1: "ابحث",
    how_2: "تواصل",
    how_3: "اشترِ",
    sell_title: "حوّل سيارتك إلى فرصة.",
    import_title: "شراء سيارات دوليًا",
    btn_calculate_import: "احسب تكلفة الاستيراد",
    view_details: "عرض التفاصيل"
  }
};

/* ---------- Body types / fuels used across filters ---------- */
const BODY_TYPES = ["Sedan", "SUV", "Coupe", "Hatchback", "Estate"];
const FUEL_TYPES = ["Petrol", "Diesel", "Electric", "Hybrid"];
const TRANSMISSIONS = ["Automatic", "Manual"];

/* ---------- Brands ---------- */
const BRANDS = [
  "BMW", "Mercedes-Benz", "Audi", "Porsche", "Toyota", "Tesla",
  "Ferrari", "Lamborghini", "Volkswagen", "Range Rover", "Bentley",
  "Nissan", "Ford", "Chevrolet"
];

/* ---------- Countries ---------- */
const COUNTRIES = [
  { name: "Germany", code: "DE" },
  { name: "France", code: "FR" },
  { name: "Italy", code: "IT" },
  { name: "Spain", code: "ES" },
  { name: "Belgium", code: "BE" },
  { name: "Netherlands", code: "NL" },
  { name: "UAE", code: "AE" },
  { name: "USA", code: "US" },
  { name: "Japan", code: "JP" },
  { name: "South Korea", code: "KR" },
  { name: "UK", code: "GB" }
];

/* ---------- Dealers ---------- */
const DEALERS = [
  { id: 1, name: "Prestige Motors Berlin", country: "Germany", city: "Berlin", verified: true, carsCount: 42, rating: 4.8 },
  { id: 2, name: "Riviera Auto Gallery", country: "France", city: "Nice", verified: true, carsCount: 27, rating: 4.6 },
  { id: 3, name: "Gulf Luxury Cars", country: "UAE", city: "Dubai", verified: true, carsCount: 65, rating: 4.9 },
  { id: 4, name: "Milano Classic Autos", country: "Italy", city: "Milan", verified: false, carsCount: 15, rating: 4.3 },
  { id: 5, name: "Sunset Motors LA", country: "USA", city: "Los Angeles", verified: true, carsCount: 38, rating: 4.7 },
  { id: 6, name: "Tokyo Performance Garage", country: "Japan", city: "Tokyo", verified: true, carsCount: 21, rating: 4.5 }
];

/* ---------- Cars ----------
   image: external placeholder photo (picsum.photos), used only as a
   DEMO image. If it fails to load, script.js swaps it for a built-in
   SVG placeholder — the site keeps working either way.
------------------------------------------------------------------ */
const CARS = [
  { id: 1, brand: "Porsche", model: "911 Carrera S", year: 2023, price: 118000, currency: "EUR", country: "Germany", city: "Munich", mileage: 8500, fuel: "Petrol", transmission: "Automatic", body: "Coupe", engine: "3.0L Twin-Turbo Flat-6", power: "480 hp", image: "https://picsum.photos/seed/carhub1/640/420", verified: true, seller: "Prestige Motors Berlin" },
  { id: 2, brand: "BMW", model: "M4 Competition", year: 2022, price: 89000, currency: "EUR", country: "Germany", city: "Berlin", mileage: 15000, fuel: "Petrol", transmission: "Automatic", body: "Coupe", engine: "3.0L Twin-Turbo I6", power: "510 hp", image: "https://picsum.photos/seed/carhub2/640/420", verified: true, seller: "Prestige Motors Berlin" },
  { id: 3, brand: "Mercedes-Benz", model: "AMG GT", year: 2021, price: 105000, currency: "EUR", country: "Germany", city: "Stuttgart", mileage: 22000, fuel: "Petrol", transmission: "Automatic", body: "Coupe", engine: "4.0L V8 Biturbo", power: "523 hp", image: "https://picsum.photos/seed/carhub3/640/420", verified: false, seller: "Prestige Motors Berlin" },
  { id: 4, brand: "Audi", model: "RS6 Avant", year: 2022, price: 112000, currency: "EUR", country: "Germany", city: "Ingolstadt", mileage: 18000, fuel: "Petrol", transmission: "Automatic", body: "Estate", engine: "4.0L V8 Biturbo", power: "600 hp", image: "https://picsum.photos/seed/carhub4/640/420", verified: true, seller: "Prestige Motors Berlin" },
  { id: 5, brand: "Range Rover", model: "Sport", year: 2023, price: 95000, currency: "EUR", country: "UK", city: "London", mileage: 9000, fuel: "Diesel", transmission: "Automatic", body: "SUV", engine: "3.0L I6 Diesel", power: "350 hp", image: "https://picsum.photos/seed/carhub5/640/420", verified: true, seller: "Riviera Auto Gallery" },
  { id: 6, brand: "Toyota", model: "Land Cruiser", year: 2022, price: 68000, currency: "EUR", country: "UAE", city: "Dubai", mileage: 25000, fuel: "Diesel", transmission: "Automatic", body: "SUV", engine: "4.5L V8", power: "272 hp", image: "https://picsum.photos/seed/carhub6/640/420", verified: true, seller: "Gulf Luxury Cars" },
  { id: 7, brand: "Tesla", model: "Model S Plaid", year: 2023, price: 105000, currency: "EUR", country: "USA", city: "Los Angeles", mileage: 6000, fuel: "Electric", transmission: "Automatic", body: "Sedan", engine: "Tri-Motor Electric", power: "1020 hp", image: "https://picsum.photos/seed/carhub7/640/420", verified: true, seller: "Sunset Motors LA" },
  { id: 8, brand: "Ferrari", model: "Roma", year: 2022, price: 220000, currency: "EUR", country: "Italy", city: "Modena", mileage: 4000, fuel: "Petrol", transmission: "Automatic", body: "Coupe", engine: "3.9L V8 Biturbo", power: "620 hp", image: "https://picsum.photos/seed/carhub8/640/420", verified: true, seller: "Milano Classic Autos" },
  { id: 9, brand: "Lamborghini", model: "Huracan EVO", year: 2021, price: 245000, currency: "EUR", country: "Italy", city: "Bologna", mileage: 7000, fuel: "Petrol", transmission: "Automatic", body: "Coupe", engine: "5.2L V10", power: "640 hp", image: "https://picsum.photos/seed/carhub9/640/420", verified: false, seller: "Milano Classic Autos" },
  { id: 10, brand: "Mercedes-Benz", model: "G63 AMG", year: 2023, price: 185000, currency: "EUR", country: "UAE", city: "Abu Dhabi", mileage: 3000, fuel: "Petrol", transmission: "Automatic", body: "SUV", engine: "4.0L V8 Biturbo", power: "585 hp", image: "https://picsum.photos/seed/carhub10/640/420", verified: true, seller: "Gulf Luxury Cars" },
  { id: 11, brand: "BMW", model: "X5 M Competition", year: 2022, price: 98000, currency: "EUR", country: "Germany", city: "Munich", mileage: 20000, fuel: "Petrol", transmission: "Automatic", body: "SUV", engine: "4.4L V8 Biturbo", power: "625 hp", image: "https://picsum.photos/seed/carhub11/640/420", verified: true, seller: "Prestige Motors Berlin" },
  { id: 12, brand: "Audi", model: "Q8", year: 2022, price: 78000, currency: "EUR", country: "Netherlands", city: "Amsterdam", mileage: 17000, fuel: "Diesel", transmission: "Automatic", body: "SUV", engine: "3.0L V6 Diesel", power: "286 hp", image: "https://picsum.photos/seed/carhub12/640/420", verified: false, seller: "Riviera Auto Gallery" },
  { id: 13, brand: "Volkswagen", model: "Golf GTI", year: 2021, price: 32000, currency: "EUR", country: "Germany", city: "Wolfsburg", mileage: 30000, fuel: "Petrol", transmission: "Manual", body: "Hatchback", engine: "2.0L Turbo I4", power: "245 hp", image: "https://picsum.photos/seed/carhub13/640/420", verified: true, seller: "Prestige Motors Berlin" },
  { id: 14, brand: "Porsche", model: "Taycan Turbo S", year: 2022, price: 145000, currency: "EUR", country: "Germany", city: "Stuttgart", mileage: 12000, fuel: "Electric", transmission: "Automatic", body: "Sedan", engine: "Dual Motor Electric", power: "761 hp", image: "https://picsum.photos/seed/carhub14/640/420", verified: true, seller: "Prestige Motors Berlin" },
  { id: 15, brand: "BMW", model: "330i", year: 2021, price: 38000, currency: "EUR", country: "France", city: "Paris", mileage: 40000, fuel: "Petrol", transmission: "Automatic", body: "Sedan", engine: "2.0L Turbo I4", power: "258 hp", image: "https://picsum.photos/seed/carhub15/640/420", verified: false, seller: "Riviera Auto Gallery" },
  { id: 16, brand: "Mercedes-Benz", model: "C300", year: 2022, price: 45000, currency: "EUR", country: "Belgium", city: "Brussels", mileage: 22000, fuel: "Petrol", transmission: "Automatic", body: "Sedan", engine: "2.0L Turbo I4", power: "258 hp", image: "https://picsum.photos/seed/carhub16/640/420", verified: true, seller: "Riviera Auto Gallery" },
  { id: 17, brand: "Toyota", model: "Corolla", year: 2020, price: 18000, currency: "EUR", country: "Spain", city: "Madrid", mileage: 45000, fuel: "Hybrid", transmission: "Automatic", body: "Sedan", engine: "1.8L Hybrid", power: "122 hp", image: "https://picsum.photos/seed/carhub17/640/420", verified: false, seller: "Riviera Auto Gallery" },
  { id: 18, brand: "Chevrolet", model: "Camaro SS", year: 2021, price: 42000, currency: "EUR", country: "USA", city: "Miami", mileage: 28000, fuel: "Petrol", transmission: "Manual", body: "Coupe", engine: "6.2L V8", power: "455 hp", image: "https://picsum.photos/seed/carhub18/640/420", verified: true, seller: "Sunset Motors LA" },
  { id: 19, brand: "Ford", model: "Mustang GT", year: 2022, price: 46000, currency: "EUR", country: "USA", city: "Detroit", mileage: 15000, fuel: "Petrol", transmission: "Manual", body: "Coupe", engine: "5.0L V8", power: "450 hp", image: "https://picsum.photos/seed/carhub19/640/420", verified: false, seller: "Sunset Motors LA" },
  { id: 20, brand: "Range Rover", model: "Evoque", year: 2021, price: 42000, currency: "EUR", country: "France", city: "Lyon", mileage: 35000, fuel: "Diesel", transmission: "Automatic", body: "SUV", engine: "2.0L Diesel", power: "150 hp", image: "https://picsum.photos/seed/carhub20/640/420", verified: true, seller: "Riviera Auto Gallery" },
  { id: 21, brand: "Bentley", model: "Continental GT", year: 2022, price: 210000, currency: "EUR", country: "UK", city: "London", mileage: 8000, fuel: "Petrol", transmission: "Automatic", body: "Coupe", engine: "6.0L W12", power: "635 hp", image: "https://picsum.photos/seed/carhub21/640/420", verified: true, seller: "Riviera Auto Gallery" },
  { id: 22, brand: "Nissan", model: "GT-R", year: 2021, price: 105000, currency: "EUR", country: "Japan", city: "Tokyo", mileage: 19000, fuel: "Petrol", transmission: "Automatic", body: "Coupe", engine: "3.8L V6 Biturbo", power: "565 hp", image: "https://picsum.photos/seed/carhub22/640/420", verified: true, seller: "Tokyo Performance Garage" }
];

const CATEGORIES = [
  { key: "Luxury", label: "Luxury" },
  { key: "Sports", label: "Sports" },
  { key: "SUV", label: "SUV" },
  { key: "Sedan", label: "Sedan" },
  { key: "Electric", label: "Electric" },
  { key: "Classic", label: "Classic" },
  { key: "Supercars", label: "Supercars" },
  { key: "Commercial", label: "Commercial" }
];
