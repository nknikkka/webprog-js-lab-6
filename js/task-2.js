function calcAverageCalories(days) {
    // Перевіряємо, чи масив порожній
    if (days.length === 0) {
        return 0;
    }

    // Обчислюємо загальну кількість калорій
    const totalCalories = days.reduce((sum, day) => {
        return sum + (day.calories || 0); // Додаємо калорії для кожного дня, якщо вони існують
    }, 0);

    // Обчислюємо середнє значення калорій
    const averageCalories = totalCalories / days.length;

    // Додаємо умови для виведення повідомлення
    let message = "";
    if (averageCalories > 3000) {
        message = "Спортсмен споживає достатню кількість калорій.";
    } else if (averageCalories < 2000) {
        message = "Спортсмен не споживає достатню кількість калорій.";
    }

    // Повертаємо об'єкт з середнім значенням та повідомленням
    return {
        average: averageCalories.toFixed(2), // Форматуємо до двох десяткових знаків
        message: message
    };
}

// Функція для виведення результатів у outputDiv
function outputDiv(text) {
    const outputElement = document.getElementById('outputDiv');
    outputElement.innerHTML += `<p>${text}</p>`; // Додаємо новий абзац
}

// Тестування функції з різними наборами даних
let weeklyCalories = [
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
];
const result1 = calcAverageCalories(weeklyCalories);
outputDiv(`Середня кількість калорій: ${result1.average}`); // 3180.00
outputDiv(result1.message); // Виведе "Спортсмен споживає достатню кількість калорій."

weeklyCalories = [
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
];
const result2 = calcAverageCalories(weeklyCalories);
outputDiv(`Середня кількість калорій: ${result2.average}`); // 2270.00
outputDiv(result2.message); // Не має повідомлення

weeklyCalories = [
    { day: "monday", calories: 1400 },
    { day: "tuesday", calories: 1600 }
];
const result3 = calcAverageCalories(weeklyCalories);
outputDiv(`Середня кількість калорій: ${result3.average}`); // 1500.00
outputDiv(result3.message); // "Спортсмен не споживає достатню кількість калорій."

outputDiv(`Середня кількість калорій для порожнього масиву: ${calcAverageCalories([]).average}`); // 0.00
