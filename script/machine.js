// machine id -> hide all -> show id
function showOnly(id) {
    const allPage = document.getElementById("all-page");
    const interviewPage = document.getElementById("interview-page");
    const rejectedPage = document.getElementById("rejected-page");
    // console.log(`Add Money- ${addMoney} , Cash Out- ${cashOut}`);

    // Hide all form
    allPage.classList.add("hidden");
    interviewPage.classList.add("hidden");
    rejectedPage.classList.add("hidden");

    // remove the hidden from which id will call
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}


// machine -> toggling buttons
const buttons = document.getElementsByClassName("btns");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {

        // 1. Sob button theke active class remove
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove("bg-[#3B82F6]", "text-white");
        }

        // 2. Click kora button e active class add
        this.classList.add("bg-[#3B82F6]", "text-white");
    });
}
