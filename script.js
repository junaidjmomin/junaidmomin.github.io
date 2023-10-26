// Dummy data for Netflix recommendations
const recommendations = [
    { title: "Stranger Things", image: "url_to_image_1.jpg" },
    { title: "The Crown", image: "url_to_image_2.jpg" },
    // Add more recommendations here
];

document.addEventListener("DOMContentLoaded", () => {
    loadRecommendations();

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message!');
    });
});

function loadRecommendations() {
    const container = document.getElementById('netflix-container');
    recommendations.forEach(rec => {
        const div = document.createElement('div');
        div.className = 'netflix-item';
        div.innerHTML = `<h3>${rec.title}</h3><img src="${rec.image}" alt="${rec.title}">`;
        container.appendChild(div);
    });
}

