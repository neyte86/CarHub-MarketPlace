/* ============ Data ============ */
const CARS = [
  { name:"BMW X5", market:"eu", type:"suv", price:"€45,000", flag:"🇪🇺" },
  { name:"Mercedes C-Class", market:"eu", type:"sedan", price:"€38,000", flag:"🇪🇺" },
  { name:"Audi A6", market:"eu", type:"sedan", price:"€42,000", flag:"🇪🇺" },
  { name:"Volkswagen ID.4", market:"eu", type:"electric", price:"€36,500", flag:"🇪🇺" },
  { name:"BYD Han", market:"cn", type:"electric", price:"€28,000", flag:"🇨🇳" },
  { name:"Chery Tiggo 8", market:"cn", type:"suv", price:"€24,500", flag:"🇨🇳" },
  { name:"Geely Coolray", market:"cn", type:"suv", price:"€19,800", flag:"🇨🇳" },
  { name:"Toyota Land Cruiser", market:"gulf", type:"suv", price:"$58,000", flag:"🇸🇦" },
  { name:"Lexus ES 350", market:"gulf", type:"sedan", price:"$41,000", flag:"🇸🇦" },
  { name:"Nissan Patrol", market:"gulf", type:"suv", price:"$52,500", flag:"🇸🇦" },
  { name:"Renault Symbol", market:"dz", type:"sedan", price:"3,200,000 DZD", flag:"🇩🇿" },
  { name:"Peugeot 208", market:"dz", type:"sedan", price:"2,850,000 DZD", flag:"🇩🇿" },
  { name:"Ford F-150", market:"us", type:"suv", price:"$52,000", flag:"🇺🇸" },
  { name:"Tesla Model 3", market:"us", type:"electric", price:"$41,500", flag:"🇺🇸" },
  { name:"Jeep Grand Cherokee", market:"us", type:"suv", price:"$47,200", flag:"🇺🇸" },
];

const MARKET_LABEL_KEY = { dz:"market_dz", eu:"market_eu", cn:"market_cn", gulf:"market_gulf", us:"market_us" };

