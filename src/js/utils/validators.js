/**
 * Form Validation Utilities
 * Provides validation functions for form inputs
 */

const Validators = {
    /**
     * Validate email format
     */
    email: (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    },
    
    /**
     * Validate Vietnamese phone number
     */
    phone: (value) => {
        // Remove all non-digit characters
        const cleaned = value.replace(/\D/g, '');
        
        // Vietnamese phone numbers: 10 digits starting with 0
        // or 11 digits starting with 84
        const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$|^(84[3|5|7|8|9])+([0-9]{8})$/;
        return phoneRegex.test(cleaned);
    },
    
    /**
     * Validate required field
     */
    required: (value) => {
        return value.trim().length > 0;
    },
    
    /**
     * Validate minimum length
     */
    minLength: (value, min) => {
        return value.trim().length >= min;
    },
    
    /**
     * Validate maximum length
     */
    maxLength: (value, max) => {
        return value.trim().length <= max;
    },
    
    /**
     * Validate name (letters, spaces, Vietnamese characters)
     */
    name: (value) => {
        const nameRegex = /^[a-zA-ZÀ-ỹ\s]+$/;
        return nameRegex.test(value) && value.trim().length >= 2;
    },
    
    /**
     * Sanitize input to prevent XSS
     */
    sanitize: (value) => {
        const div = document.createElement('div');
        div.textContent = value;
        return div.innerHTML;
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Validators;
}
