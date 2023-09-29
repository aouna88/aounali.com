// JavaScript
// JavaScript for ScrollReveal.js animations
document.addEventListener("DOMContentLoaded", function () {
    // Initialize ScrollReveal
    const sr = ScrollReveal({
        origin: 'top',
        distance: '20px',
        duration: 1000,
        reset: true,
    });

    // Reveal header content on scroll
    sr.reveal('.header-title', {});
    sr.reveal('.header-subtitle', { delay: 200 });

    // Reveal scroll-down arrow after delay
    sr.reveal('.scroll-down-arrow', { delay: 400 });
});

// JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");

    searchButton.addEventListener("click", function () {
        searchInput.focus();
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav ul li a');
    
    for (const link of links) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const href = this.getAttribute("href");
            const target = document.querySelector(href);
            const offsetTop = target.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        });
    }
    // JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navCollapse = document.querySelector(".nav-collapse");

    navToggle.addEventListener("click", function () {
        navCollapse.classList.toggle("active");
    });
});


    // "Back to Top" button
    const backToTopButton = document.getElementById("back-to-top");
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Show/hide "Back to Top" button
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 200) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });
});
/*new things here*/
// JavaScript for showing movie trailers
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            // Replace the following URL with the actual movie trailer URL
            const trailerURL = "https://www.youtube.com/embed/your-movie-trailer-id";
            
            // Create a modal to show the trailer
            const modal = document.createElement("div");
            modal.className = "modal";
            modal.innerHTML = `
                <div class="modal-content">
                    <iframe src="${trailerURL}" frameborder="0" allowfullscreen></iframe>
                    <button class="close-modal">&times;</button>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Add animation classes
            modal.classList.add("animate__animated", "animate__fadeIn");
            
            // Close the modal when the "Close" button is clicked
            const closeModal = modal.querySelector(".close-modal");
            closeModal.addEventListener("click", function () {
                modal.classList.remove("animate__fadeIn");
                modal.classList.add("animate__fadeOut");
                setTimeout(() => {
                    modal.remove();
                }, 500); // Remove modal after animation completes
            });
        });
    });
});
// JavaScript for header animations
document.addEventListener("DOMContentLoaded", function () {
    // Animate the header subtitle
    const headerSubtitle = document.querySelector(".header-subtitle");
    headerSubtitle.style.animationDelay = "1.5s";
    headerSubtitle.style.opacity = "1";
    
    // Add parallax effect to header background
    const header = document.querySelector("header");
    window.addEventListener("scroll", function () {
        const yOffset = window.pageYOffset;
        header.style.backgroundPositionY = yOffset * 0.5 + "px";
    });
});
/**new things 2? */

// JavaScript to handle the scrolling effect
window.onscroll = function() {
    var header = document.querySelector('.header');
    
    // Add 'sticky' class to the header when scrolled down
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
};
// JavaScript to handle the scrolling effect and mobile menu
window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Toggle mobile menu visibility
var mobileMenu = document.querySelector('.mobile-menu');
var mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

mobileMenu.addEventListener('click', function() {
    mobileMenuOverlay.style.display = 'flex';
});

mobileMenuOverlay.addEventListener('click', function() {
    mobileMenuOverlay.style.display = 'none';
});
// JavaScript to toggle the mobile menu
document.querySelector('.dropdown').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('active');
});




