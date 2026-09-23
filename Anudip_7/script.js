// ===== SELECT EVENT =====

function selectEvent(eventName) {

    document.getElementById("event").value =
        eventName;

    document.getElementById("register")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// ===== GENERATE TICKET ID =====

function generateTicketId() {

    let number =
        Math.floor(
            1000 + Math.random() * 9000
        );

    return "CP-2026-" + number;
}


// ===== GET FORM =====

let form =
    document.getElementById(
        "registrationForm"
    );


// ===== FORM SUBMIT =====

form.addEventListener(
    "submit",
    function(event) {

        // Prevent page refresh

        event.preventDefault();


        // Get selected event

        let selectedEvent =
            document.getElementById(
                "event"
            ).value;


        // Validation

        if (selectedEvent === "") {

            alert(
                "Please select an event."
            );

            return;
        }


        // Display Name

        document.getElementById(
            "ticketName"
        ).innerText =
            document.getElementById(
                "name"
            ).value;


        // Display Register Number

        document.getElementById(
            "ticketRegNo"
        ).innerText =
            document.getElementById(
                "regNo"
            ).value;


        // Display Department

        document.getElementById(
            "ticketDepartment"
        ).innerText =
            document.getElementById(
                "department"
            ).value;


        // Display Year

        document.getElementById(
            "ticketYear"
        ).innerText =
            document.getElementById(
                "year"
            ).value;


        // Display Email

        document.getElementById(
            "ticketEmail"
        ).innerText =
            document.getElementById(
                "email"
            ).value;


        // Display Event

        document.getElementById(
            "ticketEvent"
        ).innerText =
            selectedEvent;


        // Generate Ticket ID

        document.getElementById(
            "ticketId"
        ).innerText =
            generateTicketId();


        // Show Digital Pass

        document.getElementById(
            "ticketSection"
        ).classList.remove(
            "hidden"
        );


        // Scroll to Digital Pass

        document.getElementById(
            "ticketSection"
        ).scrollIntoView({
            behavior: "smooth"
        });

    }
);
