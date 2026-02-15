const message = document.getElementById("message");
const button = document.getElementById("button");
let clicks = localStorage.getItem("clicks") || 0;
message.textContent = `You have clicked the button ${clicks} times`;

function handleClick() {
    clicks++;
    localStorage.setItem("clicks", clicks);
    message.textContent = `You have clicked the button ${clicks} times`;
}

function resetClick() {
    const confirmed = confirm("Are you sure you want to reset your clicks to zero?")
    if (confirmed) {
        localStorage.removeItem("clicks");
        clicks = 0;
        message.textContent = `You have clicked the button ${clicks} times`;
        console.log("Counter reset successfully.")
    } else {
        console.log("Reset cancelled by user.")
    }
}