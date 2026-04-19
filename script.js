document.addEventListener('DOMContentLoaded', () => {
    // Add interactive glow that follows the mouse
    const board = document.querySelector('.board-container');
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        // Update background blob positions subtly based on mouse
        const blobs = document.querySelectorAll('.blob');
        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 0.02;
            const bx = (window.innerWidth / 2 - x) * speed;
            const by = (window.innerHeight / 2 - y) * speed;
            blob.style.transform = `translate(${bx}px, ${by}px) scale(${1 + (speed * 2)})`;
        });
    });

    // Flickering effect for neon headers
    const headers = document.querySelectorAll('.card-header, .name, .title');
    
    function flicker() {
        const target = headers[Math.floor(Math.random() * headers.length)];
        target.style.opacity = '0.8';
        setTimeout(() => {
            target.style.opacity = '1';
        }, 50 + Math.random() * 100);
        
        setTimeout(flicker, 2000 + Math.random() * 3000);
    }
    
    flicker();

    console.log("Neon Dashboard initialized with interactive effects.");
});
