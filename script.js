("authBtn").addEventListener("click", openModal);
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
