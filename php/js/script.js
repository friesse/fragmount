document.addEventListener('DOMContentLoaded', function() {
    // Highlight selector functionality
    const selectors = document.querySelectorAll('.highlight-selector');
    const player = document.querySelector('.highlight-player');

    selectors.forEach((selector, index) => {
        selector.addEventListener('click', function() {
            // Remove selected class from all selectors
            selectors.forEach(s => s.classList.remove('selected'));

            // Add selected class to clicked selector
            this.classList.add('selected');

            // Change the video/screenshot content
            const placeholderVideo = player.querySelector('.placeholder-video');
            if (placeholderVideo) {
                // In a real implementation, you'd change the video source
                // For this demo, we'll just change the text
                const mediaTypes = [
                    'COUNTER-STRIKE: GLOBAL OFFENSIVE TRAILER',
                    'DUST II GAMEPLAY SCREENSHOT',
                    'INFERNO MAP SCREENSHOT',
                    'COMPETITIVE MATCH SCREENSHOT'
                ];

                placeholderVideo.textContent = mediaTypes[index] || mediaTypes[0];
            }
        });
    });

    // Hover effect for app tags
    const appTags = document.querySelectorAll('.app-tag');
    appTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });

        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search input');
    const searchButton = document.querySelector('.btn-search');

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', function() {
            if (searchInput.value.trim() !== '') {
                alert('Searching for: ' + searchInput.value);
                // In a real implementation, this would redirect to search results
            }
        });

        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && this.value.trim() !== '') {
                alert('Searching for: ' + this.value);
                // In a real implementation, this would redirect to search results
            }
        });
    }

    // Dropdown menu simulation
    const storeNavLinks = document.querySelectorAll('.store-nav-left a');
    storeNavLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            // In a real implementation, this would show dropdown menus
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });

    // Download button effect
    const downloadBtn = document.querySelector('.btn-download');
    if (downloadBtn) {
        downloadBtn.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(1px)';
        });

        downloadBtn.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(0)';
        });

        downloadBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });

        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Starting download for Counter-Strike: Global Offensive');
            // In a real implementation, this would trigger the download process
        });
    }
});
