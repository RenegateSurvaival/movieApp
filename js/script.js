let moviePage;
function checkMoviePage() {
	if (localStorage.getItem('moviePage') !== null) {
		moviePage = localStorage.getItem('moviePage');
	}else{
		moviePage = 1;
	}
}
checkMoviePage();
// Информация об API
const APY_URL = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page='
const API_URL_SEARCH =
  'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=';
const options = {
	headers: {
		'content-type': 'application/json',
		'X-API-KEY': '8c8e1a50-6322-4135-8875-5d40a5420d86',
	},
};

// Функция получения данных с API
async function getMove(url, options) {
	let complidMovieUrl;
	if(url == 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=') {
	 complidMovieUrl = url + `${moviePage}`;
	} else {complidMovieUrl = url};
	const response = await fetch(complidMovieUrl, options);
	const resData = await response.json();
	moviPrint(resData);
	console.log(resData)
}	
getMove(APY_URL, options);

// функция для отображение результ

function moviPrint(data) {
	const movies = document.querySelector('.movies');

	movies.innerHTML = ''; // Очистка предыдущих фильмов

	data.films.forEach(movie => {
	const movRating = movie.rating;
	const filmId = movie.filmId;
// Переменная - код карточки с фильмом
		const movieEl = document.createElement('div');
		movieEl.classList.add('movie');
		movieEl.setAttribute('id', `${filmId}`);
		const movPrint = `
		<div class="movie__cover-iner">
				<img class="movier_cover" src=${movie.posterUrlPreview
				} alt="Logo">
				<div class="movie-cover--darkened">
				</div>
		</div>
		<div class="movie__info">
				<div class="movie-title">
				${movie.nameRu}
				</div>
				<div class="movie__category">
				${movie.genres.map(genre => `	${genre.genre}`)}
				</div>
				<div id="${filmId + 1}" class="movie__avarage">${movRating}</div>
		</div>
		`
		movieEl.innerHTML= movPrint;
		movieEl.addEventListener('click', ()=>{openModal(movie.filmId)});
		movies.append(movieEl);
// Исправления процентного ейтинга на валидный
		if(isNaN(movRating)) {
			const movieAvarage = document.getElementById(`${filmId + 1}`);
			let ratingFix = String(movRating);
			ratingFix = Number(ratingFix[0] + ratingFix[1]) / 10;
			movieAvarage.textContent = String(ratingFix);
		}
	});
	ratingFixF();
}

//Поиск
const form = document.querySelector('form');
const search = document.querySelector('.header-search');

form.addEventListener('submit', (e)=> {
	e.preventDefault();
	
	const apiSearchUrl = `${API_URL_SEARCH}${search.value}`;
		if (search.value) {
			getMove(apiSearchUrl, options);
		}
		search.value = ''; // Очистка строки поиска
})

// Проверка отсутствия рейтинга замена null на 0
function ratingFixF() {
	let ratings = document.querySelectorAll(".movie__avarage");
	ratings.forEach((item)=>{
		if (item.textContent == 'null' || item.textContent == 'NaN') {
			item.innerHTML = '0';
		}
		chekRatingColor(Number(item.innerHTML), item);
	})
}
// Проверка рейтинга - цвет
function chekRatingColor(rating, movieAvarage) {
if(rating > 0 && rating<= 5) {
	movieAvarage.classList.add('movie__avarage--red');
}else if(rating >= 5 && rating <= 8) {
	movieAvarage.classList.add('movie__avarage--orange');
}else if(rating > 8 && rating <= 10) {
	movieAvarage.classList.add('movie__avarage--green');
}else if(rating <= null) {
	movieAvarage.classList.add('movie__avarage--silver');
 };
}

