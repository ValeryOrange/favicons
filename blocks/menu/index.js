(function() {
	'use strict';

	/**
	 * @class Menu
	 * Компонента "Меню"
	 */
	class Menu {

		/**
		 * @constructor
		 * @param  {Object} opts
		 */
		constructor(opts) {
			this.el = opts.el;
			this.data = opts.data;

			// все, что ниже, вытащить из конструктора
			
			this.render();

			this.list = this.el.querySelector('.menu__list');
			this.title = this.el.querySelector('.menu__title');

			this.renderChildren();
			this._initEvents();
		}

		/**
		 * Теперь умнее!
		 */
		render() {
			let _template = document.querySelector('#menu').innerHTML;
			this.el.innerHTML = TemplateEngine(_template, this.data);
		}

		renderChildren(){
			this.data.items.forEach((i) => {
				let item = new Item(i);
				this.list.appendChild(item.el)
			});
		}

		/**
		* Удаления элемента меню
		* @param  {HTMLElement} item
		*/
		removeItem(item) {
			let index = parseInt(item.parentNode.dataset.index, 10);

			this.trigger('remove', {
				index
			});

			// this.list.removeChild(item.parentNode);
		}

		/**
		* Выбор элемента меню
		* @param  {HTMLElement} item
		*/
		pickItem(item) {
			this.trigger('pick', {
				href: item.getAttribute('href'),
				anchor: item.textContent
			});
		}

		/**
		* Развешиваем события
		*/
		_initEvents() {
			this.el.addEventListener('click', this._onClick.bind(this));
		}

		/**
		* Клик в любую область меню
		* @param {Event} event
		* @private
		*/
		_onClick(event) {
			event.preventDefault();
			let item = event.target;

			switch (item.dataset.action) {
				case 'remove':
				this.removeItem(item);
				break;

				case 'pick':
				this.pickItem(item);
				break;
			}
		}

		/**
		* Сказать миру о случившемся
		* @param {string} name тип события
		* @param {Object} data объект события
		*/
		trigger (name, data) {
			let widgetEvent = new CustomEvent(name, {
		        bubbles: true,
		        detail: data
		      });

		    this.el.dispatchEvent(widgetEvent);
		}

		addNewItem(opts){
			this.list.appendChild(new Item(opts).el);
		}

	}

	// Export
	window.Menu = Menu;

})(window);