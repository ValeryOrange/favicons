'use strict';

(function(){
	class Model {
		constructor(opts){
			this.data = opts.data || {};
			this.url = opts.url;
		}

		get getData(){
			return this.data;
		}

		set setData(data){
			this.data = data;
		}

		fetch(resolve){
			let req = this._makeRequest('GET');

			req.onreadystatechange = () => {
				if (req.readystate != 4) return;

				if (req.status === 200){
					let dataString = req.responseText;
					this.setData(JSON.parse(dataString));
					resolve(this.getData());
				}
			}

			req.send();
		}

		_makeRequest(method){
			let xhr = new XMLHttpRequest();

			xhr.open(method, this.url, true);

			return xhr;
		}
	}

//export
	window.Model = Model;
})();