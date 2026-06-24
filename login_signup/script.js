const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


const signupForm = document.getElementById("Signup");

signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("ps").value;

    const user = { name, email, password };

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find(u => u.email === email);

    if (exists) {
        alert("Email already registered!");
        return;
    }

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup Successful!");
    signupForm.reset();
});
const loginForm = document.getElementById("login");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("lemail").value;
    const password = document.getElementById("lps").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(u => u.email === email);

    if (!user) {
        alert("Create an account first!");
    }
    else if (user.password !== password) {
        alert("Invalid Password!");
    }
    else {
        alert("Login Successful!");
       
    }
});