# CS:GO Steam Store Page Clone (2016)

A faithful recreation of the 2016 Steam store page for Counter-Strike: Global Offensive, built using only HTML, CSS, JavaScript, and optionally PHP. The project maintains the original skeuomorphic/metro design of the Steam platform from that era.

![CS:GO Steam Store Page Clone](https://i.imgur.com/DpVZnct.jpg)

## 🌟 Features

- Faithful recreation of the 2016 Steam Store page layout for CS:GO
- Skeuomorphic/metro design with dark colors, gradients, and button effects
- Solid color placeholders for images
- Basic interactivity for highlight selectors, tags, and buttons
- Multiple server options (Express.js or PHP)
- Responsive to different screen sizes

## 🛠️ Technologies Used

- **HTML**: For the basic structure of the page
- **CSS**: For styling with the skeuomorphic/metro design
- **JavaScript**: For interactive elements and UI enhancements
- **PHP** (optional): For server-side functionality (can be used but not required)
- **Express.js**: Alternative server for development and deployment

## 🚀 Live Demo

You can see the live demo here: [CS:GO Steam Store Page Clone](http://same-vh54xgt992g-latest.netlify.app)

## 📋 Project Structure

```
csgo-steam-clone/
├── css/
│   └── style.css             # Main CSS styles with skeuomorphic/metro design
├── js/
│   └── script.js             # JavaScript for interactivity
├── images/
│   ├── placeholders.php      # Dynamic placeholder image generator (PHP version)
│   └── create-static-images.php # Static placeholder image generator
├── index.html                # Original HTML structure (for PHP server)
├── static-index.html         # Static version of the page with embedded placeholders
├── index.php                 # PHP wrapper for dynamic content
├── server.php                # PHP server-side API endpoints
├── server.js                 # Express.js server for development and deployment
├── package.json              # Node.js dependencies and scripts
├── netlify.toml              # Netlify deployment configuration
└── README.md                 # This file
```

## 🔧 How to Run

### Using Express.js Server (Recommended)

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/csgo-steam-clone.git
   cd csgo-steam-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. For development with auto-reload:
   ```bash
   npm run dev
   ```

5. Visit `http://localhost:3000` in your browser.

### Using PHP Server (Alternative)

If you prefer using PHP:

1. Set up a local server with PHP support (e.g., XAMPP, WAMP, MAMP)
2. Clone this repository to your server's web directory
3. Access the site through your local server, e.g., `http://localhost/csgo-steam-clone/index.php`

Or use PHP's built-in server:

```bash
cd csgo-steam-clone
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🌐 Deployment Options

### IONOS Deploy Now

This project is optimized for deployment on IONOS Deploy Now:

1. Fork this repository to your GitHub account
2. Connect your IONOS Deploy Now account to GitHub
3. Create a new project and select your forked repository
4. Select "Static Site" as your project type
5. Configure the build settings:
   - Build command: `cp static-index.html index.html`
   - Output directory: `.`
6. Deploy the project

### Netlify

The project also includes Netlify configuration:

1. Fork this repository to your GitHub account
2. Connect your Netlify account to GitHub
3. Create a new site from your forked repository
4. The included `netlify.toml` file will handle the configuration

## 📝 Notes

- This is a static clone for demonstration purposes only
- No actual game data or server functionality is implemented
- The design mimics the 2016 version of the Steam store page
- Original content and design belong to Valve Corporation

## 📄 License

This project is for educational purposes only. All Steam-related assets and the design concept belong to Valve Corporation. This project is not affiliated with or endorsed by Valve Corporation.

## 👨‍💻 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
