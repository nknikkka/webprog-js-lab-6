const profile = {
    username: "Jacob",
    playTime: 300,

    changeUsername(newName)
     { this.username = newName;},

    updatePlayTime(hours) 
    {this.playTime += hours;},

    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`;
    }
};

function updateOutput() {
    const outputDiv1 = document.getElementById('outputDiv1');
    outputDiv1.textContent = profile.getInfo();
}

updateOutput();

profile.changeUsername("Marco");
updateOutput();

profile.updatePlayTime(20);
updateOutput(); 
