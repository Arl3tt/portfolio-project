// script.js - Starter JavaScript

document.getElementById('recommendation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('rec-name').value.trim();
    const text = document.getElementById('rec-text').value.trim();
    if (name && text) {
        addRecommendation(name, text);
        // Show confirmation popup
        alert('Thank you for your recommendation!');
        // Reset form
        document.getElementById('recommendation-form').reset();
    }
});

function addRecommendation(name, text) {
    const recList = document.querySelector('.recommendations-list');
    const recDiv = document.createElement('div');
    recDiv.className = 'recommendation';
    recDiv.innerHTML = `<strong>${name}</strong><p>${text}</p>`;
    recList.appendChild(recDiv);
}
