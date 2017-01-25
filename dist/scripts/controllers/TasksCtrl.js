(function() {
     
     function TasksCtrl($scope, $firebaseObject) {
     $scope.tasklist = [];
     $scope.addTask = function(){};
     $scope.completeTask = function(){};
     $scope.data = $firebaseObject(ref);
     
     var ref = firebase.database().ref().child("data");
     
    
          
     $scope.addTask = function() {
     if (event.keyCode == 14 && $scope.taskName){
     $scope.tasklist.push({"name": $scope.taskName});
     $scope.taskName = "";
      }
     
      return {
      all: tasks
     }
      
     var syncObject = $firebaseObject(ref);
     syncObject.$bindTo($scope, "data");
});
 
     
     $scope.completeTask = function() {
     $scope.tasklist.splice()}
  }
 }
};
  