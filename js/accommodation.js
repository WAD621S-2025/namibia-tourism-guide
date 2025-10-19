// Accommodation data and filtering functionality
const accommodationData = [
    {
        id: 1,
        name: "Hilton Windhoek",
        location: "windhoek",
        type: "hotel",
        price: "luxury",
        image: "images/hilton-windhoek.jpg",
        description: "Luxury hotel in the heart of Windhoek with modern amenities, swimming pool, and fine dining restaurants.",
        features: ["Swimming Pool", "Spa", "Restaurant", "WiFi"],
        priceDisplay: "$$$",
        bookingLinks: {
            booking: "https://www.booking.com/hotel/na/hilton-windhoek",
            website: "https://www.hilton.com"
        }
    },
    {
        id: 2,
        name: "Desert Quiver Camp",
        location: "sossusvlei",
        type: "camping",
        price: "midrange",
        image: "images/desert-quiver.jpg",
        description: "Self-catering camp near Sossusvlei with comfortable units and stunning desert views.",
        features: ["Self Catering", "Desert Views", "Swimming Pool", "BBQ Facilities"],
        priceDisplay: "$$",
        bookingLinks: {
            booking: "https://www.booking.com/hotel/na/desert-quiver-camp",
            website: "https://www.namibiareservations.com"
        }
    },
    {
        id: 3,
        name: "Okaukuejo Rest Camp",
        location: "etosha",
        type: "lodge",
        price: "midrange",
        image: "images/okaukuejo.jpg",
        description: "Famous for its floodlit waterhole where visitors can observe wildlife at night.",
        features: ["Waterhole Viewing", "Restaurant", "Swimming Pool", "Game Drives"],
        priceDisplay: "$$",
        bookingLinks: {
            booking: "https://www.booking.com/hotel/na/okaukuejo-rest-camp",
            website: "https://www.nwr.com.na"
        }
    },
    {
        id: 4,
        name: "Swakopmund Hotel",
        location: "swakopmund",
        type: "hotel",
        price: "luxury",
        image: "images/swakopmund-hotel.jpg",
        description: "Elegant hotel with German colonial architecture, located in the coastal town of Swakopmund.",
        features: ["Beach Access", "Spa", "Casino", "Fine Dining"],
        priceDisplay: "$$$",
        bookingLinks: {
            booking: "https://www.booking.com/hotel/na/swakopmund",
            website: "https://www.swakopmund-hotel.com"
        }
    },
    {
        id: 5,
        name: "Canyon Roadhouse",
        location: "fish-river",
        type: "guesthouse",
        price: "budget",
        image: "images/canyon-roadhouse.jpg",
        description: "Quirky and charming guesthouse near Fish River Canyon with vintage car decor and friendly atmosphere.",
        features: ["Restaurant", "Bar", "Unique Decor", "Tour Desk"],
        priceDisplay: "$",
        bookingLinks: {
            booking: "https://www.booking.com/hotel/na/canyon-roadhouse",
            website: "https://www.canyonroadhouse.com"
        }
    },
    {
        id: 6,
        name: "Wolwedans Dunes Lodge",
        location: "sossusvlei",
        type: "luxury",
        price: "luxury",
        image: "images/wolwedans.jpg",
        description: "Exclusive luxury lodge in the heart of the NamibRand Nature Reserve with breathtaking dune views.",
        features: ["Luxury Tents", "Fine Dining", "Game Drives", "Stargazing"],
        priceDisplay: "$$$",
        bookingLinks: {
            booking: "https://www.booking.com/hotel/na/wolwedans",
            website: "https://www.wolwedans.com"
        }
    }
];

// Initialize accommodations on page load
document.addEventListener('DOMContentLoaded', function() {
    displayAccommodations(accommodationData);
    setupAccommodationFilters();
});

// Display accommodations in the grid
function displayAccommodations(accommodations) {
    const grid = document.getElementById('accommodationGrid');
    
    if (accommodations.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <h3>No accommodations found</h3>
                <p>Try adjusting your filters to see more results.</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = accommodations.map(acc => `
        <div class="accommodation-card" data-location="${acc.location}" data-type="${acc.type}" data-price="${acc.price}">
            <div class="accommodation-image" style="background-image: url('${acc.image}')">
                <span class="accommodation-type">${acc.type.charAt(0).toUpperCase() + acc.type.slice(1)}</span>
                <span class="price-tag">${acc.priceDisplay}</span>
            </div>
            <div class="accommodation-content">
                <h3>${acc.name}</h3>
                <div class="accommodation-location">
                    <span>📍</span> ${getLocationName(acc.location)}
                </div>
                <p class="accommodation-description">${acc.description}</p>
                <div class="accommodation-features">
                    ${acc.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                </div>
                <div class="booking-links">
                    <a href="${acc.bookingLinks.booking}" target="_blank" class="booking-link">Book on Booking.com</a>
                    <a href="${acc.bookingLinks.website}" target="_blank" class="booking-link secondary">Official Website</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Get location display name
function getLocationName(locationCode) {
    const locations = {
        'windhoek': 'Windhoek',
        'swakopmund': 'Swakopmund',
        'etosha': 'Etosha Area',
        'sossusvlei': 'Sossusvlei',
        'fish-river': 'Fish River Canyon'
    };
    return locations[locationCode] || locationCode;
}

// Setup filter functionality
function setupAccommodationFilters() {
    const locationFilter = document.getElementById('locationFilter');
    const typeFilter = document.getElementById('typeFilter');
    const priceFilter = document.getElementById('priceFilter');
    const resetButton = document.getElementById('resetAccommodationFilters');
    
    function applyFilters() {
        const selectedLocation = locationFilter.value;
        const selectedType = typeFilter.value;
        const selectedPrice = priceFilter.value;
        
        const filteredAccommodations = accommodationData.filter(acc => {
            const locationMatch = selectedLocation === 'all' || acc.location === selectedLocation;
            const typeMatch = selectedType === 'all' || acc.type === selectedType;
            const priceMatch = selectedPrice === 'all' || acc.price === selectedPrice;
            return locationMatch && typeMatch && priceMatch;
        });
        
        displayAccommodations(filteredAccommodations);
    }
    
    locationFilter.addEventListener('change', applyFilters);
    typeFilter.addEventListener('change', applyFilters);
    priceFilter.addEventListener('change', applyFilters);
    
    resetButton.addEventListener('click', function() {
        locationFilter.value = 'all';
        typeFilter.value = 'all';
        priceFilter.value = 'all';
        applyFilters();
    });
}