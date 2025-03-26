<?php
/**
 * Static Image Generator
 *
 * This script creates static placeholder images for the Steam clone site
 * Run this script once to generate all the images needed for static deployment
 */

// Define image types and sizes
$images = [
    ['type' => 'logo', 'size' => '176x44', 'file' => 'logo.png'],
    ['type' => 'cart', 'size' => '26x26', 'file' => 'cart.png'],
    ['type' => 'search', 'size' => '30x26', 'file' => 'search.png'],
    ['type' => 'avatar', 'size' => '42x42', 'file' => 'avatar.png'],
    ['type' => 'valve', 'size' => '88x25', 'file' => 'valve-logo.png'],
    ['type' => 'csgo', 'size' => '308x150', 'file' => 'csgo-header.png'],
    ['type' => 'video', 'size' => '150x69', 'file' => 'thumbnail-1.png'],
    ['type' => 'dust2', 'size' => '150x69', 'file' => 'thumbnail-2.png'],
    ['type' => 'inferno', 'size' => '150x69', 'file' => 'thumbnail-3.png'],
    ['type' => 'match', 'size' => '150x69', 'file' => 'thumbnail-4.png']
];

foreach ($images as $img) {
    // Parse size
    list($width, $height) = explode('x', $img['size']);
    $width = intval($width);
    $height = intval($height);

    // Create image
    $image = imagecreatetruecolor($width, $height);

    // Define colors based on type
    switch ($img['type']) {
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
            $text = 'S';
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
        case 'video':
            $bg = imagecolorallocate($image, 27, 40, 56);
            $text_color = imagecolorallocate($image, 230, 230, 230);
            $text = 'VIDEO';
            break;
        case 'dust2':
            $bg = imagecolorallocate($image, 62, 92, 118);
            $text_color = imagecolorallocate($image, 230, 230, 230);
            $text = 'DUST2';
            break;
        case 'inferno':
            $bg = imagecolorallocate($image, 70, 70, 40);
            $text_color = imagecolorallocate($image, 230, 230, 230);
            $text = 'INFERNO';
            break;
        case 'match':
            $bg = imagecolorallocate($image, 50, 80, 50);
            $text_color = imagecolorallocate($image, 230, 230, 230);
            $text = 'MATCH';
            break;
        default:
            $bg = imagecolorallocate($image, 49, 98, 130);
            $text_color = imagecolorallocate($image, 255, 255, 255);
            $text = $img['type'];
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

    // Save image
    imagepng($image, $img['file']);
    imagedestroy($image);

    echo "Created {$img['file']} ({$img['size']})\n";
}

echo "All images created successfully!\n";
?>
