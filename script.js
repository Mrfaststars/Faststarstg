document.addEventListener("DOMContentLoaded", function () {

    const calcBtn = document.getElementById("calcBtn");
    const starsInput = document.getElementById("starsInput");
    const promoInput = document.getElementById("promoInput");
    const resultDiv = document.getElementById("result");
    const buyLink = document.getElementById("buyLink");

    calcBtn.addEventListener("click", function () {

        let stars = parseInt(starsInput.value);

        if (!stars || stars <= 0) {
            resultDiv.innerHTML = "Введите корректное количество звёзд.";
            buyLink.classList.remove("active");
            return;
        }

        let price = stars * 1.35; // +35%

        if (promoInput.value.trim().toLowerCase() === "svyat") {
            price = price * 0.8; // -20%
        }

        price = Math.round(price);

        resultDiv.innerHTML = `Итоговая цена: ${price} ₽`;

        buyLink.href = `https://t.me/serverfaststars?text=Здравствуйте!%20Хочу%20купить%20${stars}%20звёзд.%20Цена:%20${price}%20₽`;
        buyLink.classList.add("active");
    });

});
