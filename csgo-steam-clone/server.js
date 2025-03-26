const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Redirect /index.php to static-index.html
app.get('/index.php', (req, res) => {
  res.sendFile(path.join(__dirname, 'static-index.html'));
});

// Simulate the placeholders.php functionality
app.get('/images/placeholders.php', (req, res) => {
  const type = req.query.type || 'logo';
  const size = req.query.size || '176x44';

  // Instead of generating an image on the fly,
  // Just serve a colored div with text
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body, html {
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
        .placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100vh;
          color: white;
          font-family: Arial, sans-serif;
          font-weight: bold;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="placeholder" style="background-color: ${getColorForType(type)};">
        ${type.toUpperCase()}
      </div>
    </body>
    </html>
  `;

  res.send(html);
});

// Simulate the server.php API
app.get('/server.php', (req, res) => {
  const action = req.query.action || '';
  let responseData = { success: false, error: 'Invalid action' };

  switch (action) {
    case 'get_game_details':
      responseData = {
        id: 730,
        name: 'Counter-Strike: Global Offensive',
        price: 'Free To Play',
        developer: 'Valve',
        publisher: 'Valve',
        release_date: '21 Aug, 2012',
        tags: ['FPS', 'Shooter', 'Multiplayer', 'Competitive', 'Action', 'Team-Based', 'Tactical'],
        description: 'Counter-Strike: Global Offensive (CS:GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago.',
        reviews: {
          overall: 'Very Positive',
          count: '2,376,144'
        }
      };
      break;

    case 'get_reviews':
      responseData = {
        reviews: [
          {
            username: 'xXGamer1337Xx',
            avatar: 'images/avatar1.png',
            hours: 1562,
            recommendation: 'Recommended',
            text: 'Rush B don\'t stop! Best competitive shooter ever made.'
          },
          {
            username: 'FragMasterFlex',
            avatar: 'images/avatar2.png',
            hours: 2241,
            recommendation: 'Recommended',
            text: 'The definitive competitive FPS. After all these years, it\'s still the gold standard.'
          }
        ],
        total: 2376144,
        overall: 'Very Positive'
      };
      break;
  }

  res.json(responseData);
});

// Serve index.html as fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'static-index.html'));
});

// Helper function to get colors for placeholder images
function getColorForType(type) {
  const colors = {
    logo: '#171a21',
    cart: '#316282',
    search: '#4c6b22',
    avatar: '#3e7ea7',
    valve: '#171a21',
    csgo: '#27374e',
    video: '#1e3c68',
    dust2: '#3e5c76',
    inferno: '#464628',
    match: '#324632'
  };

  return colors[type] || '#316282';
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Visit http://localhost:${PORT}/static-index.html to see the CS:GO Steam store clone`);
});
