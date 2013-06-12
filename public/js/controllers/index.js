function IndexController($scope, Global, Leads){
	$scope.global = Global;

	$scope.openModal = function(modalID, event) {
		Global.modal.path = "views/dialogs/" + modalID + ".html";
		Global.modal.class = "open";
		if (event.pageY > 500){
		  $("html, body").animate({ scrollTop: 0 }, "slow");
			if (_gaq) _gaq.push(['_trackEvent', 'meanlean', 'submit-button', 'low', 1]);
		}else{
			if (_gaq) _gaq.push(['_trackEvent', 'meanlean', 'submit-button', 'high', 1]);
		}
		event.stopPropagation();
	};

	$scope.closeModal = function() {
		Global.modal.path = "";
		Global.modal.class = "";
	};
}
