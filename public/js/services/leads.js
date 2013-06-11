//Lead service used with REST
window.app.factory("Leads", function($resource){
	return $resource('leads');
});