// Get ID Now functionality
function getIDNow() {
    document.getElementById('getIdModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('getIdModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function closeSuccessMessage() {
    document.getElementById('successMessage').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Form submission
document.getElementById('getIdForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        whatsapp: document.getElementById('whatsapp').value
    };
    
    // Log form data (in real implementation, this would be sent to a server)
    console.log('Form submitted:', formData);
    
    // Close modal and show success message
    closeModal();
    
    // Clear form
    this.reset();
    
    // Show success message
    setTimeout(() => {
        document.getElementById('successMessage').style.display = 'block';
    }, 300);
    
    // In a real implementation, you would send this data to your server
    // For example:
    // fetch('/api/submit-id-request', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData)
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log('Success:', data);
    // })
    // .catch((error) => {
    //     console.error('Error:', error);
    // });
});

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('getIdModal');
    const successMessage = document.getElementById('successMessage');
    
    if (event.target == modal) {
        closeModal();
    }
    if (event.target == successMessage) {
        closeSuccessMessage();
    }
}

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Language selector functionality
const languageSelect = document.getElementById('languageSelect');

const translations = {
    en: {
        home: 'Home',
        about: 'About Us',
        offers: 'Offers',
        contact: 'Contact',
        heroTitle: 'SAIEXCH – Trusted Platform of India',
        heroDesc1: 'Join thousands of users on SAIEXCH – your ultimate place to play slot games, make cricket online predictions, and win big in India.',
        heroDesc2: 'Experience fast and secure gameplay with easy SAIEXCH login access. Get your www.saiexch.in ID and start playing today.',
        aboutTitle: 'About SAIEXCH',
        aboutText: 'SAIEXCH is a leading name in online gaming, providing seamless access to cricket predictions, slot games, and exciting color prediction games.',
        gamesTitle: 'Casino Games on SAIEXCH',
        bonusesTitle: 'Bonuses and Rewards',
        paymentTitle: 'Payment Methods',
        contactTitle: 'Contact SAIEXCH – We are available 24/7',
        contactText1: 'Have questions, need help, or want to share feedback? The SAIEXCH support team is always ready to assist — with login issues, deposits, withdrawals, game access, and more.',
        contactText2: 'Contact us anytime — we\'re just a message away and committed to providing the best gaming experience.',
        disclaimerTitle: 'Disclaimer',
        disclaimer1: 'This website is for 18+ users only. If you are from Telangana, Odisha, Assam, Sikkim, or Nagaland, please exit the site.',
        disclaimer2: 'Beware of fraud — we contact only through WhatsApp.',
        disclaimer3: 'We only promote fantasy sports. No real money transactions.'
    },
    hi: {
        home: 'होम',
        about: 'हमारे बारे में',
        offers: 'ऑफर्स',
        contact: 'संपर्क',
        heroTitle: 'SAIEXCH – भारत का विश्वसनीय प्लेटफ़ॉर्म',
        heroDesc1: 'SAIEXCH पर हज़ारों उपयोगकर्ताओं के साथ शामिल हों – स्लॉट गेम खेलने, क्रिकेट ऑनलाइन भविष्यवाणी करने, और भारत में बड़ी जीत हासिल करने के लिए आपका अंतिम स्थान।',
        heroDesc2: 'तेज़ और सुरक्षित गेमप्ले का अनुभव करें आसान SAIEXCH लॉगिन एक्सेस के साथ। अपना www.saiexch.in ID प्राप्त करें और आज ही खेलना शुरू करें।',
        aboutTitle: 'SAIEXCH के बारे में',
        aboutText: 'SAIEXCH ऑनलाइन गेमिंग में एक प्रमुख नाम है, क्रिकेट भविष्यवाणी, स्लॉट गेम, और रोमांचक रंग भविष्यवाणी गेम तक सहज पहुंच प्रदान करता है।',
        gamesTitle: 'SAIEXCH पर कैसीनो गेम',
        bonusesTitle: 'बोनस और रिवार्ड्स',
        paymentTitle: 'भुगतान विधियां',
        contactTitle: 'SAIEXCH से संपर्क करें – हम 24/7 उपलब्ध हैं',
        contactText1: 'कोई प्रश्न, मदद चाहिए, या फीडबैक साझा करना चाहते हैं? SAIEXCH सपोर्ट टीम हमेशा सहायता के लिए तैयार है — लॉगिन समस्याओं, जमा, निकासी, गेम एक्सेस, और बहुत कुछ के लिए।',
        contactText2: 'किसी भी समय हमसे संपर्क करें — हम केवल एक संदेश दूर हैं और सर्वोत्तम गेमिंग अनुभव प्रदान करने के लिए प्रतिबद्ध हैं।',
        disclaimerTitle: 'अस्वीकरण',
        disclaimer1: 'यह वेबसाइट केवल 18+ उपयोगकर्ताओं के लिए है। यदि आप तेलंगाना, ओडिशा, असम, सिक्किम, या नागालैंड से हैं, तो कृपया साइट से बाहर निकलें।',
        disclaimer2: 'धोखाधड़ी से सावधान रहें — हम केवल WhatsApp के माध्यम से संपर्क करते हैं।',
        disclaimer3: 'हम केवल फैंटेसी खेलों को बढ़ावा देते हैं। कोई वास्तविक पैसा लेनदेन नहीं।'
    },
    kn: {
        home: 'ಹೋಮ್',
        about: 'ನಮ್ಮ ಬಗ್ಗೆ',
        offers: 'ಆಫರ್‌ಗಳು',
        contact: 'ಸಂಪರ್ಕ',
        heroTitle: 'SAIEXCH – ಭಾರತದ ವಿಶ್ವಾಸಾರ್ಹ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್',
        heroDesc1: 'SAIEXCH ನಲ್ಲಿ ಸಾವಿರಾರು ಬಳಕೆದಾರರೊಂದಿಗೆ ಸೇರಿಕೊಳ್ಳಿ – ಸ್ಲಾಟ್ ಗೇಮ್‌ಗಳನ್ನು ಆಡಲು, ಕ್ರಿಕೆಟ್ ಆನ್‌ಲೈನ್ ಭವಿಷ್ಯ ನುಡಿಯಲು, ಮತ್ತು ಭಾರತದಲ್ಲಿ ದೊಡ್ಡ ಗೆಲುವು ಸಾಧಿಸಲು ನಿಮ್ಮ ಅಂತಿಮ ಸ್ಥಳ.',
        heroDesc2: 'ಸುಲಭ SAIEXCH ಲಾಗಿನ್ ಪ್ರವೇಶದೊಂದಿಗೆ ವೇಗದ ಮತ್ತು ಸುರಕ್ಷಿತ ಗೇಮ್‌ಪ್ಲೇ ಅನುಭವಿಸಿ. ನಿಮ್ಮ www.saiexch.in ID ಪಡೆದುಕೊಂಡು ಇಂದೇ ಆಡಲು ಪ್ರಾರಂಭಿಸಿ.',
        aboutTitle: 'SAIEXCH ಬಗ್ಗೆ',
        aboutText: 'SAIEXCH ಆನ್‌ಲೈನ್ ಗೇಮಿಂಗ್‌ನಲ್ಲಿ ಪ್ರಮುಖ ಹೆಸರು, ಕ್ರಿಕೆಟ್ ಭವಿಷ್ಯ ನುಡಿ, ಸ್ಲಾಟ್ ಗೇಮ್‌ಗಳು, ಮತ್ತು ಉತ್ತೇಜಕ ಬಣ್ಣ ಭವಿಷ್ಯ ನುಡಿ ಗೇಮ್‌ಗಳಿಗೆ ಸುಲಭ ಪ್ರವೇಶವನ್ನು ಒದಗಿಸುತ್ತದೆ.',
        gamesTitle: 'SAIEXCH ನಲ್ಲಿ ಕ್ಯಾಸಿನೋ ಗೇಮ್‌ಗಳು',
        bonusesTitle: 'ಬೋನಸ್‌ಗಳು ಮತ್ತು ಬಹುಮಾನಗಳು',
        paymentTitle: 'ಪಾವತಿ ವಿಧಾನಗಳು',
        contactTitle: 'SAIEXCH ಸಂಪರ್ಕಿಸಿ – ನಾವು 24/7 ಲಭ್ಯವಿದ್ದೇವೆ',
        contactText1: 'ಪ್ರಶ್ನೆಗಳು, ಸಹಾಯ ಬೇಕೇ, ಅಥವಾ ಪ್ರತಿಕ್ರಿಯೆ ಹಂಚಿಕೊಳ್ಳಬೇಕೇ? SAIEXCH ಬೆಂಬಲ ತಂಡವು ಯಾವಾಗಲೂ ಸಹಾಯ ಮಾಡಲು ಸಿದ್ಧವಿದೆ — ಲಾಗಿನ್ ಸಮಸ್ಯೆಗಳು, ಠೇವಣಿಗಳು, ಹಿಂಪಡೆತಗಳು, ಗೇಮ್ ಪ್ರವೇಶ, ಮತ್ತು ಹೆಚ್ಚಿನವುಗಳಿಗಾಗಿ.',
        contactText2: 'ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ — ನಾವು ಕೇವಲ ಒಂದು ಸಂದೇಶದ ದೂರದಲ್ಲಿದ್ದೇವೆ ಮತ್ತು ಉತ್ತಮ ಗೇಮಿಂಗ್ ಅನುಭವವನ್ನು ಒದಗಿಸಲು ಬದ್ಧರಾಗಿದ್ದೇವೆ.',
        disclaimerTitle: 'ಹಕ್ಕು ನಿರಾಕರಣೆ',
        disclaimer1: 'ಈ ವೆಬ್‌ಸೈಟ್ ಕೇವಲ 18+ ಬಳಕೆದಾರರಿಗಾಗಿದೆ. ನೀವು ತೆಲಂಗಾಣ, ಒಡಿಶಾ, ಅಸ್ಸಾಂ, ಸಿಕ್ಕಿಂ, ಅಥವಾ ನಾಗಾಲ್ಯಾಂಡ್‌ನಿಂದ ಬಂದಿದ್ದರೆ, ದಯವಿಟ್ಟು ಸೈಟ್‌ನಿಂದ ನಿರ್ಗಮಿಸಿ.',
        disclaimer2: 'ವಂಚನೆಯಿಂದ ಎಚ್ಚರಿಕೆ — ನಾವು ಕೇವಲ WhatsApp ಮೂಲಕ ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.',
        disclaimer3: 'ನಾವು ಕೇವಲ ಫ್ಯಾಂಟಸಿ ಕ್ರೀಡೆಗಳನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುತ್ತೇವೆ. ಯಾವುದೇ ನಿಜವಾದ ಹಣ ವಹಿವಾಟುಗಳಿಲ್ಲ.'
    },
    te: {
        home: 'హోమ్',
        about: 'మా గురించి',
        offers: 'ఆఫర్లు',
        contact: 'సంప్రదింపు',
        heroTitle: 'SAIEXCH – భారతదేశం యొక్క విశ్వసనీయ ప్లాట్‌ఫారమ్',
        heroDesc1: 'SAIEXCH లో వేలాది వినియోగదారులతో చేరండి – స్లాట్ గేమ్‌లు ఆడటానికి, క్రికెట్ ఆన్‌లైన్ అంచనాలు చేయడానికి, మరియు భారతదేశంలో పెద్ద గెలుపులు సాధించడానికి మీ అంతిమ స్థలం.',
        heroDesc2: 'సులభమైన SAIEXCH లాగిన్ యాక్సెస్‌తో వేగవంతమైన మరియు సురక్షిత గేమ్‌ప్లే అనుభవించండి. మీ www.saiexch.in ID పొంది ఈ రోజే ఆడటం ప్రారంభించండి.',
        aboutTitle: 'SAIEXCH గురించి',
        aboutText: 'SAIEXCH ఆన్‌లైన్ గేమింగ్‌లో ప్రముఖ పేరు, క్రికెట్ అంచనాలు, స్లాట్ గేమ్‌లు, మరియు ఉత్తేజకరమైన రంగు అంచనా గేమ్‌లకు సులభమైన యాక్సెస్‌ను అందిస్తుంది.',
        gamesTitle: 'SAIEXCH లో క్యాసినో గేమ్‌లు',
        bonusesTitle: 'బోనస్‌లు మరియు రివార్డ్‌లు',
        paymentTitle: 'చెల్లింపు పద్ధతులు',
        contactTitle: 'SAIEXCH సంప్రదించండి – మేము 24/7 అందుబాటులో ఉన్నాము',
        contactText1: 'ప్రశ్నలు, సహాయం అవసరం, లేదా ఫీడ్‌బ్యాక్ పంచుకోవాలనుకుంటున్నారా? SAIEXCH సపోర్ట్ టీమ్ ఎల్లప్పుడూ సహాయం చేయడానికి సిద్ధంగా ఉంటుంది — లాగిన్ సమస్యలు, డిపాజిట్‌లు, విత్‌డ్రాయల్‌లు, గేమ్ యాక్సెస్, మరియు మరిన్నింటికి.',
        contactText2: 'ఏ సమయంలోనైనా మమ్మల్ని సంప్రదించండి — మేము కేవలం ఒక సందేశం దూరంలో ఉన్నాము మరియు ఉత్తమ గేమింగ్ అనుభవాన్ని అందించడానికి ప్రతిబద్ధులము.',
        disclaimerTitle: 'నిరాకరణ',
        disclaimer1: 'ఈ వెబ్‌సైట్ కేవలం 18+ వినియోగదారుల కోసం మాత్రమే. మీరు తెలంగాణ, ఒడిశా, అస్సాం, సిక్కిం, లేదా నాగాలాండ్ నుండి వస్తే, దయచేసి సైట్ నుండి నిష్క్రమించండి.',
        disclaimer2: 'మోసం నుండి జాగ్రత్తగా ఉండండి — మేము కేవలం WhatsApp ద్వారా సంప్రదిస్తాము.',
        disclaimer3: 'మేము కేవలం ఫాంటసీ క్రీడలను ప్రోత్సహిస్తాము. నిజమైన డబ్బు లావాదేవీలు లేవు.'
    }
};

