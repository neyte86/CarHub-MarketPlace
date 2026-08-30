document.addEventListener("DOMContentLoaded", function(){

const language = document.getElementById("language");

if(language){
language.addEventListener("change", function(){

if(this.value === "ar"){
alert("تم تغيير اللغة إلى العربية");
}

if(this.value === "fr"){
alert("Langue changée en Français");
}

if(this.value === "en"){
alert("Language changed to English");
}

});
}

});

function searchCars(){
const input = document.getElementById("searchInput");

if(input && input.value !== ""){
alert("Searching for: " + input.value);
}else{
alert("Please enter a car name");
}
}
document.getElementById("language").addEventListener("change", function() {
    const lang = this.value;

    if(lang === "ar"){
        document.querySelector(".hero h1").innerText = "بيع وشراء السيارات عالمياً";
        document.querySelector(".section-title").innerText = "البحث عن السيارات";
    }

    if(lang === "en"){
        document.querySelector(".hero h1").innerText = "Buy & Sell Cars Worldwide";
        document.querySelector(".section-title").innerText = "Search Cars";
    }

    if(lang === "fr"){
        document.querySelector(".hero h1").innerText = "Acheter et vendre des voitures";
        document.querySelector(".section-title").innerText = "Rechercher une voiture";
    }
});
