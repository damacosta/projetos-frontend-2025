const exchangeRates = {
    USD: { EUR: 0.85, BRL: 5.25, USD: 1 },
    EUR: { USD: 1.18, BRL: 6.15, EUR: 1 },
    BRL: { USD: 0.19, EUR: 0.16, BRL: 1 }
};

function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const currencyFrom = document.getElementById('currencyFrom').value;
    const currencyTo = document.getElementById('currencyTo').value;

    if (amount === '' || isNaN(amount)) {
        alert('Por favor, insira um valor válido.');
        return;
    }

    const result = (amount * exchangeRates[currencyFrom][currencyTo]).toFixed(2);
    document.getElementById('result').innerText = `Resultado: ${result} ${currencyTo}`;
}