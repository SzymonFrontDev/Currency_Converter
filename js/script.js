{

    let resultElement = document.querySelector(".js-result");
const Cleaner = () =>{ 
     resultElement.innerText = "0.00"
    };

    const calculateResult = (amountElement, currencyElement) => {
        const amount = amountElement.value;
        const currency = currencyElement.value;
        const eur = 4.54;
        const usd = 4.08;
        const gbp = 5.46;

        switch (currency) {
            case "eur":
                return amount/ eur;

            case "usd":
                return amount / usd;

            case "gbp":
                return amount / gbp;
        }
    };

    const updateResultText = ( result ) => {
        resultElement.innerText = `${result.toFixed(2)}`
        
    }

    const onFormSybmit = (event) => {
        event.preventDefault();
        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        
        
        const result = calculateResult(amountElement, currencyElement)

        updateResultText(result);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        const buttonClear = document.querySelector(".js-button");
        buttonClear.addEventListener("click",Cleaner);
        formElement.addEventListener("submit", onFormSybmit);
        
    };

    init();
}     