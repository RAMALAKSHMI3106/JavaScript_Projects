const ss = document.getElementById("ss");

function toggleTheme() {
    document.body.classList.toggle("dark");

    if (ss.classList.contains("fa-toggle-off")) {
        ss.classList.remove("fa-toggle-off");
        ss.classList.add("fa-toggle-on");
    } else {
        ss.classList.remove("fa-toggle-on");
        ss.classList.add("fa-toggle-off");
    }
}
