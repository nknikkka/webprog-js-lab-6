// Функція для розрахунку середнього значення калорій
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

// Функція для виведення результатів у outputDiv
function displayCalories(weeklyCalories) {
    const outputDiv = document.getElementById('outputDiv');
    
    outputDiv.innerHTML += `Середнє значення калорій: ${calcAverageCalories(weeklyCalories)}<br>`;
}

// Об'єкт профілю користувача
const profile = {
    username: "Jacob",
    playTime: 300,
    changeUsername(newName) {
        this.username = newName;
    },
    updatePlayTime(hours) {
        this.playTime += hours;
    },
    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`;
    }
};

// Виведення інформації про профіль
function displayProfileInfo() {
    const outputDiv = document.getElementById('outputDiv');
    
    outputDiv.innerHTML += profile.getInfo() + '<br>'; // Виводимо початкову інформацію

    profile.changeUsername("Marco");
    outputDiv.innerHTML += profile.getInfo() + '<br>'; // Виводимо інформацію після зміни імені

    profile.updatePlayTime(20);
    outputDiv.innerHTML += profile.getInfo(); // Виводимо інформацію після оновлення ігрового часу
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

// Виводимо інформацію про профіль
displayProfileInfo();
