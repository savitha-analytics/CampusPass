// ===== SELECT EVENT =====
function selectEvent(eventName) {
    document.getElementById("event").value = eventName;
    document.getElementById("register").scrollIntoView({ behavior: "smooth" });
}

// ===== GENERATE TICKET ID =====
function generateTicketId() {
    let number = Math.floor(1000 + Math.random() * 9000);
    return "MEC-2026-" + number;
}

// ===== FORM SUBMIT =====
let form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let selectedEvent = document.getElementById("event").value;

    if (selectedEvent === "") {
        alert("Please select an event.");
        return;
    }

    document.getElementById("ticketName").innerText = document.getElementById("name").value;
    document.getElementById("ticketRegNo").innerText = document.getElementById("regNo").value;
    document.getElementById("ticketDepartment").innerText = document.getElementById("department").value;
    document.getElementById("ticketYear").innerText = document.getElementById("year").value;
    document.getElementById("ticketEmail").innerText = document.getElementById("email").value;
    document.getElementById("ticketEvent").innerText = selectedEvent;
    let ticketId = generateTicketId();
    document.getElementById("ticketId").innerText = ticketId;

    // ===== GENERATE QR CODE =====
    let qrContainer = document.getElementById("qrCode");
    qrContainer.innerHTML = "";

    let qrData = [
        "Ticket: " + ticketId,
        "Name: " + document.getElementById("name").value,
        "Reg No: " + document.getElementById("regNo").value,
        "Event: " + selectedEvent
    ].join("\n");

    new QRCode(qrContainer, {
        text: qrData,
        width: 84,
        height: 84,
        colorDark: "#14213d",
        colorLight: "#ffffff"
    });

    document.getElementById("ticketSection").classList.remove("hidden");
    document.getElementById("ticketSection").scrollIntoView({ behavior: "smooth" });
});