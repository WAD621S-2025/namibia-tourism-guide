// Main JavaScript file for Namibia Tourism Guide

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize any components that need initialization
    initializeMap();
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Initialize Interactive Map
function initializeMap() {
    // This is a placeholder for map integration
    // In a real implementation, you would use Leaflet, Google Maps, or Mapbox
    const mapContainer = document.getElementById('interactive-map');
    
    if (mapContainer) {
        // For demo purposes, we'll create a simple placeholder
        // In a real project, you would initialize your map library here
        mapContainer.innerHTML = `
            <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background-color:#16213e;">
                <div style="text-align:center;">
                    <h3 style="color:#e94560; margin-bottom:1rem;">Namibia Interactive Map</h3>
                    <p style="color:#b8b8b8;">Map integration would show key tourist destinations</p>
                    <p style="color:#b8b8b8; margin-top:1rem;">In a full implementation, this would use Leaflet or Google Maps API</p>
                </div>
            </div>
        `;
    }
}

// Form validation for contact form
function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#e94560';
        } else {
            input.style.borderColor = '';
        }
    });
    
    return isValid;
}

// Image lazy loading
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}