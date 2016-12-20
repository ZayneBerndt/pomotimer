
(function() {
    function SessionCtrl($scope, $interval)  {

  $scope.breakLength = 5;
  $scope.sessionLength = 25;
  $scope.sessionType = 'Session';
  $scope.timeLeft = $scope.sessionLength;
  $scope.fillHeight = '0%';



  $scope.sessionIncrement = function(time) {
    if (!timerRunning) {
      if ($scope.sessionType === 'Session') {
        $scope.sessionLength += time;
        if ($scope.sessionLength < 1) {
          $scope.sessionLength = 1;
        }
        $scope.timeLeft = $scope.sessionLength;
        $scope.originalTime = $scope.sessionLength;
        secs = 60 * $scope.sessionLength;
      }
    }
  }



  $scope.timerStartStop = function() {
    if (!timerRunning) {
      if ($scope.currentName === 'Session') {
        $scope.currentLength = $scope.sessionLength;
      } else {
        $scope.currentLength = $scope.breakLength;
      }
      updateTimer();
      timerRunning = $interval(updateTimer, 1000);
    } else {
      $interval.cancel(timerRunning);
      timerRunning = false;
    }
  }


    };

    
 

    
     angular
         .module('pomotimer')
         .controller('SessionCtrl', SessionCtrl);
}) ();