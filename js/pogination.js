const back = document.querySelector('.back');
const next = document.querySelector('.next');
const logo = document.querySelector('.header-logo');

back.addEventListener('click', ()=> {
	--moviePage;
	if(moviePage < 1) {
		localStorage.setItem('moviePage', 20);
		checkMoviePage();
	}
	localStorage.setItem('moviePage', moviePage);
	getMove(APY_URL, options);
})

next.addEventListener('click', ()=> {
	++moviePage;
	if(moviePage > 20) {
		localStorage.setItem('moviePage', 1);
		checkMoviePage();
	}
	localStorage.setItem('moviePage', moviePage);
	getMove(APY_URL, options);
})

logo.addEventListener('click', ()=> {
	localStorage.setItem('moviePage', 1);
	checkMoviePage();
	getMove(APY_URL, options);
})