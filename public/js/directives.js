window.app.directive('stopEvent', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attr) {
			element.bind(attr.stopEvent, function(e) {
				e.stopPropagation();
			});
		}
	}
});

window.app.directive('ngBlur', function($parse) {
    return function(scope, element, attrs) {
        element.bind('blur', function(){
            scope.$eval(attrs.ngBlur);
        });
    };
});

window.app.directive('ngFocus', function($parse) {
    return function(scope, element, attrs) {
        element.bind('focus', function(){
            scope.$eval(attrs.ngFocus);
        });
    };
});

window.app.directive('ngEnter', function() {
	return function(scope, elm, attrs) {
		elm.bind('keypress', function(e) {
			if(e.charCode === 13) scope.$apply(attrs.ngEnter);
		});
	};
});