function IndexController($scope, Global, Leads){
	$scope.global = Global;

	$scope.openModal = function(modalID, event) {
		Global.modal.path = "views/dialogs/" + modalID + ".html";
		Global.modal.class = "open";

		event.stopPropagation();
	};

	$scope.closeModal = function() {
		Global.modal.path = "";
		Global.modal.class = "";
	};
}