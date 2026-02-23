let cards = document.getElementsByClassName("card");

// initial status
for (let i = 0; i < cards.length; i++) {
    cards[i].setAttribute("data-status", "none");
}

// interview/rejected event code
const interviewBtns = document.getElementsByClassName("interview");
const rejectedBtns = document.getElementsByClassName("rejected");

const interviewCard = document.getElementById("interviewNo");
const rejectedCard = document.getElementById("rejectedNo");

const interviewContainer = document.getElementById("interview-page");
const rejectedContainer = document.getElementById("rejected-page");

// function to update count
function updateStatus(card, newStatus) {
    let prevStatus = card.getAttribute("data-status");

    // For previously selected status
    if (prevStatus === "interview") {
        interviewCard.innerText = Number(interviewCard.innerText) - 1;
    }
    else if (prevStatus === "rejected") {
        rejectedCard.innerText = Number(rejectedCard.innerText) - 1;
    }

    // Set new status
    card.setAttribute("data-status", newStatus);

    // For new status
    if (newStatus === "interview") {
        interviewCard.innerText = Number(interviewCard.innerText) + 1;
        card.style.borderLeftColor = "#10B981";
        interviewContainer.appendChild(card.cloneNode(true));
    }
    else if (newStatus === "rejected") {
        rejectedCard.innerText = Number(rejectedCard.innerText) + 1;
        card.style.borderLeftColor = "#EF4444";
        rejectedContainer.appendChild(card.cloneNode(true));
    }
}

// Interview button
for (let i = 0; i < interviewBtns.length; i++) {
    interviewBtns[i].addEventListener("click", function () {
        updateStatus(cards[i], "interview");
    });
}

// Rejected button
for (let i = 0; i < rejectedBtns.length; i++) {
    rejectedBtns[i].addEventListener("click", function () {
        updateStatus(cards[i], "rejected");
    });
}