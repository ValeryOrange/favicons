(function () {
	'use strict';

	let Menu = window.Menu;
	let Model = window.Model;
	let Form = window.Form;

	let model = new Model({
		url: '/data/menu.json',
	});

	let menu = new Menu({
		el: document.querySelector('.js-menu'),
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

	model.fetch(menu.render.bind(menu));

	window.menu = menu;

})();
