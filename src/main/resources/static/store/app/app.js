(function(){
var app = angular.module('store',['ui.router','ngSanitize'])
  // set a custom template

var UIUrl = "/store";

app.config(function($stateProvider, $urlRouterProvider ,$httpProvider) {
	$stateProvider
	.state('home',{
		url: '/home',
		templateUrl: UIUrl+'/home.html'	
	})
	
	.state('services',{
		url: '/services',
		templateUrl: UIUrl+'/services.html'
	})
	
	.state('portfolio',{
		url: '/portfolio',
		templateUrl: UIUrl+'/portfolio.html'
	})
	
	.state('pricing',{
		url: '/pricing',
		templateUrl: UIUrl+'/pricing.html'
	})
	
	.state('contact',{
		url: '/contact',
		templateUrl: UIUrl+'/contact.html'
	})
	
});

app.directive('nextOnEnter', function () {
    return {
        restrict: 'A',
        link: function ($scope, selem, attrs) {
            selem.bind('keydown', function (e) {
                var code = e.keyCode || e.which;
                if (code === 13) {
                    e.preventDefault();
                    var pageElems = document.querySelectorAll('input, select, textarea'),
                        elem = e.originalEvent.srcElement
                        focusNext = false,
                        len = pageElems.length;
                    for (var i = 0; i < len; i++) {
                        var pe = pageElems[i];
                        if (focusNext) {
                            if (pe.style.display !== 'none') {
                                pe.focus();
                                break;
                            }
                        } else if (pe === elem) {
                            focusNext = true;
                        }
                    }
                }
            });
        }
    }
});


app.directive('input', ['$interval', function($interval) {
    return {
      restrict: 'E', // It restricts that the directive will only be a HTML element (tag name), not an attribute.
      link: function(scope, elm, attr) {
        if (attr.type === 'checkbox') {
          elm.on('keypress', function(event) {
            var keyCode = (event.keyCode ? event.keyCode : event.which);
            if (keyCode === 13) {
              event.preventDefault(); // only when enter key is pressed.
              elm.trigger('click');
              scope.$apply();
            }
          });
        }
      }
    };
  }
]);


app.controller('HomeController', function($location){
	
	$location.path('/home')	
	
});	


app.controller('navCtrl', function($location){
	
	this.home = function(consignments){
		$location.path('/home')	
	}
	
	this.services = function(consignments){
		$location.path('/services')
	}
	this.portfolio = function(consignments){
		$location.path('/portfolio')
	}
	this.pricing = function(consignments){
		$location.path('/pricing')
	}
	this.contact = function(consignments){
		$location.path('/contact')
	}
});

})();

