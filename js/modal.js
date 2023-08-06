// Элементы DOM
const modalContainer = document.querySelector('.modal-container');
const modal = document.querySelector('.modal');
// Информация API
const movieIdUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/';

// Модальное окно с описанием фильма
// Получаем фильмы по id;
async function getMovieId(url, options) {
	const response = await fetch(url, options);
	const resData = await response.json();
	console.log(resData)
	printMovieId(resData);
}
// Отрисовка данных модалки;
	function printMovieId(movie) {
		const modalContent = `
			<img src="${movie.posterUrlPreview}" alt="movie img">
			${movie.nameRu ? `<h2><span>Название:	</span> ${movie.nameRu}</h2>` : ''}
			${movie.year ? `<h4><span>Год:	</span> ${movie.year}</h4>` : ''}
			${movie.genres ? `<h4><span>Жанр:	</span> ${movie.genres.map(genre => `	${genre.genre}`)}</h4>` : ''}
			${movie.filmLength ? `<h4><span>Продолжительность</span>: ${movie.filmLength} минут</h4>` : ''}
			${movie.webUrl ? `<h5><span>Сайт для просмотра:	</span><a href="${movie.webUrl}">${movie.webUrl}</a></h5>` : ''}
			${movie.description ? `<p><span>Описание:	</span> ${movie.description}</p>` : ''}`
		const clerModalBtn = document.createElement('button');
		clerModalBtn.classList.add('clerModalBtn');
		clerModalBtn.textContent ='закрыть';
		// Удаление модалки при клике на кнопку закрыть
		clerModalBtn.addEventListener('click', ()=> {
			clearModal();
			goScroll() ;
		});
		modal.innerHTML = modalContent;
		modal.append(clerModalBtn);
		modalContainer.classList.add('modal-show');
		stopScroll();
	}
// Показать модалку при клике
	async function openModal(id) {
		const responsIdUrl = `${movieIdUrl}+${id}`
		getMovieId(responsIdUrl, options);
}


// Удаление модалки при клике за границей модалки
	window.addEventListener('click', (e)=> {
		if( e.target === modalContainer ) {
			clearModal();
			goScroll();
		}
	})
// Удаление модалки при клике на esc
	document.body.addEventListener("keydown", (event)=> {
		if (event.key == "Escape")  {
			clearModal();
			goScroll();
		}
});
// Удаление модалки Функция
	function clearModal()	{modalContainer.classList.remove('modal-show')};
// Пуск скролинга
	function stopScroll() {document.body.classList.add('stop-scroll')};
// Остановка скролинга
	function goScroll() {document.body.classList.remove('stop-scroll')};


