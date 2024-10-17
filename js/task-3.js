const profile = {
    username: "Jacob",
    playTime: 300,

    changeUsername(newName) {
        this.username = newName; },

    updatePlayTime(hours) {
        this.playTime += hours; },

    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`;}
};

function updateOutput() {
    const outputDiv = document.getElementById('outputDiv1');
    
    outputDiv.innerHTML = ''; 

    outputDiv.innerHTML += profile.getInfo() + '<br>'; 

    profile.changeUsername("Marco");
    outputDiv.innerHTML += profile.getInfo() + '<br>'; 

    profile.updatePlayTime(20);
    outputDiv.innerHTML += profile.getInfo(); 
}updateOutput();
