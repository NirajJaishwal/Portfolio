// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    if (window.AOS) {
        AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true });
    }

    // Interactive role rotation
    const roles = [
        'Data Science, ML, Software & IT Candidate',
        'Machine Learning & Data Science Focus',
        'Software Engineering & Analytics',
        'IT Systems & Technical Support',
        'Python, SQL, ML & Automation'
    ];
    let i = 0;
    const roleEl = document.getElementById('role');
    
    if (roleEl) {
        setInterval(() => {
            roleEl.textContent = roles[i];
            i = (i + 1) % roles.length;
        }, 3000);
    }

    // Year
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Copy email button
    const copyEmailBtn = document.getElementById('copyEmail');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', async function () {
            try {
                await navigator.clipboard.writeText('nirajkumarjaishwal@gmail.com');
                const btn = this;
                btn.textContent = 'Copied!';
                setTimeout(() => btn.textContent = 'Copy Email Address', 2000);
            } catch (err) {
                this.textContent = 'Copy failed';
            }
        });
    }
});

// Toggle details function (needs to be global for onclick attributes)
function toggleDetails(button) {
    const article = button.closest('article');
    const details = article ? article.querySelector('ul') : null;
    const arrow = button.querySelector("span");
    if (details && arrow) {
        details.classList.toggle("hidden");
        arrow.classList.toggle("rotate-90");
    }
}
