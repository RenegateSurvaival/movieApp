	// Проверка рейтинга - Number
	let complitNum;
	if(isNaN(+movie.rating)) {
		if(movie.rating == '__') {
			console.log(complitNum)
			return; // пропускать пустые значения
		}else{
			complitNum = movie.rating[0] + movie.rating[1];
			complitNum = complitNum / 10;
		}
	}
	if(!isNaN(+movie.rating)) {
		complitNum = movie.rating;
	}

	// Проверка рейтинга - цвет
	let ratingColor
	if(movie.rating >= 0 && movie.rating <= 5) {
		 ratingColor = 'movie__avarage--red';
	}else if(movie.rating > 5 && movie.rating < 8) {
		 ratingColor ='movie__avarage--orange';
	}else if(movie.rating > 8 && movie.rating <= 10) {
		ratingColor ='movie__avarage--green';
 };

 // Проверка рейтинга - null
	if(movie.rating == null) {
		movie.rating = '__';
		ratingColor ='movie__avarage--silver';
	};

	let stringNull = String(movRating);
			for(let i = 0; i < 4; i++) {
				console.log(stringNull[i]);
				movRating = stringNull;
			} 

			movRating = parseFloat(ratingFix)/10;



			// Проверка рейтинга - Number and null
		if(movRating == null) {
			const movieAvarage = document.getElementById(`${filmId + 1}`);
			movieAvarage.textContent = 0;
			console.log(`ID: ${filmId}`)
		}
			if(isNaN(movRating)) {
				const movieAvarage = document.getElementById(`${filmId + 1}`);
				let ratingFix = String(movRating);
				ratingFix = Number(ratingFix[0] + ratingFix[1]) / 10;
				movieAvarage.textContent = String(ratingFix);
				chekRatingColor(ratingFix);
			}else {
				ratingFix = movRating;
				chekRatingColor(ratingFix);
			}
// Модальное окно с описанием фильма
<img src="https://kinopoiskapiunofficial.tech/images/posters/kp/5235230.jpghttps://kinopoiskapiunofficial.tech/images/posters/kp_small/5235230.jpghttps://kinopoiskapiunofficial.tech/images/posters/kp_small/5235231.jpg" alt="">
			<h2>Название</h2>
			<h3>Год</h3>
			<h4>Жанр</h4>
			<h4>Продолжительность</h4>
			<h5>Сайт</h5>
			<p>Описание</p>
			<button id="clerModalBtn">Закрыть</button>
			// Перемещение цифр погинации
function paginationGo(elPeg) {
	let contentElPage = elPeg.textContent;
	if(isNaN(contentElPage)) {
	contentElPage = contentElPage[3] + contentElPage[4];
	}else {
		contentElPage = contentElPage;
	}
	
	pageCaunt = Number(contentElPage);
	console.log(numComplitedElPeg);
	
	const pageCoordinat = 33.3 * numComplitedElPeg;
		console.log(pageCoordinat)
		elPeg.style = `transform: translate(${pageCoordinat}px);`

}function usePogination(elementPage) {

localStorage.setItem('moviePage', contentElPage);

console.log(pageCoordinat)
poginationCaunt(pageCoordinat)
checkMoviePage();
getMove(APY_URL, options);
};

let contentElPage = poginationEl.textContent;
		if(isNaN(contentElPage)) {
		contentElPage = contentElPage[3] + contentElPage[4];
		}else {
			contentElPage = contentElPage;
		}

const numComplitedElPeg = Number(poginationEl.textContent) - pageCaunt;
	pageCaunt = Number(poginationEl.textContent);
	const pageCoordinat = 33.3 * numComplitedElPeg;
	pageCountPx + pageCoordinat;
	poginationEl.style = `transform: translate(${pageCoordinat}px);`