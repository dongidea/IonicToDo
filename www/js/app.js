// Ionic Todo Controller

angular.module('todo', ['ionic'])
.controller('TodoController', function($scope) {
  $scope.tasks = [
    {title: 'Check all notifications'},
    {title: 'Meet Jack at 8 a.m'},
    {title: 'Call back to customer at 10 a.m'},
    {title: 'Back to office for meeting request'},
    {title: 'Go to cinema with Tom'}
  ];
});
