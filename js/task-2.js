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

    return averageCalories; // Повертаємо середнє значення
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
outputDiv(`Середнє значення калорій: ${calcAverageCalories(weeklyCalories)}`); // 3180

weeklyCalories = [
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
];
outputDiv(`Середнє значення калорій: ${calcAverageCalories(weeklyCalories)}`); // 2270

outputDiv(`Середнє значення калорій для порожнього масиву: ${calcAverageCalories([])}`); // 0
