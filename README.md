# 🛡️ Are You Cyber Safe? - Interactive Cybersecurity Awareness Website

An immersive, scroll-based 3D cybersecurity awareness experience built with Three.js, GSAP, and Tailwind CSS.

![Cyber Awareness](https://img.shields.io/badge/Cyber-Aware%202025-green)
![Built with Three.js](https://img.shields.io/badge/Three.js-3D-blue)
![GSAP Animation](https://img.shields.io/badge/GSAP-ScrollTrigger-orange)

## 🌟 Features

### 🎨 Visual Experience
- **3D Globe with Data Streams** - Animated globe representing the connected world
- **Scroll-Triggered Animations** - Smooth GSAP animations that engage users
- **Particle Systems** - Floating particles creating a digital atmosphere
- **3D Vault & Control Room** - Interactive 3D scenes throughout the site
- **Responsive Design** - Works beautifully on all devices

### 📚 Educational Content
1. **Hero Section** - Eye-catching statistics about cyber threats
2. **Reality of Cyber Threats** - Visual representation of common attacks
3. **Know the Threats** - 5 major cybersecurity threats explained
4. **Safety Checker** - Links to trusted password and breach checking tools
5. **Interactive Quiz** - 10-question quiz with scoring and badges
6. **Real Case Studies** - 3 real-world attack scenarios
7. **Safety Tips** - Essential cybersecurity practices
8. **Resources** - CERT-In, helplines, and security tools

### 🎮 Interactive Elements
- **Cyber Safety Quiz** with 10 questions
- **Badge System** - Earn badges based on quiz performance:
  - 🌱 Cyber Rookie (0-4 correct)
  - 🛡️ Security Aware (5-7 correct)
  - 🏆 Cyber Guardian (8-10 correct)
- **Downloadable Pledge Badge** - Share your commitment to cyber safety
- **Social Sharing** - Share quiz results

## 🎨 Design Specifications

### Color Palette
- **Background**: `#fdf1e1` (Light Beige)
- **Primary Text**: `#0b2545` (Deep Navy Blue)
- **Alert Red**: `#d7263d`
- **Cyber Green**: `#22b07d`
- **Highlight Orange**: `#f4a261`

### Typography
- **Headings**: Poppins (Bold)
- **Body**: Inter (Medium/Regular)
- **Tech Elements**: Orbitron (for cyber-tech vibe)

## 🚀 Getting Started

### Prerequisites
None! This is a static website that uses CDN-hosted libraries.

### Installation

1. **Clone or Download** this repository
2. **Open `index.html`** in your browser

That's it! No build process required.

### Deploying to GitHub Pages

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repository-name/`

## 📁 Project Structure

```
Cyber-awareness/
│
├── index.html              # Main HTML file
│
├── js/
│   ├── particles.js        # Particle system
│   ├── globe.js           # 3D Globe animation
│   ├── animations.js      # GSAP scroll animations
│   ├── quiz.js            # Quiz logic and scoring
│   └── main.js            # Main app logic
│
└── README.md              # This file
```

## 🛠️ Tech Stack

| Purpose | Technology |
|---------|-----------|
| 3D Graphics | Three.js |
| Animations | GSAP + ScrollTrigger |
| Styling | Tailwind CSS |
| Fonts | Google Fonts |
| Hosting | GitHub Pages / Vercel |

## 🎯 Key Sections

### 1. Hero Section
- 3D rotating globe with data streams
- Animated statistics about cyberattacks
- Floating particles background

### 2. Reality of Cyber Threats
- Gradient background transition
- Three threat cards (Phishing, Data Leak, Malware)
- Scroll-triggered statistics

### 3. Know the Threats
- 5 detailed threat cards with icons
- Sliding animations from left and right
- Prevention tips for each threat

### 4. Check If You're Safe
- 3D vault animation
- Links to trusted security checkers:
  - HaveIBeenPwned
  - Kaspersky Password Checker
  - Google Password Checkup

### 5. Cyber Safety Quiz
- 10 multiple-choice questions
- Real-time feedback
- Score calculation and badge awards
- Social sharing functionality

### 6. Real Attack Case Studies
- The Birthday Leak
- Free Wi-Fi Trap
- The Fake Job Offer
- Each with "What happened", "What went wrong", and "How to prevent"

### 7. Safety Tips & Pledge
- 5 essential cybersecurity tips
- Interactive pledge button
- Downloadable badge with canvas rendering
- Share functionality

### 8. Resources & Helplines
- CERT-In link
- National Cybercrime Reporting Portal
- Helpline: 1930
- Security tools recommendations

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `index.html`:
```css
:root {
    --bg-main: #fdf1e1;
    --text-primary: #0b2545;
    --accent-red: #d7263d;
    --accent-green: #22b07d;
    --accent-orange: #f4a261;
}
```

### Adding Quiz Questions
Edit the `quizQuestions` array in `js/quiz.js`:
```javascript
{
    question: "Your question here?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correct: 1, // Index of correct answer (0-3)
    explanation: "Explanation of the answer"
}
```

### Modifying 3D Elements
- Globe settings: `js/globe.js`
- Other 3D scenes: `js/main.js` (vault and control room functions)

## 📱 Responsive Design

The website is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## ⚡ Performance Optimizations

- Lightweight Three.js scenes
- CDN-hosted libraries for faster loading
- Optimized animations with GSAP
- Efficient scroll triggers
- No heavy images or videos

## 🔒 Security & Privacy

This website:
- ✅ Does NOT collect any user data
- ✅ Redirects to trusted external services for checks
- ✅ Uses HTTPS-only external links
- ✅ No tracking or analytics by default
- ✅ Client-side only (no backend required)

## 🌐 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ IE11 (limited support)

## 📝 License

This project is created for educational purposes as part of Cyber Awareness 2025 initiative.

Feel free to use, modify, and distribute for educational and non-commercial purposes.

## 🤝 Contributing

Contributions are welcome! Ideas for improvement:

1. Add more quiz questions
2. Create additional case studies
3. Improve 3D animations
4. Add more languages
5. Create a leaderboard system

## 📞 Resources

### India-Specific Resources
- **CERT-In**: https://www.cert-in.org.in/
- **National Cybercrime Portal**: https://cybercrime.gov.in/
- **Helpline**: 1930 (National Cyber Crime Helpline)

### Security Tools
- **HaveIBeenPwned**: https://haveibeenpwned.com/
- **Kaspersky Password Checker**: https://password.kaspersky.com/
- **Google Password Checkup**: https://passwords.google.com/checkup

## 💡 Tips for Deployment

### GitHub Pages
1. Push code to GitHub
2. Enable Pages in repository settings
3. Select main branch
4. Access at `yourusername.github.io/repo-name`

### Vercel
1. Import GitHub repository
2. Click Deploy
3. Instant deployment with custom domain support

### Netlify
1. Drag & drop folder to Netlify
2. Or connect GitHub repository
3. Automatic deployments on push

## 🎓 Educational Use

This website is perfect for:
- School/College cybersecurity workshops
- Corporate security awareness training
- Community cyber safety events
- Digital literacy programs
- National Cyber Security Awareness Month

## 📊 Analytics (Optional)

To add analytics, insert your tracking code before `</body>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<!-- Your tracking code -->
```

## 🙏 Credits

**Built with:**
- [Three.js](https://threejs.org/) - 3D graphics library
- [GSAP](https://greensock.com/gsap/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Google Fonts](https://fonts.google.com/) - Typography

**Made with ❤️ for Cyber Awareness 2025**

---

## 🚀 Quick Start Commands

```bash
# Clone repository
git clone https://github.com/yourusername/cyber-awareness.git

# Navigate to folder
cd cyber-awareness

# Open in browser (or use Live Server)
start index.html
```

## 📸 Screenshots

The website features:
- Animated 3D globe in hero section
- Scroll-based reveal animations
- Interactive quiz with badges
- Real-world case study panels
- Downloadable pledge badges

---

**Stay Safe, Stay Cyber Aware! 🛡️**

For questions or support, open an issue on GitHub.

**#CyberAware2025 🌐🔒**
