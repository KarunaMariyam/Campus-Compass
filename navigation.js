const citLocations = [
    { id: 1, name: 'IT Block - Programming Lab 1', block: 'IT Block', floor: '1st Floor', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500' },
    { id: 2, name: 'Main Block - Accounts Section', block: 'Main Block', floor: 'Ground Floor', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500' },
    { id: 3, name: 'Library - Reference Section', block: 'Library Block', floor: 'Ground Floor', img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=500' },
    { id: 4, name: 'COE Office', block: 'Main Block', floor: '1st Floor', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500' },
    { id: 5, name: 'Seminar Hall', block: 'IT Block', floor: '2nd Floor', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500' },
    { id: 6, name: 'Department Office - CSE', block: 'IT Block', floor: '1st Floor', img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500' }
];

const grid = document.getElementById('pinGrid');

citLocations.forEach(loc => {
    const card = document.createElement('div');
    card.className = 'pin-card';
    card.onclick = () => openAR(loc);
    card.innerHTML = `
        <img src="${loc.img}" alt="${loc.name}">
        <div class="pin-card-info">
            <strong>${loc.name}</strong>
            <small>${loc.block} • ${loc.floor}</small>
        </div>
    `;
    grid.appendChild(card);
});

function openAR(loc) {
    document.getElementById('arOverlay').style.display = 'flex';
    document.getElementById('destinationTitle').innerText = loc.name;
    document.getElementById('viewImage').src = loc.img;
    document.getElementById('instruction').innerText = `Proceeding to ${loc.floor}`;
    
    document.getElementById('stepList').innerHTML = `
        <p>1. Enter <b>${loc.block}</b> via North Gate.</p>
        <p>2. Locate the <b>${loc.floor === 'Ground Floor' ? 'corridor' : 'stairs'}</b>.</p>
        <p>3. Destination <b>${loc.name}</b> is on your right.</p>
    `;
}

function closeAR() { document.getElementById('arOverlay').style.display = 'none'; }