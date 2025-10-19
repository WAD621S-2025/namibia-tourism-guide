// Contact Form Validation and Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            // In a real application, you would send the form data to a server here
            // For this demo, we'll just show a success message
            showFormMessage('Thank you for your message! We will get back to you soon.', 'success');
            contactForm.reset();
        }
    });
    
    // Real-time validation
    const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
});

// Validate entire form
function validateForm() {
    const form = document.getElementById('contactForm');
    const requiredFields = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

// Validate individual field
function validateField(field) {
    const value = field.value.trim();
    const errorElement = document.getElementById(field.id + 'Error');
    
    // Clear previous error
    clearFieldError(field);
    
    // Check if field is empty
    if (!value) {
        showFieldError(field, 'This field is required');
        return false;
    }
    
    // Email validation
    if (field.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Please enter a valid email address');
            return false;
        }
    }
    
    // Name validation (minimum 2 characters)
    if (field.id === 'name' && value.length < 2) {
        showFieldError(field, 'Name must be at least 2 characters long');
        return false;
    }
    
    // Message validation (minimum 10 characters)
    if (field.id === 'message' && value.length < 10) {
        showFieldError(field, 'Message must be at least 10 characters long');
        return false;
    }
    
    return true;
}

// Show field error
function showFieldError(field, message) {
    const errorElement = document.getElementById(field.id + 'Error');
    errorElement.textContent = message;
    field.style.borderColor = '#e94560';
}

// Clear field error
function clearFieldError(field) {
    const errorElement = document.getElementById(field.id + 'Error');
    errorElement.textContent = '';
    field.style.borderColor = '';
}

// Show form message
function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = 'form-message ' + type;
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.textContent = '';
        formMessage.className = 'form-message';
    }, 5000);
}