const back = document.querySelector('.back');
const next = document.querySelector('.next');

back.addEventListener('click', ()=> {
	--moviePage;
	if(moviePage < 1) {
		localStorage.setItem('moviePage', 20);
		console.log(localStorage.getItem('moviePage'))
		checkMoviePage();
	}
	localStorage.setItem('moviePage', moviePage);
	getMove(APY_URL, options);
})

next.addEventListener('click', ()=> {
	++moviePage;
	if(moviePage > 20) {
		localStorage.setItem('moviePage', 1);
		console.log(localStorage.getItem('moviePage'))
		checkMoviePage();
	}
	localStorage.setItem('moviePage', moviePage);
	getMove(APY_URL, options);
})