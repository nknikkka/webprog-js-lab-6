function calcAverageCalories(weeklyCalories) {
    if (weeklyCalories.length === 0) return 0;

    let totalCalories = 0;

    for (const entry of weeklyCalories) {
        totalCalories += entry.calories;
    }

    return totalCalories / weeklyCalories.length;
}
function updateOutput(calories) {
    const outputDiv = document.getElementById('outputDiv');
    outputDiv.textContent = `Середнє значення калорій: ${calories}`;
}

let weeklyCalories1 = [
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
];

const averageCalories1 = calcAverageCalories(weeklyCalories1);
updateOutput(averageCalories1);

let weeklyCalories2 = [
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
];

const averageCalories2 = calcAverageCalories(weeklyCalories2);
updateOutput(averageCalories2); // Середнє значення калорій: 2270"

const averageCaloriesEmpty = calcAverageCalories([]);
updateOutput(averageCaloriesEmpty); // Середнє значення калорій: 0"
