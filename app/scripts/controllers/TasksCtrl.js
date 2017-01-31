(function() { 
    function TasksCtrl($scope, $firebaseObject) {
        
        
   var ref = new Firebase("https://vivid-torch-2252.firebaseio.com/");
   var syncObject = $firebaseObject(ref);
 
     syncObject.$bindTo($scope, "data");
        

        
  
		$scope.tasks = [];

		$scope.addTask = function() {
			$scope.tasks.push({'title': $scope.newTask, 'done':false})
			$scope.newTask = ''
		}

		$scope.deleteTask = function(index) {	
			$scope.tasks.splice(index, 1);
    
        }
    }
    
    

   
    
 angular
    .module('pomotimer')
    .controller('TasksCtrl', TasksCtrl);
}) ();





