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

    // The explosion function and related styles are now unused.
});