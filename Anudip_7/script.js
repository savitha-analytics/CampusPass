// Select an event

function selectEvent(eventName) {

    document.getElementById("event").value = eventName;

    document.getElementById("register").scrollIntoView({
        behavior: "smooth"
    });
}


// Generate unique ticket ID

function generateTicketId() {

    let number = Math.floor(1000 + Math.random() * 9000);

    return "CP-2026-" + number;
}


// Registration

document.getElementById("registrationForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let selectedEvent = document.getElementById("event").value;
        let name = document.getElementById("name").value;
        let regNo = document.getElementById("regNo").value;
        let department = document.getElementById("department").value;
        let year = document.getElementById("year").value;
        let email = document.getElementById("email").value;

        // Check event selection

        if (selectedEvent === "") {

            alert("Please select an event first.");

            return;
        }


        // Generate ticket

        document.getElementById("ticketEvent").innerText =
            selectedEvent;

        document.getElementById("ticketName").innerText =
            name;

        document.getElementById("ticketRegNo").innerText =
            regNo;

        document.getElementById("ticketDepartment").innerText =
            department;

        document.getElementById("ticketYear").innerText =
            year;

        document.getElementById("ticketEmail").innerText =
            email;

        document.getElementById("ticketId").innerText =
            generateTicketId();


        // Show ticket

        document.getElementById("ticketSection")
            .classList.remove("d-none");


        // Scroll to ticket

        document.getElementById("ticketSection")
            .scrollIntoView({
                behavior: "smooth"
            });

    });