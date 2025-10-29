# 🌸 Event Invitation Landing Page

A modern, responsive event invitation landing page with RSVP functionality. Built with vanilla HTML, CSS, and JavaScript—no frameworks required. Optimized for GitHub Pages deployment.

Perfect for graduation ceremonies, weddings, birthday parties, or any special event.

## ✨ Features

- **Zero Dependencies:** Pure HTML, CSS, and JavaScript
- **Fully Responsive:** Mobile-first design with smooth animations
- **Modern UI/UX:** Floral theme with gradient backgrounds and SVG decorations
- **RSVP Form:** Interactive form with dynamic field visibility
- **Easy Integration:** Ready for Formspree, EmailJS, or Google Forms
- **GitHub Pages Ready:** Deploy in minutes with static hosting
- **Customizable:** CSS variables for quick theme changes
- **Accessibility:** Semantic HTML with proper form labels
- **Performance:** Lightweight (~15KB total) with smooth 60fps animations

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Fonts:** Google Fonts (Playfair Display, Montserrat)
- **Deployment:** GitHub Pages
- **Form Handling:** Configurable (Formspree/EmailJS/Google Forms)

## 📂 Project Structure

```
.
├── index.html      # Main HTML structure
├── styles.css      # All styles with CSS custom properties
├── script.js       # Form handling and interactions
└── README.md       # Documentation
```

## 🚀 Quick Start

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Run a local server:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (if you have npx)
   npx http-server
   ```

3. **Open in browser:**
   Navigate to `http://localhost:8000`

### Deploy to GitHub Pages

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository **Settings** → **Pages**
   - Source: Select `main` branch
   - Click **Save**
   - Your site will be live at: `https://username.github.io/repo-name/`

## 📧 Form Integration

The RSVP form is ready to connect with your preferred backend service. Choose one:

### Option 1: Formspree (Recommended)

**Pros:** Free tier available, no backend needed, spam protection

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form and copy the Form ID
3. In `script.js`, uncomment the Formspree section (line ~50):
   ```javascript
   fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(data)
   })
   ```
4. Replace `YOUR_FORM_ID` with your actual ID

### Option 2: EmailJS

**Pros:** Direct email delivery, customizable templates

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Configure email service and create template
3. Uncomment EmailJS section in `script.js` (~65)
4. Add your Service ID, Template ID, and Public Key

### Option 3: Google Forms

**Pros:** Simplest setup, automatic spreadsheet

- Redirect form submission to a Google Form URL
- Less integrated but zero configuration

### Option 4: Custom Backend

Modify the `sendRSVP()` function to POST to your API endpoint:

```javascript
fetch('https://your-api.com/rsvp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
})
```

## 🎨 Customization

### Theme Colors

Edit CSS custom properties in `styles.css`:

```css
:root {
    --primary-color: #d4a5a5;      /* Primary brand color */
    --secondary-color: #f5e6e8;    /* Secondary/background */
    --accent-color: #9b6b6b;       /* Accent for headings */
    --text-dark: #4a4a4a;          /* Main text */
    --text-light: #6b6b6b;         /* Secondary text */
}
```

### Content

- **Event Details:** Edit `.event-details` section in `index.html` (lines 38-48)
- **Invitation Message:** Modify `.invitation-message` section (lines 56-63)
- **Form Fields:** Customize form inputs in the `.rsvp-form` section (lines 71-110)

### Typography

Change fonts by replacing Google Fonts import in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

Update font families in `styles.css`:

```css
.ceremony-title { font-family: 'Your Serif Font', serif; }
body { font-family: 'Your Sans Font', sans-serif; }
```

### Animations

Adjust animation timing in `styles.css`:

```css
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}
```

## 📱 Responsive Design

Breakpoints:
- **Desktop:** > 768px (full layout)
- **Tablet:** 480px - 768px (adjusted spacing)
- **Mobile:** < 480px (stacked layout)

## 🔧 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari (last 2 versions)
- Chrome Android (last 2 versions)

## 📊 Performance

- **Page Weight:** ~15KB (HTML + CSS + JS)
- **External Fonts:** ~20KB (Google Fonts)
- **Load Time:** < 1s on 3G
- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices)

## 🤝 Contributing

Feel free to fork this project and adapt it for your own events! Potential improvements:

- [ ] Add calendar export (.ics file generation)
- [ ] Implement i18n for multi-language support
- [ ] Add map integration (Google Maps embed)
- [ ] Create countdown timer component
- [ ] Add image gallery section
- [ ] Implement dark mode toggle

## 📄 License

MIT License - feel free to use this for personal or commercial projects.

## 🙏 Acknowledgments

Built with ❤️ to make event planning easier and more beautiful.
