// Loading Animation Controller
document.addEventListener('DOMContentLoaded', function() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    const mainContent = document.getElementById('mainContent');
    const logoElement = document.getElementById('ryanlLogo');
    
    // Wait for the image to load, then apply drawing animation
    logoElement.addEventListener('load', function() {
        console.log('Logo loaded');
        // Animation is handled by CSS
    });
    
    logoElement.addEventListener('error', function() {
        console.error('Error loading logo image');
    });
    
    // Trigger fade out after animation completes (2.5 seconds)
    setTimeout(function() {
        console.log('Fading out');
        loadingOverlay.classList.add('fade-out');
        
        // Remove overlay from DOM after fade completes to prevent blocking interaction
        setTimeout(function() {
            loadingOverlay.style.display = 'none';
        }, 1000);
    }, 2500); // 2.5 seconds
});