languageSelect.addEventListener('change', (e) => {
    const selectedLang = e.target.value;
    updateLanguage(selectedLang);
});

function updateLanguage(lang) {
    const t = translations[lang];
    
    // Update navigation
    document.querySelector('a[href="#home"]').textContent = t.home;
    document.querySelector('a[href="#about"]').textContent = t.about;
    document.querySelector('a[href="#offers"]').textContent = t.offers;
    document.querySelector('a[href="#contact"]').textContent = t.contact;
    
    // Update hero section
    document.querySelector('.hero-title').textContent = t.heroTitle;
    document.querySelectorAll('.hero-description')[0].textContent = t.heroDesc1;
    document.querySelectorAll('.hero-description')[1].textContent = t.heroDesc2;
    
    // Update about section
    document.querySelector('#about h2').textContent = t.aboutTitle;
    document.querySelector('#about p').textContent = t.aboutText;
    
    // Update games section
    document.querySelector('.games h2').textContent = t.gamesTitle;
    
    // Update bonuses section
    document.querySelector('.bonuses h2').textContent = t.bonusesTitle;
    
    // Update payment section
    document.querySelector('.payment h2').textContent = t.paymentTitle;
    
    // Update contact section
    document.querySelector('#contact h2').textContent = t.contactTitle;
    document.querySelectorAll('#contact p')[0].textContent = t.contactText1;
    document.querySelectorAll('#contact p')[1].textContent = t.contactText2;
    
    // Update footer
    document.querySelector('.disclaimer h3').textContent = t.disclaimerTitle;
    const disclaimerList = document.querySelectorAll('.disclaimer li');
    disclaimerList[0].textContent = t.disclaimer1;
    disclaimerList[1].textContent = t.disclaimer2;
    disclaimerList[2].textContent = t.disclaimer3;
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.game-card, .bonus-card, .payment-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add some interactive effects
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// WhatsApp click tracking
document.querySelectorAll('a[href^="https://wa.me"]').forEach(link => {
    link.addEventListener('click', function() {
        console.log('WhatsApp contact clicked:', this.href);
        // You can add analytics tracking here
    });
});
