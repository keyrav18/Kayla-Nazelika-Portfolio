# AGENTS.md

## Project Overview

This repository contains the personal portfolio website of **Kayla Nazelika**.

The website focuses on presenting:

* Personal profile
* UI/UX Design skills
* Web Development skills
* Portfolio projects
* Contact information

The current implementation is a frontend website using HTML, CSS, and JavaScript with Three.js for 3D visualization.

---

## Repository Structure

```text
Portfolio web/
├── img/
│   ├── img1.jpeg
│   ├── img2.jpeg
│   ├── img3.jpeg
│   ├── img4.jpeg
│   ├── img5.jpeg
│   ├── img6.jpeg
│   └── Profile.png
│
├── music/
│   └── sound.mp3
│
├── vid/
│   └── video.mp4
│
├── index.html
├── music.css
└── music.js
```

---

## Main Files

### `index.html`

Main application entry point.

Contains:

* Navigation
* Home section
* About section
* Skills section
* Projects section
* Contact section
* Background video
* Audio element
* Music control button
* Scroll animation
* Three.js scene
* Inline CSS
* Inline JavaScript

---

### `music.js`

Responsible for background music control.

Main logic:

```javascript
const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");
```

The application reads music state from:

```javascript
localStorage.getItem("music")
```

Possible values:

```text
on
off
```

When music is enabled, the application plays the audio and changes the button text.

When disabled, the application pauses the audio and stores the state as `off`.

---

### `music.css`

Contains styling intended for the music button.

The button uses:

* Fixed positioning
* Pink background
* Rounded border
* White text
* Box shadow
* Pointer cursor

Before modifying this file, verify whether its styles are actually linked from `index.html`.

---

## Development Rules

### 1. Preserve Existing Visual Identity

Do not unnecessarily replace the existing:

* Pink/lavender color palette
* Poppins typography
* Pacifico typography
* Rounded cards
* Soft shadows
* Feminine visual style
* Background video
* 3D visual

Changes should preserve the existing design direction unless explicitly requested.

---

### 2. Do Not Remove Existing Projects

The website currently contains six portfolio projects.

Do not delete or replace project content unless specifically requested.

Project links should remain functional.

---

### 3. Preserve Asset Paths

Before changing an asset path, verify the actual filename and extension.

Current HTML references include:

```text
img/img1.png
img/img2.png
img/img3.png
img/img4.png
img/img5.png
img/img6.png
img/Profile.png
music/sound.mp3
vid/video.mp4
```

The actual folder structure shown by the user contains `img1.jpeg` through `img6.jpeg`.

This mismatch must be resolved carefully rather than assuming the correct extension.

---

### 4. Music Logic

Do not remove `localStorage` functionality when modifying the music system.

Expected behavior:

```text
User clicks Play
        ↓
Music plays
        ↓
State = "on"
        ↓
localStorage stores "on"
```

and:

```text
User clicks Pause
        ↓
Music pauses
        ↓
State = "off"
        ↓
localStorage stores "off"
```

---

### 5. Three.js

The existing Three.js implementation creates a sphere with:

* Pink base color
* Lavender emissive color
* Mint specular highlight
* Ambient light
* Point light

The sphere continuously rotates.

Mouse movement changes the sphere rotation.

When modifying the 3D system:

* Preserve the animation loop.
* Keep the renderer responsive.
* Update camera aspect ratio on resize.
* Avoid unnecessarily increasing geometry complexity.
* Avoid introducing heavy dependencies without a clear requirement.

---

## JavaScript Behavior

### Smooth Scrolling

Navigation links beginning with:

```text
#
```

use JavaScript to scroll smoothly to the target section.

Do not remove this behavior unless replacing it with an equivalent implementation.

---

### Section Animation

Sections initially use:

```css
opacity: 0;
transform: translateY(50px);
```

When visible:

```css
opacity: 1;
transform: translateY(0);
```

`IntersectionObserver` is responsible for detecting when sections enter the viewport.

---

## Code Style

When modifying existing code:

* Use clear variable names.
* Keep JavaScript readable.
* Avoid unnecessary global variables.
* Keep HTML semantic where practical.
* Avoid duplicate CSS rules.
* Keep indentation consistent.
* Do not introduce frameworks unless explicitly requested.

---

## Recommended Refactoring

The current implementation can be improved by separating responsibilities.

Recommended future structure:

```text
Portfolio web/
├── img/
├── music/
├── vid/
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   └── music.js
├── index.html
├── README.md
├── PRD.md
└── AGENTS.md
```

However, do not perform this restructuring automatically when making a small feature change. Preserve the current structure unless the task specifically requires refactoring.

---

## Testing Checklist

Before considering a change complete, verify:

* [ ] `index.html` opens without console errors.
* [ ] Navigation links work.
* [ ] Smooth scrolling works.
* [ ] About section displays correctly.
* [ ] Profile image loads.
* [ ] Skills are displayed correctly.
* [ ] All six project cards appear.
* [ ] Project links open correctly.
* [ ] Background video loads.
* [ ] Background music can be played.
* [ ] Background music can be paused.
* [ ] Music state is stored correctly.
* [ ] Section fade-in animation works.
* [ ] Three.js object renders.
* [ ] Three.js animation works.
* [ ] Mouse interaction works.
* [ ] Window resize does not break the 3D canvas.
* [ ] No new browser console errors are introduced.

---

## Important Implementation Notes

### Asset Extension Mismatch

The provided folder structure shows:

```text
img1.jpeg
img2.jpeg
img3.jpeg
img4.jpeg
img5.jpeg
img6.jpeg
```

while `index.html` references:

```text
img/img1.png
img/img2.png
img/img3.png
img/img4.png
img/img5.png
img/img6.png
```

An agent should verify the actual files before changing either side.

---

### CSS Duplication

The music button styling currently exists inside the `<style>` section of `index.html`, while a separate `music.css` file also exists.

An agent should verify whether `music.css` is intentionally unused before moving or deleting styles.

---

### Inline JavaScript

The main JavaScript logic for:

* Smooth scrolling
* IntersectionObserver
* Three.js
* Mouse interaction
* Resize handling

currently exists inside `index.html`.

`music.js` is loaded separately at the end of the document.

Refactoring this into separate JavaScript files is recommended but should be treated as a separate refactoring task.

---

## Do Not

Do not:

* Remove portfolio projects without permission.
* Change external project links without permission.
* Delete multimedia assets without checking references.
* Replace Three.js with another library without a clear requirement.
* Remove music persistence.
* Remove the background video without permission.
* Rewrite the entire project structure for a minor feature.
* Introduce React/Next.js merely because they appear in the Skills section. The current implementation itself is HTML/CSS/JavaScript.

---

## Definition of Done

A change is considered complete when:

1. The requested functionality is implemented.
2. Existing portfolio sections remain functional.
3. Existing project links remain intact.
4. Existing visual identity is preserved unless a redesign was requested.
5. No broken asset references are introduced.
6. No JavaScript console errors are introduced.
7. Existing music and Three.js functionality continue to work unless intentionally changed.
8. The website remains usable in a modern browser.