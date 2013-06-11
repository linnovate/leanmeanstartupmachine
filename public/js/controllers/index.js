function IndexController($scope, $location, Leads){
	$scope.modal = {
		class: "",
		path: ""
	}

	$scope.lead = {};

	$scope.openModal = function(modalID, event) {
		$scope.modal.path = "views/dialogs/" + modalID + ".html";
		$scope.modal.class = "open";

		event.stopPropagation();
	};

	$scope.closeModal = function() {
		$scope.modal.path = "";
		$scope.modal.class = "";
	};

	$scope.send = function(lead){	
		$scope.message = null;
		Leads.save(lead, function(response) {
			$location.path("success");
		});
	};
}