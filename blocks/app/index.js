(function () {
	'use strict';

	let Menu = window.Menu;

	let menu = new Menu({
		el: document.querySelector('.js-menu'),
		data: {
			title: 'SINGLE PAGE APPLICATION',
			items: [
				{
					href: 'https://vk.com',
					anchor: 'vk.com'
				},
				{
					href: 'https://ok.ru',
					anchor: 'ok.ru'
				},
				{
					href: 'https://yahoo.com',
					anchor: 'yahoo.com'
				},
				{
					href: 'https://yandex.ru',
					anchor: 'yandex.ru'
				}
			]
		}
	});

	let form = new Form({
		el: document.querySelector('.js-form'),
	});

	menu.el.addEventListener('remove', function (event) {
		console.log('removed ' + event.target);
	});


	form.el.addEventListener('add:item', function (event) {
		// console.log(event);
		menu.addNewItem(event.detail);
	});

	menu.el.addEventListener('pick', function (event) {
		console.log('picked ' + event.target);
	});

	window.menu = menu;

})();