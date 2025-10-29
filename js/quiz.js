// Cyber Safety Quiz
const quizQuestions = [
    {
        question: "You receive an unexpected email claiming to be from your bank, requesting account verification. What's the most secure action?",
        options: [
            "Click the provided link and enter your credentials",
            "Reply to the email with your information",
            "Contact your bank directly using their official number",
            "Forward it to colleagues for their opinion"
        ],
        correct: 2,
        explanation: "Always verify suspicious requests through official channels. Banks never ask for credentials via email."
    },
    {
        question: "Which combination creates the strongest password?",
        options: [
            "YourName2025!",
            "P@ssw0rd123",
            "Tr7$mK9#qL2nX5pW",
            "ILoveMyDog123"
        ],
        correct: 2,
        explanation: "Strong passwords use random combinations of uppercase, lowercase, numbers, and symbols without personal information."
    },
    {
        question: "You're traveling and need to access your email. What's the safest approach on public Wi-Fi?",
        options: [
            "Use any available network",
            "Connect through a VPN service",
            "Only access non-sensitive websites",
            "Use the strongest signal available"
        ],
        correct: 1,
        explanation: "VPNs encrypt your traffic, protecting data from interception on untrusted networks."
    },
    {
        question: "You receive an email from 'support@bankofamerica-security.com'. What indicates this is likely fraudulent?",
        options: [
            "It contains spelling errors",
            "The domain is slightly altered from the legitimate one",
            "It requests immediate action",
            "All of the above"
        ],
        correct: 3,
        explanation: "Phishing attempts often use domain spoofing, urgency tactics, and poor grammar to deceive recipients."
    },
    {
        question: "What is the primary benefit of two-factor authentication (2FA)?",
        options: [
            "It makes passwords unnecessary",
            "It requires attackers to compromise two separate factors",
            "It automatically creates stronger passwords",
            "It prevents all cyberattacks"
        ],
        correct: 1,
        explanation: "2FA adds an additional verification layer, significantly reducing unauthorized access even if passwords are compromised."
    },
    {
        question: "A USB drive labeled 'Confidential - Executive Salaries' is found in your office parking lot. What should you do?",
        options: [
            "Insert it into your work computer to find the owner",
            "Take it home to check on a personal device",
            "Report it to IT/security without connecting it",
            "Share it with HR to verify authenticity"
        ],
        correct: 2,
        explanation: "Unknown USB devices may contain malware. Never insert them into any system—report to security personnel."
    },
    {
        question: "How frequently should you update your operating system and applications?",
        options: [
            "Only when experiencing problems",
            "Once annually during maintenance",
            "As soon as security updates are available",
            "Updates aren't necessary on personal devices"
        ],
        correct: 2,
        explanation: "Security patches address known vulnerabilities. Prompt installation prevents exploitation by attackers."
    },
    {
        question: "Which practice best protects your privacy on social media?",
        options: [
            "Sharing vacation photos in real-time",
            "Accepting all connection requests to expand your network",
            "Limiting personal information and using privacy settings",
            "Using your real address for event invitations"
        ],
        correct: 2,
        explanation: "Minimize information exposure and leverage platform privacy controls to reduce attack surface."
    },
    {
        question: "What characterizes a sophisticated phishing attack?",
        options: [
            "Generic greetings like 'Dear Customer'",
            "Personalized information and convincing branding",
            "Obvious spelling and grammar errors",
            "Requests sent from unknown email addresses"
        ],
        correct: 1,
        explanation: "Advanced phishing (spear phishing) uses researched personal details and professional presentation to appear legitimate."
    },
    {
        question: "Your colleague sends you an unusual link via messaging app. What's the best response?",
        options: [
            "Click it immediately since you trust them",
            "Verify with them through an alternate communication method",
            "Forward it to others to check if it's safe",
            "Ignore it without informing anyone"
        ],
        correct: 1,
        explanation: "Compromised accounts can send malicious links. Always verify unexpected messages through separate channels."
    }
];

let currentQuestion = 0;
let score = 0;
let answers = [];

function initQuiz() {
    showQuestion();
}

