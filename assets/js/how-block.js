let how = document.querySelectorAll('.how-info');

const toggoleClassTarget = (elem) => {
		elem.classList.toggle('how-info__btn-active');
		elem.parentNode.querySelector('.how-info__text').classList.toggle('how-info__text-active');
}

how.forEach((howItem) => {
		let howBtn = howItem.querySelector('.how-info__btn');
		let howText = howItem.querySelector('.how-info__text');
		howItem.addEventListener('click', (event) => {
				let target = event.target
				if (target.classList.contains('how-info__btn-active')) {
						toggoleClassTarget(target)
						return
				}
				how.forEach((howActive) => {
						howActive.querySelector('.how-info__btn').classList.remove('how-info__btn-active');
						howActive.querySelector('.how-info__text').classList.remove('how-info__text-active');
				});
				toggoleClassTarget(target)

		});

});


//

let howBox = document.querySelectorAll('.how-card');
var howTabs = document.querySelector('.how-tabs');
let howTab = document.querySelectorAll('.how-tabs__item');
let i = 1;


if(howTab.length === 0){
	howTabs.style.display = "none";
}

howTab.forEach(tabItem => {
	tabItem.setAttribute('data-index', i++);
	tabItem.addEventListener('click', (event) => {
		howTab.forEach((filterActive) => {
			filterActive.classList.remove("how-tabs__item-active");
		});
		let target = event.target;
		target.classList.add("how-tabs__item-active");
		howBox.forEach(items => {
			if (tabItem.getAttribute('data-index') == items.getAttribute('data-index')) {
				items.classList.add('how-card-active');
			} else {
				items.classList.remove('how-card-active');
			}
		})
	});
});
i = 1;
howBox.forEach(howItems => {
	howItems.setAttribute('data-index', i++);
	let howModal = howItems.querySelectorAll('.how-info');
	howModal.forEach(item => {
		if (item.style.left >= 70 + '%') {
			item.classList.add('how-info__right');
			console.log(item)
		}
		if (item.style.top <= 25 + '%') {
			item.classList.add('how-info__top');
			console.log(item)
		}
	})
})