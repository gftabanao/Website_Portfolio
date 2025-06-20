document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});
// --- 1. DOM Content Loaded Event Listener ---
// Ensures the script runs only after the entire HTML document is loaded
// This prevents errors if you try to select elements that don't exist yet.
document.addEventListener('DOMContentLoaded', () => {

    console.log('Portfolio script loaded and DOM ready!');

    // --- 2. Smooth Scrolling for Navigation Links ---
    // If you have anchor links (e.g., <a href="#about">About</a>) in your navigation
    const navLinks = document.querySelectorAll('nav a[href^="#"]'); // Selects all 'a' tags in 'nav' with href starting with '#'

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default jump behavior

            const targetId = this.getAttribute('href'); // Get the ID from the href (e.g., "#about")
            const targetElement = document.querySelector(targetId); // Select the target element

            if (targetElement) {
                // Scroll smoothly to the target element
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });

                // Optional: Close a mobile navigation menu if it's open
                const mobileNav = document.getElementById('mobile-nav'); // Assuming you have a mobile nav element
                const navToggle = document.getElementById('nav-toggle'); // Assuming you have a hamburger icon toggle
                if (mobileNav && mobileNav.classList.contains('active')) {
                    mobileNav.classList.remove('active');
                    if (navToggle) navToggle.classList.remove('active'); // Optional: update toggle icon state
                }
            }
        });
    });


    // --- 3. Mobile Navigation Toggle (Hamburger Menu) ---
    // If you have a responsive design with a collapsible menu
    const navToggle = document.getElementById('nav-toggle'); // Your hamburger icon/button
    const mobileNav = document.getElementById('mobile-nav'); // Your mobile menu container

    if (navToggle && mobileNav) {
        navToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('active'); // Toggle a class to show/hide the menu
            navToggle.classList.toggle('active'); // Optional: Toggle a class for the hamburger icon animation
        });
    }

    // --- 4. Project Filtering (if you have categories like "2D", "3D", "Motion Graphics") ---
    const filterButtons = document.querySelectorAll('.filter-btn'); // Buttons for filtering
    const projectItems = document.querySelectorAll('.project-item'); // Individual project elements

    if (filterButtons.length > 0 && projectItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove 'active' class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add 'active' class to the clicked button
                this.classList.add('active');

                const filterValue = this.dataset.filter; // Get the filter value from data-filter attribute (e.g., data-filter="2d-animation")

                projectItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block'; // Show the project
                    } else {
                        item.style.display = 'none'; // Hide the project
                    }
                });
            });
        });
    }


    // --- 5. Simple Lightbox/Modal for Project Details (Optional) ---
    // Clicking a project image/card opens a larger view
    const projectTriggers = document.querySelectorAll('.project-item img, .project-item .details-btn'); // Or whatever triggers the modal
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content'); // Where project details go
    const closeBtn = document.querySelector('.close-button'); // Close button for the modal

    if (modal && modalContent && closeBtn && projectTriggers.length > 0) {
        projectTriggers.forEach(trigger => {
            trigger.addEventListener('click', function() {
                // Example: Populate modal with data from the clicked project
                const projectId = this.closest('.project-item').dataset.id; // Assuming project-item has a data-id
                const projectName = this.closest('.project-item').querySelector('h3').textContent;
                const projectDescription = this.closest('.project-item').querySelector('.description').textContent;
                const projectImageSrc = this.closest('.project-item').querySelector('img').src;

                modalContent.innerHTML = `
                    <h2><span class="math-inline">\{projectName\}</h2\>
<img src\="</span>{projectImageSrc}" alt="<span class="math-inline">\{projectName\}" style\="max\-width\: 100%; height\: auto;"\>
<p\></span>{projectDescription}</p>
                    <a href="#" target="_blank">View Live Project (Optional)</a>
                `; // Customize this HTML structure as needed

                modal.style.display = 'block'; // Show the modal
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none'; // Hide the modal
        });

        // Close modal when clicking outside of it
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }


    // --- 6. Form Submission (for Contact Form) ---

