const searchForm = document.querySelector('form');
const movieContianer = document.querySelector('.movie-container');
const inputBox = document.querySelector('.inputBox');
const spinner = document.querySelector('.spinner-container');

const apiKey = "WPISZ_TUTAJ_SWOJ_KLUCZ_OMDB";

const showLoadingSpinner = () => {
    spinner.classList.remove('hidden');
}

const hideLoadingSpinner = () => {
    spinner.classList.add('hidden');
}

const getMovieList = async(movieName) => {
    showLoadingSpinner();
    try {
        const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Błąd sieci. Spróbuj ponownie.");
        }
        const data = await response.json();

        if (data.Response === "True") {
            showMovieList(data.Search);
        } else {
            showErrorMessage(data.Error);
        }

    } catch (error) {
        showErrorMessage(error.message);
    } finally {
        hideLoadingSpinner();
    }
}

const getMovieDetails = async(imdbID) => {
    showLoadingSpinner();
    try {
        const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Błąd sieci. Spróbuj ponownie.");
        }
        const data = await response.json();

        if (data.Response === "True") {
            showMovieDetailView(data);
        } else {
            showErrorMessage(data.Error);
        }

    } catch (error) {
        showErrorMessage(error.message);
    } finally {
        hideLoadingSpinner();
    }
}

const showMovieList = (movies) => {
    movieContianer.innerHTML = "";
    movieContianer.classList.remove('noBackground');
    movieContianer.classList.add('movie-grid');

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.dataset.imdbId = movie.imdbID;

        const poster = movie.Poster === "N/A" ? 'https://via.placeholder.com/200x300.png?text=Brak+plakatu' : movie.Poster;

        movieCard.innerHTML = `
            <img src="${poster}" alt="Plakat filmu ${movie.Title}">
            <div class="movie-card-info">
                <h3>${movie.Title}</h3>
                <p>${movie.Year}</p>
            </div>
        `;
        movieContianer.appendChild(movieCard);
    });
}

const showMovieDetailView = (data) => {
    movieContianer.innerHTML = "";
    movieContianer.classList.remove('noBackground');
    movieContianer.classList.remove('movie-grid');

    const { Title, imdbRating, Genre, Released, Runtime, Actors, Plot, Poster } = data;

    const posterImg = Poster === "N/A" ? 'https://via.placeholder.com/300x450.png?text=Brak+plakatu' : Poster;

    const moviePosterElement = document.createElement('div');
    moviePosterElement.classList.add('movie-poster');
    moviePosterElement.innerHTML = `<img src="${posterImg}" alt="Plakat filmu ${Title}"/>`;

    const movieElement = document.createElement('div');
    movieElement.classList.add('movie-info');
    movieElement.innerHTML = `<h2>${Title}</h2><p><strong>Ocena: &#11088;</strong> ${imdbRating}/10</p>`;

    const movieGenreElement = document.createElement('div');
    movieGenreElement.classList.add('movie-genre');
    Genre.split(",").forEach(element => {
        const p = document.createElement('p');
        p.innerText = element.trim();
        movieGenreElement.appendChild(p);
    });
    movieElement.appendChild(movieGenreElement);

    movieElement.innerHTML += `<p><strong>Data Premiery: </strong>${Released}</p><p><strong>Czas trwania: </strong>${Runtime}</p><p><strong>Obsada: </strong>${Actors}</p><p><strong>Fabuła: </strong>${Plot}</p>`;

    movieContianer.appendChild(moviePosterElement);
    movieContianer.appendChild(movieElement);
}

const showErrorMessage = (message) => {
    movieContianer.innerHTML = `<h2>${message}</h2>`;
    movieContianer.classList.add('noBackground');
    movieContianer.classList.remove('movie-grid');
}

const handleFormSubmission = (e) => {
    e.preventDefault();
    const movieName = inputBox.value.trim();
    if (movieName !== '') {
        getMovieList(movieName);
    } else {
        showErrorMessage("Wpisz tytuł filmu, aby wyszukać.");
    }
}

const handleMovieContainerClick = (e) => {
    const movieCard = e.target.closest('.movie-card');
    if (movieCard) {
        const imdbID = movieCard.dataset.imdbId;
        getMovieDetails(imdbID);
    }
}

searchForm.addEventListener('submit', handleFormSubmission);
movieContianer.addEventListener('click', handleMovieContainerClick);