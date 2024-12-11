// Arama formu işlemi
const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");

  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(searchBtn) &&
      !e.composedPath().includes(searchForm)
    ) {
      searchForm.classList.remove("active");
    }
  });
});

// Fiyat kaydırma işlemi
const priceInput = document.getElementById("price");
const priceDisplay = document.getElementById("price-display");

// Başlangıçta değeri yazdır
priceDisplay.textContent = priceInput.value;

// Kaydırma çubuğu değeri değiştiğinde, span elemanını güncelle
priceInput.addEventListener("input", function () {
  priceDisplay.textContent = priceInput.value;
});

// Sayfa yüklendikten sonra, fiyatın her kaydırma işlemiyle artması için ekleyeceğiz.
let priceValue = parseInt(priceInput.value); // Başlangıç fiyatını al
priceInput.addEventListener("wheel", function (event) {
  if (event.deltaY > 0) {
    // Aşağı kaydırıldığında
    priceValue += 10; // Fiyatı 10 artır
  } else {
    // Yukarı kaydırıldığında
    priceValue = Math.max(50, priceValue - 10); // Fiyatı 10 azalt ama en az 50 olsun
  }
  // Fiyatı güncelle
  priceInput.value = priceValue;
  priceDisplay.textContent = priceValue; // Fiyatı ekranda güncelle
});

// Filtreleme butonunun ve filtreleme bölümünün DOM elemanları
const filterBtn = document.getElementById('filter-btn');
const filterSection = document.getElementById('filter-section');

// Filtreleme butonuna tıklama olayını ekle
filterBtn.addEventListener('click', function() {
    // Eğer filtreleme bölümü gizliyse, aç; açıksa, kapa
    if (filterSection.style.display === 'block') {
        filterSection.style.display = 'none';
        filterBtn.style.display = 'block'; // Butonu tekrar göster
    } else {
        filterSection.style.display = 'block';
        filterBtn.style.display = 'none'; // Butonu gizle
    }
});
