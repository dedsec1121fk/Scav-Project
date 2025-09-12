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

    // Explosion Easter Egg Logic
    const trigger = document.getElementById('explosion-trigger');
    let clickCount = 0;
    let clickTimer = null;

    trigger.addEventListener('click', (e) => {
        clickCount++;

        if (clickTimer) clearTimeout(clickTimer);

        clickTimer = setTimeout(() => {
            clickCount = 0;
        }, 800); // Reset after 800ms of inactivity

        if (clickCount === 3) {
            createExplosion(e.clientX, e.clientY);
            clickCount = 0;
            clearTimeout(clickTimer);
            
            setTimeout(() => {
                window.location.reload();
            }, 1200); // Reload after animation finishes
        }
    });

    function createExplosion(x, y) {
        const container = document.createElement('div');
        container.className = 'explosion-container';
        document.body.appendChild(container);

        const particleCount = 50;
        const colors = ['#FFC700', '#FF8F00', '#FF5722', '#F44336', '#444'];

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const angle = Math.random() * 360;
            const distance = Math.random() * 150 + 50;
            const translateX = Math.cos(angle * Math.PI / 180) * distance * (window.innerWidth / 500); // Scale distance
            const translateY = Math.sin(angle * Math.PI / 180) * distance * (window.innerHeight / 800);
            const rotate = Math.random() * 720 - 360;

            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.setProperty('--transform-end', `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`);

            container.appendChild(particle);
        }

        setTimeout(() => {
            document.body.removeChild(container);
        }, 1200);
    }
});
