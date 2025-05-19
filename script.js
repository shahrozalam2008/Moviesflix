// Movie data
const trendingMovies = [
    {
        title: "The Dark Knight",
        year: "2022",
        rating: "8.9",
        image: "https://via.placeholder.com/300x450"
    },
    {
        title: "Inception",
        year: "2021",
        rating: "8.8",
        image: "https://via.placeholder.com/300x450"
    },
    {
        title: "Interstellar",
        year: "2020",
        rating: "8.6",
        image: "https://via.placeholder.com/300x450"
    },
    {
        title: "The Shawshank Redemption",
        year: "2019",
        rating: "9.3",
        image: "https://via.placeholder.com/300x450"
    },
    {
        title: "Pulp Fiction",
        year: "2018",
        rating: "8.9",
        image: "https://via.placeholder.com/300x450"
    }
];

const newReleases = [
    {
        title: "Dune: Part Two",
        year: "2023",
        rating: "8.7",
        image: "https://via.placeholder.com/300x450"
    },
    {
        title: "Oppenheimer",
        year: "2023",
        rating: "8.5",
        image: "https://via.placeholder.com/300x450"
    },
    {
        title: "The Batman",
        year: "2022",
        rating: "7.9",
        image: "https://via.placeholder.com/300x450"
    },
    {
        title: "Top Gun: Maverick",
        year: "2022",
        rating: "8.3",
        image: "https://via.placeholder.com/300x450"
    },
    {
        title: "Everything Everywhere All at Once",
        year: "2022",
        rating: "8.8",
        image: "https://via.placeholder.com/300x450"
    }
];

// DOM Elements
const trendingContainer = document.getElementById('trending-movies');
const newReleasesContainer = document.getElementById('new-releases');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');
const currentYearElement = document.getElementById('current-year');

// Generate movie cards
function createMovieCard(movie) {
    return `
        <div class="movie-card">
            <img src="${movie.image}" alt="${movie.title}" class="movie-poster">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-meta">
                    <span>${movie.year}</span>
                    <span class="rating">${movie.rating}/10</span>
                </div>
            </div>
        </div>
    `;
}

// Display movies
function displayMovies() {
    trendingContainer.innerHTML = trendingMovies.map(createMovieCard).join('');
    newReleasesContainer.innerHTML = newReleases.map(createMovieCard).join('');
}

// Toggle mobile menu
function toggleMenu() {
    navMenu.classList.toggle('show');
}

// Set current year in footer
function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;
}

// Initialize the app
function init() {
    displayMovies();
    setCurrentYear();
    menuToggle.addEventListener('click', toggleMenu);
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
