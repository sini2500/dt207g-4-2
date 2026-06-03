const apiUrl = "https://sini2500-dt207g-4.onrender.com/api";

// registrering
const registerForm = document.getElementById("registerForm");
const message = document.getElementById("message");

registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch(`${apiUrl}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();

        if (!res.ok) {
            message.textContent = data.message;
            return;
        }

        message.textContent = "Konto skapat";

        // skicka vidare till login
        setTimeout(() => {
            window.location.href = "login.html";
        }, 1000);

    } catch (error) {
        message.textContent = "Något gick fel";
    }
});