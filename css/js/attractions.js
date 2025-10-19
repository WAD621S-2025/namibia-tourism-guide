// Attractions data and filtering functionality
const attractionsData = [
    {
        id: 1,
        name: "Sossusvlei Dunes",
        region: "south",
        category: "nature",
        location: "Namib-Naukluft Park",
        image: "images/sossusvlei.jpg",
        description: "The iconic red sand dunes of Sossusvlei are among the highest in the world, offering breathtaking sunrise views and incredible photo opportunities.",
        features: ["Sand Dunes", "Photography", "Sunrise Views"],
        badge: "Popular"
    },
    {
        id: 2,
        name: "Etosha National Park",
        region: "north",
        category: "wildlife",
        location: "Northern Namibia",
        image: "images/etosha-park.jpg",
        description: "One of Africa's greatest wildlife parks, home to hundreds of species including elephants, lions, rhinos, and the famous Etosha Pan.",
        features: ["Wildlife Safari", "Waterholes", "Bird Watching"],
        badge: "Must-See"
    },
    {
        id: 3,
        name: "Fish River Canyon",
        region: "south",
        category: "nature",
        location: "Southern Namibia",
        image: "images/fish-river-canyon.jpg",
        description: "The second largest canyon in the world, offering spectacular hiking trails and breathtaking geological formations.",
        features: ["Hiking", "Canyon Views", "Geology"],
        badge: "Adventure"
    },
    {
        id: 4,
        name: "Skeleton Coast",
        region: "coast",
        category: "adventure",
        location: "Atlantic Coast",
        image: "images/skeleton-coast.jpg",
        description: "A mysterious coastline known for its shipwrecks, fog, and unique desert-adapted wildlife including seals and desert elephants.",
        features: ["Shipwrecks", "Wildlife", "Desert Landscape"],
        badge: "Unique"
    },
    {
        id: 5,
        name: "Twyfelfontein Rock Art",
        region: "north",
        category: "culture",
        location: "Kunene Region",
        image: "images/twyfelfontein.jpg",
        description: "UNESCO World Heritage site featuring one of the largest concentrations of rock petroglyphs in Africa, dating back thousands of years.",
        features: ["Rock Art", "UNESCO", "Ancient History"],
        badge: "Cultural"
    },
    {
        id: 6,
        name: "Swakopmund",
        region: "coast",
        category: "adventure",
        location: "Central Coast",
        image: "images/swakopmund.jpg",
        description: "A coastal town with German colonial architecture offering adventure sports like sandboarding, skydiving, and quad biking.",
        features: ["Adventure Sports", "German Architecture", "Coastal Town"],
        badge: "Popular"
    },
    {
        id: 7,
        name: "Caprivi Strip",
        region: "north",
        category: "wildlife",
        location: "Northeastern Namibia",
        image: "images/caprivi.jpg",
        description: "A narrow strip of land with lush vegetation, rivers, and abundant wildlife, connecting Namibia to Zambia and Botswana.",
        features: ["River Safari", "Birding", "Wetlands"],
        badge: "Wildlife"
    },
    {
        id: 8,
        name: "Brandberg Mountain",
        region: "central",
        category: "culture",
        location: "Erongo Region",
        image: "images/brandberg.jpg",
        description: "Namibia's highest mountain featuring the famous White Lady rock painting and numerous other ancient San rock art sites.",
        features: ["Rock Art", "Hiking", "Ancient History"],
        badge: "Cultural"
    }
];

// Initialize attractions on page load
document.addEventListener('DOMContentLoaded', function() {
    displayAttractions(attractionsData);
    setupFilters();
});

// Display attractions in the grid
function displayAttractions(attractions) {
    const grid = document.getElementById('attractionsGrid');
    
    if (attractions.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <h3>No attractions found</h3>
                <p>Try adjusting your filters to see more results.</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = attractions.map(attraction => `
        <div class="attraction-card" data-region="${attraction.region}" data-category="${attraction.category}">
            <div class="attraction-image" style="background-image: url('${attraction.image}')">
                <span class="attraction-badge">${attraction.badge}</span>
            </div>
            <div class="attraction-content">
                <h3>${attraction.name}</h3>
                <div class="attraction-location">
                    <span>📍</span> ${attraction.location}
                </div>
                <p class="attraction-description">${attraction.description}</p>
                <div class="attraction-features">
                    ${attraction.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                </div>
                <a href="#" class="attraction-link">Learn More →</a>
            </div>
        </div>
    `).join('');
}

// Setup filter functionality
function setupFilters() {
    const regionFilter = document.getElementById('regionFilter');
    const categoryFilter = document.getElementById('categoryFilter');
    const resetButton = document.getElementById('resetFilters');
    
    function applyFilters() {
        const selectedRegion = regionFilter.value;
        const selectedCategory = categoryFilter.value;
        
        const filteredAttractions = attractionsData.filter(attraction => {
            const regionMatch = selectedRegion === 'all' || attraction.region === selectedRegion;
            const categoryMatch = selectedCategory === 'all' || attraction.category === selectedCategory;
            return regionMatch && categoryMatch;
        });
        
        displayAttractions(filteredAttractions);
    }
    
    regionFilter.addEventListener('change', applyFilters);
    categoryFilter.addEventListener('change', applyFilters);
    
    resetButton.addEventListener('click', function() {
        regionFilter.value = 'all';
        categoryFilter.value = 'all';
        applyFilters();
    });
}