function showQuestion() {
    const quizContent = document.getElementById('quiz-content');
    if (!quizContent) return;
    
    if (currentQuestion >= quizQuestions.length) {
        showResults();
        return;
    }
    
    const q = quizQuestions[currentQuestion];
    
    quizContent.innerHTML = `
        <div class="mb-6">
            <div class="flex justify-between items-center mb-4">
                <p class="text-sm font-semibold" style="color: var(--accent-green);">
                    Question ${currentQuestion + 1} of ${quizQuestions.length}
                </p>
                <div class="w-full max-w-xs ml-4 bg-gray-200 rounded-full h-2">
                    <div class="h-2 rounded-full" style="width: ${((currentQuestion + 1) / quizQuestions.length) * 100}%; background: var(--accent-green); transition: width 0.3s;"></div>
                </div>
            </div>
            <h3 class="text-xl font-semibold mb-6" style="line-height: 1.5;">${q.question}</h3>
        </div>
        
        <div class="space-y-3 mb-6">
            ${q.options.map((option, index) => `
                <div class="quiz-option" onclick="selectAnswer(${index})">
                    ${option}
                </div>
            `).join('')}
        </div>
        
        <div id="explanation" class="hidden p-4 rounded-lg mb-4" style="background: rgba(34, 176, 125, 0.08); border-left: 3px solid var(--accent-green);">
            <p class="text-sm font-medium" style="color: var(--text-primary);">${q.explanation}</p>
        </div>
        
        <button id="next-btn" class="btn-primary w-full hidden" onclick="nextQuestion()">
            ${currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'View Results'}
        </button>
    `;
}

function selectAnswer(selectedIndex) {
    const options = document.querySelectorAll('.quiz-option');
    const q = quizQuestions[currentQuestion];
    
    // Disable all options
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    // Mark selected
    options[selectedIndex].classList.add('selected');
    
    // Show correct/wrong
    if (selectedIndex === q.correct) {
        options[selectedIndex].classList.add('correct');
        score++;
        answers.push(true);
    } else {
        options[selectedIndex].classList.add('wrong');
        options[q.correct].classList.add('correct');
        answers.push(false);
    }
    
    // Show explanation and next button
    document.getElementById('explanation').classList.remove('hidden');
    document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
    currentQuestion++;
    showQuestion();
}

function showResults() {
    const quizContent = document.getElementById('quiz-content');
    const quizResult = document.getElementById('quiz-result');
    const badgeContainer = document.getElementById('badge-container');
    
    quizContent.classList.add('hidden');
    quizResult.classList.remove('hidden');
    
    let category, badge, message, color;
    const percentage = (score / quizQuestions.length) * 100;
    
    if (score <= 4) {
        category = 'Developing Awareness';
        badge = '📚';
        message = 'You\'re building your cybersecurity foundation. Review the materials and practice these concepts regularly.';
        color = 'var(--accent-orange)';
    } else if (score <= 7) {
        category = 'Security Conscious';
        badge = '🛡️';
        message = 'You demonstrate solid security awareness. Continue reinforcing these practices in your daily digital activities.';
        color = 'var(--accent-green)';
    } else {
        category = 'Security Expert';
        badge = '🏆';
        message = 'Excellent work! You have strong cybersecurity knowledge. Help others by sharing these best practices.';
        color = 'var(--accent-green)';
    }
    
    badgeContainer.innerHTML = `
        <div class="badge">
            <div class="text-7xl mb-4">${badge}</div>
            <h3 class="text-3xl font-bold mb-2">${category}</h3>
            <p class="text-xl mb-2">Score: ${score}/${quizQuestions.length} (${Math.round(percentage)}%)</p>
            <p class="text-base mb-6" style="opacity: 0.9;">${message}</p>
            <div class="flex gap-4 justify-center flex-wrap">
                <button onclick="restartQuiz()" class="btn-secondary">Retake Assessment</button>
                <button onclick="shareBadge()" class="btn-primary" style="background: white; color: var(--text-primary);">Share Result</button>
            </div>
        </div>
    `;
    
    // Animate badge
    gsap.from(badgeContainer, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)'
    });
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    answers = [];
    
    document.getElementById('quiz-content').classList.remove('hidden');
    document.getElementById('quiz-result').classList.add('hidden');
    
    showQuestion();
}

function shareBadge() {
    const shareText = `I scored ${score}/${quizQuestions.length} on the Cybersecurity Awareness Assessment. Test your knowledge and improve your digital security!`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Cybersecurity Assessment Results',
            text: shareText,
            url: window.location.href
        }).catch(err => console.log('Sharing cancelled'));
    } else {
        // Fallback - copy to clipboard
        navigator.clipboard.writeText(shareText + ' ' + window.location.href)
            .then(() => alert('Result copied to clipboard! Share it to help others improve their security awareness.'))
            .catch(err => console.log('Unable to copy'));
    }
}

// Initialize quiz when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initQuiz);
} else {
    initQuiz();
}