/* ============ Translations ============ */
const I18N = {
  ar: {
    dir:"rtl",
    auth_btn:"تسجيل الدخول", nav_home:"الرئيسية", nav_buy:"شراء سيارة", nav_sell:"بيع سيارتك", nav_markets:"الأسواق",
    lang_label:"اللغة", account_label:"الحساب", create_account:"إنشاء حساب / تسجيل الدخول", guest_btn:"المتابعة كزائر",
    hero_eyebrow:"جزائر • أوروبا • الصين • الخليج • أمريكا",
    hero_title:"اشترِ وبِع سيارتك في السوق الذي يناسبك",
    hero_sub:"منصّة واحدة تجمع خمسة أسواق للسيارات، بحث دقيق وعروض بيع مباشرة من الأفراد والمعارض.",
    cta_buy:"تصفّح السيارات", cta_sell:"أعرض سيارتك للبيع",
    search_title:"ابحث عن سيارتك", search_placeholder:"BMW, Mercedes, Toyota...",
    opt_all_markets:"كل الأسواق", opt_all_types:"كل الأنواع",
    market_dz:"السوق الجزائري", market_eu:"السوق الأوروبي", market_cn:"السوق الصيني", market_gulf:"السوق الخليجي", market_us:"السوق الأمريكي",
    market_dz_desc:"سيارات جديدة ومستعملة",
    type_suv:"دفع رباعي", type_sedan:"سيدان", type_electric:"كهربائية",
    btn_search:"بحث",
    markets_title:"اختر السوق", markets_sub:"اضغط على أي سوق لعرض سياراته مباشرة",
    featured_title:"سيارات مميزة",
    sell_title:"عندك سيارة تبيعها؟", sell_sub:"أضف إعلانك في دقيقتين وسيراه آلاف المشترين في سوقك المستهدف.", sell_cta:"عرض سيارتي للبيع",
    footer_note:"يمكنك تصفح CarHub بحرية كزائر — الحساب مطلوب فقط عند نشر إعلان أو التواصل مع بائع.",
    modal_title:"مرحبًا بك في CarHub", modal_sub:"سجّل دخولك للوصول إلى إعلاناتك ومحادثاتك، أو تابع كزائر.",
    tab_login:"تسجيل الدخول", tab_register:"إنشاء حساب",
    ph_email:"البريد الإلكتروني", ph_password:"كلمة المرور", ph_name:"الاسم الكامل",
    results_count:(n)=>`${n} سيارة متاحة`, no_results:"لا توجد سيارات مطابقة لبحثك"
  },
  fr: {
    dir:"ltr",
    auth_btn:"Connexion", nav_home:"Accueil", nav_buy:"Acheter une voiture", nav_sell:"Vendre ma voiture", nav_markets:"Marchés",
    lang_label:"Langue", account_label:"Compte", create_account:"Créer un compte / Connexion", guest_btn:"Continuer en tant qu'invité",
    hero_eyebrow:"Algérie • Europe • Chine • Golfe • États-Unis",
    hero_title:"Achetez et vendez votre voiture sur le marché qui vous convient",
    hero_sub:"Une seule plateforme réunissant cinq marchés automobiles, avec recherche précise et annonces directes de particuliers et concessionnaires.",
    cta_buy:"Parcourir les voitures", cta_sell:"Vendre ma voiture",
    search_title:"Recherchez votre voiture", search_placeholder:"BMW, Mercedes, Toyota...",
    opt_all_markets:"Tous les marchés", opt_all_types:"Tous les types",
    market_dz:"Marché algérien", market_eu:"Marché européen", market_cn:"Marché chinois", market_gulf:"Marché du Golfe", market_us:"Marché américain",
    market_dz_desc:"Voitures neuves et d'occasion",
    type_suv:"SUV", type_sedan:"Berline", type_electric:"Électrique",
    btn_search:"Rechercher",
    markets_title:"Choisissez un marché", markets_sub:"Cliquez sur un marché pour voir ses voitures directement",
    featured_title:"Voitures en vedette",
    sell_title:"Vous avez une voiture à vendre ?", sell_sub:"Publiez votre annonce en deux minutes et touchez des milliers d'acheteurs sur votre marché cible.", sell_cta:"Vendre ma voiture",
    footer_note:"Vous pouvez parcourir CarHub librement en tant qu'invité — un compte est requis uniquement pour publier une annonce ou contacter un vendeur.",
    modal_title:"Bienvenue sur CarHub", modal_sub:"Connectez-vous pour accéder à vos annonces et messages, ou continuez en invité.",
    tab_login:"Connexion", tab_register:"Créer un compte",
    ph_email:"Adresse e-mail", ph_password:"Mot de passe", ph_name:"Nom complet",
    results_count:(n)=>`${n} voiture(s) disponible(s)`, no_results:"Aucune voiture ne correspond à votre recherche"
  },
  en: {
    dir:"ltr",
    auth_btn:"Log in", nav_home:"Home", nav_buy:"Buy a car", nav_sell:"Sell your car", nav_markets:"Markets",
    lang_label:"Language", account_label:"Account", create_account:"Create account / Log in", guest_btn:"Continue as guest",
    hero_eyebrow:"Algeria • Europe • China • Gulf • United States",
    hero_title:"Buy and sell your car in the market that fits you",
    hero_sub:"One platform bringing together five car markets, precise search, and listings straight from individuals and dealers.",
    cta_buy:"Browse cars", cta_sell:"List your car",
    search_title:"Search for your car", search_placeholder:"BMW, Mercedes, Toyota...",
    opt_all_markets:"All markets", opt_all_types:"All types",
    market_dz:"Algerian market", market_eu:"European market", market_cn:"Chinese market", market_gulf:"Gulf market", market_us:"American market",
    market_dz_desc:"New and used cars",
    type_suv:"SUV", type_sedan:"Sedan", type_electric:"Electric",
    btn_search:"Search",
    markets_title:"Choose a market", markets_sub:"Click any market to see its cars directly",
    featured_title:"Featured cars",
    sell_title:"Got a car to sell?", sell_sub:"Post your listing in two minutes and reach thousands of buyers in your target market.", sell_cta:"List my car",
    footer_note:"You can browse CarHub freely as a guest — an account is only required to post a listing or contact a seller.",
    modal_title:"Welcome to CarHub", modal_sub:"Log in to access your listings and messages, or continue as a guest.",
    tab_login:"Log in", tab_register:"Create account",
    ph_email:"Email address", ph_password:"Password", ph_name:"Full name",
    results_count:(n)=>`${n} car(s) available`, no_results:"No cars match your search"
  }
};

let currentLang = "ar";

