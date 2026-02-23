// element selector
const jobList = document.getElementById('job-list');

// main event delegation
jobList.addEventListener('click', function (event) {
    const target = event.target;
    const card = target.closest('.job-card');

    if (!card) return;

    // interview button
    if (target.classList.contains('interview-btn')) {
        updateCardStatus(card, 'interview');
    }

    // rejected button
    else if (target.classList.contains('rejected-btn')) {
        updateCardStatus(card, 'rejected');
    }

    // delete button
    else if (target.closest('.delete-btn')) {

        // user confirmation
        const confirmDelete = confirm("Are you sure you want to delete this job application?");

        if (confirmDelete) {
            card.remove();
            calculateEverything();
        }
    }
});

// update card status function
function updateCardStatus(card, newStatus) {
    const statusBadge = card.querySelector('.status-badge');

    card.setAttribute('data-status', newStatus);
    statusBadge.innerText = newStatus;

    if (newStatus === 'interview') {
        card.style.borderLeftColor = "#10B981";
        statusBadge.className = "status-badge w-fit text-xs font-bold py-2 px-3 rounded bg-green-100 text-green-600 mb-2 uppercase";
    }
    else if (newStatus === 'rejected') {
        card.style.borderLeftColor = "#EF4444";
        statusBadge.className = "status-badge w-fit text-xs font-bold py-2 px-3 rounded bg-red-100 text-red-600 mb-2 uppercase";
    }
    calculateEverything();
}

// element selector
const filterButtons = document.querySelectorAll('.filter-btn');
// initial setup
let currentFilter = 'all';

// filtering logic
document.getElementById('filter-buttons').addEventListener('click', function (e) {
    if (e.target.classList.contains('filter-btn')) {
        filterButtons.forEach(btn => btn.classList.remove('active-btn'));
        e.target.classList.add('active-btn');

        currentFilter = e.target.getAttribute('data-filter');
        applyFilter(currentFilter);
    }
});


// element selector
const emptyState = document.getElementById('empty-state');

function applyFilter(filter) {
    const cards = document.querySelectorAll('.job-card');
    let visibleCards = 0;

    for (let card of cards) {
        const status = card.getAttribute('data-status');

        if (filter === 'all' || status === filter) {
            card.classList.remove('hidden');
            visibleCards++;
        } else {
            card.classList.add('hidden');
        }
    }

    // empty state logic
    if (visibleCards === 0) {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
    }
}


// counts
const totalCount = document.getElementById('totalCount');
const totalBadge = document.getElementById('totalBadge');
const interviewCount = document.getElementById('interviewNo');
const rejectedCount = document.getElementById('rejectedNo');


// calculate all status & auto-refresh filter
function calculateEverything() {
    const allCards = document.querySelectorAll('.job-card');
    const interviewCards = document.querySelectorAll('.job-card[data-status="interview"]');
    const rejectedCards = document.querySelectorAll('.job-card[data-status="rejected"]');

    totalCount.innerText = allCards.length;
    totalBadge.innerText = allCards.length;
    interviewCount.innerText = interviewCards.length;
    rejectedCount.innerText = rejectedCards.length;

    applyFilter(currentFilter);
}

// initial calculation
calculateEverything();