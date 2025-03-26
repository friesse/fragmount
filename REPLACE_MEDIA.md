# How to Replace Placeholder Media

This guide explains how to replace the placeholder elements with your own videos and images.

## Video Files

The main trailer and screenshots are now set up to work with real media files. Here's how to use your own files:

### 1. Video Trailer

1. Place your MP4 video file in the `videos` folder
2. Update the source in `static-index.html`:

```html
<!-- Find this line -->
<source src="videos/your-trailer.mp4" type="video/mp4">

<!-- Replace with your actual file -->
<source src="videos/my-cs-trailer.mp4" type="video/mp4">
```

3. If you have a poster image for your video, place it in the `img` folder and update:

```html
<!-- Find this line -->
<video id="game-trailer" controls poster="img/poster-placeholder.jpg" class="game-video">

<!-- Replace with your actual poster -->
<video id="game-trailer" controls poster="img/my-poster.jpg" class="game-video">
```

### 2. Screenshot Images

1. Place your screenshot images in the `img/screenshots` folder
2. Update the `data-src` attributes in the thumbnail selectors:

```html
<!-- Find these lines -->
<div class="highlight-selector" data-type="image" data-src="img/screenshots/dust2.jpg">
<div class="highlight-selector" data-type="image" data-src="img/screenshots/inferno.jpg">
<div class="highlight-selector" data-type="image" data-src="img/screenshots/match.jpg">

<!-- Replace with your actual screenshots -->
<div class="highlight-selector" data-type="image" data-src="img/screenshots/my-dust2.jpg">
<div class="highlight-selector" data-type="image" data-src="img/screenshots/my-inferno.jpg">
<div class="highlight-selector" data-type="image" data-src="img/screenshots/my-gameplay.jpg">
```

## Other Images

### 1. CS:GO Header Image

Replace the CS:GO header image:

```html
<!-- Find this div -->
<div class="csgo-header">CS:GO</div>

<!-- Replace with -->
<img src="img/csgo-header.jpg" alt="CS:GO" style="width:100%;height:100%;">
```

### 2. User Avatars

Replace the user avatars:

```html
<!-- Find these divs -->
<div class="avatar-placeholder">USER</div>

<!-- Replace with -->
<img src="img/avatars/user1.jpg" alt="User Avatar" class="avatar">
```

## File Formats and Recommendations

1. **Video Format**: Use MP4 format for best browser compatibility
   - Recommended resolution: 960x540 or 1280x720
   - Maximum file size: Keep under 10MB for better loading

2. **Image Formats**:
   - Use JPG for screenshots (better compression for photos)
   - Recommended screenshot size: 960x540 or similar 16:9 aspect ratio

3. **Naming Convention**:
   - Use lowercase names without spaces
   - Use hyphens instead of spaces (e.g., "dust2-screenshot.jpg")

## After Replacing Media

After replacing the media files, make sure to:

1. Test the page in your browser
2. Check that videos play correctly
3. Verify that clicking on thumbnails switches between video and images
4. Update the `index.html` file if needed:
   ```
   cp static-index.html index.html
   ```

Enjoy your customized CS:GO page!
