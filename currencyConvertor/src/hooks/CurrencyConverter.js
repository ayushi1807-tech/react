import React, { useState, useEffect } from "react";
import InputBox from "./InputBox"; // Import InputBox
import useCurrencyInfo from "./usecurrencyinfo";// Import Custom Hook

function CurrencyConverter() {
    const [fromAmount, setFromAmount] = useState(1);
    const [toAmount, setToAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("usd");
    const [toCurrency, setToCurrency] = useState("inr");

    // Get exchange rates using custom hook
    const exchangeRates = useCurrencyInfo(fromCurrency);

    // Convert currency dynamically
    useEffect(() => {
        if (exchangeRates && exchangeRates[toCurrency]) {
            setToAmount((fromAmount * exchangeRates[toCurrency]).toFixed(2));
        }
    }, [fromAmount, fromCurrency, toCurrency, exchangeRates]);

    // Swap currencies
    const handleSwap = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
        setFromAmount(toAmount);
        setToAmount(fromAmount);
    };

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                {/* From Currency Input */}
                <InputBox 
                    label="From"
                    amount={fromAmount}
                    onAmountChange={setFromAmount}
                    onCurrencyChange={setFromCurrency}
                    currencyOptions={Object.keys(exchangeRates)}
                    selectCurrency={fromCurrency}
                />

                {/* Swap Button */}
                <div className="text-center my-3">
                    <button 
                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        onClick={handleSwap}
                    >
                        Swap
                    </button>
                </div>

                {/* To Currency Input */}
                <InputBox 
                    label="To"
                    amount={toAmount}
                    onAmountChange={() => {}} // No need to manually change
                    onCurrencyChange={setToCurrency}
                    currencyOptions={Object.keys(exchangeRates)}
                    selectCurrency={toCurrency}
                />

                {/* Convert Button */}
                <button className="mt-4 w-full bg-blue-600 text-white p-2 rounded-lg">
                    Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
                </button>
            </div>
        </div>
    );
}

export default CurrencyConverter;
