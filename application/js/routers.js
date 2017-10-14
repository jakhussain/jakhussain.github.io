
//config or routing
app.config(['$routeProvider',function($routeProvider){
	$routeProvider
	//routing 
	.when('/whoWeAre',		{title:'gloTitans',templateUrl:'whoWeAre.html'})
	.when('/whatWeDo',		{title:'gloTitans',templateUrl:'whatWeDo.html'})
	.when('/getInTouch',	{title:'gloTitans',templateUrl:'getInTouch.html'})

	//default page 
	.otherwise('/whoWeAre', {title:'gloTitans', templateUrl:'whoWeAre.html'});
	
}])
.run(['$location', '$rootElement', '$window', '$rootScope', function($location, $rootElement, $window, $rootScope) {
	
	// To do the inital task as soon as routing in app changes
	$rootScope.$on('$routeChangeSuccess', function( ) {

		//Write code here ... 

	});

}]);