window.app.factory("Global", function() {
	var _this = this;
	_this._data = {
		user: window.user,
		authenticated: !! window.user,
		modal: {
			class: "",
			path: ""
		}
	};

	return _this._data;
});