angular.module('starter.controllers', [])

.controller('ModelCtrl', function($scope, $rootScope, $timeout, $ionicHistory) {

$scope.OnDelete=function(modelName){
  $scope.modelList=ary.remove(modelName);
}

$scope.OnAdd=function(model){
  $scope.modelList=ary.remove(modelName);
}

$scope.OnUpdate=function(model){
  $scope.modelList=ary.remove(modelName);
}

$scope.OnList=function(model){
      $scope.modelList=[
      'Animal',
      'General',
      'Shalin',
      'Test'
    ]
}
})
.controller('ConceptCtrl', function($scope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('InputCtrl', function($scope, $stateParams, Chats) {
  $scope.OnDelete=function(modelName){
  $scope.modelList=ary.remove(modelName);
}

$scope.OnAdd=function(model){
  $scope.modelList=ary.remove(modelName);
}

$scope.OnUpdate=function(model){
  $scope.modelList=ary.remove(modelName);
}

$scope.OnList=function(model){
      $scope.modelList=[
      'Animal',
      'General',
      'Shalin',
      'Test'
    ]
}
})
.controller('PredicateCtrl', function($scope, $stateParams) {

$scope.$on('$ionicView.enter', function(e) {
  });

$scope.data = {
    model: null,
    availableOptions: [
      {id: '1', name: 'Option A'},
      {id: '2', name: 'Option B'},
      {id: '3', name: 'Option C'}
    ]
   };

$scope.Predict=function(){
var selectedModel=$scope.data.model;
console.log(selectedModel);


}

});


Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};