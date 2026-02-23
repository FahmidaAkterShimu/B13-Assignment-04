const trash = document.getElementsByClassName("delete");
const totalJobs = document.getElementsByClassName("totalNo");

for (let i = 0; i < trash.length; i++) {
    trash[i].addEventListener("click", function () {
        this.parentNode.parentNode.parentNode.remove();

        for (let j = 0; j < totalJobs.length; j++) {
            let allJobs = Number(totalJobs[j].innerText);
            let jobsNo = allJobs - 1;
            totalJobs[j].innerText = jobsNo;
        }

    });
}



