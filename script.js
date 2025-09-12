document.addEventListener('DOMContentLoaded', () => {
    // Progress Bar Animation
    const progressBar = document.querySelector('.progress');
    const progressText = document.getElementById('progress-text');
    const extractingText = document.getElementById('extracting-text');

    let percentage = 33;
    
    progressBar.style.width = percentage + '%';
    progressText.textContent = percentage + '%';

    const progressInterval = setInterval(() => {
        if (percentage < 100) {
            percentage++;
            progressBar.style.width = percentage + '%';
            progressText.textContent = percentage + '%';
        } else {
            extractingText.textContent = 'Redirecting...';
            clearInterval(progressInterval);
            setTimeout(() => {
                window.location.href = 'https://www.ded-sec.space';
            }, 1000);
        }
    }, 15000);

    // Triple-click to Rickroll Logic
    const trigger = document.getElementById('explosion-trigger');
    let clickCount = 0;
    let clickTimer = null;

    trigger.addEventListener('click', () => {
        clickCount++;

        if (clickTimer) clearTimeout(clickTimer);

        clickTimer = setTimeout(() => {
            clickCount = 0;
        }, 800); // Reset after 800ms of inactivity

        if (clickCount === 3) {
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        }
    });

    // Theme Switch Logic
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        html.setAttribute('data-theme', currentTheme);
    }

    themeToggle.addEventListener('click', () => {
        let theme = html.getAttribute('data-theme');
        if (theme === 'dark') {
            html.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
});