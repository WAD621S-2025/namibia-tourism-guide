// Language switching functionality

// Language data (in a real project, this would be in separate JSON files)
const translations = {
    en: {
        "home": "Home",
        "attractions": "Attractions",
        "travel-info": "Travel Info",
        "accommodation": "Accommodation",
        "about": "About Namibia",
        "contact": "Contact",
        "discover-namibia": "Discover Namibia",
        "experience-text": "Experience the breathtaking landscapes and rich culture of Africa's gem",
        "explore-attractions": "Explore Attractions",
        "namibia-highlights": "Namibia Highlights",
        "namib-desert": "Namib Desert",
        "namib-desert-desc": "Home to the world's oldest desert and highest sand dunes",
        "etosha": "Etosha National Park",
        "etosha-desc": "Premier wildlife destination with diverse animal species",
        "skeleton-coast": "Skeleton Coast",
        "skeleton-coast-desc": "Mysterious coastline with shipwrecks and unique ecosystems",
        "explore-namibia": "Explore Namibia",
        "footer-text": "Your comprehensive guide to exploring Namibia's wonders",
        "quick-links": "Quick Links",
        "connect-with-us": "Connect With Us"
    },
    de: {
        "home": "Startseite",
        "attractions": "Sehenswürdigkeiten",
        "travel-info": "Reiseinformationen",
        "accommodation": "Unterkünfte",
        "about": "Über Namibia",
        "contact": "Kontakt",
        "discover-namibia": "Entdecken Sie Namibia",
        "experience-text": "Erleben Sie die atemberaubenden Landschaften und die reiche Kultur des Juwels Afrikas",
        "explore-attractions": "Sehenswürdigkeiten erkunden",
        "namibia-highlights": "Namibia-Highlights",
        "namib-desert": "Namib-Wüste",
        "namib-desert-desc": "Heimat der ältesten Wüste der Welt und der höchsten Sanddünen",
        "etosha": "Etosha-Nationalpark",
        "etosha-desc": "Premiere-Wildtierdestination mit vielfältigen Tierarten",
        "skeleton-coast": "Skelettküste",
        "skeleton-coast-desc": "Geheimnisvolle Küste mit Schiffswracks und einzigartigen Ökosystemen",
        "explore-namibia": "Namibia erkunden",
        "footer-text": "Ihr umfassender Leitfaden zur Erkundung der Wunder Namibias",
        "quick-links": "Schnelllinks",
        "connect-with-us": "Mit uns verbinden"
    },
    fr: {
        "home": "Accueil",
        "attractions": "Attractions",
        "travel-info": "Infos Voyage",
        "accommodation": "Hébergement",
        "about": "À propos de la Namibie",
        "contact": "Contact",
        "discover-namibia": "Découvrez la Namibie",
        "experience-text": "Découvrez les paysages à couper le souffle et la riche culture de ce joyau de l'Afrique",
        "explore-attractions": "Explorer les attractions",
        "namibia-highlights": "Points forts de la Namibie",
        "namib-desert": "Désert du Namib",
        "namib-desert-desc": "Abrite le plus ancien désert du monde et les plus hautes dunes de sable",
        "etosha": "Parc national d'Etosha",
        "etosha-desc": "Destination faunique de premier plan avec des espèces animales diversifiées",
        "skeleton-coast": "Côte des Squelettes",
        "skeleton-coast-desc": "Côte mystérieuse avec des épaves et des écosystèmes uniques",
        "explore-namibia": "Explorer la Namibie",
        "footer-text": "Votre guide complet pour explorer les merveilles de la Namibie",
        "quick-links": "Liens rapides",
        "connect-with-us": "Connectez-vous avec nous"
    }
};

// Set the initial language
let currentLanguage = 'en';

// Function to change language
function changeLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update the language selector
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = lang;
    }
    
    // Save preference to localStorage
    localStorage.setItem('preferred-language', lang);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved language preference or use browser language
    const savedLanguage = localStorage.getItem('preferred-language');
    const browserLanguage = navigator.language.split('-')[0];
    
    if (savedLanguage && translations[savedLanguage]) {
        changeLanguage(savedLanguage);
    } else if (translations[browserLanguage]) {
        changeLanguage(browserLanguage);
    }
    
    // Add event listener to language selector
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }
});