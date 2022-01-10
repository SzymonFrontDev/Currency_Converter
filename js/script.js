let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result")
let inputTest = document.querySelector(".inputTest")
let buttonClear = document.querySelector(".js-button")

let eur = 4.62;
let usd = 4.08;
let gbp = 5.46;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;
    let result;

    switch (currencyElement.value) {
        case "eur":
            result = amountElement.value / eur;
            break;

        case "usd":
            result = amountElement.value / usd;
            break;

        case "gbp":
            result = amountElement.value / gbp;
            break;
    }
    resultElement.innerText = `${result.toFixed(2)}`
});

buttonClear.addEventListener("click", () => {
    resultElement.innerText = "0.00";
})