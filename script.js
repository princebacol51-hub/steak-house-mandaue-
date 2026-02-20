// script.js

// Mobile menu toggle functionality
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Form validation functionality
const form = document.querySelector('form');
const submitButton = document.querySelector('input[type="submit"]');

submitButton.addEventListener('click', (event) => {
    let valid = true;

    // Example validation checks
    const nameInput = document.querySelector('input[name="name"]');
    if (nameInput.value.trim() === '') {
        valid = false;
        alert('Name is required.');
    }

    const emailInput = document.querySelector('input[name="email"]');
    if (emailInput.value.trim() === '') {
        valid = false;
        alert('Email is required.');
    } else if (!emailInput.value.includes('@')) {
        valid = false;
        alert('Please enter a valid email address.');
    }

    if (!valid) {
        event.preventDefault(); // Prevent form submission
    }
});