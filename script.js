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
