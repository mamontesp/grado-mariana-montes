// Handle attendance selection
document.getElementById('attendance').addEventListener('change', function() {
    const companionsGroup = document.getElementById('companions-group');
    const companionsNamesGroup = document.getElementById('companions-names-group');
    
    if (this.value === 'yes') {
        companionsGroup.style.display = 'block';
    } else {
        companionsGroup.style.display = 'none';
        companionsNamesGroup.style.display = 'none';
        document.getElementById('companions').value = '0';
        document.getElementById('companionsNames').value = '';
    }
});

// Handle companions number change
document.getElementById('companions').addEventListener('input', function() {
    const companionsNamesGroup = document.getElementById('companions-names-group');
    
    if (parseInt(this.value) > 0) {
        companionsNamesGroup.style.display = 'block';
    } else {
        companionsNamesGroup.style.display = 'none';
        document.getElementById('companionsNames').value = '';
    }
});

// Handle form submission
document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        attendance: document.getElementById('attendance').value,
        companions: document.getElementById('companions').value,
        companionsNames: document.getElementById('companionsNames').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toISOString()
    };
    
    // Here you can integrate with your preferred backend service
    // For example: Formspree, Google Forms, EmailJS, etc.
    
    // For now, we'll show the success message and log the data
    console.log('RSVP Data:', formData);
    
    // Show success message
    document.getElementById('rsvpForm').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
    
    // Scroll to success message
    document.getElementById('successMessage').scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
    });
    
    // Optional: Send to your email or backend service
    sendRSVP(formData);
});

// Function to send RSVP - You can customize this to use your preferred service
function sendRSVP(data) {
    // Example using Formspree (you'll need to sign up and get your form ID)
    // Uncomment and replace 'YOUR_FORM_ID' with your actual Formspree form ID
    /*
    fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    */
    
    // Example using EmailJS (you'll need to sign up and get your credentials)
    // Uncomment and replace with your EmailJS credentials
    /*
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
    */
    
    // For demonstration, we'll just log the data
    // In production, replace this with actual email/form submission
    console.log('RSVP submitted:', data);
}

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll (optional enhancement)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('.invitation-message, .rsvp-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

