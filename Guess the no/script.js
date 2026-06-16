const demo = document.getElementById("demo");
const de = document.getElementById("de");
const no = document.getElementById("no");

function rand() {
    demo.value = Math.floor(Math.random() * 100) + 1;
    demo.textContent = "Random number generated!";
}

function msg() {
    if (demo.value == "") {
        de.textContent = "Generate a number first!";
    }
    else if (Number(no.value) === demo.value) {
        de.textContent = "Correct Guess!";
    }
    else if (Number(no.value) < demo.value) {
        de.textContent = "Too Low! Try Again!";
    }
    else {
        de.textContent = "Too High! Try Again!";
    }
}