/* ============ Language switching ============ */
function applyLanguage(lang){
  currentLang = lang;
  const dict = I18N[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = dict.dir;
  document.documentElement.dataset.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    const key = el.dataset.i18nPlaceholder;
    if(dict[key]) el.placeholder = dict[key];
  });

  document.querySelectorAll(".lang-opt").forEach(btn=>{
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  renderCars();
}

/* ============ Drawer ============ */
const burgerBtn = document.getElementById("burgerBtn");
const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

function openDrawer(){
  drawer.classList.add("open");
  overlay.classList.add("show");
  burgerBtn.setAttribute("aria-expanded","true");
}
function closeDrawer(){
  drawer.classList.remove("open");
  overlay.classList.remove("show");
  burgerBtn.setAttribute("aria-expanded","false");
}
burgerBtn.addEventListener("click", ()=> drawer.classList.contains("open") ? closeDrawer() : openDrawer());
closeBtn.addEventListener("click", closeDrawer);
overlay.addEventListener("click", ()=>{ closeDrawer(); closeModal(); });
document.querySelectorAll(".drawer-link").forEach(l=> l.addEventListener("click", closeDrawer));

document.querySelectorAll(".lang-opt").forEach(btn=>{
  btn.addEventListener("click", ()=> applyLanguage(btn.dataset.lang));
});

/* ============ Filtering & rendering ============ */
const searchInput = document.getElementById("searchInput");
const marketFilter = document.getElementById("marketFilter");
const typeFilter = document.getElementById("typeFilter");
const carGrid = document.getElementById("carGrid");
const resultsCount = document.getElementById("resultsCount");

function renderCars(){
  const q = searchInput.value.trim().toLowerCase();
  const m = marketFilter.value;
  const t = typeFilter.value;

  const filtered = CARS.filter(c=>{
    const matchesQ = !q || c.name.toLowerCase().includes(q);
    const matchesM = m === "all" || c.market === m;
    const matchesT = t === "all" || c.type === t;
    return matchesQ && matchesM && matchesT;
  });

  const dict = I18N[currentLang];
  resultsCount.textContent = dict.results_count(filtered.length);

  carGrid.innerHTML = filtered.length ? filtered.map(c=>`
    <div class="car-card">
      <div class="car-media">🚘</div>
      <div class="car-body">
        <span class="car-market-tag">${c.flag} ${dict[MARKET_LABEL_KEY[c.market]]}</span>
        <h3>${c.name}</h3>
        <div class="car-price">${c.price}</div>
      </div>
    </div>
  `).join("") : `<p class="no-results">${dict.no_results}</p>`;
}

searchInput.addEventListener("input", renderCars);
marketFilter.addEventListener("change", ()=>{ syncMarketCards(); renderCars(); });
typeFilter.addEventListener("change", renderCars);
document.getElementById("searchBtn").addEventListener("click", renderCars);

/* ============ Market cards ============ */
document.querySelectorAll(".market-card").forEach(card=>{
  card.addEventListener("click", ()=>{
    marketFilter.value = card.dataset.market;
    syncMarketCards();
    renderCars();
    document.getElementById("buy").scrollIntoView({behavior:"smooth"});
  });
});
function syncMarketCards(){
  document.querySelectorAll(".market-card").forEach(c=>{
    c.classList.toggle("active", c.dataset.market === marketFilter.value);
  });
}

/* ============ Auth modal ============ */
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
function openModal(){ modalOverlay.classList.add("show"); closeDrawer(); }
function closeModal(){ modalOverlay.classList.remove("show"); }

document.getElementById("authBtn").addEventListener("click", openModal);
document.getElementById("drawerAuthBtn").addEventListener("click", openModal);
document.getElementById("sellCtaBtn").addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);
document.getElementById("guestBtn").addEventListener("click", ()=>{ closeDrawer(); closeModal(); });
document.getElementById("modalGuestBtn").addEventListener("click", closeModal);

document.querySelectorAll(".tab-btn").forEach(tab=>{
  tab.addEventListener("click", ()=>{
    document.querySelectorAll(".tab-btn").forEach(t=>t.classList.remove("active"));
    tab.classList.add("active");
    const target = tab.dataset.tab;
    document.getElementById("loginForm").classList.toggle("hidden", target !== "login");
    document.getElementById("registerForm").classList.toggle("hidden", target !== "register");
  });
});

document.getElementById("loginForm").addEventListener("submit", e=>{ e.preventDefault(); closeModal(); });
document.getElementById("registerForm").addEventListener("submit", e=>{ e.preventDefault(); closeModal(); });

/* ============ Init ============ */
applyLanguage("ar");
