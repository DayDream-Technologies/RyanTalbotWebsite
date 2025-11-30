// Competition locations data
const competitions = [
    {
        name: "Big Ten Championships",
        location: "University of Minnesota T&F Stadium, Minneapolis, MN",
        lat: 44.9745,
        lng: -93.2294,
        score: "8064 Decathlon",
        color: "#d32f2f"
    },
    {
        name: "Team U.S.A. Olympic Trials",
        location: "Hayward Field, Eugene, OR",
        lat: 44.1245,
        lng: -123.0954,
        score: "7872 Decathlon",
        color: "#388e3c"
    },
    {
        name: "Big Ten Conference Outdoor Track & Field Championships",
        location: "Billy Hayes T&F Complex, Bloomington, IN",
        lat: 39.1670,
        lng: -86.5314,
        score: "7786 Decathlon",
        color: "#1976d2"
    },
    {
        name: "Pan-American Games",
        location: "Santiago de Chile, Chile",
        lat: -33.4489,
        lng: -70.6693,
        score: "7742 Decathlon",
        color: "#f57c00"
    },
    {
        name: "Jim Click Shootout & Multis",
        location: "Univ. of Arizona Roy P. Drachman Stadium, Tucson, AZ",
        lat: 32.2313,
        lng: -110.9554,
        score: "7677 Decathlon",
        color: "#c2185b"
    },
    {
        name: "Thorpe Cup",
        location: "Wetzlar, Germany",
        lat: 50.5607,
        lng: 8.0699,
        score: "Team USA Winner",
        color: "#1976d2"
    },
];

// Initialize map when the Events subpage is shown
function initializeCompetitionsMap() {
    // Check if map container exists
    const mapContainer = document.getElementById('competitionsMap');
    if (!mapContainer) return;
    
    // Check if map already exists (prevent reinitialization)
    if (window.competitionsMapInstance) {
        window.competitionsMapInstance.invalidateSize();
        return;
    }
    
    // Create map centered between continental US and South America
    const map = L.map('competitionsMap').setView([-5, -70], 2.25);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);
    
    // Add markers for each competition
    competitions.forEach((competition, index) => {
        // Create custom icon with rank number
        const rankIcon = L.divIcon({
            className: 'competition-marker',
            html: `<div style="background-color: ${competition.color}; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 18px; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">${index + 1}</div>`,
            iconSize: [40, 40],
            iconAnchor: [20, 20],
            popupAnchor: [0, -20]
        });
        
        // Add marker with popup
        const marker = L.marker([competition.lat, competition.lng], { icon: rankIcon })
            .bindPopup(`
                <div style="font-weight: bold; color: #006400; margin-bottom: 8px;">${competition.name}</div>
                <div style="margin-bottom: 5px;"><strong>Location:</strong> ${competition.location}</div>
                <div style="color: ${competition.color}; font-weight: bold;">${competition.score}</div>
            `)
            .addTo(map);
    });
    
    // Store map reference to prevent re-initialization
    window.competitionsMapInstance = map;
}

// Initialize map when page loads and subpage is shown
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're already on the Events page
    const eventsPage = document.getElementById('Events');
    if (eventsPage && eventsPage.classList.contains('active')) {
        setTimeout(initializeCompetitionsMap, 100);
    }
});

// Hook into the showSubpage function to initialize map when Events is shown
const originalShowSubpage = window.showSubpage;
window.showSubpage = function(pageName) {
    originalShowSubpage(pageName);
    if (pageName === 'Events') {
        setTimeout(initializeCompetitionsMap, 100);
    }
};

