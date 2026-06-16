const coun = document.getElementById("c");

coun.value = 0;

function incre() {
    coun.value++;
    coun.textContent = coun.value;
}

function decre() {
    coun.value--;
    coun.textContent = coun.value;
}

function reset() {
    coun.value = 0;
    coun.textContent = coun.value;
}