{
    let buttonClear = document.querySelector(".js-button");
    let resultElement = document.querySelector(".js-result");

    buttonClear.addEventListener("click", () =>
        resultElement.innerText = "0.00"
    );


    const calculateResult = (amountElement, currencyElement) => {
        const eur = 4.62;
        const usd = 4.08;
        const gbp = 5.46;

        switch (currencyElement.value) {
            case "eur":
                return amountElement.value / eur;

            case "usd":
                return amountElement.value / usd;

            case "gbp":
                return amountElement.value / gbp;
        }
    };

    const formElement = document.querySelector(".js-form");

    const updateResultText = (amount, result, currency) => {

        resultElement.innerText = `${result.toFixed(2)}`

    }

    const onFormSybmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");


        const amount = amountElement.value;
        const currency = currencyElement.value;
        const result = calculateResult(amountElement, currencyElement)

        updateResultText(amount, result, currency);
    }


    const init = () => {

        formElement.addEventListener("submit", onFormSybmit)

    };

    init();
}     