/**
 * Form Handler Component
 * Manages contact form validation and submission
 */

(function() {
    'use strict';
    
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    const formGroups = {
        name: {
            input: document.getElementById('name'),
            error: document.getElementById('name-error'),
            validators: ['required', 'name']
        },
        email: {
            input: document.getElementById('email'),
            error: document.getElementById('email-error'),
            validators: ['required', 'email']
        },
        phone: {
            input: document.getElementById('phone'),
            error: document.getElementById('phone-error'),
            validators: ['required', 'phone']
        },
        message: {
            input: document.getElementById('message'),
            error: document.getElementById('message-error'),
            validators: ['required', 'minLength']
        }
    };
    
    /**
     * Validation messages
     */
    const messages = {
        required: 'Trường này là bắt buộc',
        email: 'Email không hợp lệ',
        phone: 'Số điện thoại không hợp lệ (VD: 0901234567)',
        name: 'Tên chỉ chứa chữ cái và khoảng trắng',
        minLength: 'Vui lòng nhập ít nhất 10 ký tự'
    };
    
    /**
     * Validate single field
     */
    function validateField(fieldName) {
        const field = formGroups[fieldName];
        if (!field) return true;
        
        const value = field.input.value;
        let isValid = true;
        let errorMessage = '';
        
        // Run all validators for this field
        for (let validator of field.validators) {
            if (validator === 'required' && !Validators.required(value)) {
                isValid = false;
                errorMessage = messages.required;
                break;
            }
            
            if (validator === 'email' && value && !Validators.email(value)) {
                isValid = false;
                errorMessage = messages.email;
                break;
            }
            
            if (validator === 'phone' && value && !Validators.phone(value)) {
                isValid = false;
                errorMessage = messages.phone;
                break;
            }
            
            if (validator === 'name' && value && !Validators.name(value)) {
                isValid = false;
                errorMessage = messages.name;
                break;
            }
            
            if (validator === 'minLength' && value && !Validators.minLength(value, 10)) {
                isValid = false;
                errorMessage = messages.minLength;
                break;
            }
        }
        
        // Update UI
        if (isValid) {
            field.input.classList.remove('error');
            field.error.classList.remove('show');
            field.error.textContent = '';
        } else {
            field.input.classList.add('error');
            field.error.classList.add('show');
            field.error.textContent = errorMessage;
        }
        
        return isValid;
    }
    
    /**
     * Validate entire form
     */
    function validateForm() {
        let isValid = true;
        
        for (let fieldName in formGroups) {
            if (!validateField(fieldName)) {
                isValid = false;
            }
        }
        
        return isValid;
    }
    
    /**
     * Handle form submission
     */
    async function handleSubmit(e) {
        e.preventDefault();
        
        // Validate form
        if (!validateForm()) {
            // Scroll to first error
            const firstError = form.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }
        
        // Show loading state
        const submitBtn = form.querySelector('.btn-submit');
        submitBtn.classList.add('loading');
        
        try {
            // Submit form (FormSubmit will handle the actual submission)
            const formData = new FormData(form);
            
            // For demonstration - in production, FormSubmit handles this
            // You can also use fetch to submit to your own backend
            
            // Simulate submission delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // If using FormSubmit, just submit the form normally
            form.submit();
            
            // Show success message (this won't show if form actually submits)
            showSuccessMessage();
            
        } catch (error) {
            console.error('Form submission error:', error);
            showErrorMessage('Có lỗi xảy ra. Vui lòng thử lại sau.');
        } finally {
            submitBtn.classList.remove('loading');
        }
    }
    
    /**
     * Show success message
     */
    function showSuccessMessage() {
        let successDiv = document.querySelector('.form-success');
        
        if (!successDiv) {
            successDiv = document.createElement('div');
            successDiv.className = 'form-success';
            form.appendChild(successDiv);
        }
        
        successDiv.textContent = '✓ Cảm ơn bạn! Chúng tôi sẽ liên hệ lại sớm nhất.';
        successDiv.classList.add('show');
        
        // Reset form
        form.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successDiv.classList.remove('show');
        }, 5000);
    }
    
    /**
     * Show error message
     */
    function showErrorMessage(message) {
        alert(message);
    }
    
    /**
     * Format phone number as user types
     */
    function formatPhoneNumber(input) {
        let value = input.value.replace(/\D/g, '');
        
        // Limit to 10 or 11 digits
        if (value.length > 11) {
            value = value.substr(0, 11);
        }
        
        // Format: 0XXX XXX XXX
        if (value.length > 3 && value.length <= 6) {
            value = value.replace(/(\d{4})(\d+)/, '$1 $2');
        } else if (value.length > 6) {
            value = value.replace(/(\d{4})(\d{3})(\d+)/, '$1 $2 $3');
        }
        
        input.value = value;
    }
    
    /**
     * Initialize form
     */
    function init() {
        // Real-time validation
        for (let fieldName in formGroups) {
            const field = formGroups[fieldName];
            
            // Validate on blur
            field.input.addEventListener('blur', () => {
                validateField(fieldName);
            });
            
            // Clear error on input
            field.input.addEventListener('input', () => {
                if (field.input.classList.contains('error')) {
                    field.input.classList.remove('error');
                    field.error.classList.remove('show');
                }
            });
        }
        
        // Phone number formatting
        const phoneInput = formGroups.phone.input;
        phoneInput.addEventListener('input', () => {
            formatPhoneNumber(phoneInput);
        });
        
        // Form submission
        form.addEventListener('submit', handleSubmit);
    }
    
    // Initialize
    init();
})();
