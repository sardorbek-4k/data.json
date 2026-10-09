
let elMenuBtn = document.querySelector("#menuBtn");
let elNavbar = document.querySelector("#navbar");

let elCartBtn = document.querySelector("#cartBtn");
let elCartPanel = document.querySelector("#cartPanel");
let elCloseCart = document.querySelector("#closeCart");

let elSearchForm = document.querySelector("#searchForm");
let elSearchInput = document.querySelector("#searchInput");

// Menyuni ochish va yopish
elMenuBtn.addEventListener("click", () => {
  elNavbar.classList.toggle("active");
});

// Savatchani ochish
elCartBtn.addEventListener("click", () => {
  elCartPanel.classList.add("active");
});

// Savatchani yopish
elCloseCart.addEventListener("click", () => {
  elCartPanel.classList.remove("active");
});

// Havolani bosganda menyuni yopish
document.querySelectorAll(".navbar a").forEach((elLink) => {
  elLink.addEventListener("click", () => {
    elNavbar.classList.remove("active");
  });
});

// Mahsulotlarni qidirish
elSearchForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let qiymat = elSearchInput.value.trim().toLowerCase();

  if (!qiymat) {
    elSearchInput.focus();
    return;
  }

  let mahsulotlar = document.querySelectorAll(
    ".product, .product-card, .card"
  );

  let topildi = 0;

  mahsulotlar.forEach((mahsulot) => {
    let matn = mahsulot.textContent.toLowerCase();

    if (matn.includes(qiymat)) {
      mahsulot.style.display = "";
      topildi++;
    } else {
      mahsulot.style.display = "none";
    }
  });

  if (mahsulotlar.length === 0) {
    alert("Mahsulotlar ro‘yxati topilmadi!");
  } else if (topildi === 0) {
    alert("Kechirasiz, bunday mahsulot topilmadi!");
  }
});

