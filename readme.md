## DT207G - backend-baserad webbutveckling

Det här är ett projekt för kursen backend-baserad webbutveckling, VT 2026.

API publicerat på Render: https://sini2500-dt207g-4.onrender.com

Front-end publicerad på Netlify: https://dt207g-4-sini2500.netlify.app

---

För den här uppgiften skulle vi skapa ett litet API för att hantera registrering och inloggning av användare, samt JWT-autentisering.

I detta repo finns front-end delen av uppgiften, med enkel html, css och all JS som behövs.

Jag har valt att göra en tjänst där varje användare får sin alldeles egna kattbild från ett annat API: https://cataas.com.

Användaren kan :

- Registrera sig med användarnamn och lösenord
- Logga in med användarnamn och lösenord
- Besöka en sida som kräver inloggning (där finns kattbilden)

Hjälpsamma meddelanden visas när API:et ger något svar, som t.ex "registrering lyckades", "uppgifterna stämmer ej" osv.

Vid lyckad registrering dirigeras användaren om till /login.html automatiskt, efter en liten försening. 

Ej inloggade användare skickas till /login.html om de försöker gå till den skyddade sidan /dashboard.html.

En JWT-token skapas vid lyckad inloggning och sparas i localstorage i en timme. 

Varje sida har sin egen JS-fil, så inget onödigt laddas och det är lätt att se vad som gör vad på vilken sida.

Designen är exakt samma som föregående uppgift i kursen, men små ändringar för formulären.

---

