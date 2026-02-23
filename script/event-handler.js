const interviewBtns = document.getElementsByClassName("interview");
let cards = document.getElementsByClassName("card");

for (let i = 0; i < interviewBtns.length; i++) {
    interviewBtns[i].addEventListener("click", function () {
        cards[i].style.borderLeftColor = "#10B981";
    });
}

const rejectedBtns = document.getElementsByClassName("rejected");

for (let i = 0; i < rejectedBtns.length; i++) {
    rejectedBtns[i].addEventListener("click", function () {
        cards[i].style.borderLeftColor = "#EF4444";
    });
}