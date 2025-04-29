// Update time every second
setInterval(() => {
    const now = new Date();
    document.getElementById('time').textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}, 1000);

// Set static location for now
document.getElementById('location').textContent = "Island Beach State Park";

// Fake wave interval
document.getElementById('waveInterval').textContent = "Wave Interval: 11 minutes";

// Show rip current warning if needed
const ripCurrentHigh = true; // manually toggle for now
if (ripCurrentHigh) {
    document.getElementById('ripCurrentWarning').classList.remove('hidden');
}

// Training Mode
const trainingBtn = document.getElementById('trainingModeBtn');
const exitTrainingBtn = document.getElementById('exitTraining');
const trainingContent = document.getElementById('trainingContent');
const drills = [
    "Paddle sprint for 30 seconds!",
    "Duck dive practice for 5 minutes!",
    "Wave pop-up practice!",
    "Balance drills on board!",
    "Breath holding training!"
];

trainingBtn.onclick = () => {
    trainingContent.classList.remove('hidden');
    trainingBtn.classList.add('hidden');
    document.getElementById('drill').textContent = drills[Math.floor(Math.random() * drills.length)];
};

exitTrainingBtn.onclick = () => {
    trainingContent.classList.add('hidden');
    trainingBtn.classList.remove('hidden');
};
