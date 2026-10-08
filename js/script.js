// ICT251 Activity 3 - JavaScript features

document.addEventListener('DOMContentLoaded', () => {
    // Feature 1: Theme switch
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const dark = document.body.classList.contains('dark-theme');
        themeToggle.textContent = dark ? 'Light Mode' : 'Dark Mode';
        themeToggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    });

    // Feature 2: Expandable project details
    document.querySelectorAll('.details-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const details = button.nextElementSibling;
            const isOpen = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', String(!isOpen));
            button.textContent = isOpen ? 'Show Details' : 'Hide Details';
            details.hidden = isOpen;
        });
    });

    // Feature 3: Gallery viewer with previous/next controls
    const photos = [
        { src: 'images/photo1.png', alt: 'A photograph representing my interest in coding', caption: 'Exploring programming and technology.' },
        { src: 'images/photo2.jpg', alt: 'A photograph representing learning and education', caption: 'Learning and continuous improvement.' },
        { src: 'images/photo3.jpg', alt: 'A photograph representing my university experience', caption: 'My journey as a Computer Science student.' }
    ];
    let currentPhoto = 0;
    const galleryImage = document.getElementById('gallery-image');
    const galleryCaption = document.getElementById('gallery-caption');

    function showPhoto(index) {
        currentPhoto = (index + photos.length) % photos.length;
        galleryImage.src = photos[currentPhoto].src;
        galleryImage.alt = photos[currentPhoto].alt;
        galleryCaption.textContent = photos[currentPhoto].caption;
    }

    document.getElementById('previous-photo').addEventListener('click', () => showPhoto(currentPhoto - 1));
    document.getElementById('next-photo').addEventListener('click', () => showPhoto(currentPhoto + 1));

    // Feature 4: Contact form validation and local preview
    const form = document.querySelector('#contact form');
    const feedback = document.getElementById('form-feedback');

    form.addEventListener('submit', event => {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const topic = document.getElementById('topic').value;
        const message = document.getElementById('message').value.trim();
        const errors = [];

        if (!name) errors.push('Please enter your full name.');
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Please enter a valid email address.');
        if (!message) errors.push('Please enter a message.');

        if (errors.length) {
            feedback.className = 'form-feedback error';
            feedback.textContent = errors.join(' ');
            return;
        }

        feedback.className = 'form-feedback success';
        feedback.textContent = `Data validated successfully. Name: ${name}. Email: ${email}. Topic: ${topic || 'Not selected'}. Message: ${message}`;
    });
});
