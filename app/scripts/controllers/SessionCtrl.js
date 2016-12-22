
(function() {
     function SessionCtrl($scope, $interval)  {
 
  $scope.breakLength = 2;
  $scope.sessionLength = 0.1;
  $scope.sessionType = 'Session';
  $scope.timeLeft = $scope.sessionLength;
  $scope.fillHeight = '0%';

  var timerRunning = false;
  var secs = 60 * $scope.timeLeft;
  $scope.originalTime = $scope.sessionLength;

  function displayTimeRemaining(d) {
    d = Number(d);
    var hours = Math.floor(d / 3600);
    var minutes = Math.floor(d % 3600 / 60);
    var seconds = Math.floor(d % 3600 % 60);
    return (
      (hours > 0 ? hours + ':' + (minutes < 10 ? '0' : '') : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds
    );
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

  function updateTimer() {
    secs -= 1;
    if (secs < 0) {
      var wav = 'http://www.oringz.com/oringz-uploads/sounds-917-communication-channel.mp3';
      var audio = new Audio(wav);
      audio.play();
        

      $scope.fillColor = '#333';
      if ($scope.sessionType === 'Break!') {
        $scope.sessionType = 'Session';
        $scope.currentLength = $scope.sessionLength;
        $scope.timeLeft = 60 * $scope.sessionLength;
        $scope.originalTime = $scope.sessionLength;
        secs = 60 * $scope.sessionLength;
      } else {
        $scope.sessionType = 'Break!';
        $scope.currentLength = $scope.breakLength;
        $scope.timeLeft = 60 * $scope.breakLength;
        $scope.originalTime = $scope.breakLength;
        secs = 60 * $scope.breakLength;
      }
    } else {
      if ($scope.sessionType === 'Break!') {
        $scope.fillColor = '#E88B8B';
      } else {
        $scope.fillColor = '#7DE891';
      }
      $scope.timeLeft = displayTimeRemaining(secs);

      var totalTime = 60 * $scope.originalTime;
      var perc = Math.abs((secs / totalTime) * 100 - 100);
      $scope.fillHeight = perc + '%';
    }
  }
};
      angular
          .module('pomotimer')
          .controller('SessionCtrl', SessionCtrl);
 }) (); 