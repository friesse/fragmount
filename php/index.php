<?php
/**
 * CS:GO Steam Store Page Clone - Index
 *
 * This file serves as the main entry point for the CS:GO Steam store page clone.
 * It simulates some dynamic content loading that would typically happen on the
 * Steam platform.
 */

// Function to simulate fetching game data from a database or API
function getGameData() {
    // In a real implementation, this would fetch data from a database or external API
    return [
        'id' => 730,
        'name' => 'Counter-Strike: Global Offensive',
        'price' => 'FREE TO PLAY',
        'developer' => 'Valve',
        'publisher' => 'Valve',
        'release_date' => '21 Aug, 2012',
        'tags' => [
            'Action', 'Free to Play', 'FPS', 'Multiplayer', 'Competitive',
            'Shooter', 'Tactical', 'Team-Based', 'e-sports'
        ],
        'popular_tags' => [
            'FPS', 'Shooter', 'Multiplayer', 'Competitive', 'Action',
            'Team-Based', 'Tactical', 'First-Person', 'e-sports', 'Military'
        ],
        'description' => [
            'Counter-Strike: Global Offensive (CS:GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago.',
            'CS:GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).',
            '"Counter-Strike took the gaming industry by surprise when the unlikely MOD became the most played online PC action game in the world almost immediately after its release in August 1999," said Doug Lombardi at Valve. "For the past 12 years, it has continued to be one of the most-played games in the world, headline competitive gaming tournaments and selling over 25 million units worldwide across the franchise. CS:GO promises to expand on CS\' award-winning gameplay and deliver it to gamers on the PC as well as the next gen consoles and the Mac."'
        ],
        'system_requirements' => [
            'minimum' => [
                'os' => 'Windows® 7/Vista/XP',
                'processor' => 'Intel® Core™ 2 Duo E6600 or AMD Phenom™ X3 8750 processor or better',
                'memory' => '2 GB RAM',
                'graphics' => 'Video card must be 256 MB or more and should be a DirectX 9-compatible with support for Pixel Shader 3.0',
                'directx' => 'Version 9.0c',
                'storage' => '15 GB available space'
            ],
            'recommended' => [
                'os' => 'Windows® 7/Vista/XP',
                'processor' => 'Intel® Core™ 2 Duo E6600 or AMD Phenom™ X3 8750 processor or better',
                'memory' => '4 GB RAM',
                'graphics' => 'Video card must be 256 MB or more and should be a DirectX 9-compatible with support for Pixel Shader 3.0',
                'directx' => 'Version 9.0c',
                'storage' => '15 GB available space'
            ]
        ],
        'reviews' => [
            'overall' => 'Very Positive',
            'count' => '2,376,144',
            'recent' => [
                [
                    'username' => 'xXGamer1337Xx',
                    'hours' => 1562,
                    'recommendation' => 'Recommended',
                    'text' => 'Rush B don\'t stop! Best competitive shooter ever made.'
                ],
                [
                    'username' => 'FragMasterFlex',
                    'hours' => 2241,
                    'recommendation' => 'Recommended',
                    'text' => 'The definitive competitive FPS. After all these years, it\'s still the gold standard.'
                ]
            ]
        ]
    ];
}

// Get game data
$game = getGameData();

// Check if the user is logged in (in a real implementation, this would use sessions)
$isLoggedIn = false;
$userData = null;

// If you wanted to implement actual login functionality:
// if (isset($_SESSION['user'])) {
//     $isLoggedIn = true;
//     $userData = $_SESSION['user'];
// }

// Include the HTML template
include 'index.html';
?>
