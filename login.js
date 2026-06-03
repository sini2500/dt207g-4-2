const apiUrl = "https://sini2500-dt207g-4.onrender.com/api";

// inloggning
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch(`${apiUrl}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });

        const result = await res.json();

        if (!res.ok) {
            message.textContent = result.message;
            return;
        }

        // spara token
        sessionStorage.setItem("token", result.token);

        message.textContent = "Inloggning lyckades";

        // gå vidare
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 500);

    } catch (error) {
        message.textContent = "Något gick fel";
    }
});