// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true });

    // Interactive role rotation
    const roles = [
        'Data Science & Computer Science student',
        'Machine Learning Enthusiast',
        'AI Explorer',
        'Software Developer'
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
                await navigator.clipboard.writeText('nkj5@uakron.edu');
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
    const details = button.parentElement.nextElementSibling.nextElementSibling; 
    const arrow = button.querySelector("span");
    if (details && arrow) {
        details.classList.toggle("hidden");
        arrow.classList.toggle("rotate-90");
    }
}
