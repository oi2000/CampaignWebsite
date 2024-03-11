document.addEventListener('DOMContentLoaded', function () {
    const testimonialsData = [
        { name: 'John Doe', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: 'avatar1.jpg' },
        { name: 'Jane Doe', text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'avatar2.jpg' },
        // Add more testimonials as needed
    ];

    const testimonialsContainer = document.getElementById('testimonials');
    const loadMoreButton = document.getElementById('loadMore');

    let displayedTestimonials = 0;

    function showTestimonials() {
        const testimonialsToShow = 2; // Adjust the number of testimonials to display initially

        for (let i = displayedTestimonials; i < displayedTestimonials + testimonialsToShow; i++) {
            if (testimonialsData[i]) {
                const testimonialElement = createTestimonialElement(testimonialsData[i]);
                animateTestimonial(testimonialElement);
                testimonialsContainer.appendChild(testimonialElement);
            }
        }

        displayedTestimonials += testimonialsToShow;

        // Hide "Load More" button if all testimonials are displayed
        if (displayedTestimonials >= testimonialsData.length) {
            loadMoreButton.style.display = 'none';
        }
    }

    function createTestimonialElement(testimonial) {
        const testimonialElement = document.createElement('div');
        testimonialElement.classList.add('testimonial');

        const imageElement = document.createElement('img');
        imageElement.src = testimonial.image;
        imageElement.alt = testimonial.name;

        const nameElement = document.createElement('p');
        nameElement.textContent = testimonial.name;

        const textElement = document.createElement('p');
        textElement.textContent = testimonial.text;

        testimonialElement.appendChild(imageElement);
        testimonialElement.appendChild(nameElement);
        testimonialElement.appendChild(textElement);

        return testimonialElement;
    }

    function animateTestimonial(element) {
        anime({
            targets: element,
            opacity: [0, 1],
            translateY: [20, 0],
            easing: 'easeOutQuad',
            duration: 800,
        });
    }

    // Initial load
    showTestimonials();

    // Load More button click event
    loadMoreButton.addEventListener('click', function () {
        showTestimonials();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // ... (previous code remains unchanged)

    // Smooth scrolling for anchor links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Add code to handle form submission (e.g., send data to a server)
        alert('Form submitted!'); // Placeholder alert, replace with actual submission code
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // This is a placeholder script.
    // You can add your custom JavaScript code here as needed.

    console.log('Script loaded and DOM content loaded.');
    
    // Example: Adding a click event listener to the navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            console.log(`Clicked on: ${link.innerText}`);
            // Add your navigation logic here
        });
    });
});
