function calcAverageCalories(days) {
    if (days.length === 0) {
        return 0;
    }

    const validDays = days.filter(day => day.calories !== undefined);

    if (validDays.length === 0) {
        return 0;
    }

    const totalCalories = validDays.reduce((sum, day) => {
        let calories = day.calories;

        if (day.intensity === 'high') {
            calories *= 1.1; 
        } else if (day.intensity === 'low') {
            calories *= 0.9; 
        }
        
        return sum + calories;
    }, 0);

    const averageCalories = totalCalories / validDays.length;

    return averageCalories;
}

// Функція для виведення результату в outputDiv
function displayCalories(weeklyCalories) {
    const outputDiv = document.getElementById('outputDiv');
    
    outputDiv.innerHTML = ''; // Очищуємо попередній вміст

    const average = calcAverageCalories(weeklyCalories);
    outputDiv.innerHTML += `Середня кількість калорій: ${average.toFixed(2)}<br>`; // Виводимо середнє значення калорій

    if (average > 3000) {
        outputDiv.innerHTML += "Спортсмен споживає достатню кількість калорій.";
    } else if (average < 2000) {
        outputDiv.innerHTML += "Спортсмен не споживає достатню кількість калорій.";
    }
}

// Перший набір даних
let weeklyCalories = [
    { day: "monday", calories: 3010, intensity: 'medium' },
    { day: "tuesday", calories: 3200, intensity: 'high' },
    { day: "wednesday", calories: 3120, intensity: 'low' },
    { day: "thursday", calories: 2900, intensity: 'medium' },
    { day: "friday", calories: 3450, intensity: 'high' },
    { day: "saturday", calories: 3280, intensity: 'low' },
    { day: "sunday", calories: 3300, intensity: 'medium' }
];
displayCalories(weeklyCalories); // Виводимо результати для першого набору

// Другий набір даних
weeklyCalories = [
    { day: "monday", calories: 2040, intensity: 'low' },
    { day: "tuesday", calories: 2270, intensity: 'medium' },
    { day: "wednesday", calories: 2420, intensity: 'high' },
    { day: "thursday", calories: 1900, intensity: 'medium' },
    { day: "friday", calories: 2370, intensity: 'low' },
    { day: "saturday", calories: 2280, intensity: 'medium' },
    { day: "sunday", calories: 2610, intensity: 'medium' }
];
displayCalories(weeklyCalories); // Виводимо результати для другого набору

// Третій набір даних
weeklyCalories = [
    { day: "monday", calories: 1400, intensity: 'low' },
    { day: "tuesday", calories: 1600, intensity: 'low' }
];
displayCalories(weeklyCalories); // Виводимо результати для третього набору

// Пустий масив
console.log(calcAverageCalories([])); // 0, не виведе жодних повідомлень.
