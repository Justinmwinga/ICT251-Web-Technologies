# ICT251 Web Technologies — Activity 3

## Interactive Personal Website

This project extends my ICT251 Activity 2 personal website into a responsive and interactive student portfolio. It retains my original personal content and media and adds JavaScript functionality.

## Student Information

- **Name:** Justine Mwinga
- **Student Number:** 202500171
- **Course:** ICT251 Web Technologies
- **University:** Mulungushi University

## Project Structure

```text
myweb/
├── index.html
├── activity1_backup.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── images/
│   ├── photo1.png
│   ├── photo2.jpg
│   └── photo3.jpg
└── videos/
    ├── introduction.mp4
    └── voice.opus
```

## Activity 3 JavaScript Features

1. **Contact form validation and preview** — validates the name, email and message, rejects blank/whitespace-only input, prevents page reload with `event.preventDefault()`, and displays a local validated-data preview using `textContent`.
2. **Expandable project details** — project cards have buttons that show and hide additional information and report their open/closed state with `aria-expanded`.
3. **Gallery viewer** — Previous and Next buttons cycle through the three project photos and update the image alternative text and caption. The viewer wraps correctly from the first image to the last and vice versa.
4. **Theme switch** — the Dark Mode/Light Mode button switches between readable light and dark appearances.

## HTML/CSS Features

- Semantic HTML5 structure
- Responsive navigation
- About Me, Hobbies, Learning Plan, Photos, Media and Contact sections
- Projects & Skills section
- Weekly learning table
- Three captioned photographs
- Self-introduction video and audio recording
- Responsive CSS using a mobile media query
- Element, class and ID selectors
- Box-model styling with padding, margins and borders
- Keyboard focus and hover states

## How to Test Locally

1. Open the `myweb` folder in Visual Studio Code.
2. Start the page with Live Server.
3. Check every navigation link.
4. Test the Dark Mode/Light Mode button.
5. Open and close all three project details.
6. Test Previous and Next in the photo gallery, including repeated clicks at the first and last photo.
7. Submit the contact form with blank fields, spaces-only input and an invalid email to confirm validation.
8. Submit valid form data and confirm that a local validation preview appears without a page reload.
9. Play and pause the video and audio.
10. Test the page at a narrow mobile width and a wide desktop width.
11. Open the browser Console and fix any JavaScript errors before deployment.

## Deployment

The Activity 3 brief requires publishing the static site through GitHub to Render. For this project, `index.html` is at the repository root, so the Render settings are:

- **Root Directory:** blank
- **Build Command:** `echo "No build required"`
- **Publish Directory:** `.`
- **Auto Deploy:** enabled for the selected branch

## GitHub Source

[View Source on GitHub](https://github.com/infintyknowledge0/myweb-)

## Note

The contact form is a browser demonstration only. It validates and previews the submitted data locally; it does not send or store messages on a server.

## Author

Justine Mwinga

ICT251 Web Technologies — 2026
