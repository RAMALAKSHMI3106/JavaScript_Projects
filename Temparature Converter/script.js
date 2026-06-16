const d = document.getElementById('d');
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const num = document.getElementById('num');

function conversion() {
    let r;

    if (c1.checked) {
        r = ((9 / 5) * num.value) + 32;
        d.textContent = `Value is ${r.toFixed(2)} °F`;
    }
    else if (c2.checked) {
        r = (5 / 9) * (num.value - 32);
        d.textContent = `Value is ${r.toFixed(2)} °C`;
    }
    else {
        d.textContent = "Please select a unit";
    }
}