Interactive Greeting Project

A lightweight web application built with HTML5, Tailwind CSS, and plain JavaScript. Clicking the interactive button updates the page greeting dynamically for two seconds before seamlessly reverting to the default text.

🚀 Features

Dynamic Interaction: Changes the main heading text from Hello World to Hello Brody upon user interaction.

Auto-Revert Timer: Uses JavaScript setTimeout to automatically reset the heading text back to Hello World after 2 seconds (2000 ms).

Rapid-Click Safe: Handles repeated button clicks smoothly by resetting the active timer so the greeting remains displayed for a full 2 seconds after the last click.

Modern Styling: Styled using Tailwind CSS with a soft gradient background, centered card layout, responsive typography, and hover/active states on the button.

🛠️ Project Structure

├── index.html        # Main HTML file with inline script & Tailwind CSS CDN
└── README.md         # Project documentation


💻 Code Overview

HTML & Tailwind Layout

The main card container centers the content and uses Tailwind CSS utilities for responsive padding, shadows, and smooth hover effects:

<h1 id="greeting-text" class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
  Hello World
</h1>

<button id="greet-btn" class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl">
  Change Greeting
</button>


JavaScript Logic

The script attaches an event listener to the button and uses setTimeout along with clearTimeout to avoid timer overlaps when clicked repeatedly:

let timeoutId = null;
const heading = document.getElementById('greeting-text');
const button = document.getElementById('greet-btn');

button.addEventListener('click', () => {
    heading.textContent = 'Hello Brody';

    if (timeoutId) {
        clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
        heading.textContent = 'Hello World';
    }, 2000);
});


🏁 Getting Started

Download or clone this repository.

Open index.html in any modern web browser.

Click the Change Greeting button to see the dynamic greeting update!
