const apiUrl = "https://sini2500-dt207g-4.onrender.com/api";

// visa dashboard
const token = sessionStorage.getItem("token");

const content = document.getElementById("content");
const message = document.getElementById("message");

if (!token) {
    window.location.href = "login.html";
}

async function loadUser() {

    try {
        const res = await fetch(`${apiUrl}/dashboard`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const data = await res.json();

        if (!res.ok) {
            sessionStorage.removeItem("token");
            window.location.href = "login.html";
            return;
        }

        document.getElementById("username").textContent = "Välkommen " + data.username + "!";
        document.getElementById("catImage").src = data.cat;

        message.style.display = "none";
        content.style.display = "block";

    } catch (error) {
        message.textContent = "Kunde inte hämta användardata";
    }
}

loadUser();

document.getElementById("logoutBtn").addEventListener("click", () => {
    sessionStorage.removeItem("token");
    window.location.href = "login.html";
});