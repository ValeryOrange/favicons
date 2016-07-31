(function(){
	'use strict';

	class Item{
		constructor(opts){
			this.data = opts.data;
			this.el = document.createElement('li');
			this.el.className = 'pure-menu-item';
			this.render(); //this.render(opts.data)?
			this.bindEvents();
		}

		render(data) {
			if (data){
				this.data = data;
			}

			let _template = document.querySelector('#item').innerHTML;
			this.el.innerHTML = TemplateEngine(_template, {url: this.url, anchor: this.anchor});

			return this;
		}

		bindEvents() {
			this.el.querySelector('.close').addEventListener('click', this.kharakhiri.bind(this));
		}

		kharakhiri(){
			this.el.parentNode.removeChild(this.el);
		}
	}

	window.Item = Item;
})(window);