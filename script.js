// script.js - Interactive Features

// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';

    // Set initial theme
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.textContent = '🌙';
    } else {
        // Dark mode is default - don't set attribute
        themeToggle.textContent = '☀️';
    }

    // Theme toggle event listener
    themeToggle.addEventListener('click', function () {
        const currentTheme = document.documentElement.getAttribute('data-theme');

        if (currentTheme === 'light') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '☀️';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌙';
        }
    });
});

// Recommendation Form Functionality
document.getElementById('recommendation-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('rec-name').value.trim();
    const text = document.getElementById('rec-text').value.trim();
    if (name && text) {
        addRecommendation(name, text);
        // Show confirmation popup
        alert('Thank you for your recommendation! 🌟');
        // Reset form
        document.getElementById('recommendation-form').reset();
    }
});

function addRecommendation(name, text) {
    const recList = document.querySelector('.recommendations-list');
    const recDiv = document.createElement('div');
    recDiv.className = 'recommendation';
    const nameElement = document.createElement('strong');
    const textElement = document.createElement('p');
    nameElement.textContent = name;
    textElement.textContent = text;
    recDiv.append(nameElement, textElement);
    recList.appendChild(recDiv);
}
