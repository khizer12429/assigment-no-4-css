// script.js

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');  // Hamburger icon
    const navbar = document.getElementById('navbar');        // Navbar menu

    // Add click event listener to hamburger icon
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');  // Toggle the 'active' class to show/hide the navbar
    });
});
