const ps = document.getElementById("ps");

function pass() {
    const isnum = true;
    const isCaps = true;
    const isSmall = true;
    const isSymbol = true;
    const plen = 12;

    pw(isnum, isCaps, isSmall, isSymbol, plen);
}

function pw(isnum, isCaps, isSmall, isSymbol, plen) {

    const numi = "1234567890";
    const caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const small = "abcdefghijklmnopqrstuvwxyz";
    const symbol = "~!@#$%^&*?/";

    let chars = "";

    chars += isnum ? numi : "";
    chars += isCaps ? caps : "";
    chars += isSmall ? small : "";
    chars += isSymbol ? symbol : "";

    let password = "";

    for (let i = 0; i < plen; i++) {
        const random = Math.floor(Math.random() * chars.length);
        password += chars[random];
    }

    ps.value = password;
}