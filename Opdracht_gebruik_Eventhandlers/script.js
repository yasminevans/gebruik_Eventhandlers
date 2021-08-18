const button = document.querySelector("#mybutton");

const clickMe = () => {
    alert("Button clicked")
};

button.addEventListener('click', clickMe);

const changeBgButton = document.querySelector("#changeBG");
const blueBackground = document.querySelector(".blue-background");
const redbackground = document.querySelector(".red-background");

const changeBackground = () => {
    blueBackground.classList.toggle("red-background");
};

changeBgButton.addEventListener('click', changeBackground);