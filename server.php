<?php
/**
 * Simple PHP server for the Steam CS:GO store page clone
 *
 * This file provides basic backend functionality to simulate
 * user authentication, game data fetching, and reviews.
 */

// Set content type to JSON for API responses
header('Content-Type: application/json');

// Handle different API endpoints
$action = isset($_GET['action']) ? $_GET['action'] : '';

switch ($action) {
    case 'login':
        // Simulate login functionality
        $username = isset($_POST['username']) ? $_POST['username'] : '';
        $password = isset($_POST['password']) ? $_POST['password'] : '';

        if (!empty($username) && !empty($password)) {
            // In a real implementation, this would verify credentials
            echo json_encode([
                'success' => true,
                'user' => [
                    'username' => $username,
                    'avatar' => 'images/avatar.png',
                    'level' => 25,
                    'games' => 156
                ]
            ]);
        } else {
            echo json_encode([
                'success' => false,
                'error' => 'Invalid username or password'
            ]);
        }
        break;

    case 'get_game_details':
        // Return game details for CS:GO
        echo json_encode([
            'id' => 730,
            'name' => 'Counter-Strike: Global Offensive',
            'price' => 'Free To Play',
            'developer' => 'Valve',
            'publisher' => 'Valve',
            'release_date' => '21 Aug, 2012',
            'tags' => ['FPS', 'Shooter', 'Multiplayer', 'Competitive', 'Action', 'Team-Based', 'Tactical'],
            'description' => 'Counter-Strike: Global Offensive (CS:GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago.',
            'reviews' => [
                'overall' => 'Very Positive',
                'count' => '2,376,144'
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
            ]
        ]);
        break;

    case 'get_reviews':
        // Return some sample reviews
        echo json_encode([
            'reviews' => [
                [
                    'username' => 'xXGamer1337Xx',
                    'avatar' => 'images/avatar1.png',
                    'hours' => 1562,
                    'recommendation' => 'Recommended',
                    'text' => 'Rush B don\'t stop! Best competitive shooter ever made.'
                ],
                [
                    'username' => 'FragMasterFlex',
                    'avatar' => 'images/avatar2.png',
                    'hours' => 2241,
                    'recommendation' => 'Recommended',
                    'text' => 'The definitive competitive FPS. After all these years, it\'s still the gold standard.'
                ],
                [
                    'username' => 'NoScopeKing',
                    'avatar' => 'images/avatar3.png',
                    'hours' => 3450,
                    'recommendation' => 'Recommended',
                    'text' => 'Over 3000 hours and still going strong. This game has a special place in my heart.'
                ],
                [
                    'username' => 'VACation2023',
                    'avatar' => 'images/avatar4.png',
                    'hours' => 567,
                    'recommendation' => 'Not Recommended',
                    'text' => 'Too many cheaters these days. Valve needs to improve their anti-cheat.'
                ]
            ],
            'total' => 2376144,
            'overall' => 'Very Positive'
        ]);
        break;

    case 'get_languages':
        // Return supported languages
        echo json_encode([
            'languages' => [
                'English', 'French', 'Italian', 'German', 'Spanish - Spain',
                'Arabic', 'Bulgarian', 'Czech', 'Danish', 'Dutch', 'Finnish',
                'Greek', 'Hungarian', 'Japanese', 'Korean', 'Norwegian',
                'Polish', 'Portuguese', 'Portuguese - Brazil', 'Romanian',
                'Russian', 'Simplified Chinese', 'Spanish - Latin America',
                'Swedish', 'Thai', 'Traditional Chinese', 'Turkish', 'Ukrainian'
            ]
        ]);
        break;

    default:
        // Default response
        echo json_encode([
            'success' => false,
            'error' => 'Invalid action'
        ]);
}
?>
