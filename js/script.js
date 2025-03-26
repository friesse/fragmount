document.addEventListener('DOMContentLoaded', function() {
    // Date and Time display
    function updateDateTime() {
        const now = new Date();
        const options = {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        const dateTimeStr = now.toLocaleDateString('en-US', options);

        const dateTimeElement = document.getElementById('date-time');
        if (dateTimeElement) {
            dateTimeElement.textContent = dateTimeStr;
        }
    }

    // Update date and time immediately and then every second
    updateDateTime();
    setInterval(updateDateTime, 1000);

    // Basic Account System
    const loginPopup = document.getElementById('login-popup');
    const loginTrigger = document.getElementById('login-trigger');
    const headerLoginButton = document.getElementById('header-login-button');
    const closePopup = document.querySelector('.close-popup');

    const loginBox = document.getElementById('login-box');
    const loggedInBox = document.getElementById('logged-in-box');
    const statusNotLoggedIn = document.getElementById('status-not-logged-in');
    const statusLoggedIn = document.getElementById('status-logged-in');

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('login-button');
    const logoutButton = document.getElementById('logout-button');
    const headerLogoutButton = document.getElementById('header-logout-button');

    const displayUsername = document.getElementById('display-username');
    const headerUsername = document.getElementById('header-username');

    // Show popup
    function showLoginPopup() {
        if (loginPopup) {
            loginPopup.style.display = 'flex';
        }
    }

    // Hide popup
    function hideLoginPopup() {
        if (loginPopup) {
            loginPopup.style.display = 'none';
        }
    }

    // Check if user is already logged in (from localStorage)
    function checkLoginStatus() {
        const savedUsername = localStorage.getItem('csgo_username');
        if (savedUsername) {
            // User is logged in
            if (loginBox) loginBox.style.display = 'none';
            if (loggedInBox) loggedInBox.style.display = 'block';
            if (statusNotLoggedIn) statusNotLoggedIn.style.display = 'none';
            if (statusLoggedIn) statusLoggedIn.style.display = 'block';

            // Update username displays
            if (displayUsername) displayUsername.textContent = savedUsername;
            if (headerUsername) headerUsername.textContent = savedUsername;

            // Change login trigger text
            if (loginTrigger) loginTrigger.textContent = savedUsername;
        } else {
            // User is not logged in
            if (loginBox) loginBox.style.display = 'block';
            if (loggedInBox) loggedInBox.style.display = 'none';
            if (statusNotLoggedIn) statusNotLoggedIn.style.display = 'block';
            if (statusLoggedIn) statusLoggedIn.style.display = 'none';

            // Reset login trigger text
            if (loginTrigger) loginTrigger.textContent = 'login';
        }
    }

    // Initial check
    checkLoginStatus();

    // Event Listeners
    if (loginTrigger) {
        loginTrigger.addEventListener('click', function(e) {
            e.preventDefault();
            showLoginPopup();
        });
    }

    if (headerLoginButton) {
        headerLoginButton.addEventListener('click', function() {
            showLoginPopup();
        });
    }

    if (closePopup) {
        closePopup.addEventListener('click', hideLoginPopup);
    }

    // Click outside to close
    window.addEventListener('click', function(e) {
        if (e.target === loginPopup) {
            hideLoginPopup();
        }
    });

    // Login functionality
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            if (username && password) {
                // In a real system, this would validate against a database
                // For this demo, we'll accept any non-empty username/password

                // Save to localStorage
                localStorage.setItem('csgo_username', username);

                // Update UI
                checkLoginStatus();

                // Close popup
                hideLoginPopup();

                // Clear password field for security
                passwordInput.value = '';
            } else {
                alert('Please enter both username and password');
            }
        });
    }

    // Logout functionality (popup)
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            // Clear from localStorage
            localStorage.removeItem('csgo_username');

            // Update UI
            checkLoginStatus();

            // Close popup
            hideLoginPopup();

            // Clear input fields
            usernameInput.value = '';
            passwordInput.value = '';
        });
    }

    // Logout functionality (header)
    if (headerLogoutButton) {
        headerLogoutButton.addEventListener('click', function() {
            // Clear from localStorage
            localStorage.removeItem('csgo_username');

            // Update UI
            checkLoginStatus();

            // Clear input fields
            usernameInput.value = '';
            passwordInput.value = '';
        });
    }

    // Highlight selector functionality
    const selectors = document.querySelectorAll('.highlight-selector');
    const player = document.querySelector('.highlight-player');
    const videoPlayer = document.getElementById('game-trailer');

    // Function to handle media switching
    function switchMedia(type, src) {
        if (!videoPlayer) return;

        // Create or get screenshot elements
        let screenshots = player.querySelectorAll('.game-screenshot');
        if (screenshots.length === 0) {
            // If we don't have screenshot elements yet, create them
            for (let i = 0; i < 3; i++) {
                const img = document.createElement('img');
                img.className = 'game-screenshot';
                img.alt = 'Game Screenshot';
                player.appendChild(img);
            }
            screenshots = player.querySelectorAll('.game-screenshot');
        }

        // Hide all screenshots first
        screenshots.forEach(screenshot => screenshot.classList.remove('active'));

        if (type === 'video') {
            // Show video, hide screenshots
            videoPlayer.classList.remove('hidden');
            videoPlayer.src = src; // Set video source
            videoPlayer.load(); // Reload the video

            // Optional: auto-play the video (might be blocked by browsers)
            // videoPlayer.play();
        } else if (type === 'image') {
            // Hide video, show selected screenshot
            videoPlayer.classList.add('hidden');

            // Find an available screenshot element
            const screenshot = screenshots[0]; // Use the first one for simplicity
            if (screenshot) {
                screenshot.src = src;
                screenshot.classList.add('active');
            }
        }
    }

    // Set up click handlers for selectors
    selectors.forEach((selector) => {
        selector.addEventListener('click', function() {
            // Remove selected class from all selectors
            selectors.forEach(s => s.classList.remove('selected'));

            // Add selected class to clicked selector
            this.classList.add('selected');

            // Get media type and source from data attributes
            const type = this.getAttribute('data-type') || 'video';
            const src = this.getAttribute('data-src') || '';

            // Switch to the selected media
            switchMedia(type, src);
        });
    });

    // Initialize with the first selector (should be the video)
    if (selectors.length > 0) {
        const firstSelector = selectors[0];
        const initialType = firstSelector.getAttribute('data-type') || 'video';
        const initialSrc = firstSelector.getAttribute('data-src') || '';
        switchMedia(initialType, initialSrc);
    }

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
