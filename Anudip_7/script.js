/* ===== BASIC ===== */

* {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;

    font-family: Arial, sans-serif;

    background-color: #f5f6fa;

    color: #222;
}


/* ===== NAVBAR ===== */

nav {
    background-color: #222;

    padding: 18px 40px;

    display: flex;

    justify-content: space-between;

    align-items: center;

    position: sticky;

    top: 0;

    z-index: 100;
}

nav h2 {
    color: white;

    margin: 0;
}

nav div {
    display: flex;

    gap: 25px;
}

nav a {
    color: white;

    text-decoration: none;

    font-weight: bold;
}

nav a:hover {
    color: #8fa2ff;
}


/* ===== HOME ===== */

#home {
    min-height: 90vh;

    display: flex;

    flex-direction: column;

    justify-content: center;

    align-items: center;

    text-align: center;

    background: linear-gradient(
        135deg,
        #667eea,
        #764ba2
    );

    color: white;

    padding: 40px;
}

#home h1 {
    font-size: 50px;

    margin-bottom: 10px;
}

#home p {
    font-size: 20px;
}

.home-button {
    margin-top: 20px;

    padding: 13px 25px;

    background-color: white;

    color: #667eea;

    text-decoration: none;

    border-radius: 6px;

    font-weight: bold;
}

.home-button:hover {
    transform: scale(1.05);
}


/* ===== EVENTS ===== */

#events {
    padding: 70px 10%;

    text-align: center;
}

#events h2,
#register h2 {
    font-size: 32px;
}

.events {
    display: flex;

    justify-content: center;

    gap: 25px;

    flex-wrap: wrap;

    margin-top: 35px;
}


/* ===== EVENT CARDS ===== */

.card {
    width: 250px;

    padding: 25px;

    background-color: white;

    border-radius: 15px;

    box-shadow:
        0 4px 10px rgba(0,0,0,0.15);

    cursor: pointer;

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
}


/* Hover = card becomes bigger */

.card:hover {
    transform: scale(1.08);

    box-shadow:
        0 10px 25px rgba(0,0,0,0.25);
}


/* Event colors */

.hackathon {
    border-top: 7px solid #667eea;
}

.quiz {
    border-top: 7px solid #ff9800;
}

.presentation {
    border-top: 7px solid #4caf50;
}


/* Event heading colors */

.hackathon h3 {
    color: #667eea;
}

.quiz h3 {
    color: #ff9800;
}

.presentation h3 {
    color: #4caf50;
}


/* ===== CARD BUTTONS ===== */

.card button {
    border: none;

    padding: 10px 18px;

    border-radius: 5px;

    color: white;

    cursor: pointer;
}

.hackathon button {
    background-color: #667eea;
}

.quiz button {
    background-color: #ff9800;
}

.presentation button {
    background-color: #4caf50;
}


/* ===== REGISTER ===== */

#register {
    padding: 70px 20px;

    background-color: #eef0f5;
}

.section-title {
    text-align: center;
}

.form-section {
    max-width: 500px;

    margin: auto;

    background-color: white;

    padding: 30px;

    border-radius: 12px;

    box-shadow:
        0 4px 15px rgba(0,0,0,0.15);
}

label {
    display: block;

    margin-top: 15px;

    margin-bottom: 5px;

    font-weight: bold;
}

input,
select {
    width: 100%;

    padding: 11px;

    border: 1px solid #ccc;

    border-radius: 5px;
}

input:focus,
select:focus {
    outline: none;

    border-color: #667eea;
}


/* Submit button */

.submit-btn {
    width: 100%;

    margin-top: 20px;

    padding: 13px;

    background-color: #667eea;

    color: white;

    border: none;

    border-radius: 5px;

    cursor: pointer;

    font-size: 16px;
}

.submit-btn:hover {
    background-color: #4c5fd5;
}


/* ===== DIGITAL PASS ===== */

.ticket {
    max-width: 500px;

    margin: 35px auto;

    padding: 25px;

    background-color: white;

    border: 3px dashed #667eea;

    border-radius: 12px;

    box-shadow:
        0 4px 15px rgba(0,0,0,0.15);
}

.ticket h2 {
    text-align: center;

    color: #667eea;
}

.ticket p {
    padding: 5px;

    border-bottom: 1px solid #eee;
}

.ticket button {
    width: 100%;

    padding: 12px;

    background-color: #222;

    color: white;

    border: none;

    border-radius: 5px;

    cursor: pointer;
}

.hidden {
    display: none;
}


/* ===== FOOTER ===== */

footer {
    background-color: #222;

    color: white;

    text-align: center;

    padding: 20px;
}


/* ===== MOBILE ===== */

@media (max-width: 600px) {

    nav {
        flex-direction: column;

        gap: 15px;
    }

    nav div {
        gap: 15px;
    }

    #home h1 {
        font-size: 35px;
    }

    .card {
        width: 90%;
    }
}


/* ===== PDF ===== */

@media print {

    body * {
        visibility: hidden;
    }

    #ticketSection,
    #ticketSection * {
        visibility: visible;
    }

    #ticketSection {
        position: absolute;

        left: 0;

        top: 0;

        width: 100%;
    }

    #ticketSection button {
        display: none;
    }
}
