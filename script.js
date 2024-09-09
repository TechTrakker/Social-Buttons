 
const Mycheckboxes = document.querySelectorAll('input[type="checkbox"]');
Mycheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        Mycheckboxes.forEach(box => box.checked = false); // Uncheck all checkboxes
        this.checked = true; // Check the current one
    });
});
//Next Script
// Get all checkbox inputs
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Add event listener to each checkbox
checkboxes.forEach((checkbox) => {
checkbox.addEventListener('change', function() {
const allOptions = document.querySelectorAll('.social-option'); // Get all social-option divs

// Remove 'highlight' class from all divs
allOptions.forEach(option => option.classList.remove('highlight'));

if (this.checked) {
    const parentDiv = this.closest('.social-option'); // Get the parent div of the checkbox
    
    // Add 'highlight' class to the current selected div
    parentDiv.classList.add('highlight');
}
});
});
// Third Script
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navIcons = document.querySelector('.nav-icons');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navIcons.classList.toggle('active');
    });

    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop) {
            navbar.style.top = '-60px'; // Hide navbar
        } else {
            navbar.style.top = '0'; // Show navbar
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    });
});


 