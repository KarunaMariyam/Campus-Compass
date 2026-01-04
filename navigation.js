const campusData = {
    it: {
        "Floor 1": ["Programming Lab 1", "Men's Restroom", "Classroom 101"],
        "Floor 2": ["Department Office", "HOD Cabin", "Classroom 201"],
        "Floor 3": ["Faculty Cabin - CSE", "M.Tech Lab", "Seminar Hall"]
    },
    main: {
        "Ground Floor": ["Admission Office", "Accounts Section", "COE Desk"],
        "Floor 1": ["Principal's Office", "Registrar Office"]
    },
    library: {
        "Ground Floor": ["Reference Section", "Digital Library"],
        "Floor 1": ["Reading Hall", "Thesis Archives"]
    }
};

function populateDestinations() {
    const block = document.getElementById('blockSelect').value;
    const destSelect = document.getElementById('destSelect');
    destSelect.innerHTML = "";
    
    const floors = campusData[block];
    for (let floor in floors) {
        floors[floor].forEach(room => {
            let opt = document.createElement('option');
            opt.value = `${floor} | ${room}`;
            opt.innerText = `${floor} → ${room}`;
            destSelect.appendChild(opt);
        });
    }
}

function setRole(element, role) {
    document.querySelectorAll('.role-chip').forEach(chip => chip.classList.remove('active'));
    element.classList.add('active');
    document.getElementById('user-role-display').innerText = role;
}

function initiateNavigation() {
    const destination = document.getElementById('destSelect').value;
    const [floor, room] = destination.split(' | ');

    document.getElementById('welcome-msg').style.display = 'none';
    document.getElementById('ar-display').style.display = 'block';
    document.getElementById('status-title').innerText = "Routing to " + room;

    document.getElementById('route-text').innerHTML = `
        <div class="step-card">
            <h4>📍 Optimized Path Found</h4>
            <p>1. Exit your current location and turn right.</p>
            <p>2. Proceed to the <strong>${floor}</strong> elevator.</p>
            <p>3. Destination <strong>${room}</strong> is 20m from the exit.</p>
        </div>
    `;
}

// Initial Call
window.onload = populateDestinations;