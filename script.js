// Initialize Supabase client
const supabase = window.supabase.createClient(
    SUPABASE_CONFIG.url,
    SUPABASE_CONFIG.anonKey
);

// Personalize invitation with name from URL parameter
function personalizeInvitation() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const greetingElement = document.getElementById('personalized-greeting');
    
    if (name && greetingElement) {
        // Decode the name in case it has special characters
        const decodedName = decodeURIComponent(name);
        greetingElement.textContent = `${decodedName}, `;
        greetingElement.style.fontWeight = '600';
        greetingElement.style.color = 'var(--accent-color)';
        greetingElement.style.display = 'inline';
        
        // Optional: Pre-fill the RSVP form with the name
        const nameInput = document.getElementById('name');
        if (nameInput && !nameInput.value) {
            nameInput.value = decodedName;
        }
    } else {
        // Keep neutral message - no personalization
        greetingElement.style.display = 'none';
    }
}

// Initialize personalization when page loads
personalizeInvitation();

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
document.getElementById('rsvpForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // ============================================
    // STEP 9a: Honeypot Bot Detection
    // ============================================
    const honeypot = document.getElementById('website').value;
    if (honeypot !== '') {
        // This is likely a bot - silently reject
        console.log('Bot detected via honeypot');
        // Show success message anyway to not tip off bots
        document.getElementById('rsvpForm').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
        return;
    }
    
    // Disable submit button to prevent double submission
    const submitBtn = this.querySelector('.submit-btn');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="btn-text">Enviando...</span><span class="btn-icon">⏳</span>';
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value || null,
        attendance: document.getElementById('attendance').value,
        companions: parseInt(document.getElementById('companions').value) || 0,
        companions_names: document.getElementById('companionsNames').value || null,
        message: document.getElementById('message').value || null
    };
    
    // ============================================
    // Submit to Supabase
    // ============================================
    try {
        const { data, error } = await supabase
            .from('graduation_rsvp')
            .insert([formData]);
        
        if (error) {
            throw error;
        }
        
        // Success! Show success message
        document.getElementById('rsvpForm').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
        
        // Scroll to success message
        document.getElementById('successMessage').scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
        });
        
    } catch (error) {
        console.error('Error submitting RSVP:', error);
        
        // Check for duplicate email error
        if (error.code === '23505') {
            alert('Parece que ya has confirmado tu asistencia con este correo electrónico. Si necesitas hacer cambios, por favor contáctanos por WhatsApp.');
        } else {
            alert('Hubo un error al enviar tu confirmación. Por favor, intenta de nuevo o contáctanos por WhatsApp.');
        }
        
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
    }
});

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
document.querySelectorAll('.invitation-message, .dress-code-section, .contact-section, .rsvp-section, .trivia-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Collapsible RSVP Section
const rsvpHeader = document.getElementById('rsvpHeader');
const rsvpContent = document.getElementById('rsvpContent');

rsvpHeader.addEventListener('click', function() {
    this.classList.toggle('active');
    rsvpContent.classList.toggle('collapsed');
});

// Flip Card Functionality
const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
    let flipTimer = null;
    
    // Handle both click (desktop) and touch (mobile) events
    const toggleFlip = function(e) {
        // Prevent default touch behavior
        if (e.type === 'touchstart') {
            e.preventDefault();
        }
        
        // Clear any existing timer
        if (flipTimer) {
            clearTimeout(flipTimer);
            flipTimer = null;
        }
        
        // Toggle the flip
        const isFlipped = this.classList.contains('flipped');
        
        if (!isFlipped) {
            // Flipping to answer side
            this.classList.add('flipped');
            
            // Set timer to flip back after 3 seconds
            flipTimer = setTimeout(() => {
                this.classList.remove('flipped');
                flipTimer = null;
            }, 3000);
        } else {
            // Manually flipping back to question side
            this.classList.remove('flipped');
        }
    };
    
    card.addEventListener('click', toggleFlip);
    card.addEventListener('touchstart', toggleFlip);
});
