<?php
/**
 * Placeholder Image Generator
 *
 * This script generates placeholder images for the Steam clone site
 * Usage: placeholders.php?type=logo|cart|search|avatar&size=WIDTHxHEIGHT
 */

// Set default values
$type = isset($_GET['type']) ? $_GET['type'] : 'logo';
$size = isset($_GET['size']) ? $_GET['size'] : '176x44';

// Parse size
list($width, $height) = explode('x', $size);
$width = intval($width);
$height = intval($height);

// Validate dimensions
if ($width <= 0 || $width > 1000 || $height <= 0 || $height > 1000) {
    die('Invalid dimensions');
}

// Create image
$image = imagecreatetruecolor($width, $height);

// Define colors based on type
switch ($type) {
    case 'logo':
        $bg = imagecolorallocate($image, 23, 26, 33);
        $text_color = imagecolorallocate($image, 193, 228, 249);
        $text = 'STEAM';
        break;
    case 'cart':
        $bg = imagecolorallocate($image, 49, 98, 130);
        $text_color = imagecolorallocate($image, 255, 255, 255);
        $text = 'CART';
        break;
    case 'search':
        $bg = imagecolorallocate($image, 76, 107, 34);
        $text_color = imagecolorallocate($image, 255, 255, 255);
        $text = 'SEARCH';
        break;
    case 'avatar':
        $bg = imagecolorallocate($image, 62, 126, 167);
        $text_color = imagecolorallocate($image, 255, 255, 255);
        $text = 'USER';
        break;
    case 'valve':
        $bg = imagecolorallocate($image, 21, 21, 21);
        $text_color = imagecolorallocate($image, 200, 200, 200);
        $text = 'VALVE';
        break;
    case 'csgo':
        $bg = imagecolorallocate($image, 27, 40, 56);
        $text_color = imagecolorallocate($image, 230, 230, 230);
        $text = 'CS:GO';
        break;
    default:
        $bg = imagecolorallocate($image, 49, 98, 130);
        $text_color = imagecolorallocate($image, 255, 255, 255);
        $text = $type;
}

// Fill background
imagefill($image, 0, 0, $bg);

// Add text
$font_size = min($width, $height) / 4;
$font = 5; // Built-in font

// Calculate text position to center it
$text_width = imagefontwidth($font) * strlen($text);
$text_height = imagefontheight($font);
$x = ($width - $text_width) / 2;
$y = ($height - $text_height) / 2;

// Add text to image
imagestring($image, $font, $x, $y, $text, $text_color);

// Output image
header('Content-Type: image/png');
imagepng($image);
imagedestroy($image);
?>
