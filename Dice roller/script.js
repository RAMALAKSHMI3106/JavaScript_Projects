function roll() {
    const inp = document.getElementById("inp");
    const dice = document.getElementById("dice");
    const diceImg = document.getElementById("diceImg");

    const values = [];
    const images = [];

    for (let i = 0; i < inp.value; i++) {
        const random = Math.floor(Math.random() * 6) + 1;

        values.push(random);

        images.push(
            `<img src="img/dice${random}.png" alt="Dice ${random}">`
        );
    }

    dice.textContent = `Dice Values: ${values.join(", ")}`;
    diceImg.innerHTML = images.join("");
}