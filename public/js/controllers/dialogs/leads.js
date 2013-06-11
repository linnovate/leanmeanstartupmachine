function LeadsController($scope, Global, Leads){
	$scope.lead = {};
	$scope.ninja = {valid: true, stage:1};

	$scope.changeNinjaStage = function(stage){
		$scope.ninja.stage = stage;
	};

	$scope.send = function(lead){	
		$scope.message = null;
		Leads.save(lead, function(response) {
			Global.modal.path = "views/dialogs/success.html";
		});
	};
}