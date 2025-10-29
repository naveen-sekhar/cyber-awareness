# 🚀 Quick Start Guide

## Open the Website Locally

### Method 1: Direct Open (Simple but limited)
1. Navigate to the project folder
2. Double-click `index.html`
3. Opens in your default browser

**Note**: Some features may not work due to CORS restrictions.

### Method 2: Python Server (Recommended)
```bash
# Open terminal in project folder
cd c:\Users\navee\OneDrive\Desktop\Temp\Cyber-awareness

# Start server
python -m http.server 8000

# Open browser to:
http://localhost:8000
```

### Method 3: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"
4. Browser opens automatically at `http://127.0.0.1:5500`

---

## 📂 Project Files

```
Cyber-awareness/
│
├── index.html                 # Main website file - OPEN THIS
│
├── js/
│   ├── particles.js          # Floating particle effects
│   ├── globe.js              # 3D rotating globe
│   ├── animations.js         # Scroll-based animations
│   ├── quiz.js               # Interactive quiz logic
│   └── main.js               # Additional features
│
├── README.md                  # Full documentation
├── DEPLOYMENT.md              # Deployment instructions
└── QUICKSTART.md             # This file
```

---

## ✨ Features Overview

### 1. **Hero Section**
- Animated 3D globe
- Floating particles
- Cyber attack statistics

### 2. **Reality of Cyber Threats**
- Visual threat cards
- Gradient background transition
- Scroll-triggered stats

### 3. **Know the Threats**
- 5 major threat types explained
- Sliding card animations
- Prevention tips

### 4. **Safety Checker**
- Links to HaveIBeenPwned
- Password strength checker
- Google Password Checkup

### 5. **Interactive Quiz**
- 10 cybersecurity questions
- Real-time scoring
- Achievement badges:
  - 🌱 Cyber Rookie (0-4)
  - 🛡️ Security Aware (5-7)
  - 🏆 Cyber Guardian (8-10)

### 6. **Real Case Studies**
- The Birthday Leak
- Free Wi-Fi Trap
- The Fake Job Offer

### 7. **Safety Tips & Pledge**
- 5 essential cybersecurity tips
- Take the pledge
- Download shareable badge

### 8. **Resources**
- CERT-In
- National Cybercrime Portal
- Helpline: 1930
- Security tools

---

## 🎮 How to Use

1. **Open the website** using one of the methods above
2. **Scroll down** to experience the animations
3. **Take the quiz** to test your knowledge
4. **Download your badge** after completing the quiz
5. **Share** your results with friends

---

## 🔧 Customization

### Change Colors
Edit `index.html`, find the `:root` section in `<style>`:
```css
:root {
    --bg-main: #fdf1e1;        /* Background */
    --text-primary: #0b2545;    /* Text */
    --accent-red: #d7263d;      /* Alerts */
    --accent-green: #22b07d;    /* Success */
    --accent-orange: #f4a261;   /* Highlights */
}
```

### Add Quiz Questions
Edit `js/quiz.js`, add to the `quizQuestions` array:
```javascript
{
    question: "Your question?",
    options: ["A", "B", "C", "D"],
    correct: 0,  // Index of correct answer
    explanation: "Why this is correct"
}
```

### Modify Particle Count
Edit `js/particles.js`:
```javascript
const particleCount = 30;  // Change this number
```

---

## 📱 Test Responsiveness

### In Browser
1. Press `F12` to open DevTools
2. Click device toolbar icon (or `Ctrl+Shift+M`)
3. Select different device sizes:
   - iPhone 12 Pro
   - iPad
   - Desktop

### Actual Devices
Open `http://YOUR-IP:8000` on mobile devices connected to same network.

Find your IP:
```bash
# Windows
ipconfig

# Look for "IPv4 Address"
# Example: 192.168.1.100
```

Then on mobile browser: `http://192.168.1.100:8000`

---

## 🚀 Deploy to Internet

### Fastest Way: GitHub Pages
1. Create GitHub account
2. Create new repository: `cyber-awareness`
3. Upload all files
4. Settings → Pages → Enable
5. Live in 2 minutes!

**Detailed steps**: See `DEPLOYMENT.md`

---

## 🆘 Troubleshooting

### Issue: Blank white page
**Solution**: Check browser console (F12). Likely a JavaScript error.

### Issue: 3D globe not showing
**Solution**: 
- Check internet connection (Three.js loads from CDN)
- Try different browser
- Check browser console for errors

### Issue: Animations not smooth
**Solution**: 
- Close other browser tabs
- Try Chrome (best performance)
- Reduce particle count

### Issue: Quiz not working
**Solution**: 
- Check browser console
- Make sure all JS files are loaded
- Try hard refresh (Ctrl+F5)

### Issue: Python server won't start
**Solutions**:
```bash
# Try different port
python -m http.server 3000

# Or check Python version
python --version

# Make sure Python 3 is installed
```

---

## 🎨 Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome ≥90 | ✅ Excellent |
| Firefox ≥88 | ✅ Excellent |
| Safari ≥14 | ✅ Good |
| Edge ≥90 | ✅ Excellent |
| Opera ≥76 | ✅ Good |
| IE 11 | ⚠️ Limited |

---

## 📊 Performance Tips

### For Better Performance:
1. **Use Chrome** for best 3D performance
2. **Close other tabs** to free memory
3. **Update browser** to latest version
4. **Disable extensions** if experiencing issues
5. **Use hardware acceleration** (browser settings)

---

## 💡 Pro Tips

### Testing
- Use `Ctrl+Shift+R` for hard refresh
- Open DevTools to check for errors
- Test on multiple browsers
- Test with slow internet (DevTools → Network → Slow 3G)

### Development
- Edit files in VS Code
- Use Live Server for auto-reload
- Check console.log outputs
- Use browser DevTools for debugging

### Sharing
- Take screenshots of key sections
- Record screen for demo video
- Share quiz results on social media
- Use hashtag #CyberAware2025

---

## 🎯 What's Next?

After getting the site running:

1. ✅ Test all features
2. ✅ Take the quiz yourself
3. ✅ Download the pledge badge
4. ✅ Share with friends and family
5. ✅ Deploy to GitHub Pages
6. ✅ Spread cyber awareness!

---

## 📞 Need Help?

- **Documentation**: Read `README.md`
- **Deployment**: Read `DEPLOYMENT.md`
- **Quiz Issues**: Check `js/quiz.js`
- **Animation Issues**: Check `js/animations.js`
- **3D Issues**: Check `js/globe.js`

---

## 🌟 Share Your Success

After deploying:
- Tweet your site with #CyberAware2025
- Post on LinkedIn
- Share in cybersecurity communities
- Help others stay safe online!

---

**You're all set! Enjoy the Cyber Awareness Experience! 🛡️**

**Stay Safe, Stay Cyber Aware! 🌐🔒**
