/*=====================================
Green Safe - Daily Eco Tip
=====================================*/

const tips = [

    "🌳 Plant at least one tree every year.",

    "♻ Separate recyclable waste from household trash.",

    "💧 Turn off the tap while brushing your teeth.",

    "🚶 Walk or cycle whenever possible instead of driving.",

    "🛍 Use reusable shopping bags instead of plastic bags.",

    "🔌 Unplug electronic devices when they are not in use.",

    "🌞 Save energy by using natural light during the day.",

    "🥤 Carry a reusable water bottle instead of buying plastic bottles.",

    "🍃 Keep your surroundings clean and encourage others to do the same.",

    "🌍 Small daily actions can make a big difference for our planet."

];

const tipElement = document.querySelector("#dailyTip");
const button = document.querySelector("#newTipBtn");

function displayStoredTip() {

    const savedTip = localStorage.getItem("ecoTip");

    if (savedTip) {

        tipElement.textContent = savedTip;

    } else {

        generateNewTip();

    }

}

function generateNewTip() {

    const randomIndex = Math.floor(Math.random() * tips.length);

    const selectedTip = tips[randomIndex];

    tipElement.textContent = selectedTip;

    localStorage.setItem("ecoTip", selectedTip);

}

displayStoredTip();

button.addEventListener("click", generateNewTip);