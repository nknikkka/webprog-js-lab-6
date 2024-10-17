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

// Функція для виведення інформації у outputDiv1
function displayProfileInfo() {
    const outputDiv1 = document.getElementById('outputDiv1'); // Знаходимо елемент outputDiv1

    outputDiv1.innerHTML += profile.getInfo() + "<br>"; // Виводимо початкову інформацію
    profile.changeUsername("Marco");
    outputDiv1.innerHTML += profile.getInfo() + "<br>"; // Виводимо інформацію після зміни імені
    profile.updatePlayTime(20);
    outputDiv1.innerHTML += profile.getInfo() + "<br>"; // Виводимо інформацію після оновлення часу гри
}

// Викликаємо функцію для виведення інформації
displayProfileInfo();
