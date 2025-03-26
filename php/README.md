# CS:GO Steam Store Page Clone

This is a clone of the 2016 Steam store page for Counter-Strike: Global Offensive, created using only HTML, CSS, JavaScript, and PHP. The project maintains the original skeuomorphic/metro design of the Steam platform from that era.

## Project Structure

```
csgo-steam-clone/
├── css/
│   └── style.css           # Main CSS styles with skeuomorphic/metro design
├── js/
│   └── script.js           # JavaScript for interactivity
├── images/
│   └── placeholders.php    # Dynamically generated placeholder images
├── index.html              # Main HTML structure
├── index.php               # PHP wrapper for dynamic content
├── server.php              # Server-side API endpoints
└── README.md               # This file
```

## Features

- Faithful recreation of the 2016 Steam Store page layout for CS:GO
- Skeuomorphic/metro design with dark colors, gradients, and button effects
- Solid color placeholders for images as requested
- Basic interactivity for highlight selectors, tags, and buttons
- PHP backend to simulate API calls and data fetching
- Responsive to different screen sizes

## Technologies Used

- **HTML**: For the basic structure of the page
- **CSS**: For styling with the skeuomorphic/metro design
- **JavaScript**: For interactive elements and UI enhancements
- **PHP**: For server-side functionality and dynamic content generation

## How to Run

1. Set up a local server with PHP support (e.g., XAMPP, WAMP, MAMP, or use PHP's built-in server)
2. Clone this repository to your server's web directory
3. Access the site through your local server, e.g., `http://localhost/csgo-steam-clone/index.php`

To start PHP's built-in server:

```bash
cd csgo-steam-clone
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Using the Placeholder Images

The `placeholders.php` script generates placeholder images for the site. You can use it as follows:

```
images/placeholders.php?type=logo&size=176x44
```

Available types:
- logo
- cart
- search
- avatar
- valve
- csgo

## Notes

- This is a static clone for demonstration purposes only
- No actual game data or server functionality is implemented
- The design mimics the 2016 version of the Steam store page
- Original content belongs to Valve Corporation
