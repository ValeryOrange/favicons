(function(){
	'use strict';

	class Form{
		constructor(opts){
			this.el = opts.el;

			this.render();

			this.bindEvents();
		}

		render(){
			let _template = document.querySelector('#form').innerHTML;
			this.el.innerHTML = TemplateEngine(_template, {});
		}

		trigger (name, data) {
			let widgetEvent = new CustomEvent(name, {
		        bubbles: true,
		        detail: data
		      });

		    this.el.dispatchEvent(widgetEvent);
		}

		bindEvents(){
			this.el.querySelector('.js-submit').addEventListener('click', function(){
				let anchor = this.el.querySelector('.js-anchor');
				let url = this.el.querySelector('.js-url');

				if (anchor.value != '' && url.value != ''){
					console.log(anchor.value)
					this.trigger('add:item', {
						anchor: anchor.value,
						url: url.value
					})
				}
			}.bind(this));
		}
	}

	window.Form = Form;
})(window);